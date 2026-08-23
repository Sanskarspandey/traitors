import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const API_ROOT = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const API_BASE = API_ROOT ? `${API_ROOT}/api/players` : "";
const AUTH_URL = API_ROOT ? `${API_ROOT}/api/auth/login` : "";

function Admin() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("estate_admin_token") || null;
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogout = useCallback(() => {
    localStorage.removeItem("estate_admin_token");
    setToken(null);
    setPlayers([]);
    setPassword("");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!API_ROOT) {
      setAuthError("All applications are currently processed via the official Google Form. Backend database is offline.");
      return;
    }
    if (!username.trim() || !password) {
      setAuthError("Please enter both username and password.");
      return;
    }

    setIsLoggingIn(true);
    setAuthError("");

    try {
      const res = await fetch(AUTH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        localStorage.setItem("estate_admin_token", data.token);
        setToken(data.token);
        setAuthError("");
      } else {
        setAuthError(data.message || "Invalid admin credentials.");
      }
    } catch (err) {
      console.error(err);
      setAuthError("Unable to connect to the backend server. Please verify the server is running.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const fetchPlayers = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_BASE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.status === 401 || res.status === 403) {
        handleLogout();
        setAuthError(data.message || "Session expired. Please log in again.");
        return;
      }

      if (res.ok && data.success) {
        setPlayers(data.players || []);
      } else {
        setError(data.message || "Failed to load players.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load entry requests. Check your network or backend server connection.");
    } finally {
      setLoading(false);
    }
  }, [token, handleLogout]);

  useEffect(() => {
    if (token) {
      fetchPlayers();
    }
  }, [token, fetchPlayers]);

  const handleStatusChange = async (id, newStatus) => {
    if (!token) return;

    try {
      const res = await fetch(`${API_BASE}/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (res.status === 401) {
        handleLogout();
        setAuthError("Session expired. Please log in again.");
        return;
      }

      if (res.ok && data.success) {
        setPlayers((prev) =>
          prev.map((p) => (p._id === id ? { ...p, status: newStatus } : p))
        );
      } else {
        alert(data.message || "Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status.");
    }
  };

  const handleDelete = async (id, name) => {
    if (!token) return;
    if (!window.confirm(`Are you sure you want to delete the entry for ${name}?`)) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.status === 401) {
        handleLogout();
        setAuthError("Session expired. Please log in again.");
        return;
      }

      if (res.ok && data.success) {
        setPlayers((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert(data.message || "Failed to delete entry.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting entry.");
    }
  };

  const exportToCSV = () => {
    if (players.length === 0) {
      alert("No data to export.");
      return;
    }
    const headers = ["Reference ID", "Full Name", "Age", "Phone", "Status", "Date Submitted"];
    const rows = players.map((p) => [
      `"${p.bookingId || p._id}"`,
      `"${p.fullName}"`,
      p.age,
      `"${p.phone}"`,
      `"${p.status || "pending"}"`,
      `"${new Date(p.createdAt).toLocaleString("en-IN")}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `the_estate_entries_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPlayers = players.filter((p) => {
    const matchesSearch =
      p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phone.includes(searchQuery) ||
      (p.bookingId && p.bookingId.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" || (p.status || "pending") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const countPending = players.filter((p) => (p.status || "pending") === "pending").length;
  const countContacted = players.filter((p) => p.status === "contacted").length;
  const countConfirmed = players.filter((p) => p.status === "confirmed").length;

  if (!token) {
    return (
      <div className="admin-page">
        <div className="admin-auth-card">
          <div className="admin-crest">♛</div>
          <h1>THE TRAITORS MUMBAI</h1>
          <p className="admin-auth-sub">ADMIN PORTAL ACCESS</p>
          <div className="gold-line center-line" />

          <form onSubmit={handleLogin} className="admin-auth-form">
            <label htmlFor="username">ADMIN USERNAME</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoFocus
              autoComplete="username"
            />

            <label htmlFor="password">ADMIN PASSWORD</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />

            {authError && <small className="auth-err">{authError}</small>}

            <button
              type="submit"
              className="admin-gold-btn"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "AUTHENTICATING..." : "ENTER DASHBOARD →"}
            </button>
          </form>

          <Link to="/" className="admin-back-link">
            ← RETURN TO WEBSITE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        {/* HEADER */}
        <header className="admin-header">
          <div className="admin-header-left">
            <Link to="/" className="admin-brand">
              <span className="brand-crest">♛</span>
              <div>
                <h2>THE TRAITORS MUMBAI</h2>
                <small>PARTICIPANT MANAGEMENT</small>
              </div>
            </Link>
          </div>

          <div className="admin-header-actions">
            <button onClick={exportToCSV} className="admin-action-btn">
              📥 EXPORT CSV
            </button>
            <button onClick={fetchPlayers} className="admin-action-btn" disabled={loading}>
              🔄 {loading ? "REFRESHING..." : "REFRESH"}
            </button>
            <button onClick={handleLogout} className="admin-logout-btn">
              LOGOUT
            </button>
          </div>
        </header>

        {/* METRICS */}
        <section className="admin-metrics">
          <div className="metric-card">
            <span>TOTAL ENTRIES</span>
            <strong>{players.length}</strong>
            <small>All Submissions</small>
          </div>

          <div className="metric-card pending-card">
            <span>PENDING REVIEW</span>
            <strong>{countPending}</strong>
            <small>Needs Attention</small>
          </div>

          <div className="metric-card contacted-card">
            <span>CONTACTED</span>
            <strong>{countContacted}</strong>
            <small>In Discussion</small>
          </div>

          <div className="metric-card confirmed-card">
            <span>CONFIRMED SEATS</span>
            <strong>{countConfirmed} / 20</strong>
            <small>{Math.max(20 - countConfirmed, 0)} Spots Remaining</small>
          </div>
        </section>

        {/* TOOLBAR */}
        <div className="admin-toolbar">
          <div className="admin-search-wrap">
            <input
              type="text"
              placeholder="Search by Name, Phone, or Reference ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="admin-filter-wrap">
            <label>FILTER STATUS:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Requests ({players.length})</option>
              <option value="pending">Pending ({countPending})</option>
              <option value="contacted">Contacted ({countContacted})</option>
              <option value="confirmed">Confirmed ({countConfirmed})</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        {error && <div className="admin-error-box">{error}</div>}

        <div className="admin-table-card">
          {loading ? (
            <div className="admin-loading">Loading entries...</div>
          ) : filteredPlayers.length === 0 ? (
            <div className="admin-empty">
              <p>No entry requests found.</p>
              {players.length === 0 && <small>When users submit the form, they will appear here instantly.</small>}
            </div>
          ) : (
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>REF ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>PHONE & ACTIONS</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>MANAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.map((player) => {
                    const cleanPhone = player.phone.replace(/[^0-9]/g, "");
                    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

                    return (
                      <tr key={player._id}>
                        <td>
                          <span className="ref-code">{player.bookingId || player._id.slice(-6).toUpperCase()}</span>
                        </td>
                        <td>
                          <strong>{player.fullName}</strong>
                        </td>
                        <td>{player.age} yrs</td>
                        <td>
                          <div className="phone-cell">
                            <span className="phone-num">{player.phone}</span>
                            <div className="quick-actions">
                              <a href={`tel:${player.phone}`} className="phone-btn call-btn" title="Call">
                                📞 Call
                              </a>
                              <a
                                href={`https://wa.me/${waPhone}?text=Hi%20${encodeURIComponent(player.fullName)},%20regarding%20your%20entry%20request%20for%20The%20Estate...`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="phone-btn wa-btn"
                                title="WhatsApp"
                              >
                                💬 WhatsApp
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <small>{new Date(player.createdAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</small>
                        </td>
                        <td>
                          <select
                            className={`status-select status-${player.status || "pending"}`}
                            value={player.status || "pending"}
                            onChange={(e) => handleStatusChange(player._id, e.target.value)}
                          >
                            <option value="pending">⏳ Pending</option>
                            <option value="contacted">📞 Contacted</option>
                            <option value="confirmed">✅ Confirmed</option>
                            <option value="rejected">❌ Rejected</option>
                          </select>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(player._id, player.fullName)}
                            className="delete-btn"
                            title="Delete entry"
                          >
                            🗑
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
