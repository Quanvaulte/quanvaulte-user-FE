import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  color: 'blue' | 'pink' | 'purple';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is Quanvaulte, and who is it for?',
    answer: 'Quanvaulte is a comprehensive quantum computing platform designed for developers, researchers, and enterprises. It provides tools and resources to build, test, and deploy quantum applications with ease.',
    color: 'blue',
  },
  {
    id: '2',
    question: 'What is Quanvaulte, and who is it for?',
    answer: 'Quanvaulte serves businesses of all sizes looking to leverage quantum computing for optimization, cryptography, and complex problem-solving. Whether you\'re just exploring or building production systems, Quanvaulte has you covered.',
    color: 'pink',
  },
  {
    id: '3',
    question: 'What is Quanvaulte, and who is it for?',
    answer: 'From startups to Fortune 500 companies, Quanvaulte provides the infrastructure needed to harness quantum computing\'s power. Our platform includes simulators, real quantum hardware access, and comprehensive documentation.',
    color: 'purple',
  },
  {
    id: '4',
    question: 'What is Quanvaulte, and who is it for?',
    answer: 'Quanvaulte democratizes quantum computing by making it accessible to everyone. You don\'t need a PhD in quantum physics to get started—our intuitive APIs and tutorials guide you through every step.',
    color: 'pink',
  },
  {
    id: '5',
    question: 'What is Quanvaulte?',
    answer: 'Quanvaulte is a next-generation quantum computing platform that bridges the gap between quantum theory and practical applications. It enables users to explore quantum algorithms, run simulations, and execute real quantum computations.',
    color: 'pink',
  },
];

const colorStyles = {
  blue: {
    bg: 'bg-gradient-to-r from-blue-50 to-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-900',
    icon: 'bg-blue-500 text-white',
    hover: 'hover:from-blue-100 hover:to-blue-150',
  },
  pink: {
    bg: 'bg-gradient-to-r from-pink-50 to-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-900',
    icon: 'bg-pink-500 text-white',
    hover: 'hover:from-pink-100 hover:to-pink-150',
  },
  purple: {
    bg: 'bg-gradient-to-r from-purple-50 to-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-900',
    icon: 'bg-purple-500 text-white',
    hover: 'hover:from-purple-100 hover:to-purple-150',
  },
};

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3">
            Frequently asked <span className="text-yellow-500">questions</span>
          </h1>
          <p className="text-gray-600 text-lg">Answers to Your Most Common Questions</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const styles = colorStyles[item.color];
            const isExpanded = expanded === item.id;

            return (
              <div key={item.id} className="relative">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className={`w-full px-6 py-5 rounded-2xl border-2 ${styles.border} ${styles.bg} transition-all duration-300 ease-out ${styles.hover} flex items-center justify-between group`}
                >
                  <span className={`text-lg font-medium ${styles.text} text-left`}>
                    {item.question}
                  </span>
                  <div
                    className={`${styles.icon} rounded-full p-2.5 flex-shrink-0 transition-transform duration-500 ease-out ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 pt-0">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
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