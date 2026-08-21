import { useState } from "react";
import { Link } from "react-router-dom";
import "./TakePart.css";

function TakePart() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid name.";
    }

    const ageNum = parseInt(form.age, 10);
    if (!form.age) {
      newErrors.age = "Please enter your age.";
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 99) {
      newErrors.age = "Participants must be at least 18 years old.";
    }

    const cleanPhone = form.phone.replace(/[\s\-\(\)\+]/g, "");
    const isValidPhone = /^(?:91|0)?[6-9]\d{9}$/.test(cleanPhone);

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!isValidPhone) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const apiRoot = (import.meta.env.VITE_API_URL || "http://localhost:5050").replace(/\/+$/, "");
    const apiEndpoint = `${apiRoot}/api/players`;

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          age: parseInt(form.age, 10),
          phone: form.phone.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Registration request rejected:", {
          url: apiEndpoint,
          status: response.status,
          statusText: response.statusText,
          body: data,
        });
        alert(data.message || "Something went wrong while submitting your entry request.");
      }
    } catch (error) {
      console.error("Failed to connect to backend server:", {
        url: apiEndpoint,
        error: error.message || error,
      });
      alert("Unable to connect to the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="take-page">
      {/* BACKGROUND */}
      <div className="take-page-bg" />
      <div className="take-page-overlay" />

      {/* CONTENT */}
      <div className="take-page-content">
        <Link to="/" className="back-home">
          ← BACK TO THE ESTATE
        </Link>

        {/* HEADER */}
        <div className="take-header">
          <p className="gold-label">THE TRAITORS MUMBAI · 24-25 OCTOBER, 2026</p>

          <h1>
            REQUEST
            <br />
            ENTRY.
          </h1>

          <div className="gold-line" />

          <p>
            TRUST IS RARE, DHOKHA EVERYWHERE.
            <br />
            20 PLAYERS · 1 MANSION · 24-25 OCTOBER, 2026.
          </p>
        </div>

        {/* REGISTRATION */}
        <div className="registration-layout">
          {/* =================================
              FORM / SUCCESS STATE
              ================================= */}
          {isSubmitted ? (
            <div className="success-card">
              <div className="success-crest">♛</div>

              <div className="success-tag">THE ESTATE — 20 PLAYERS ONLY</div>

              <h2 className="success-title">REQUEST RECEIVED</h2>

              <div className="gold-line center-gold-line" />

              <p className="success-main-msg">
                Your request has been received.
              </p>

              <p className="success-sub-msg">
                We'll contact you shortly with the next steps.
              </p>

              <div className="success-note">
                Our team reviews all entries to curate a balanced group of 20
                participants. Selected players will receive private confirmation
                and payment instructions.
              </div>

              <Link to="/" className="gold-button success-return-btn">
                RETURN TO THE ESTATE
              </Link>
            </div>
          ) : (
            <form className="player-form" onSubmit={handleSubmit}>
              {/* PLAYER DETAILS */}
              <div className="form-heading">
                <span>01</span>
                <div>
                  <h2>REQUEST YOUR INVITATION</h2>
                  <p>
                    Submit your details. The Estate takes less than 30 seconds to
                    request.
                  </p>
                </div>
              </div>

              {/* NAME */}
              <div className="field">
                <label htmlFor="fullName">FULL NAME</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
                {errors.fullName && <small>{errors.fullName}</small>}
              </div>

              {/* AGE */}
              <div className="field">
                <label htmlFor="age">AGE</label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="e.g. 24"
                  min="18"
                  max="99"
                />
                {errors.age && <small>{errors.age}</small>}
              </div>

              {/* PHONE */}
              <div className="field">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>

              {/* CONSENT */}
              <p className="consent-text">
                By submitting, you agree to be contacted regarding The Estate.
              </p>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="payment-button request-entry-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "SUBMITTING..." : "REQUEST ENTRY"}</span>
                <span>→</span>
              </button>
            </form>
          )}

          {/* =================================
              PRICE PANEL
              ================================= */}
          <aside className="price-panel">
            <div className="panel-top">
              <span>THE TRAITORS</span>
              <div className="crest">T</div>
              <span>24-25 OCT 2026</span>
            </div>

            <div className="panel-middle">
              <p>EXPERIENCE & STAY</p>
              <h2>₹6,000</h2>
              <span>PER PLAYER · ALL-INCLUSIVE</span>

              <div className="panel-line" />

              <div className="booking-info">
                <div>
                  <small>PLAYERS</small>
                  <strong>20</strong>
                </div>

                <div>
                  <small>DATES</small>
                  <strong>24-25 OCT 2026</strong>
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>NEAR MUMBAI</strong>
                </div>
              </div>
            </div>

            <div className="panel-bottom">
              <p>
                INCLUDES 2-DAY STAY, ACCOMMODATION,
                <br />
                GOURMET FOOD & FULL IMMERSIVE GAME.
              </p>

              <span>LIMITED TO 20 PLAYERS · 24-25 OCT 2026</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default TakePart;