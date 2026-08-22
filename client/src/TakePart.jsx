import { Link } from "react-router-dom";
import "./TakePart.css";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0W9L1Jrk8_gJhqriE0zBwZ5xYP7SZFm1BtojvByX9gTB5rg/viewform";

function TakePart() {
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

        {/* REGISTRATION LAYOUT */}
        <div className="registration-layout">
          {/* APPLICATION CARD */}
          <div className="player-form">
            <div className="form-heading">
              <span>01</span>
              <div>
                <h2>OFFICIAL ENTRY APPLICATION</h2>
                <p>
                  Applications for The Traitors Mumbai are officially processed through our verified Google Form with game archetype screening and payment screenshot verification.
                </p>
              </div>
            </div>

            <div className="field" style={{ borderTop: "1px solid rgba(184, 155, 94, 0.2)", paddingTop: "24px" }}>
              <label style={{ color: "#c5a45f", letterSpacing: "2px", fontSize: "12px", fontFamily: "Cinzel, Georgia, serif" }}>
                APPLICATION STEPS
              </label>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "14px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>①</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.85)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Player Details & Role Archetype</strong>
                    Select your play style: The Traitor, The Detective, The Diplomat, or The Wildcard.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>②</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.85)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Pass & Screenshot Verification</strong>
                    ₹6,000 / Person (All-inclusive 2-day private estate stay, gourmet meals, and full game). Upload your transaction receipt directly in the form.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>③</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.85)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Handpicked Confirmation</strong>
                    Our team reviews all submissions to curate the final 20 participants. Selected players will receive private WhatsApp confirmation.
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
                boxSizing: "border-box"
              }}
            >
              <span>FILL GOOGLE APPLICATION FORM</span>
              <span>→</span>
            </a>

            {/* DIRECT CONTACT */}
            <p className="consent-text" style={{ marginTop: "24px" }}>
              Questions or direct booking queries? WhatsApp us at <strong style={{ color: "#c5a45f" }}>+91 9372948245</strong> or DM <strong style={{ color: "#c5a45f" }}>@the_estate__</strong>
            </p>
          </div>

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
