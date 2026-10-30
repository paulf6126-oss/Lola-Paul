import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/portfolioData';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight mb-4">
            Answers to Common Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about working together, project timelines, deliverables, and ongoing store growth.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#008060] shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-extrabold leading-snug ${isOpen ? 'text-[#008060]' : 'text-[#141414]'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#008060] text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
          <p className="text-sm font-bold text-[#141414] mb-1">
            Have a specific question about your store?
          </p>
          <p className="text-xs text-gray-500 mb-4">
            I'm happy to provide quick direct answers regarding your theme, apps, or checkout issues.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#008060] hover:text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg"
          >
            <span>Ask a Question</span>
          </a>
        </div>

      </div>
    </section>
  );
};
