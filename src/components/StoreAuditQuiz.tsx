import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';

interface StoreAuditQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAuditResult: (resultText: string, suggestedService: string) => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    points: { cro: number; design: number; management: number; seo: number };
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'Where do you notice the biggest drop-off in your store currently?',
    options: [
      { label: 'Visitors bounce right off the landing page / homepage', points: { cro: 3, design: 2, management: 0, seo: 1 } },
      { label: 'Visitors view products but rarely click "Add to Cart"', points: { cro: 3, design: 2, management: 1, seo: 0 } },
      { label: 'High cart abandonment before completing checkout', points: { cro: 3, design: 1, management: 1, seo: 0 } },
      { label: 'Traffic is low, struggling to get organic search buyers', points: { cro: 0, design: 0, management: 0, seo: 3 } },
    ],
  },
  {
    id: 2,
    text: 'What percentage of your traffic arrives on mobile devices?',
    options: [
      { label: 'Over 75% mobile traffic', points: { cro: 2, design: 3, management: 1, seo: 0 } },
      { label: 'Roughly 50% - 75% mobile', points: { cro: 2, design: 2, management: 0, seo: 0 } },
      { label: 'Mostly desktop B2B shoppers', points: { cro: 1, design: 2, management: 1, seo: 0 } },
      { label: 'Not sure / Need analytics setup', points: { cro: 1, design: 0, management: 3, seo: 1 } },
    ],
  },
  {
    id: 3,
    text: 'How does your team currently handle store changes and theme updates?',
    options: [
      { label: 'We install lots of apps without knowing if they slow down the store', points: { cro: 1, design: 1, management: 3, seo: 2 } },
      { label: 'We have an old theme that is hard to customize with blocks', points: { cro: 1, design: 3, management: 2, seo: 1 } },
      { label: 'We make ad-hoc changes with no clear CRO strategy', points: { cro: 3, design: 1, management: 1, seo: 0 } },
      { label: 'We need ongoing monthly support and campaign launches', points: { cro: 1, design: 1, management: 3, seo: 0 } },
    ],
  },
  {
    id: 4,
    text: 'What is your primary growth goal for the next 90 days?',
    options: [
      { label: 'Increase conversion rate (CVR) and average order value (AOV)', points: { cro: 3, design: 1, management: 0, seo: 0 } },
      { label: 'Complete brand refresh / modern custom Shopify 2.0 store', points: { cro: 1, design: 3, management: 0, seo: 0 } },
      { label: 'Reliable store management and technical maintenance', points: { cro: 0, design: 1, management: 3, seo: 0 } },
      { label: 'Build sustainable non-paid organic SEO traffic', points: { cro: 0, design: 0, management: 0, seo: 3 } },
    ],
  },
];

export const StoreAuditQuiz: React.FC<StoreAuditQuizProps> = ({
  isOpen,
  onClose,
  onSelectAuditResult,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ cro: 0, design: 0, management: 0, seo: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const currentQ = quizQuestions[currentStep];
    const points = currentQ.options[selectedOption].points;

    const newScores = {
      cro: scores.cro + points.cro,
      design: scores.design + points.design,
      management: scores.management + points.management,
      seo: scores.seo + points.seo,
    };
    setScores(newScores);
    setSelectedOption(null);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(quizQuestions.length); // Result screen
    }
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setScores({ cro: 0, design: 0, management: 0, seo: 0 });
    setSelectedOption(null);
  };

  // Determine winning recommendation
  const getRecommendation = () => {
    const highest = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a));
    switch (highest[0]) {
      case 'cro':
        return {
          title: 'Full Conversion Rate Optimization (CRO) Sprint',
          service: 'Shopify CRO',
          summary:
            'Your responses suggest you have traffic interest, but leaks on product pages or the cart drawer are suppressing your sales velocity.',
          deliverable: 'Funnel friction audit, mobile UX refinement, and high-impact PDP conversion architecture.',
        };
      case 'design':
        return {
          title: 'Custom Shopify 2.0 Store Redesign',
          service: 'Shopify Store Design',
          summary:
            'Your store needs a modern, responsive structural overhaul with intuitive section blocks and high brand authority.',
          deliverable: 'Full store UX/UI redesign, mobile ergonomics, and custom Shopify 2.0 theme setup.',
        };
      case 'management':
        return {
          title: 'Proactive Shopify Store Management',
          service: 'Shopify Management',
          summary:
            'Your store would benefit most from ongoing technical management, app stack cleanup, and catalog optimizations.',
          deliverable: 'Dedicated store management, speed audits, campaign launches, and theme maintenance.',
        };
      case 'seo':
      default:
        return {
          title: 'Technical E-Commerce SEO & Architecture',
          service: 'SEO',
          summary:
            'Your store has strong untapped organic potential through collection hierarchy fixes, schema markup, and speed upgrades.',
          deliverable: 'Technical crawl audit, metadata restructuring, schema markup, and organic search roadmap.',
        };
    }
  };

  const rec = getRecommendation();

  const handleApplyToContact = () => {
    onSelectAuditResult(
      `Quiz Diagnostic Result: Recommended Focus is "${rec.title}" (${rec.summary})`,
      rec.service
    );
    onClose();
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="store-audit-quiz-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="store-audit-quiz-modal"
        className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 border border-gray-200 rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#008060]" />
          <span className="text-xs font-extrabold text-[#008060] uppercase tracking-wider">
            60-Second Store Check
          </span>
        </div>

        {currentStep < quizQuestions.length ? (
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>Question {currentStep + 1} of {quizQuestions.length}</span>
              <span className="font-mono text-[#008060] font-bold">
                {Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-[#008060] transition-all duration-300"
                style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            <h3 className="text-lg font-extrabold text-[#141414] mb-5 leading-snug">
              {quizQuestions[currentStep].text}
            </h3>

            {/* Options */}
            <div className="space-y-2.5 mb-8">
              {quizQuestions[currentStep].options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-emerald-50 border-[#008060] text-[#141414] shadow-xs'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-[#008060] bg-[#008060]'
                            : 'border-gray-300'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <span>{opt.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              disabled={selectedOption === null}
              onClick={handleNext}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-extrabold text-sm transition-all ${
                selectedOption !== null
                  ? 'bg-[#008060] hover:bg-[#007054] text-white shadow-md shadow-emerald-700/20'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === quizQuestions.length - 1 ? 'See Recommended Strategy' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Results View */
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-bold text-[#008060] uppercase tracking-wider block mb-1">
                Diagnostic Result
              </span>
              <h3 className="text-xl font-extrabold text-[#141414]">
                {rec.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-emerald-200 space-y-3">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {rec.summary}
              </p>
              <div className="pt-3 border-t border-gray-200 text-xs text-[#008060] font-medium">
                <strong>Recommended Scope:</strong> {rec.deliverable}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleApplyToContact}
                className="w-full flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#007054] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md shadow-emerald-700/20 transition-all"
              >
                <span>Discuss This Recommendation With Lola</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={restartQuiz}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Diagnostic</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
