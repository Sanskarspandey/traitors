import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const IMG = `${import.meta.env.BASE_URL || "/"}images`.replace(/\/\/+/g, "/");
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0W9L1Jrk8_gJhqriE0zBwZ5xYP7SZFm1BtojvByX9gTB5rg/viewform";
const INSTAGRAM_URL = "https://www.instagram.com/the_traitors_mumbai/";

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
            aria-label="The Traitors Mumbai Home"
          >
            <div className="brand-symbol">
              ♛
            </div>
            <div className="brand-text">
              <div className="brand-name">
                THE TRAITORS MUMBAI
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
            <button type="button" onClick={() => scrollToSection("experience")}>
              THE EXPERIENCE
            </button>
            <button type="button" onClick={() => scrollToSection("rules")}>
              THE RULES
            </button>
            <button type="button" onClick={() => scrollToSection("stay")}>
              WHAT'S INCLUDED
            </button>
            <button type="button" onClick={() => scrollToSection("faq")}>
              FAQ
            </button>
          </nav>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-take-part desktop-only"
          >
            REQUEST ENTRY
          </a>

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
                <span>THE TRAITORS</span>
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
              <button type="button" onClick={() => scrollToSection("experience")}>
                <span className="nav-num">IV.</span>
                <span className="nav-title">THE EXPERIENCE</span>
              </button>
              <button type="button" onClick={() => scrollToSection("rules")}>
                <span className="nav-num">V.</span>
                <span className="nav-title">THE RULES</span>
              </button>
              <button type="button" onClick={() => scrollToSection("stay")}>
                <span className="nav-num">VI.</span>
                <span className="nav-title">WHAT'S INCLUDED</span>
              </button>
              <button type="button" onClick={() => scrollToSection("faq")}>
                <span className="nav-num">VII.</span>
                <span className="nav-title">FAQ</span>
              </button>
            </nav>

            <div className="mobile-menu-cta-wrap">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button mobile-menu-cta"
                onClick={() => setIsMenuOpen(false)}
              >
                REQUEST ENTRY →
              </a>
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-social-link">
                <span className="menu-foot-label">FOLLOW THE GAME</span>
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
                <span>Host: Sanskar Pandey (+91 9372948245)</span>
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
          alt="The Traitors Masked Figure"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            20 STRANGERS · 2-DAY ESCAPE · SECRET DESTINATION
          </div>

          <h1 className="hero-title">
            THE TRAITORS
            <br />
            MUMBAI
          </h1>

          <p className="hero-subtitle">
            TRUST IS RARE, DHOKHA EVERYWHERE.
            <br />
            AN IMMERSIVE 2-DAY ESCAPE TO THE HILLS.
          </p>

          <div className="hero-details">
            <span className="hero-detail-item">
              <span className="detail-icon">▣</span>
              24-25 OCTOBER, 2026
            </span>

            <span className="detail-divider"></span>

            <span className="hero-detail-item">
              <span className="detail-icon">◆</span>
              SECRET HILLS DESTINATION
            </span>

            <span className="detail-divider"></span>

            <span className="hero-detail-item">
              <span className="detail-icon">◈</span>
              ₹6,000 / PERSON
            </span>
          </div>

          <div className="hero-cta-wrap">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button hero-button"
            >
              READY TO PLAY?
            </a>
          </div>

          <div className="hero-limited">
            LIMITED TO 20 PLAYERS ONLY · 24-25 OCTOBER, 2026
          </div>
        </div>
      </section>


      {/* =====================================================
          2. WHAT IS THE TRAITORS MUMBAI?
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
          alt="The Traitors Atmosphere"
        />

        <div className="section-overlay"></div>

        <div className="what-content">
          <div className="section-number">
            1.
          </div>

          <h2 className="section-heading">
            WHAT IS THE TRAITORS MUMBAI?
          </h2>

          <div className="gold-line"></div>

          <p>
            We’re taking <strong>20 strangers</strong> on a 2-day escape to the hills but there’s a catch.
            <br />
            You won’t know where you’re going until it’s time to go.
          </p>

          <p>
            Don’t worry — this isn’t a sketchy mystery trip. You’re in safe hands with the hosts.
            <br />
            The location is secret because we want the whole weekend to feel like stepping into a real life game.
          </p>

          <p className="strong-line">
            Think: games, challenges, surprises, secrets and a little bit of chaos.
          </p>
        </div>

        <div className="what-decoration">
          <div className="coin-symbol">
            T
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
              title="20 STRANGERS"
              text="20 strangers depart together for the secret hills."
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
          alt="Shield of The Traitors"
        />
      </section>


      {/* =====================================================
          4. THE EXPERIENCE
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
            3.
          </div>

          <h2>
            THE EXPERIENCE
          </h2>

          <div className="gold-line"></div>

          <div className="experience-list">
            <ExperienceItem
              icon="♜"
              title="COME ALONE — DON'T BRING YOUR FRIENDS"
              text="You don’t need to convince your friends to come. In fact, we’d rather you didn’t. The whole point is to arrive knowing nobody and leave with a whole new group."
            />

            <ExperienceItem
              icon="♨"
              title="TWO DAYS. NO ROUTINE."
              text="For two days, forget your usual plans, step away from your routine and let us take care of the rest."
            />

            <ExperienceItem
              icon="♟"
              title="GAMES, CHALLENGES & CHAOS"
              text="Think: games, challenges, surprises, secrets and a little bit of chaos where trust is rare."
            />

            <ExperienceItem
              icon="♠"
              title="SECLUDED PROPERTY & NATURE"
              text="Stay at a beautiful property amidst nature, gourmet meals, and an immersive game atmosphere."
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          5. THE RULES
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
              4.
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
              text="Commit to your role, complete challenges, and embrace the mystery."
            />

            <Rule
              icon="♟"
              title="BE PREPARED FOR TWISTS."
              text="Expect surprises, hidden clues, and secrets behind closed doors."
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
          6. WHAT'S INCLUDED
      ===================================================== */}

      <section
        id="stay"
        className="section stay-section"
        style={{
          backgroundImage: `url("${IMG}/sword.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/sword.png`}
          alt="The Estate Stay Details"
        />

        <div className="section-overlay stay-overlay"></div>

        <div className="stay-content">
          <div className="section-number">
            5.
          </div>

          <h2>
            WHAT'S INCLUDED
          </h2>

          <div className="gold-line center"></div>

          <div className="stay-pricing-badge">
            <span className="stay-price">₹6,000</span>
            <span className="stay-per">PER PERSON · ALL-INCLUSIVE</span>
          </div>

          <p className="stay-summary-text">
            TRIP DURATION: OCTOBER 24–25, 2026
          </p>

          <div className="stay-inclusions-grid">
            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🏰</span>
              <h3>Stay at a beautiful property amidst nature</h3>
              <p>Exclusive private property nestled in the hills with serene natural surroundings</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🍷</span>
              <h3>Breakfast & Dinner</h3>
              <p>Curated meals and dining provided across both days</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🎭</span>
              <h3>Games, challenges & unexpected twists</h3>
              <p>Full immersive game storyline, secret missions & props</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">👥</span>
              <h3>20 strangers who might not be strangers by the end</h3>
              <p>A handpicked group of adventurous individuals sharing an unforgettable escape</p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          7. TAKE PART
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
            6.
          </div>

          <h2>
            READY TO PLAY?
          </h2>

          <div className="gold-line center"></div>

          <div className="entry-card">
            <div className="entry-column">
              <span className="entry-label">
                EXPERIENCE FEE
              </span>
              <span className="entry-price">
                ₹6,000
              </span>
              <span className="entry-note">
                PER PERSON · STAY, MEALS & GAME
              </span>
            </div>

            <div className="entry-middle">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button"
              >
                REQUEST ENTRY
              </a>

              <span>
                20 STRANGERS · 24-25 OCTOBER, 2026
              </span>
            </div>

            <div className="entry-column">
              <span className="entry-label">
                CAPACITY
              </span>
              <span className="entry-price">
                20
              </span>
              <span className="entry-note">
                STRANGERS ONLY
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          8. FAQ
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
          alt="The Traitors Group Atmosphere"
        />

        <div className="faq-overlay"></div>

        <div className="faq-content">
          <div className="faq-title">
            <span className="section-number">
              7.
            </span>

            <h2>
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="gold-line center"></div>
          </div>

          <div className="faq-grid">
            <FAQ
              question="What is The Traitors Mumbai?"
              answer="We’re taking 20 strangers on a 2-day escape to the hills for an immersive weekend of games, challenges, surprises, secrets, and a little bit of chaos."
            />

            <FAQ
              question="Why is the location secret?"
              answer="You won’t know where you’re going until it’s time to go. The location is secret because we want the whole weekend to feel like stepping into a real-life game. The property is a beautiful, safe property amidst nature in the hills."
            />

            <FAQ
              question="Is it safe if I'm coming alone?"
              answer="100% safe. You are in safe hands with the hosts. In fact, coming alone is the core rule: you arrive knowing nobody and leave with a whole new group."
            />

            <FAQ
              question="When is the trip taking place?"
              answer="Trip duration: 24-25 October, 2026 (Saturday morning to Sunday evening)."
            />

            <FAQ
              question="What does the ₹6,000 pass include?"
              answer="It includes your stay at a beautiful property amidst nature, breakfast & dinner across both days, and all games, challenges, and unexpected twists."
            />

            <FAQ
              question="Can I bring my friends?"
              answer="You don’t need to convince your friends to come — in fact, we’d rather you didn’t! The whole point is to arrive knowing nobody and leave with a whole new group."
            />

            <FAQ
              question="How are the 20 players chosen?"
              answer="Interested participants submit their application through our form. Our hosts review entries to ensure a balanced, fun, and safe group of 20 players."
            />

            <FAQ
              question="What happens after I apply?"
              answer="Our team reviews all entries. Selected participants will be contacted directly via WhatsApp/Call with confirmation, travel coordinates, and next steps."
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
            THE TRAITORS MUMBAI
          </div>
          <div className="footer-brand-sub">
            TRUST IS RARE, DHOKHA EVERYWHERE · 20 STRANGERS · 24-25 OCTOBER, 2026
          </div>
          <div className="footer-copy">
            © 2026 The Traitors Mumbai. All rights reserved.
          </div>
        </div>

        <div className="footer-info-group">
          <div className="footer-contact-block">
            <span className="footer-section-label">CONTACT</span>
            <div className="footer-contact-name">Sanskar Pandey</div>
            <a href="tel:+919372948245" className="footer-contact-link">
              +91 9372948245
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
