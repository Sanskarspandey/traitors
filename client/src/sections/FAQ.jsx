import { useState } from "react";

const questions = [
  {
    question: "Is this The Traitors?",
    answer:
      "No. The Estate is an original immersive social-deduction experience inspired by the hidden-role genre.",
  },
  {
    question: "Do I need to know anyone?",
    answer:
      "No. You'll be playing with 19 other participants. In fact, meeting strangers is part of the experience.",
  },
  {
    question: "How many people can take part?",
    answer:
      "Exactly 20 players.",
  },
  {
    question: "How long is the experience?",
    answer:
      "2 days and 1 night.",
  },
  {
    question: "Where is it?",
    answer:
      "You'll depart from Mumbai. The exact estate location will be revealed closer to the event.",
  },
  {
    question: "How much does it cost?",
    answer:
      "₹6,000 per person.",
  },
  {
    question: "What's included in the ₹6,000 entry?",
    answer:
      "Your full 2-day private estate stay, accommodation, breakfast, dinner, game activities, themed props and materials.",
  },
  {
    question: "What happens after I request entry?",
    answer:
      "Our team reviews all entries and reaches out directly to selected participants regarding confirmation and payment details.",
  },
  {
    question: "Can I come with friends?",
    answer:
      "Yes. But once the game begins, friendships give you no special protection.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="content-section faq-section">
      <div className="section-number">07</div>

      <div className="section-inner">
        <p className="section-label">FAQ</p>

        <h2>
          QUESTIONS.
          <br />
          ANSWERED.
        </h2>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                className={`faq-item ${
                  isOpen ? "open" : ""
                }`}
                key={item.question}
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                >
                  <span>{item.question}</span>

                  <span className="faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;