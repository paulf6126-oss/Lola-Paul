import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { techStackData } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-16 lg:py-20 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technology & Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight mb-2">
            The E-Commerce Ecosystem I Work With
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Specialized in native Shopify architecture and high-impact conversion, retention, and analytics tooling.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {techStackData.map((tech) => (
            <div
              key={tech.name}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                tech.highlight
                  ? 'bg-emerald-50/70 border-emerald-200 hover:border-[#008060] shadow-xs'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
                  {tech.category}
                </span>
                <span className="text-sm font-extrabold text-[#141414] block">
                  {tech.name}
                </span>
              </div>
              {tech.highlight && (
                <div className="flex items-center gap-1 text-[10px] text-[#008060] font-bold mt-3">
                  <Check className="w-3 h-3" />
                  <span>Primary Stack</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
