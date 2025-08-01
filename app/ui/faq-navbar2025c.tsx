import React, { useState } from "react";

// FAQ data based on Figma node 81-6451 (Ideations--Navbar2025)
const faqItems = [
  {
    question: "How do I get started with Acme?",
    answer:
      "Sign up for an account, complete your profile, and start accepting payments instantly. Our onboarding process is quick and easy.",
  },
  {
    question: "Does Acme support recurring payments?",
    answer:
      "Yes, you can set up subscriptions and recurring billing for your customers directly from the dashboard.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Acme supports credit/debit cards, UPI, net banking, wallets, and international payment options.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "A mobile app is coming soon! Stay tuned for updates on iOS and Android availability.",
  },
];

export default function FAQNavbar2025C() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full max-w-xl mx-auto bg-acme-50 rounded-2xl shadow-acme-faq px-6 py-8"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-acme-900 text-2xl font-bold mb-6 tracking-tight">
        FAQ
      </h2>
      <ul className="space-y-4">
        {faqItems.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <li
              key={item.question}
              className={`transition-shadow duration-200 rounded-xl border border-acme-200 bg-white shadow-sm ${
                isActive ? "shadow-acme-faq-active border-acme-400" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                aria-expanded={isActive}
                onClick={() =>
                  setActiveIndex(isActive ? null : idx)
                }
              >
                <span className={`text-acme-900 font-medium text-base ${isActive ? "text-acme-700" : ""}`}>
                  {item.question}
                </span>
                <span
                  className={`ml-4 transition-transform duration-300 ${
                    isActive ? "rotate-180 text-acme-700" : "text-acme-400"
                  }`}
                  aria-hidden="true"
                >
                  {/* Arrow Icon (SVG) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 px-5 ${
                  isActive ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
                aria-hidden={!isActive}
              >
                <p className="text-acme-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
