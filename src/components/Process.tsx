import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Workflow } from 'lucide-react';
import { processStepsData } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = processStepsData[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight mb-4">
            A Clear Process. No Guesswork.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every store optimization follows a rigorous 5-step roadmap engineered to maximize commercial impact while maintaining seamless transparency.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {processStepsData.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                id={`process-step-tab-${step.number}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50/80 border-[#008060] shadow-xs scale-[1.02]'
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#008060]' : 'text-gray-500'}`}>
                    {step.number}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#008060] animate-pulse" />
                  )}
                </div>
                <div className={`font-extrabold text-sm ${isSelected ? 'text-[#008060]' : 'text-[#141414]'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] text-gray-500 truncate mt-0.5 font-medium">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Highlight Card */}
        <div
          id="process-active-detail-card"
          className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#008060]">
                  {activeStep.number}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008060] block">
                    Phase Breakdown
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#141414]">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">
                {activeStep.subtitle}
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008060] block">
                Key Action Deliverables In This Phase:
              </span>

              <div className="space-y-3">
                {activeStep.keyActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
