import { useState } from "react";
import { Link } from "react-router-dom";
import "./TakePart.css";

const IMG = `${import.meta.env.BASE_URL || "/"}images`.replace(/\/\/+/g, "/");
const INSTAGRAM_URL = "https://www.instagram.com/the_traitors_mumbai/";
const CONTACT_PHONE = "+91 9372948245";

function TakePart() {
  const [selectedTier, setSelectedTier] = useState("early-bird"); // "early-bird" | "regular"
  const [ticketCount, setTicketCount] = useState(1);

  const pricePerTicket = selectedTier === "early-bird" ? 8499 : 9499;
  const totalPrice = pricePerTicket * ticketCount;

  const whatsappMessage = encodeURIComponent(
    `Hi Sanskar, I want to reserve ${ticketCount} ticket(s) for The Estate at Boxtel Lonavala (October 10-12, 2026).\nSelected Tier: ${selectedTier === "early-bird" ? "Early Bird (₹8,499)" : "Regular (₹9,499)"}\nTotal: ₹${totalPrice.toLocaleString("en-IN")}.`
  );

  const bookingLink = `https://wa.me/919372948245?text=${whatsappMessage}`;

  return (
    <div className="take-page">
      {/* BACKGROUND */}
      <div
        className="take-page-bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url("${IMG}/mansion.png")`,
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
          <p className="gold-label">THE ESTATE · BOXTEL LONAVALA · OCTOBER 10–12, 2026</p>

          <h1>
            RESERVE YOUR
            <br />
            TICKET.
          </h1>

          <div className="gold-line" />

          <p>
            20 STRANGERS · 2 DAYS · 2 NIGHTS · 8 MEALS · ONE ESTATE.
            <br />
            TRUST IS RARE, DHOKHA EVERYWHERE.
          </p>
        </div>

        {/* REGISTRATION / TICKETING LAYOUT */}
        <div className="registration-layout">
          {/* TICKET SELECTION CARD */}
          <div className="player-form">
            <div className="form-heading">
              <span>01</span>
              <div>
                <h2>SELECT YOUR TICKET TIER</h2>
                <p>
                  Choose your ticket option below to secure your spot for The Estate at Boxtel Lonavala.
                </p>
              </div>
            </div>

            {/* TIER SELECTOR */}
            <div className="ticket-tiers-grid">
              <div
                className={`ticket-tier-option ${selectedTier === "early-bird" ? "active" : ""}`}
                onClick={() => setSelectedTier("early-bird")}
              >
                <div className="tier-header-row">
                  <span className="tier-radio-dot"></span>
                  <span className="tier-badge-label">LIMITED SEATS</span>
                </div>
                <h3>EARLY BIRD PASS</h3>
                <div className="tier-price-row">
                  <span className="tier-price">₹8,499</span>
                  <span className="tier-unit">/ person</span>
                </div>
                <p className="tier-perk-summary">
                  2 Nights at Boxtel Lonavala · 8 Meals · Pool · Full Game & Props
                </p>
              </div>

              <div
                className={`ticket-tier-option ${selectedTier === "regular" ? "active" : ""}`}
                onClick={() => setSelectedTier("regular")}
              >
                <div className="tier-header-row">
                  <span className="tier-radio-dot"></span>
                  <span className="tier-badge-label">STANDARD ENTRY</span>
                </div>
                <h3>REGULAR PASS</h3>
                <div className="tier-price-row">
                  <span className="tier-price">₹9,499</span>
                  <span className="tier-unit">/ person</span>
                </div>
                <p className="tier-perk-summary">
                  2 Nights at Boxtel Lonavala · 8 Meals · Pool · Full Game & Props
                </p>
              </div>
            </div>

            {/* INCLUSIONS SUMMARY */}
            <div className="ticket-inclusions-block">
              <span className="inclusions-title">WHAT YOUR TICKET INCLUDES:</span>
              <ul className="inclusions-checklist">
                <li>🏰 <strong>2-Day Immersive Experience:</strong> Full 2-day social-deduction game at Boxtel Lonavala</li>
                <li>🛏️ <strong>Accommodation:</strong> 2 nights stay at Boxtel Lonavala</li>
                <li>🍽️ <strong>8 Meals:</strong> Full dining provided throughout your entire stay</li>
                <li>🏊 <strong>Swimming Pool:</strong> Pool access at the property</li>
                <li>🎭 <strong>The Estate Game:</strong> Secret identities, missions, alliances & twists</li>
                <li>🎲 <strong>Game Props & Materials:</strong> All masks, clues, and game accessories</li>
              </ul>
            </div>

            {/* DIRECT BOOKING CTA */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="payment-button request-entry-btn"
            >
              <span>CONFIRM & BOOK VIA WHATSAPP (₹{totalPrice.toLocaleString("en-IN")})</span>
              <span>→</span>
            </a>

            {/* TRANSPORTATION & ASSISTANCE */}
            <div className="transport-note-box">
              <span className="transport-icon">ℹ️</span>
              <p>
                <strong>Transportation Not Included:</strong> Players are responsible for arranging their own travel to and from Boxtel, Lonavala.
              </p>
            </div>

            <p className="consent-text" style={{ marginTop: "20px" }}>
              Need direct assistance or customized arrangements? Call or WhatsApp Sanskar at <strong style={{ color: "#c5a45f" }}>{CONTACT_PHONE}</strong> or Instagram <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#c5a45f", textDecoration: "underline" }}>@the_traitors_mumbai</a>.
            </p>
          </div>

          {/* =================================
              PRICE SUMMARY PANEL
              ================================= */}
          <aside className="price-panel">
            <div className="panel-top">
              <span>THE ESTATE</span>
              <div className="crest">♛</div>
              <span>OCT 10–12</span>
            </div>

            <div className="panel-middle">
              <p>TOTAL TICKET VALUE</p>
              <h2>₹{totalPrice.toLocaleString("en-IN")}</h2>
              <span>{selectedTier === "early-bird" ? "EARLY BIRD RATE (₹8,499/pp)" : "REGULAR RATE (₹9,499/pp)"}</span>

              <div className="panel-line" />

              <div className="booking-info">
                <div>
                  <small>PLAYERS</small>
                  <strong>20 ONLY</strong>
                </div>

                <div>
                  <small>DURATION</small>
                  <strong>2D / 2N</strong>
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>BOXTEL LONAVALA</strong>
                </div>
              </div>
            </div>

            <div className="panel-bottom">
              <p>
                INCLUDES 2 NIGHTS ACCOMMODATION AT BOXTEL LONAVALA, 8 MEALS, SWIMMING POOL ACCESS, COMPLETE GAMEPLAY & ALL PROPS.
              </p>

              <span>STRICTLY LIMITED TO 20 SEATS</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default TakePart;
