import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "THE ESTATE",
    description:
      "A private property away from the noise of Mumbai.",
  },
  {
    number: "02",
    title: "THE TRAITORS",
    description:
      "Four people have a secret mission.",
  },
  {
    number: "03",
    title: "THE MISSIONS",
    description:
      "Win money. Lose trust.",
  },
  {
    number: "04",
    title: "THE ROUND TABLE",
    description:
      "Your vote can eliminate someone.",
  },
  {
    number: "05",
    title: "THE NIGHT",
    description:
      "The Traitors are still playing.",
  },
  {
    number: "06",
    title: "THE FINALE",
    description:
      "Who can you trust?",
  },
];

function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <div className="section-number">03</div>

      <div className="section-inner">
        <p className="section-label">THE EXPERIENCE</p>

        <h2>
          MORE THAN
          <br />
          A GAME.
        </h2>

        <div className="experience-grid">
          {experiences.map((item, index) => (
            <motion.div
              key={item.number}
              className="experience-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="card-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;