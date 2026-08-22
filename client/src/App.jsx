import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const IMG = "/images";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0W9L1Jrk8_gJhqriE0zBwZ5xYP7SZFm1BtojvByX9gTB5rg/viewform";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="estate-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <div className="brand-symbol">
            ♛
          </div>

          <div>
            <div className="brand-name">
              THE TRAITORS MUMBAI
            </div>

            <div className="brand-tagline">
              TRUST IS RARE, DHOKHA EVERYWHERE
            </div>
          </div>
        </div>


        <nav className="nav-links">

          <button onClick={() => scrollToSection("home")}>
            HOME
          </button>

          <button onClick={() => scrollToSection("what-is-this")}>
            WHAT IS THIS?
          </button>

          <button onClick={() => scrollToSection("how-it-works")}>
            HOW IT WORKS
          </button>

          <button onClick={() => scrollToSection("experience")}>
            THE EXPERIENCE
          </button>

          <button onClick={() => scrollToSection("rules")}>
            THE RULES
          </button>

          <button onClick={() => scrollToSection("stay")}>
            THE STAY
          </button>

          <button onClick={() => scrollToSection("faq")}>
            FAQ
          </button>

        </nav>


        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-take-part"
        >
          REQUEST ENTRY
        </a>

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
            20 PLAYERS · 1 MANSION · 24-25 OCTOBER, 2026
          </div>

          <h1>
            THE TRAITORS
            <br />
            MUMBAI
          </h1>

          <p className="hero-subtitle">
            TRUST IS RARE, DHOKHA EVERYWHERE.
            <br />
            THE ESTATE IS CALLING. WILL YOU ANSWER?
          </p>

          <div className="hero-details">

            <span>
              <span className="detail-icon">
                ▣
              </span>
              24-25 OCTOBER, 2026
            </span>

            <span className="detail-divider"></span>

            <span>
              <span className="detail-icon">
                ◆
              </span>
              A PRIVATE MANSION
            </span>

            <span className="detail-divider"></span>

            <span>
              <span className="detail-icon">
                ◈
              </span>
              ₹6,000 / PERSON
            </span>

          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button hero-button"
          >
            REQUEST ENTRY
          </a>

          <div className="hero-limited">
            LIMITED TO 20 PLAYERS ONLY · 24-25 OCTOBER, 2026
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

          <div className="section-heading">
            WHAT IS THE TRAITORS MUMBAI?
          </div>

          <div className="gold-line"></div>

          <p>
            The Traitors Mumbai is an exclusive real-life psychological game
            <br />
            of trust, strategy, alliances and deception.
          </p>

          <p>
            20 handpicked players enter a private estate. Some are loyal. Some are traitors.
            <br />
            Your mission is simple: uncover the truth and survive.
          </p>

          <p className="strong-line">
            Trust no one.
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
              title="20 PLAYERS"
              text="20 handpicked players enter the private estate."
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
              title="A LUXURIOUS PRIVATE MANSION"
              text="An exclusive private estate serving as your home and battleground for 2 thrilling days."
            />

            <ExperienceItem
              icon="♨"
              title="FOOD & ACCOMMODATION INCLUDED"
              text="Full 2-day stay with breakfast, dinner, and comfortable private lodging."
            />

            <ExperienceItem
              icon="♟"
              title="IMMERSIVE GAMEPLAY & MISSIONS"
              text="Secret roles, psychological twists, strategic alliances, and mystery challenges."
            />

            <ExperienceItem
              icon="♠"
              title="CINEMATIC ATMOSPHERE"
              text="Every candle, mask, and room designed to deliver an unforgettable luxury experience."
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
          alt="Traitors Group"
        />

        <div className="section-overlay rules-overlay"></div>

        <div className="rules-inner">

          <div className="center-title">

            <div className="section-number">
              4.
            </div>

            <h2>
              THE RULES
            </h2>

            <div className="gold-line center"></div>

          </div>


          <div className="rules-grid">

            <Rule
              icon="◈"
              title="DON'T REVEAL YOUR ROLE"
              text="Your secret identity is your greatest shield."
            />

            <Rule
              icon="◉"
              title="LISTEN CAREFULLY"
              text="Subtle clues and quiet lies are hidden everywhere."
            />

            <Rule
              icon="◉"
              title="TRUST WISELY"
              text="Alliances can protect you or seal your downfall."
            />

            <Rule
              icon="♟"
              title="COMPLETE MISSIONS"
              text="Cooperate in team challenges, but stay alert."
            />

            <Rule
              icon="♠"
              title="BETRAY OR BE BETRAYED"
              text="In The Estate, survival demands strategy."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          6. THE STAY / EXPERIENCE DETAILS
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
          alt="The Estate Stay"
        />

        <div className="section-overlay stay-overlay"></div>

        <div className="stay-content">

          <div className="section-number">
            5.
          </div>

          <h2>
            THE STAY & DETAILS
          </h2>

          <div className="gold-line center"></div>

          <div className="stay-pricing-badge">
            <span className="stay-price">₹6,000</span>
            <span className="stay-per">PER PERSON · ALL-INCLUSIVE</span>
          </div>

          <p className="stay-summary-text">
            20 PLAYERS · 2 FULL DAYS (24-25 OCTOBER, 2026) · 1 PRIVATE MANSION
          </p>

          <div className="stay-inclusions-grid">

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🏰</span>
              <h3>2-Day Private Estate Stay</h3>
              <p>Exclusive access to a luxury private mansion & grounds</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🍷</span>
              <h3>Food & Dining</h3>
              <p>Curated breakfast & dinner included across both days</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">🎭</span>
              <h3>The Immersive Game</h3>
              <p>Full psychological game, customized missions & twists</p>
            </div>

            <div className="stay-inclusion-card">
              <span className="inclusion-icon">⚔️</span>
              <h3>All Game Materials</h3>
              <p>Shields, masks, clues, strategy kits & themed activities</p>
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
            REQUEST ENTRY
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
                PER PERSON · STAY & GAME
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
                LIMITED TO 20 PLAYERS · 24-25 OCTOBER, 2026
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
                PLAYERS ONLY
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
              question="What is The Estate?"
              answer="The Estate is a premium 2-day immersive psychological social-deduction game experience for 20 players set inside a private luxury mansion."
            />

            <FAQ
              question="Who can participate?"
              answer="Anyone aged 18 and above who enjoys strategy, mystery, deception games, and meeting new people. No prior experience is required."
            />

            <FAQ
              question="How many players are there?"
              answer="Each edition is strictly limited to 20 handpicked players to ensure deep immersion and high-stakes social dynamics."
            />

            <FAQ
              question="What does the ₹6,000 entry include?"
              answer="The ₹6,000 fee includes your full 2-day stay at the private estate, accommodation, breakfast and dinner, all immersive game activities, missions, and props."
            />

            <FAQ
              question="When and how long is the experience?"
              answer="The experience takes place on 24-25 October, 2026 (2 full days and 1 night of non-stop immersion, mystery, and strategy)."
            />

            <FAQ
              question="Where will it take place?"
              answer="At an exclusive private mansion near Mumbai. The exact location details are shared directly with confirmed participants."
            />

            <FAQ
              question="Is accommodation included?"
              answer="Yes, comfortable private lodging inside the estate for the entire duration of the experience is fully included."
            />

            <FAQ
              question="What happens after I request entry?"
              answer="Our team reviews all entry requests and reaches out directly to selected participants regarding confirmation and next steps."
            />

            <FAQ
              question="Is the entry automatically confirmed?"
              answer="No. Requesting entry registers your interest. Because seats are strictly capped at 20, entries are reviewed and confirmed manually."
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
            TRUST IS RARE, DHOKHA EVERYWHERE · 20 PLAYERS • 24-25 OCTOBER, 2026
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
              href="https://www.instagram.com/the_estate__/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-link"
            >
              @the_estate__
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

        <span>
          +
        </span>
      </summary>

      <p>
        {answer}
      </p>

    </details>
  );
}


export default App;