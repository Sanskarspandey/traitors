import { motion } from "framer-motion";

const rules = [
  "Everyone has a role.",
  "Nobody knows who the Traitors are.",
  "Phones stay away during the game.",
  "The Traitors secretly eliminate players.",
  "Faithfuls can banish suspected Traitors.",
  "Every decision matters.",
];

function Rules() {
  return (
    <section id="rules" className="content-section rules-section">
      <div className="section-number">05</div>

      <div className="section-inner">
        <p className="section-label">THE RULES</p>

        <h2>
          WHAT YOU
          <br />
          SHOULD KNOW.
        </h2>

        <div className="rules-list">
          {rules.map((rule, index) => (
            <motion.div
              key={rule}
              className="rule"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <span>0{index + 1}</span>
              <p>{rule}</p>
            </motion.div>
          ))}
        </div>

        <div className="secret-rule">
          <span>ONE LAST THING</span>

          <p>
            Some rules will only be revealed
            after you enter the Estate.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rules;