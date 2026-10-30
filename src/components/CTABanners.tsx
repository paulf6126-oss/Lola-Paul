import React from 'react';
import { ArrowRight, Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';

interface CTABannerProps {
  onOpenAuditQuiz?: () => void;
}

export const AuditCTABanner: React.FC<CTABannerProps> = ({ onOpenAuditQuiz }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-emerald-50/70 border-y border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-[#008060] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Conversion Opportunity</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#141414]">
              Not sure what's stopping your store from converting?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Let's find the exact friction points costing you sales across desktop and mobile.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenAuditQuiz && (
              <button
                onClick={onOpenAuditQuiz}
                className="px-4 py-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs font-bold rounded-xl shadow-xs transition-all"
              >
                Take 60-Sec Check
              </button>
            )}
            <button
              id="cta-get-store-audit-btn"
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span>Get a Store Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export const ProjectCTABanner: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200 text-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] mx-auto mb-5 shadow-xs">
          <ShoppingBag className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight mb-3">
          Ready to improve your Shopify store?
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-8">
          Whether you need a full redesign, focused CRO sprint, or proactive monthly management, let's build an e-commerce experience your customers love.
        </p>

        <button
          id="cta-banner-start-project-btn"
          onClick={() => scrollTo('#contact')}
          className="inline-flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
