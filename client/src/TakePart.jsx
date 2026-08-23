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
          <p className="gold-label">THE TRAITORS MUMBAI · SEPT 26-27 (DEP: SEPT 25, 11 PM)</p>

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
                  We’re taking 20 strangers on a 2-day escape to the hills but there’s a catch. You won’t know where you’re going until it’s time to go.
                </p>
              </div>
            </div>

            <div className="field" style={{ borderTop: "1px solid rgba(184, 155, 94, 0.25)", paddingTop: "24px" }}>
              <label style={{ color: "#c5a45f", letterSpacing: "2px", fontSize: "12px", fontFamily: "Cinzel, Georgia, serif" }}>
                WHAT AWAITS YOU
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "14px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>①</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Come Alone</strong>
                    You don’t need to convince your friends to come. In fact, we’d rather you didn’t. Arrive knowing nobody and leave with a whole new group.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>②</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>All-Inclusive Pass (₹6,000)</strong>
                    Stay at a beautiful property amidst nature, swimming pool, breakfast & dinner, and all games, challenges & unexpected twists.
                  </div>
                </div>

                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c5a45f", fontSize: "16px", fontWeight: "bold" }}>③</span>
                  <div style={{ color: "rgba(241, 234, 220, 0.88)", fontSize: "15px", lineHeight: "1.5" }}>
                    <strong style={{ color: "#fff", display: "block" }}>Safe Hands & Secret Location</strong>
                    You’re in safe hands with the hosts. The location is secret because we want the whole weekend to feel like stepping into a real-life game.
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
              <span>SEPT 26-27</span>
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
                  <small>TRIP DATES</small>
                  <strong>SEPT 26-27</strong>
                </div>

                <div>
                  <small>DEPARTURE</small>
                  <strong>SEPT 25, 11PM</strong>
                </div>
              </div>
            </div>

            <div className="panel-bottom">
              <p>
                INCLUDES STAY AMIDST NATURE, SWIMMING POOL, BREAKFAST & DINNER,
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
