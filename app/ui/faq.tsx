
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for an account, verify your email, and follow the onboarding steps to set up your dashboard.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "You can change your plan anytime from your account settings. Upgrades are applied instantly.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via live chat or email. We respond within 24 hours on business days.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="bg-acme-white rounded-[20px] shadow-[0_4px_32px_0_rgba(44,45,58,0.08)] p-10 w-full max-w-2xl mx-auto flex flex-col gap-8">
      <h2 className="text-acme-dark text-[32px] font-bold leading-[40px] mb-4 tracking-tight">Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`rounded-[16px] border border-acme-border bg-acme-offwhite px-8 py-6 transition-all duration-200 flex flex-col gap-2 ${openIdx === idx ? 'shadow-[0_0_0_4px_#F1ECFF] bg-acme-purpleLight border-acme-purple' : ''}`}
        >
          <button
            className="w-full flex items-center justify-between text-left focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className={`text-[20px] font-semibold leading-[30px] tracking-tight ${openIdx === idx ? 'text-acme-purple' : 'text-acme-dark'}`}>{faq.question}</span>
            <span
              className={`ml-4 transition-transform duration-200 text-[22px] font-bold ${openIdx === idx ? 'rotate-180 text-acme-purple' : 'text-acme-dark2'}`}
            >
              ▼
            </span>
          </button>
          {openIdx === idx && (
            <div className="mt-4 text-[16px] leading-[24px] text-acme-dark2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
