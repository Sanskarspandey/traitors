import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/players`
  : "http://localhost:5055/api/players";
const ADMIN_PASSCODE = "estate2025";

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("estate_admin_auth") === "true";
  });
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      sessionStorage.setItem("estate_admin_auth", "true");
      setIsAuthenticated(true);
      setPasscodeError("");
    } else {
      setPasscodeError("Incorrect passcode. Access denied.");
    }
  };

  const fetchPlayers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      if (res.ok && data.success) {
        setPlayers(data.players || []);
      } else {
        setError(data.message || "Failed to load players");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to backend server (http://localhost:5050). Ensure server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchPlayers();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setPlayers((prev) =>
          prev.map((p) => (p._id === id ? { ...p, status: newStatus } : p))
        );
      } else {
        alert("Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status.");
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete the entry for ${name}?`)) {
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPlayers((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete entry.");
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

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `the_estate_entries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPlayers = players.filter((p) => {
    const matchesSearch =
      p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phone.includes(searchQuery) ||
      (p.bookingId && p.bookingId.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "all" || (p.status || "pending") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const countPending = players.filter((p) => (p.status || "pending") === "pending").length;
  const countContacted = players.filter((p) => p.status === "contacted").length;
  const countConfirmed = players.filter((p) => p.status === "confirmed").length;

  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-auth-card">
          <div className="admin-crest">♛</div>
          <h1>THE TRAITORS MUMBAI</h1>
          <p className="admin-auth-sub">ADMIN PORTAL ACCESS</p>
          <div className="gold-line center-line" />

          <form onSubmit={handleLogin} className="admin-auth-form">
            <label htmlFor="passcode">ENTER ACCESS PASSCODE</label>
            <input
              id="passcode"
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode (default: estate2025)"
              autoFocus
            />
            {passcodeError && <small className="auth-err">{passcodeError}</small>}

            <button type="submit" className="admin-gold-btn">
              ENTER DASHBOARD →
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
            <button
              onClick={() => {
                sessionStorage.removeItem("estate_admin_auth");
                setIsAuthenticated(false);
              }}
              className="admin-logout-btn"
            >
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
