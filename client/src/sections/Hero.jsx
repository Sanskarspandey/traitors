import { motion } from "framer-motion";

function Hero() {
  const scrollToTakePart = () => {
    document.getElementById("take-part")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="hero section-dark">
      <nav className="navbar">
        <a href="#hero" className="logo">
          THE ESTATE
        </a>

        <button className="nav-button" onClick={scrollToTakePart}>
          TAKE PART
        </button>
      </nav>

      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MUMBAI · OCTOBER 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TRUST
          <br />
          NO ONE.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          20 strangers. 4 Traitors. 2 days.
          <br />
          One private estate.
        </motion.p>

        <motion.button
          className="primary-button"
          onClick={scrollToTakePart}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          TAKE PART
        </motion.button>
      </div>

      <div className="hero-bottom">
        <span>20 PLAYERS</span>
        <span>4 TRAITORS</span>
        <span>₹6,000 / PERSON</span>
      </div>
    </section>
  );
}

export default Hero;