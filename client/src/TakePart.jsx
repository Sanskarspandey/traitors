import { Link } from "react-router-dom";
import "./TakePart.css";

const IMG = `${import.meta.env.BASE_URL || "/"}images`.replace(/\/\/+/g, "/");
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0W9L1Jrk8_gJhqriE0zBwZ5xYP7SZFm1BtojvByX9gTB5rg/viewform";
const INSTAGRAM_URL = "https://www.instagram.com/the_traitors_mumbai/";

function TakePart() {
  return (
    <div className="take-page">
      {/* BACKGROUND */}
      <div
        className="take-page-bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85)), url("${IMG}/mansion.png")`,
        }}
      />
      <div className="take-page-overlay" />

      {/* CONTENT */}
      <div className="take-page-content">
        <Link to="/" className="back-home">
          ← BACK TO THE ESTATE
        </Link>

        {/* HEADER */}
        <div className="take-header">
          <p className="gold-label">THE TRAITORS MUMBAI · OCTOBER 24-25, 2026</p>

          <h1>
            REQUEST
            <br />
            ENTRY.
          </h1>

          <div className="gold-line" />

          <p>
            TRUST IS RARE, DHOKHA EVERYWHERE.
            <br />
            20 STRANGERS · 2-DAY ESCAPE · SECRET HILLS DESTINATION.
          </p>
        </div>

        {/* REGISTRATION LAYOUT */}
        <div className="registration-layout">
          {/* APPLICATION CARD */}
          <div className="player-form">
            <div className="form-heading">
              <span>01</span>
              <div>
                <h2>OFFICIAL APPLICATION FORM</h2>
                <p>
                  We’re taking 20 strangers on a 2-day escape to the hills. Submit your application below to be considered by the hosts.
                </p>
              </div>
            </div>

            <div className="field" style={{ borderTop: "1px solid rgba(184, 155, 94, 0.25)", paddingTop: "24px" }}>
              <label style={{ color: "#c5a45f", letterSpacing: "2px", fontSize: "12px", fontFamily: "Cinzel, Georgia, serif" }}>
                HOW ENTRY WORKS
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "14px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>①</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Player Details & Strategy Style</strong>
                    Tell us about yourself and choose how you plan to navigate alliances and deception.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>②</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Pass & Screenshot Verification</strong>
                    ₹6,000 / Person (Includes beautiful stay amidst nature, breakfast & dinner, and full immersive game). Upload your transfer screenshot directly.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>③</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Host Curation & Confirmation</strong>
                    The hosts review all entries to curate 20 strangers. Selected players will receive private confirmation with travel coordinates.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="payment-button request-entry-btn"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "35px",
                boxSizing: "border-box",
              }}
            >
              <span>OPEN GOOGLE APPLICATION FORM</span>
              <span>→</span>
            </a>

            {/* DIRECT CONTACT */}
            <p className="consent-text" style={{ marginTop: "24px" }}>
              Questions or direct queries? Contact Sanskar at <strong style={{ color: "#c5a45f" }}>+91 9372948245</strong> or DM Instagram <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#c5a45f", textDecoration: "underline" }}>@the_traitors_mumbai</a>
            </p>
          </div>

          {/* =================================
              PRICE PANEL
              ================================= */}
          <aside className="price-panel">
            <div className="panel-top">
              <span>THE TRAITORS</span>
              <div className="crest">T</div>
              <span>OCT 24-25, 2026</span>
            </div>

            <div className="panel-middle">
              <p>2-DAY ESCAPE & GAME</p>
              <h2>₹6,000</h2>
              <span>PER PERSON · ALL-INCLUSIVE</span>

              <div className="panel-line" />

              <div className="booking-info">
                <div>
                  <small>STRANGERS</small>
                  <strong>20</strong>
                </div>

                <div>
                  <small>DATES</small>
                  <strong>OCT 24-25</strong>
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>SECRET HILLS</strong>
                </div>
              </div>
            </div>

            <div className="panel-bottom">
              <p>
                INCLUDES STAY AMIDST NATURE, BREAKFAST & DINNER,
                <br />
                GAMES, CHALLENGES & UNEXPECTED TWISTS.
              </p>

              <span>LIMITED TO 20 PLAYERS ONLY</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default TakePart;
