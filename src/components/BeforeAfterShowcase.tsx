import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, CheckCircle, ArrowLeftRight, MoveHorizontal } from 'lucide-react';
import { beforeAfterCases } from '../data/portfolioData';

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const currentCase = beforeAfterCases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight mb-4">
            Before vs. After Optimization
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to see how strategic Shopify redesigns transform cluttered friction points into high-converting experiences.
          </p>
        </div>

        {/* Case Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {beforeAfterCases.map((item, index) => (
            <button
              key={item.id}
              id={`before-after-case-tab-${item.id}`}
              onClick={() => {
                setActiveCaseIndex(index);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCaseIndex === index
                  ? 'bg-[#008060] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Comparison Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Visual Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              id="before-after-slider-container"
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-gray-300 bg-white shadow-md"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "AFTER" Layer (Full Background) */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white flex flex-col justify-between overflow-hidden">
                {currentCase.afterImage && (
                  <img
                    src={currentCase.afterImage}
                    alt={currentCase.title}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-25"
                  />
                )}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-end">
                    <span className="px-3.5 py-1.5 rounded-lg bg-[#008060] text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                      AFTER: OPTIMIZED EXPERIENCE
                    </span>
                  </div>

                  <div className="bg-white/95 backdrop-blur border border-emerald-200 rounded-xl p-5 max-w-md ml-auto shadow-sm">
                    <div className="flex items-center gap-2 text-[#008060] font-bold text-xs uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Lola's Growth Architecture</span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#141414] mb-2">
                      {currentCase.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {currentCase.afterDescription}
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#008060] font-bold">
                      <span>✓ Clear Value Hierarchy</span>
                      <span>✓ Zero Friction</span>
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-[#008060] font-mono font-medium">
                    [ Verified UX/UI Standard 2026 ]
                  </div>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped by slider width) */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-br from-rose-50/90 via-orange-50/60 to-gray-100 p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-r-2 border-[#008060]"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="flex items-center justify-start min-w-max">
                  <span className="px-3.5 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                    BEFORE: UNOPTIMIZED STORE
                  </span>
                </div>

                <div className="bg-white/95 backdrop-blur border border-rose-200 rounded-xl p-5 max-w-md min-w-[280px] shadow-sm">
                  <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block mb-1">
                    Conversion Barriers Present
                  </span>
                  <h4 className="text-base font-extrabold text-[#141414] mb-2">
                    Generic Standard Layout
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {currentCase.beforeDescription}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-rose-600 font-bold">
                    ✕ Hidden Shipping & High Friction
                  </div>
                </div>

                <div className="text-left text-[11px] text-rose-600 font-mono font-medium min-w-max">
                  [ High Bounce & Leak Trigger ]
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#008060] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#008060] flex items-center justify-center shadow-lg border-2 border-[#008060] cursor-ew-resize">
                  <MoveHorizontal className="w-5 h-5 text-[#008060]" />
                </div>
              </div>

            </div>

            {/* Slider Hint */}
            <div className="flex items-center justify-between text-xs text-gray-500 mt-3 px-1">
              <span className="text-rose-600 font-semibold">← Drag Left for Before</span>
              <span className="text-gray-500">Click or drag anywhere to compare</span>
              <span className="text-[#008060] font-semibold">Drag Right for After →</span>
            </div>
          </div>

          {/* Key Improvements Breakdown Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#008060] block mb-1">
                Strategic Upgrades Made
              </span>
              <h3 className="text-xl font-extrabold text-[#141414] mb-2">
                {currentCase.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Every modification is engineered to eliminate uncertainty and streamline the buyer's momentum toward purchase.
              </p>

              <div className="space-y-3 mb-6">
                {currentCase.keyImprovements.map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-[#008060] border border-emerald-200 text-xs font-bold py-3 rounded-xl transition-all"
              >
                <span>Request Similar Optimization</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
