// FAQSection.js

import React, { useState } from 'react';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.',
    },
    {
      id: 2,
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support by emailing us at support@example.com or by calling our toll-free number at 1-800-123-4567.',
    },
    {
      id: 3,
      question: 'Can I change my subscription plan?',
      answer: 'Yes, you can change your subscription plan at any time by visiting the "Subscription" section of your account settings.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-8">FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-400 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={activeIndex === index ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4 bg-white py-3 px-4 rounded-lg shadow-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
