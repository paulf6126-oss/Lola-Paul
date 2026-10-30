import React from 'react';
import {
  Briefcase,
  Target,
  Code,
  Users,
  Wrench,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { differentiatorsData } from '../data/portfolioData';

export const WhyLola: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-lola" className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Clear Differentiation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight mb-4">
            You Don't Need Another Person Just Managing Your Store. You Need Someone Thinking About Growth.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            I bridge the gap between creative visual design and analytical commercial performance—delivering stores that not only look remarkable but actively drive revenue.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiatorsData.map((item, idx) => (
            <div
              key={item.title}
              id={`why-lola-card-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] mb-5">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-extrabold text-[#141414] mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
