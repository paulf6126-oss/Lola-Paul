import React from 'react';
import { ShoppingBag, TrendingUp, Layout, Compass, ShieldCheck, ArrowRight, Layers, Cpu } from 'lucide-react';
import { SiteConfig } from '../types';

interface AboutProps {
  config: SiteConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  const pillars = [
    {
      title: 'Shopify',
      subtitle: 'Native Ecosystem Master',
      desc: 'Store development, theme customization, catalog architecture, app stack optimization, and ongoing store management.',
      icon: ShoppingBag,
    },
    {
      title: 'CRO',
      subtitle: 'Conversion Engineering',
      desc: 'Improving the customer journey from initial ad landing page through collection discovery, product page, cart, and checkout.',
      icon: TrendingUp,
    },
    {
      title: 'Web Design',
      subtitle: 'Modern & Buyer-Centric',
      desc: 'Clean, responsive, high-performance storefronts designed to build immediate brand authority and make buying effortless.',
      icon: Layout,
    },
    {
      title: 'E-commerce Growth',
      subtitle: 'Strategic Revenue Impact',
      desc: 'Identifying hidden friction points, increasing average order value (AOV), and compounding customer lifetime value.',
      icon: Compass,
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>The Holistic Approach</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141414] tracking-tight leading-tight">
              {config.bioHeadline}
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p className="text-[#141414] font-medium">
              {config.bioParagraph1}
            </p>
            <p className="text-gray-600">
              {config.bioParagraph2}
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#008060] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong className="text-[#141414] font-bold">The One Connected System Rule:</strong>{' '}
                  You never have to arbitrate between a designer blaming a developer or a marketer blaming a theme. Every decision is orchestrated for cohesive growth.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Expertise Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                id={`about-pillar-${pillar.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group relative rounded-2xl bg-gray-50/70 hover:bg-white p-6 sm:p-7 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] group-hover:bg-[#008060] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-gray-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#141414] mb-1 group-hover:text-[#008060] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#008060] mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500 group-hover:text-[#008060] transition-colors">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-4 h-4 text-[#008060] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
