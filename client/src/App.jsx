import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const IMG = `${import.meta.env.BASE_URL || "/"}images`.replace(/\/\/+/g, "/");
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0W9L1Jrk8_gJhqriE0zBwZ5xYP7SZFm1BtojvByX9gTB5rg/viewform";
const INSTAGRAM_URL = "https://www.instagram.com/the_traitors_mumbai/";

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
          <button onClick={() => scrollToSection("the-catch")}>
            THE CATCH
          </button>
          <button onClick={() => scrollToSection("the-game")}>
            THE GAME
          </button>
          <button onClick={() => scrollToSection("included")}>
            WHAT'S INCLUDED
          </button>
          <button onClick={() => scrollToSection("rules")}>
            THE RULES
          </button>
          <button onClick={() => scrollToSection("come-alone")}>
            COME ALONE
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
          TAKE PART
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
          alt="The Traitors Masked Figure"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            20 STRANGERS · 2-DAY ESCAPE · SECRET DESTINATION · OCTOBER 24–25, 2026
          </div>

          <h1>
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
            <span>
              <span className="detail-icon">▣</span>
              OCTOBER 24–25, 2026
            </span>

            <span className="detail-divider"></span>

            <span>
              <span className="detail-icon">◆</span>
              SECRET HILL DESTINATION
            </span>

            <span className="detail-divider"></span>

            <span>
              <span className="detail-icon">◈</span>
              20 STRANGERS
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
            LIMITED TO 20 PLAYERS ONLY · APPLICATION & SCREENING OPEN
          </div>
        </div>
      </section>


      {/* =====================================================
          2. THE CATCH (SECRET LOCATION)
      ===================================================== */}

      <section
        id="the-catch"
        className="section catch-section"
        style={{
          backgroundImage: `url("${IMG}/mansion.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/mansion.png`}
          alt="Secret Estate in the Hills"
        />

        <div className="section-overlay dark-overlay"></div>

        <div className="catch-content">
          <div className="section-number">
            01.
          </div>

          <h2 className="section-heading">
            YOU WON'T KNOW WHERE YOU'RE GOING.
          </h2>

          <div className="gold-line"></div>

          <p className="lead-story-text">
            We’re taking <strong>20 strangers</strong> on a 2-day escape to the hills.
            <br />
            There’s just one catch — you won’t know where you’re going until it’s time to go.
          </p>

          <div className="safe-card">
            <div className="safe-icon">🛡️</div>
            <div className="safe-text">
              <strong>DON'T WORRY — YOU'RE IN SAFE HANDS.</strong>
              <p>
                This isn’t a sketchy mystery trip. You’re in safe, experienced hands with the hosts every step of the journey.
              </p>
            </div>
          </div>

          <p className="catch-climax-text">
            The location is secret because we want the whole weekend to feel like stepping into a real life game.
          </p>
        </div>

        <div className="what-decoration">
          <div className="coin-symbol">
            T
          </div>
        </div>
      </section>


      {/* =====================================================
          3. "THINK..." THE EXPERIENCE
      ===================================================== */}

      <section
        id="the-game"
        className="section game-elements-section"
        style={{
          backgroundImage: `url("${IMG}/sword.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/sword.png`}
          alt="Sword of Mystery"
        />

        <div className="section-overlay dark-overlay"></div>

        <div className="game-elements-inner">
          <div className="center-title">
            <div className="section-number">
              02.
            </div>

            <h2>
              THINK...
            </h2>

            <div className="gold-line center"></div>

            <p className="section-subtext">
              What waits behind the closed doors of the Estate.
            </p>
          </div>

          <div className="elements-grid">
            <div className="element-card">
              <span className="element-badge">01</span>
              <div className="element-icon">♟</div>
              <h3>GAMES</h3>
              <p>High-stakes social strategy, psychological mind games, and thrilling deception.</p>
            </div>

            <div className="element-card">
              <span className="element-badge">02</span>
              <div className="element-icon">⚔</div>
              <h3>CHALLENGES</h3>
              <p>Physical & mental trials where players must cooperate — but watch their backs.</p>
            </div>

            <div className="element-card">
              <span className="element-badge">03</span>
              <div className="element-icon">🎭</div>
              <h3>SURPRISES</h3>
              <p>Hidden plot twists, sudden revelations, and midnight mission turns.</p>
            </div>

            <div className="element-card">
              <span className="element-badge">04</span>
              <div className="element-icon">🗝</div>
              <h3>SECRETS</h3>
              <p>Whispered conspiracies, secret identities, and unmasking the unseen.</p>
            </div>

            <div className="element-card element-chaos">
              <span className="element-badge">05</span>
              <div className="element-icon">⚡</div>
              <h3>CHAOS</h3>
              <p>And a little bit of chaos. Because in this house, nobody knows who to trust.</p>
            </div>
          </div>
        </div>

        <img
          className="shield-decoration"
          src={`${IMG}/shield.png`}
          alt="Shield of The Traitors"
        />
      </section>


      {/* =====================================================
          4. WHAT'S INCLUDED
      ===================================================== */}

      <section
        id="included"
        className="section included-section"
        style={{
          backgroundImage: `url("${IMG}/traitors-group.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/traitors-group.png`}
          alt="The Group Stay"
        />

        <div className="section-overlay experience-overlay"></div>

        <div className="included-inner">
          <div className="center-title">
            <div className="section-number">
              03.
            </div>

            <h2>
              WHAT'S INCLUDED
            </h2>

            <div className="gold-line center"></div>

            <div className="stay-pricing-badge">
              <span className="stay-price">₹6,000</span>
              <span className="stay-per">PER PERSON · ALL-INCLUSIVE PASS</span>
            </div>
          </div>

          <div className="included-grid">
            <div className="included-card">
              <div className="included-icon">🏰</div>
              <div className="included-body">
                <h3>Stay at a beautiful property amidst nature</h3>
                <p>An exclusive secluded estate nestled in the hills, away from the city chaos.</p>
              </div>
            </div>

            <div className="included-card">
              <div className="included-icon">🍷</div>
              <div className="included-body">
                <h3>Breakfast & Dinner</h3>
                <p>Curated meals and dining provided across both days of your stay.</p>
              </div>
            </div>

            <div className="included-card">
              <div className="included-icon">🎭</div>
              <div className="included-body">
                <h3>Games, challenges & unexpected twists</h3>
                <p>Full immersive gameplay, customized missions, clues, masks, and secret kits.</p>
              </div>
            </div>

            <div className="included-card">
              <div className="included-icon">👥</div>
              <div className="included-body">
                <h3>20 strangers who might not be strangers by the end</h3>
                <p>A handpicked mix of adventurous minds ready for an unforgettable weekend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          5. THE RULES ARE SIMPLE
      ===================================================== */}

      <section
        id="rules"
        className="section rules-section"
        style={{
          backgroundImage: `url("${IMG}/sword.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/sword.png`}
          alt="Rules Sword"
        />

        <div className="section-overlay rules-overlay"></div>

        <div className="rules-inner">
          <div className="center-title">
            <div className="section-number">
              04.
            </div>

            <h2>
              THE RULES ARE SIMPLE.
            </h2>

            <div className="gold-line center"></div>

            <p className="section-subtext">
              Enter with an open mind. Play with sharp instincts.
            </p>
          </div>

          <div className="rules-simple-grid">
            <div className="rule-simple-card">
              <span className="rule-idx">01</span>
              <h3>COME ALONE.</h3>
              <p>Leave your routine and your comfort zone behind. True immersion begins solo.</p>
            </div>

            <div className="rule-simple-card">
              <span className="rule-idx">02</span>
              <h3>TRUST THE HOSTS.</h3>
              <p>You are in safe, curated hands. Follow the guidance of the Estate Masters.</p>
            </div>

            <div className="rule-simple-card">
              <span className="rule-idx">03</span>
              <h3>PLAY YOUR PART.</h3>
              <p>Commit to your identity, tackle every challenge, and dive into the mystery.</p>
            </div>

            <div className="rule-simple-card rule-danger">
              <span className="rule-idx">04</span>
              <h3>DON'T ASSUME EVERYONE IS TELLING THE TRUTH.</h3>
              <p>Alliances will form, whispers will spread, and dhokha is everywhere.</p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          6. DON'T BRING YOUR FRIENDS (COME ALONE)
      ===================================================== */}

      <section
        id="come-alone"
        className="section come-alone-section"
        style={{
          backgroundImage: `url("${IMG}/masked-hero.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/masked-hero.png`}
          alt="Masked Player"
        />

        <div className="section-overlay dark-overlay"></div>

        <div className="come-alone-content">
          <div className="section-number">
            05.
          </div>

          <h2 className="section-heading">
            DON'T BRING YOUR FRIENDS.
          </h2>

          <div className="gold-line"></div>

          <div className="come-alone-body">
            <p className="highlight-quote">
              You don’t need to convince your friends to come.
              <br />
              <span className="gold-text">In fact, we’d rather you didn’t.</span>
            </p>

            <p className="narrative-p">
              The whole point is to arrive knowing nobody and leave with a whole new group.
            </p>

            <div className="social-philosophy-card">
              <div className="philosophy-icon">♛</div>
              <p>
                When everybody arrives as a stranger, there are no preexisting cliques and no inside jokes. Everyone starts on equal ground — open to genuine connections, thrilling alliances, and unfiltered game dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          7. TWO DAYS. NO ROUTINE.
      ===================================================== */}

      <section
        id="no-routine"
        className="section routine-section"
        style={{
          backgroundImage: `url("${IMG}/mansion.png")`,
        }}
      >
        <img
          className="section-bg-image"
          src={`${IMG}/mansion.png`}
          alt="Secluded Mansion"
        />

        <div className="section-overlay experience-overlay"></div>

        <div className="routine-content">
          <div className="section-number">
            06.
          </div>

          <h2>
            TWO DAYS. NO ROUTINE.
          </h2>

          <div className="gold-line center"></div>

          <div className="routine-quote-box">
            <p className="routine-quote-main">
              “For two days, forget your usual plans,
              <br />
              step away from your routine
              <br />
              and let us take care of the rest.”
            </p>

            <div className="routine-chips">
              <span>✦ Secluded Estate</span>
              <span>✦ Nature & Fresh Air</span>
              <span>✦ 24-25 October, 2026</span>
              <span>✦ 20 Strangers</span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          8. FINAL CTA
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
            07.
          </div>

          <h2>
            READY TO PLAY?
          </h2>

          <div className="gold-line center"></div>

          <div className="entry-card">
            <div className="entry-column">
              <span className="entry-label">
                EXPERIENCE PASS
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
                TAKE PART — APPLY NOW
              </a>

              <span>
                20 STRANGERS · 2 DAYS · 1 SECRET DESTINATION
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
                PLAYERS ONLY · OCT 24-25
              </span>
            </div>
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
          alt="The Traitors Group Atmosphere"
        />

        <div className="faq-overlay"></div>

        <div className="faq-content">
          <div className="faq-title">
            <span className="section-number">
              08.
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
              answer="You won’t know where you’re going until it’s time to go. The location is secret because we want the whole weekend to feel like stepping into a real-life game. The property is a beautiful, safe private estate amidst nature in the hills."
            />

            <FAQ
              question="Is it safe if I'm coming alone?"
              answer="100% safe. You are in safe, verified hands with the hosts. In fact, coming alone is the core rule — you arrive knowing nobody and leave with a whole new group of friends."
            />

            <FAQ
              question="What does the ₹6,000 pass include?"
              answer="It includes your 2-day stay at a beautiful property amidst nature, breakfast & dinner across both days, and all games, challenges, missions, and unexpected twists."
            />

            <FAQ
              question="When is the trip taking place?"
              answer="October 24–25, 2026 (Saturday morning to Sunday evening)."
            />

            <FAQ
              question="Can I come with my friends?"
              answer="You don’t need to convince your friends to come — in fact, we’d rather you didn’t! The magic of the experience is that everyone arrives solo as strangers."
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
          10. INSTAGRAM & FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="footer-estate-brand">
          <div className="footer-brand-title">
            THE TRAITORS MUMBAI
          </div>
          <div className="footer-brand-sub">
            TRUST IS RARE, DHOKHA EVERYWHERE · 20 STRANGERS · OCTOBER 24–25, 2026
          </div>
          <div className="footer-copy">
            © 2026 The Traitors Mumbai. All rights reserved.
          </div>
        </div>

        <div className="footer-info-group">
          <div className="footer-contact-block">
            <span className="footer-section-label">HOST / CONTACT</span>
            <div className="footer-contact-name">Sanskar Pandey</div>
            <a href="tel:+919372948245" className="footer-contact-link">
              +91 9372948245
            </a>
          </div>

          <div className="footer-social-block">
            <span className="footer-section-label">FOLLOW THE GAME</span>
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
