import { motion } from "framer-motion";

function WhatIsThis() {
  return (
    <section id="what-is-this" className="content-section what-section">
      <div className="section-number">01</div>

      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT IS THIS?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EVERYONE
          <br />
          HAS A SECRET.
        </motion.h2>

        <div className="two-column">
          <div></div>

          <div className="section-copy">
            <p className="large-copy">
              20 people arrive at a private estate.
              Four of them are secretly chosen as
              <strong> Traitors.</strong>
            </p>

            <p>
              Everyone else is a Faithful. Over two days,
              you'll compete in missions, build alliances,
              investigate one another and make decisions
              that could change everything.
            </p>

            <p>
              The Traitors will secretly eliminate players.
              The Faithfuls must find them before it's too late.
            </p>

            <p className="emphasis">
              Trust the wrong person...
              <br />
              and you could be next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsThis;