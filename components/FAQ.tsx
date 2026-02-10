"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Are your pest control treatments safe for pets and children?",
    answer:
      "Absolutely. We use eco-friendly, WHO-approved botanical treatments specifically designed to target pests while remaining completely non-toxic for your family and furry friends.",
  },
  {
    question: "How long does a typical treatment session take?",
    answer:
      "Most standard residential treatments take between 45 to 90 minutes. However, this varies depending on the size of your property and the severity of the infestation.",
  },
  {
    question: "Do I need to leave my home during the service?",
    answer:
      "In most cases, no. Our modern methods are low-odor and targeted. If a specific treatment requires you to step out, our technician will inform you at least 24 hours in advance.",
  },
  {
    question: "What if the pests come back after the treatment?",
    answer:
      "We offer a 100% Satisfaction Guarantee. If you notice pest activity within 30 days of our service, we will return and re-treat your property at no additional cost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about our pest control services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-200 ${
                openIndex === i
                  ? "border-blue-500 bg-blue-50/30"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 p-8 bg-slate-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold">Still have questions?</p>
              <p className="text-slate-400 text-sm">We're here to help 24/7</p>
            </div>
          </div>
          <a
            href="https://wa.me/9318397840"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
