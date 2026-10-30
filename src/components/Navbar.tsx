import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Settings } from 'lucide-react';
import { SiteConfig } from '../types';

interface NavbarProps {
  config: SiteConfig;
  onOpenEditor: () => void;
  onOpenAuditQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenEditor, onOpenAuditQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'CRO Journey', href: '#cro-journey' },
    { label: 'Before/After', href: '#before-after' },
    { label: 'Process', href: '#process' },
    { label: 'Why Lola', href: '#why-lola' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#008060] via-emerald-500 to-teal-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-gray-200 shadow-sm'
            : 'bg-white/70 backdrop-blur-sm py-5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="nav-brand-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-[#141414] focus:outline-none"
          >
            {config.profileImage ? (
              <img
                src={config.profileImage}
                alt={config.profileName}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg object-cover border border-emerald-300 shadow-sm group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-[#008060] flex items-center justify-center font-bold text-white text-sm shadow-sm group-hover:scale-105 transition-transform">
                LP
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#141414] group-hover:text-[#008060] transition-colors">
                {config.profileName}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                Shopify & CRO Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-gray-600 hover:text-[#141414] hover:bg-gray-100 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Store Audit Quiz Button */}
            <button
              id="nav-audit-quiz-btn"
              onClick={onOpenAuditQuiz}
              className="flex items-center gap-1.5 text-xs font-bold text-[#008060] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-3 py-2 rounded-lg transition-all hover:scale-[1.02]"
              title="60-Second Store Friction Self-Check"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Store Quiz</span>
            </button>

            {/* Quick Content Edit / Admin Trigger */}
            <button
              id="nav-open-editor-btn"
              onClick={onOpenEditor}
              className="p-2 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
              title="Customize Content & Contact Links"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Main Primary CTA */}
            <button
              id="nav-primary-cta"
              onClick={() => handleNavClick('#contact')}
              className="group flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="nav-mobile-editor-btn"
              onClick={onOpenEditor}
              className="p-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg"
              title="Edit Content"
            >
              <Settings className="w-4 h-4" />
            </button>

            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-950 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-backdrop"
          className="fixed inset-0 z-30 bg-white/95 backdrop-blur-md pt-24 px-6 pb-8 flex flex-col justify-between sm:hidden animate-in fade-in duration-200 border-b border-gray-200"
        >
          <div className="flex flex-col space-y-2">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400 px-3 pb-1">Navigation</p>
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-base font-semibold text-gray-800 hover:text-[#008060] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-gray-200">
            <button
              id="mobile-nav-audit-quiz-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-[#008060] font-bold py-3 rounded-lg text-sm"
            >
              <Sparkles className="w-4 h-4 text-[#008060]" />
              <span>Take 60-Sec Store Friction Check</span>
            </button>

            <button
              id="mobile-nav-primary-cta"
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold py-3.5 rounded-lg text-base shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
