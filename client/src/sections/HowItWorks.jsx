import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "ENTER",
    text: "20 players arrive at the Estate.",
  },
  {
    number: "02",
    title: "DISCOVER",
    text: "Four players secretly become Traitors.",
  },
  {
    number: "03",
    title: "COMPETE",
    text: "Complete missions and unlock estate secrets.",
  },
  {
    number: "04",
    title: "INVESTIGATE",
    text: "Find clues. Form alliances. Question everyone.",
  },
  {
    number: "05",
    title: "BANISH",
    text: "Vote for the person you believe is lying.",
  },
  {
    number: "06",
    title: "SURVIVE",
    text: "Reach the end and conquer the mystery.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="content-section how-section">
      <div className="section-number">02</div>

      <div className="section-inner">
        <p className="section-label">HOW IT WORKS</p>

        <h2>
          SIX STEPS.
          <br />
          ONE SURVIVOR.
        </h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              className="step-card"
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;