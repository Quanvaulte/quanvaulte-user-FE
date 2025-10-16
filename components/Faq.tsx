"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  color: "blue" | "pink" | "purple";
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is Quanvaulte, and who is it for?",
    answer:
      "Quanvaulte is a comprehensive quantum computing platform designed for developers, researchers, and enterprises. It provides tools and resources to build, test, and deploy quantum applications with ease.",
    color: "blue",
  },
  {
    id: "2",
    question: "Who can use Quanvaulte?",
    answer:
      "Quanvaulte serves businesses of all sizes looking to leverage quantum computing for optimization, cryptography, and complex problem-solving.",
    color: "pink",
  },
  {
    id: "3",
    question: "Does Quanvaulte support real quantum hardware?",
    answer:
      "Yes! Quanvaulte provides access to both simulators and real quantum processors through its hybrid platform.",
    color: "purple",
  },
  {
    id: "4",
    question: "Do I need prior quantum experience?",
    answer:
      "No. Quanvaulte democratizes quantum computing — our tutorials and intuitive APIs make it easy to start building even without deep physics knowledge.",
    color: "pink",
  },
  {
    id: "5",
    question: "What can I do with Quanvaulte?",
    answer:
      "You can explore algorithms, run quantum simulations, and deploy real quantum computations through our developer-friendly environment.",
    color: "blue",
  },
];

const colorStyles = {
  blue: {
    border: "border-2 shadow-[#2C43EB87]",
    accent: "bg-blue-500 text-white",
    hover: "hover:bg-blue-50",
  },
  pink: {
    border: "border-2 shadow-[#EB2CC287]",
    accent: "bg-pink-500 text-white",
    hover: "hover:bg-pink-50",
  },
  purple: {
    border: "border-2 shadow-[#9D28EB87]",
    accent: "bg-purple-500 text-white",
    hover: "hover:bg-purple-50",
  },
};

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | null>("1");

  const toggleFAQ = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-black">
            Frequently asked <span className="text-[#9D8528]">questions</span>
          </h1>
          <p className="text-[#606060] text-lg mt-4">
            Answers to Your Most Common Questions
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const styles = colorStyles[item.color];
            const isExpanded = expanded === item.id;

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl  shadow-lg/65 ${styles.border}   `}>
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className={`w-full px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between`}>
                  <span className="text-lg font-medium text-left text-[#1E1E1E]">
                    {item.question}
                  </span>
                  <div
                    className={`rounded-full p-2 flex-shrink-0 cursor-pointer transition-transform duration-500  ${
                      isExpanded ? "rotate-180" : ""
                    }`}>
                    <ChevronDown size={25} color="#606060" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-6 py-5 pt-0">
                    <p className="text-[#040718] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
