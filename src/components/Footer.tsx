import React from 'react';
import { ArrowUp, ShoppingBag, Linkedin, Instagram, Facebook, ExternalLink, Calendar } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer id="footer" className="bg-[#141414] border-t border-gray-800 pt-16 pb-12 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              {config.profileImage ? (
                <img
                  src={config.profileImage}
                  alt={config.profileName}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-xl object-cover border border-emerald-400/40 shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-[#008060] flex items-center justify-center font-extrabold text-white text-sm">
                  LP
                </div>
              )}
              <span className="text-xl font-extrabold text-white tracking-tight">
                {config.profileName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-medium">
              Shopify Expert • CRO Specialist • E-commerce Growth Consultant
            </p>

            <p className="text-xs text-gray-400 max-w-md leading-relaxed">
              Designing, optimizing, and managing high-converting Shopify stores for international brands seeking sustainable commercial growth.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 text-xs transition-colors"
              >
                <span>{config.email}</span>
              </a>
              <a
                href={config.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-emerald-400 hover:text-emerald-300 hover:border-gray-700 text-xs transition-colors"
              >
                <span>WhatsApp: 09131669148</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-200 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Lola
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services & Deliverables
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#work')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#cro-journey')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  CRO Journey Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#process')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  5-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact & Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Professional Social & External Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-200 block">
              Connect & Profiles
            </span>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                id="footer-social-linkedin"
                href={config.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                id="footer-social-fiverr"
                href={config.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Fiverr Pro Profile</span>
              </a>
              {config.bookingUrl && (
                <a
                  id="footer-social-calendly"
                  href={config.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation (Calendly)</span>
                </a>
              )}
              <a
                id="footer-social-instagram"
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                id="footer-social-facebook"
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Lola Paul. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Shopify 2.0 • CRO Architecture • SEO</span>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-gray-800 border border-gray-700 hover:text-white hover:border-gray-600 transition-all text-gray-300"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
