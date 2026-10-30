import React from 'react';
import { ShoppingBag, TrendingUp, Layout, Wrench, Search, Compass, ChevronRight } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const capabilities = [
    { label: 'Shopify Stores', icon: ShoppingBag, desc: 'Development & Themes' },
    { label: 'Conversion Rate Optimization', icon: TrendingUp, desc: 'Friction Removal' },
    { label: 'E-commerce Design', icon: Layout, desc: 'Buyer-Centric UX/UI' },
    { label: 'Store Management', icon: Wrench, desc: 'Ongoing Operations' },
    { label: 'SEO & Search Visibility', icon: Search, desc: 'Catalog Rankings' },
    { label: 'Growth Strategy', icon: Compass, desc: 'Revenue Systems' },
  ];

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-trust-bar"
      className="border-y border-gray-200 bg-gray-50/80 py-6 sm:py-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Label Header */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#008060] bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
              Core Expertise
            </span>
            <h2 className="text-sm font-bold text-[#141414] uppercase tracking-wider">
              What I Help With
            </h2>
          </div>

          {/* Clean Capability Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 flex-1">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  onClick={scrollToServices}
                  className="group cursor-pointer flex flex-col p-3.5 rounded-xl bg-white hover:bg-emerald-50/40 border border-gray-200 hover:border-emerald-300 transition-all duration-150 shadow-xs hover:shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-[#008060] group-hover:bg-[#008060] group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#008060] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs font-bold text-[#141414] group-hover:text-[#008060] transition-colors leading-snug">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
