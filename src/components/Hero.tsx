import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingBag, TrendingUp, Sparkles, Upload, Eye } from 'lucide-react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onUpdatePhoto: (photoUrl: string) => void;
  onOpenAuditQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onUpdatePhoto, onOpenAuditQuiz }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdatePhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-gray-50/60 to-white"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Small Eyebrow Badge */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#008060] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#008060] animate-pulse" />
              <span>SHOPIFY • CRO • E-COMMERCE GROWTH</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141414] leading-[1.12] mb-6"
            >
              I Build Shopify Stores Designed to{' '}
              <span className="text-[#008060]">
                Turn More Visitors Into Customers.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-supporting-copy"
              className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              I help e-commerce brands improve their Shopify stores through strategic design, conversion optimization, store management, SEO, and customer-focused experiences.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                onClick={() => scrollTo('#contact')}
                className="flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => scrollTo('#work')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#141414] hover:text-[#008060] border border-gray-300 font-bold text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm"
              >
                <span>View Selected Work</span>
              </button>
            </div>

            {/* Credibility Key Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-gray-200 w-full">
              <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008060] shrink-0" />
                <span>Shopify 2.0 Theme Specialist</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008060] shrink-0" />
                <span>Conversion Funnel Audits</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008060] shrink-0" />
                <span>Full Customer Journey Focus</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Professional Portrait Frame & Floating Credibility Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow & Gradient Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="relative rounded-2xl bg-white p-4 sm:p-5 border border-gray-200 shadow-xl"
              >
                
                {/* Photo / Portrait Area */}
                <div
                  id="portrait-frame"
                  className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 border border-gray-200 flex flex-col items-center justify-center text-center p-6 group"
                >
                  {config.profileImage ? (
                    <img
                      src={config.profileImage}
                      alt="Lola Paul - Shopify Expert & E-commerce Growth Consultant"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* High-craft tasteful placeholder area (no fake AI personas) */
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                      <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                        <ShoppingBag className="w-9 h-9" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-bold tracking-widest text-[#008060] uppercase">
                          PORTRAIT SPOTLIGHT
                        </div>
                        <p className="text-sm font-extrabold text-[#141414] tracking-tight">
                          {config.profileName}
                        </p>
                        <p className="text-xs text-gray-500 font-medium">
                          Shopify Expert & CRO Specialist
                        </p>
                      </div>

                      <p className="text-[11px] text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
                        [ Upload Lola's professional photo using the button below or admin toolbar ]
                      </p>
                    </div>
                  )}

                  {/* Photo Upload Trigger Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      id="hero-upload-photo-btn"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-all"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{config.profileImage ? 'Change Photo' : 'Upload Professional Photo'}</span>
                    </button>
                    <span className="text-[10px] text-white/90">Supports JPG, PNG, WebP</span>
                  </div>
                </div>

                {/* Floating Credibility Panel / Status Card */}
                <div
                  id="hero-floating-credibility-panel"
                  className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col gap-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#008060] animate-ping" />
                      <span className="text-xs font-bold text-[#141414] tracking-tight">
                        Shopify Growth Specialist
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-[#008060] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Active Availability
                    </span>
                  </div>

                  {/* Micro Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Shopify', 'CRO', 'UX/UI', 'SEO', 'E-commerce'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-gray-200 text-gray-700 rounded-md shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
