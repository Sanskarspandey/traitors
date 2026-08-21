import { motion } from "framer-motion";

const included = [
  "2-day immersive experience",
  "Private estate stay",
  "Travel from Mumbai",
  "Breakfast & dinner",
  "All game activities",
  "All game materials & props",
  "Curated mystery storyline",
  "Exclusive 20-player experience",
];

function Included() {
  return (
    <section id="included" className="content-section included-section">
      <div className="section-number">04</div>

      <div className="section-inner">
        <p className="section-label">WHAT'S INCLUDED</p>

        <h2>
          EVERYTHING
          <br />
          YOU NEED.
        </h2>

        <div className="included-layout">
          <div className="price-block">
            <span>ENTRY</span>

            <strong>₹6,000</strong>

            <small>PER PLAYER</small>
          </div>

          <div className="included-list">
            {included.map((item, index) => (
              <motion.div
                className="included-item"
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span>✓</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="spots-warning">
          <span>ONLY</span>
          <strong>20</strong>
          <span>SPOTS</span>
        </div>
      </div>
    </section>
  );
}

export default Included;
