import React, { useState } from 'react';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Layers,
  Sparkles,
  ShoppingBag,
  CreditCard,
  HeartHandshake,
  MousePointerClick,
  ExternalLink,
} from 'lucide-react';
import { croStagesData } from '../data/portfolioData';
import { CROStage } from '../types';

export const CROAuditVisualizer: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('product');

  const currentStage = croStagesData.find((s) => s.id === selectedStageId) || croStagesData[2];

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'traffic':
        return <Compass className="w-4 h-4" />;
      case 'landing':
        return <MousePointerClick className="w-4 h-4" />;
      case 'product':
        return <ShoppingBag className="w-4 h-4" />;
      case 'cart':
        return <Layers className="w-4 h-4" />;
      case 'checkout':
        return <CreditCard className="w-4 h-4" />;
      case 'purchase':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="cro-journey" className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Funnel Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight mb-4">
            I Don't Guess. I Audit the Buying Journey.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Click through each stage below to explore what I systematically evaluate to uncover revenue leaks and optimize conversion velocity.
          </p>
        </div>

        {/* Interactive Funnel Navigation Bar */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max p-2 rounded-2xl bg-white border border-gray-200 shadow-xs">
            {croStagesData.map((stage, index) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    id={`cro-stage-tab-${stage.id}`}
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isSelected
                        ? 'bg-[#008060] text-white shadow-sm scale-[1.02]'
                        : 'text-gray-600 hover:text-[#141414] hover:bg-gray-100'
                    }`}
                  >
                    <span className={isSelected ? 'text-white' : 'text-[#008060]'}>
                      {getStageIcon(stage.id)}
                    </span>
                    <span>{stage.label}</span>
                  </button>

                  {index < croStagesData.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0 hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div
          id="cro-stage-detail-card"
          className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                {getStageIcon(currentStage.id)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008060]">
                  Funnel Stage Evaluation
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#141414]">
                  {currentStage.name}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md">
              {currentStage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: What Lola Evaluates */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#008060]" />
                <span>What I Evaluate & Measure</span>
              </div>

              <div className="space-y-2.5">
                {currentStage.evaluationPoints.map((point, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 text-xs sm:text-sm text-gray-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008060] mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Common Friction & Strategic Approach */}
            <div className="lg:col-span-6 space-y-6">
              {/* Common Friction Checkpoints */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Common Conversion Leaks I Spot</span>
                </div>

                <div className="space-y-2.5">
                  {currentStage.commonFriction.map((friction, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900"
                    >
                      <span className="text-amber-600 font-bold shrink-0">!</span>
                      <span>{friction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Lola Fix Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#008060] block mb-1">
                  How I Address This Stage:
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  {currentStage.lolaApproach}
                </p>
                <button
                  id="cro-audit-request-btn"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#008060] hover:text-[#006e52] transition-colors"
                >
                  <span>Request an Audit of Your {currentStage.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
