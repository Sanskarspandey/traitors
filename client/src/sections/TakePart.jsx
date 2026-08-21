import { motion } from "framer-motion";

function TakePart() {
  return (
    <section id="take-part" className="take-part-section">
      <div className="take-part-content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          THE FINAL QUESTION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 30 }}
          viewport={{ once: true }}
        >
          DO YOU
          <br />
          WANT IN?
        </motion.h2>

        <p className="take-part-copy">
          You've read the rules.
          <br />
          You've seen what's waiting.
          <br />
          Now make your decision.
        </p>

        <div className="take-part-price">
          <span>ENTRY</span>
          <strong>₹6,000</strong>
          <span>PER PLAYER</span>
        </div>

        <button className="final-button">
          TAKE PART — ₹6,000
        </button>

        <p className="spots-left">
          20 PLAYERS ONLY · MUMBAI · OCTOBER 2026
        </p>
      </div>
    </section>
  );
}

export default TakePart;