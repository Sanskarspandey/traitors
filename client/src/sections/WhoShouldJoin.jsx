import { motion } from "framer-motion";

const qualities = [
  "You love strategy.",
  "You enjoy reading people.",
  "You're good at keeping secrets.",
  "You're comfortable meeting strangers.",
  "You can lie convincingly.",
  "You enjoy arguing your case.",
  "You're competitive.",
  "You want a completely different weekend.",
];

function WhoShouldJoin() {
  return (
    <section id="who-should-join" className="content-section join-section">
      <div className="section-number">06</div>

      <div className="section-inner">
        <p className="section-label">WHO SHOULD TAKE PART?</p>

        <h2>
          THIS MIGHT
          <br />
          BE FOR YOU.
        </h2>

        <div className="qualities">
          {qualities.map((quality, index) => (
            <motion.div
              className="quality"
              key={quality}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span>—</span>
              <p>{quality}</p>
            </motion.div>
          ))}
        </div>

        <div className="join-ending">
          <p>
            You don't need to be an expert at
            social deduction.
          </p>

          <strong>
            You just need to be willing
            <br />
            to trust — and betray.
          </strong>
        </div>
      </div>
    </section>
  );
}

export default WhoShouldJoin;