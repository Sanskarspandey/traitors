import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const IMG = `${import.meta.env.BASE_URL || "/"}images`.replace(/\/\/+/g, "/");
const INSTAGRAM_URL = "https://www.instagram.com/the_traitors_mumbai/";
const CONTACT_PHONE = "+91 9372948245";
const BOOKING_WHATSAPP = "https://wa.me/919372948245?text=Hi%20Sanskar%2C%20I%20want%20to%20book%20my%20ticket%20for%20The%20Estate%20at%20Boxtel%20Lonavala%20%28October%2010-12%29.";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="estate-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className={`navbar ${isMenuOpen ? "menu-active" : ""}`}>
        <div className="navbar-container">
          <div
            className="brand"
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            aria-label="The Estate Home"
          >
            <div className="brand-symbol">
              ♛
            </div>
            <div className="brand-text">
              <div className="brand-name">
                THE ESTATE
              </div>
              <div className="brand-tagline">
                TRUST IS RARE, DHOKHA EVERYWHERE
              </div>
            </div>
          </div>

          <nav className="nav-links desktop-only" aria-label="Main Navigation">
            <button type="button" onClick={() => scrollToSection("home")}>
              HOME
            </button>
            <button type="button" onClick={() => scrollToSection("what-is-this")}>
              WHAT IS THIS?
            </button>
            <button type="button" onClick={() => scrollToSection("how-it-works")}>
              HOW IT WORKS
            </button>
            <button type="button" onClick={() => scrollToSection("location")}>
              LOCATION
            </button>
            <button type="button" onClick={() => scrollToSection("experience")}>
              THE EXPERIENCE
            </button>
            <button type="button" onClick={() => scrollToSection("rules")}>
              THE RULES
            </button>
            <button type="button" onClick={() => scrollToSection("included")}>
              WHAT'S INCLUDED
            </button>
            <button type="button" onClick={() => scrollToSection("faq")}>
              FAQ
            </button>
          </nav>

          <button
            type="button"
            onClick={() => scrollToSection("take-part")}
            className="nav-take-part desktop-only"
          >
            TAKE PART
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`menu-toggle-btn mobile-only ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            <span className="hamburger-box">
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer / Overlay */}
        <div
          id="mobile-menu-overlay"
          className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div
            className="mobile-menu-backdrop"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="mobile-menu-drawer">
            <div className="mobile-menu-header">
              <div className="mobile-menu-brand" onClick={() => scrollToSection("home")}>
                <span className="menu-crest">♛</span>
                <span>THE ESTATE</span>
              </div>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-menu-divider"></div>

            <nav className="mobile-nav-list" aria-label="Mobile Navigation">
              <button type="button" onClick={() => scrollToSection("home")}>
                <span className="nav-num">I.</span>
                <span className="nav-title">HOME</span>
              </button>
              <button type="button" onClick={() => scrollToSection("what-is-this")}>
                <span className="nav-num">II.</span>
                <span className="nav-title">WHAT IS THIS?</span>
              </button>
              <button type="button" onClick={() => scrollToSection("how-it-works")}>
                <span className="nav-num">III.</span>
                <span className="nav-title">HOW IT WORKS</span>
              </button>
              <button type="button" onClick={() => scrollToSection("location")}>
                <span className="nav-num">IV.</span>
                <span className="nav-title">LOCATION</span>
              </button>
              <button type="button" onClick={() => scrollToSection("experience")}>
                <span className="nav-num">V.</span>
                <span className="nav-title">THE EXPERIENCE</span>
              </button>
              <button type="button" onClick={() => scrollToSection("rules")}>
                <span className="nav-num">VI.</span>
                <span className="nav-title">THE RULES</span>
              </button>
              <button type="button" onClick={() => scrollToSection("included")}>
                <span className="nav-num">VII.</span>
                <span className="nav-title">WHAT'S INCLUDED</span>
              </button>
              <button type="button" onClick={() => scrollToSection("faq")}>
                <span className="nav-num">VIII.</span>
                <span className="nav-title">FAQ</span>
              </button>
            </nav>

            <div className="mobile-menu-cta-wrap">
              <button
                type="button"
                className="gold-button mobile-menu-cta"
                onClick={() => scrollToSection("take-part")}
              >
                TAKE PART →
              </button>
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-social-link">
                <span className="menu-foot-label">FOLLOW THE ESTATE</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-instagram"
                >
                  @the_traitors_mumbai ↗
                </a>
              </div>
              <div className="mobile-contact-line">
                <span>Host: Sanskar Pandey ({CONTACT_PHONE})</span>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* =====================================================
          1. HERO
      ===================================================== */}

      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url("${IMG}/masked-hero.png")`,
        }}
      >
        <img
          className="section-bg-image hero-bg-image"
          src={`${IMG}/masked-hero.png`}
          alt="The Estate Masked Figure"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            20 STRANGERS · ONE ESTATE · HIDDEN LOYALTIES · TWO DAYS
          </div>

          <h1 className="hero-title">
            THE ESTATE
          </h1>

          <p className="hero-subtitle">
            20 strangers. One estate. Hidden loyalties. Two days.
            <br />
            TRUST IS RARE, DHOKHA EVERYWHERE.
          </p>

          <div className="hero-details">
            <span className="hero-detail-item">
              <span className="detail-icon">📍</span>
              BOXTEL LONAVALA
            </span>

            <span className="detail-divider"></span>

            <span className="hero-detail-item">
              <span className="detail-icon">▣</span>
              OCTOBER 10–12, 2026
            </span>

            <span className="detail-divider"></span>

            <span className="hero-detail-item">
              <span className="detail-icon">◈</span>
              20 PLAYERS · 2 NIGHTS · 8 MEALS
            </span>
          </div>

          <div className="hero-cta-wrap">
            <button
              type="button"
              onClick={() => scrollToSection("take-part")}
              className="gold-button hero-button"
            >
              TAKE PART
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("what-is-this")}
              className="secondary-button hero-secondary-btn"
            >
              DISCOVER THE ESTATE
            </button>
          </div>

          <div className="hero-limited">
            BOXTEL LONAVALA · OCTOBER 10–12, 2026 · LIMITED TO 20 PLAYERS ONLY
          </div>
        </div>
      </section>


      {/* =====================================================
          2. WHAT IS THE ESTATE?
      ===================================================== */}

      <section
        id="what-is-this"
        className="section what-section"
        style={{
          backgroundImage: `url("${IMG}/masked-hero.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/masked-hero.png`}
          alt="The Estate Atmosphere"
        />

        <div className="section-overlay"></div>

        <div className="what-content">
          <div className="section-number">
            1.
          </div>

          <h2 className="section-heading">
            WHAT IS THE ESTATE?
          </h2>

          <div className="gold-line"></div>

          <p>
            <strong>The Estate</strong> is an exclusive 2-day immersive social-deduction experience
            <br />
            of trust, strategy, alliances and deception.
          </p>

          <p>
            20 handpicked players enter Boxtel Lonavala. Some are loyal. Some are traitors.
            <br />
            Your mission is simple: uncover the truth, form alliances, and survive.
          </p>

          <p className="strong-line">
            Trust no one.
          </p>
        </div>

        <div className="what-decoration">
          <div className="coin-symbol">
            E
          </div>
        </div>
      </section>


      {/* =====================================================
          3. HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="section how-section"
        style={{
          backgroundImage: `url("${IMG}/sword.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/sword.png`}
          alt="Sword of The Estate"
        />

        <div className="section-overlay dark-overlay"></div>

        <div className="how-inner">
          <div className="center-title">
            <div className="section-number">
              2.
            </div>

            <h2>
              HOW IT WORKS
            </h2>

            <div className="gold-line center"></div>
          </div>

          <div className="steps">
            <Step
              icon="♟"
              title="20 PLAYERS"
              text="20 players arrive at Boxtel Lonavala for a 2-day escape."
            />

            <div className="step-arrow">
              →
            </div>

            <Step
              icon="♠"
              title="LOYALS & TRAITORS"
              text="A secret few are chosen as traitors in the shadows."
            />

            <div className="step-arrow">
              →
            </div>

            <Step
              icon="♜"
              title="COMPLETE MISSIONS"
              text="Work together, tackle challenges, unlock hidden clues."
            />

            <div className="step-arrow">
              →
            </div>

            <Step
              icon="⚔"
              title="BETRAY OR SURVIVE"
              text="Unmask the traitors before you are eliminated."
            />

            <div className="step-arrow">
              →
            </div>

            <Step
              icon="♛"
              title="THE FINALE"
              text="Form alliances, survive the council, conquer the mystery."
            />
          </div>
        </div>

        <img
          className="shield-decoration"
          src={`${IMG}/shield.png`}
          alt="Shield of The Estate"
        />
      </section>


      {/* =====================================================
          4. LOCATION: BOXTEL LONAVALA
      ===================================================== */}

      <section
        id="location"
        className="section location-section"
        style={{
          backgroundImage: `url("${IMG}/mansion.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/mansion.png`}
          alt="Boxtel Lonavala Estate"
        />

        <div className="section-overlay location-overlay"></div>

        <div className="location-content">
          <div className="section-number">
            3.
          </div>

          <div className="location-header-wrap">
            <span className="location-badge">THE SETTING</span>
            <h2 className="location-title">
              BOXTEL LONAVALA
            </h2>
            <div className="location-subtitle">
              Lonavala, Maharashtra
            </div>
          </div>

          <div className="gold-line center"></div>

          <p className="location-quote">
            “Two days. One secluded setting. Twenty players. Trust becomes your greatest weapon.”
          </p>

          <p className="location-desc">
            Nestled in the lush hills of Lonavala, Boxtel serves as the secluded backdrop for The Estate.
            With private accommodation, swimming pool, open courtyards, and mysterious corners,
            it is the ultimate stage for an immersive weekend of social deduction and strategic gameplay.
          </p>

          <div className="location-features-grid">
            <div className="loc-feat-card">
              <span className="feat-icon">🏰</span>
              <strong>Secluded Setting</strong>
              <span>Private atmosphere in the hills of Lonavala</span>
            </div>

            <div className="loc-feat-card">
              <span className="feat-icon">🏊</span>
              <strong>Swimming Pool</strong>
              <span>Property pool access throughout the stay</span>
            </div>

            <div className="loc-feat-card">
              <span className="feat-icon">🛏️</span>
              <strong>2 Nights Stay</strong>
              <span>Comfortable lodging for all 20 players</span>
            </div>

            <div className="loc-feat-card">
              <span className="feat-icon">🍽️</span>
              <strong>8 Curated Meals</strong>
              <span>Complete dining across both days</span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          5. THE EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section experience-section"
        style={{
          backgroundImage: `url("${IMG}/mansion.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/mansion.png`}
          alt="The Mansion"
        />

        <div className="section-overlay experience-overlay"></div>

        <div className="experience-content">
          <div className="section-number">
            4.
          </div>

          <h2>
            THE EXPERIENCE
          </h2>

          <div className="gold-line"></div>

          <div className="experience-list">
            <ExperienceItem
              icon="♜"
              title="COME ALONE — ARRIVE AS STRANGERS"
              text="You don’t need to convince your friends to come. In fact, we’d rather you didn’t. The whole point is to arrive knowing nobody and leave with a whole new group."
            />

            <ExperienceItem
              icon="♨"
              title="TWO DAYS. NO ROUTINE."
              text="For two days and two nights, forget your usual plans, step away from your routine, and immerse yourself in the psychological battleground."
            />

            <ExperienceItem
              icon="♟"
              title="THE ESTATE GAME: STRATEGY & CHAOS"
              text="Secret identities, high-stakes missions, unexpected twists, and deceptive psychological strategy where trust is rare."
            />

            <ExperienceItem
              icon="♠"
              title="BOXTEL LONAVALA SETTING"
              text="Enjoy 2 nights stay, swimming pool access, 8 curated meals, and an unforgettable cinematic atmosphere in the hills of Maharashtra."
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          6. THE RULES
      ===================================================== */}

      <section
        id="rules"
        className="section rules-section"
        style={{
          backgroundImage: `url("${IMG}/traitors-group.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/traitors-group.png`}
          alt="The Grand Table Rules"
        />

        <div className="section-overlay rules-overlay"></div>

        <div className="rules-inner">
          <div className="center-title">
            <div className="section-number">
              5.
            </div>

            <h2>
              THE RULES ARE SIMPLE:
            </h2>

            <div className="gold-line center"></div>
          </div>

          <div className="rules-grid">
            <Rule
              icon="◈"
              title="COME ALONE."
              text="Leave your usual circle behind. Arrive as a stranger to truly dive in."
            />

            <Rule
              icon="◉"
              title="TRUST THE HOSTS."
              text="You’re in safe hands with the hosts every step of the journey."
            />

            <Rule
              icon="◉"
              title="PLAY YOUR PART."
              text="Commit to your secret identity. Every decision matters."
            />

            <Rule
              icon="♟"
              title="COMPLETE MISSIONS."
              text="Tackle challenges, uncover clues, and survive the council."
            />

            <Rule
              icon="♠"
              title="DON'T ASSUME THE TRUTH."
              text="Don’t assume everyone is telling the truth. Dhokha is everywhere."
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          7. WHAT'S INCLUDED
      ===================================================== */}

      <section
        id="included"
        className="section stay-section"
        style={{
          backgroundImage: `url("${IMG}/sword.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/sword.png`}
          alt="What is included at The Estate"
        />

        <div className="section-overlay stay-overlay"></div>

        <div className="stay-content">
          <div className="section-number">
            6.
          </div>

          <h2>
            WHAT'S INCLUDED
          </h2>

          <div className="gold-line center"></div>

          <p className="stay-summary-text">
            BOXTEL LONAVALA · OCTOBER 10–12, 2026 · 20 PLAYERS · 2 NIGHTS
          </p>

          <div className="stay-inclusions-grid six-grid">
            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🏰</span>
              <h3>2-Day Immersive Experience</h3>
              <p>A full two-day social-deduction experience at Boxtel Lonavala.</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🛏️</span>
              <h3>Accommodation</h3>
              <p>2 nights accommodation at Boxtel Lonavala.</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🍽️</span>
              <h3>8 Meals</h3>
              <p>8 meals throughout the stay.</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🏊</span>
              <h3>Swimming Pool</h3>
              <p>Access to the swimming pool at the property.</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🎭</span>
              <h3>The Estate Game</h3>
              <p>A fully immersive social-deduction game involving secret identities, alliances, missions, deception and elimination.</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🎲</span>
              <h3>Game Props & Materials</h3>
              <p>All required game materials and props are included.</p>
            </div>
          </div>

          <div className="transport-notice">
            <span>ℹ️ Note: Transportation to and from Lonavala is not included in the ticket price.</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          8. TICKETING / TAKE PART
      ===================================================== */}

      <section
        id="take-part"
        className="section take-part-section"
        style={{
          backgroundImage: `url("${IMG}/traitors-group.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/traitors-group.png`}
          alt="Take Part in The Estate"
        />

        <div className="section-overlay take-part-overlay"></div>

        <div className="take-part-inner">
          <div className="section-number">
            7.
          </div>

          <h2>
            READY TO ENTER THE ESTATE?
          </h2>

          <div className="gold-line center"></div>

          <p className="take-part-tagline">
            20 players. 2 days. One question: Who can you trust?
          </p>

          <div className="pricing-cards-container">
            {/* EARLY BIRD TIER */}
            <div className="pricing-card featured-tier">
              <div className="pricing-badge-top">
                LIMITED EARLY-BIRD SEATS
              </div>
              <div className="pricing-tier-name">
                EARLY BIRD
              </div>
              <div className="pricing-price">
                ₹8,499
              </div>
              <div className="pricing-sub">
                PER PERSON · ALL-INCLUSIVE PASS
              </div>

              <div className="pricing-perks">
                <div className="pricing-perk-item">✓ 2-Day Immersive Game Experience</div>
                <div className="pricing-perk-item">✓ 2 Nights Stay at Boxtel Lonavala</div>
                <div className="pricing-perk-item">✓ 8 Meals Throughout Stay</div>
                <div className="pricing-perk-item">✓ Swimming Pool Access</div>
                <div className="pricing-perk-item">✓ All Game Props & Materials</div>
              </div>

              <Link
                to="/take-part"
                className="gold-button pricing-btn"
              >
                TAKE PART
              </Link>
            </div>

            {/* REGULAR TIER */}
            <div className="pricing-card">
              <div className="pricing-badge-top regular-badge">
                STANDARD ADMISSION
              </div>
              <div className="pricing-tier-name">
                REGULAR
              </div>
              <div className="pricing-price">
                ₹9,499
              </div>
              <div className="pricing-sub">
                PER PERSON · ALL-INCLUSIVE PASS
              </div>

              <div className="pricing-perks">
                <div className="pricing-perk-item">✓ 2-Day Immersive Game Experience</div>
                <div className="pricing-perk-item">✓ 2 Nights Stay at Boxtel Lonavala</div>
                <div className="pricing-perk-item">✓ 8 Meals Throughout Stay</div>
                <div className="pricing-perk-item">✓ Swimming Pool Access</div>
                <div className="pricing-perk-item">✓ All Game Props & Materials</div>
              </div>

              <Link
                to="/take-part"
                className="gold-button pricing-btn"
              >
                TAKE PART
              </Link>
            </div>
          </div>

          <div className="transport-disclaimer">
            Transportation to and from Lonavala is not included in the ticket price.
          </div>
        </div>
      </section>


      {/* =====================================================
          9. FAQ
      ===================================================== */}

      <section
        id="faq"
        className="faq-section"
        style={{
          backgroundImage: `url("${IMG}/traitors-group.png")`,
        }}
      >
        <img
          className="section-bg-image faq-bg-image"
          src={`${IMG}/traitors-group.png`}
          alt="The Estate Atmosphere"
        />

        <div className="faq-overlay"></div>

        <div className="faq-content">
          <div className="faq-title">
            <span className="section-number">
              8.
            </span>

            <h2>
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="gold-line center"></div>
          </div>

          <div className="faq-grid">
            <FAQ
              question="Where is The Estate?"
              answer="The Estate takes place at Boxtel Lonavala, Maharashtra."
            />

            <FAQ
              question="How long is the experience?"
              answer="The experience spans 2 days and 2 nights (October 10–12, 2026)."
            />

            <FAQ
              question="What does my ticket include?"
              answer="Your ticket includes accommodation for 2 nights, 8 meals, swimming pool access, the complete immersive game, game materials/props, and the overall Estate experience."
            />

            <FAQ
              question="Is transportation included?"
              answer="No. Transportation to and from Lonavala is not included in the ticket price."
            />

            <FAQ
              question="How many players are there?"
              answer="The core game is designed for 20 players."
            />

            <FAQ
              question="What is the ticket price?"
              answer="Early Bird: ₹8,499 (limited seats). Regular: ₹9,499."
            />

            <FAQ
              question="Is this a normal board-game meetup?"
              answer="No. The Estate is designed as a fully immersive social-deduction experience combining strategy, deception, alliances, missions and social interaction over two days."
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="footer-estate-brand">
          <div className="footer-brand-title">
            THE ESTATE
          </div>
          <div className="footer-brand-sub">
            20 PLAYERS · 2 DAYS · 2 NIGHTS · 8 MEALS · BOXTEL LONAVALA · OCTOBER 10–12, 2026
          </div>
          <div className="footer-copy">
            © 2026 The Estate. All rights reserved.
          </div>
        </div>

        <div className="footer-info-group">
          <div className="footer-contact-block">
            <span className="footer-section-label">CONTACT</span>
            <div className="footer-contact-name">Sanskar Pandey</div>
            <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`} className="footer-contact-link">
              {CONTACT_PHONE}
            </a>
          </div>

          <div className="footer-social-block">
            <span className="footer-section-label">INSTAGRAM</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-link"
            >
              @the_traitors_mumbai
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}


/* =========================================================
   COMPONENTS
   ========================================================= */

function Step({ icon, title, text }) {
  return (
    <div className="step">
      <div className="step-icon">
        {icon}
      </div>
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
}

function ExperienceItem({ icon, title, text }) {
  return (
    <div className="experience-item">
      <div className="experience-icon">
        {icon}
      </div>
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

function Rule({ icon, title, text }) {
  return (
    <div className="rule">
      <div className="rule-icon">
        {icon}
      </div>
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details className="faq-item">
      <summary>
        {question}
        <span>+</span>
      </summary>
      <p>
        {answer}
      </p>
    </details>
  );
}

export default App;
