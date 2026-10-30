import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  FileCheck,
  X,
  ExternalLink,
  Check,
  Link2,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { SiteConfig } from '../types';

interface ContactSectionProps {
  config: SiteConfig;
  prefilledService?: string;
  prefilledMessage?: string;
  onSaveConfig?: (newConfig: SiteConfig) => void;
  onOpenEditor?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  prefilledService = '',
  prefilledMessage = '',
  onSaveConfig,
  onOpenEditor,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    websiteUrl: '',
    service: 'Shopify CRO',
    platform: 'Shopify',
    budget: '$2,500 - $5,000',
    timeline: 'Within a Month',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Booking & Calendly quick-schedule modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [calendlyInput, setCalendlyInput] = useState(
    config.bookingUrl && config.bookingUrl !== 'https://calendly.com' ? config.bookingUrl : ''
  );
  const [calendlySavedSuccess, setCalendlySavedSuccess] = useState(false);

  const isCalendlyCustomized = Boolean(
    config.bookingUrl &&
    config.bookingUrl !== 'https://calendly.com' &&
    config.bookingUrl.includes('calendly.com/')
  );

  const handleConnectCalendly = (e: React.FormEvent) => {
    e.preventDefault();
    let val = calendlyInput.trim();
    if (!val) return;
    if (!val.startsWith('http://') && !val.startsWith('https://')) {
      if (val.startsWith('calendly.com/')) {
        val = 'https://' + val;
      } else {
        val = 'https://calendly.com/' + val;
      }
    }
    const updated = { ...config, bookingUrl: val };
    if (onSaveConfig) {
      onSaveConfig(updated);
    } else {
      try {
        localStorage.setItem('lola_paul_site_config', JSON.stringify(updated));
      } catch (err) {
        console.warn('Failed saving to localStorage', err);
      }
    }
    setCalendlyInput(val);
    setCalendlySavedSuccess(true);
    setTimeout(() => {
      setCalendlySavedSuccess(false);
      window.open(val, '_blank', 'noopener,noreferrer');
      setIsBookingModalOpen(false);
    }, 1200);
  };

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${prefilledMessage}` : prefilledMessage,
      }));
    }
  }, [prefilledService, prefilledMessage]);

  const serviceOptions = [
    'Shopify CRO',
    'Shopify Store Design',
    'Shopify Management',
    'Product Page Optimization',
    'Store Audit',
    'SEO',
    'Mobile Optimization',
    'E-commerce Growth Strategy',
    'Other / Custom Scope',
  ];

  const platformOptions = [
    'Shopify (Theme 2.0)',
    'Shopify Plus',
    'WooCommerce',
    'Magento / Adobe Commerce',
    'BigCommerce',
    'Other / Starting New Store',
  ];

  const budgetOptions = [
    'Under $2,500 (Audit / Quick Sprint)',
    '$2,500 - $5,000 (Targeted PDP / Flow)',
    '$5,000 - $10,000 (Full Store Overhaul)',
    '$10,000+ (Enterprise Custom Build)',
    'Monthly Growth Retainer',
  ];

  const timelineOptions = [
    'Immediate (Next 1–2 Weeks)',
    'Within a Month',
    '1–3 Months',
    'Flexible / Planning Ahead',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid business email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please briefly share what you want to improve or achieve.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      websiteUrl: '',
      service: 'Shopify CRO',
      platform: 'Shopify',
      budget: '$2,500 - $5,000',
      timeline: 'Within a Month',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Project Inquiry & Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight mb-4">
            Let's Turn Your Store Into a Better Sales Experience.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Tell me what you're working on, where your store is struggling, and what you want to improve. I'll help identify the next practical step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Quick Contact & Credibility Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Methods Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                {config.profileImage ? (
                  <img
                    src={config.profileImage}
                    alt={config.profileName}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover object-top border border-emerald-200 shadow-xs shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] font-extrabold text-base shrink-0">
                    LP
                  </div>
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008060] block">
                    Direct Communication
                  </span>
                  <h3 className="text-lg font-extrabold text-[#141414]">
                    Connect with Lola Paul
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Prefer direct messaging or booking a direct call? Connect through your preferred channel:
              </p>

              <div className="space-y-2.5">
                {/* Email Option */}
                <a
                  id="contact-quick-email"
                  href={`mailto:${config.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold block text-[#141414]">Email Me</span>
                      <span className="text-[11px] text-gray-500 font-medium">{config.email}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#008060] group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* WhatsApp Option */}
                <a
                  id="contact-quick-whatsapp"
                  href={config.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold block text-[#141414]">WhatsApp Chat</span>
                      <span className="text-[11px] text-gray-500 font-medium">+234 913 166 9148 (09131669148)</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#008060] group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Fiverr Profile Option */}
                {config.fiverrUrl && (
                  <a
                    id="contact-quick-fiverr"
                    href={config.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-800 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] font-extrabold text-xs">
                        fi
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold block text-[#141414]">Fiverr Profile</span>
                        <span className="text-[11px] text-gray-500 font-medium">fiverr.com/lola_paul</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#008060] group-hover:translate-x-0.5 transition-all" />
                  </a>
                )}

                {/* Book a Consultation */}
                <button
                  id="contact-quick-booking"
                  type="button"
                  onClick={() => {
                    if (isCalendlyCustomized) {
                      window.open(config.bookingUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      setIsBookingModalOpen(true);
                    }
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-[#008060] transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#008060] text-white flex items-center justify-center font-bold shadow-2xs">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold block text-[#008060]">Book a Consultation</span>
                        {isCalendlyCustomized ? (
                          <span className="text-[9px] font-extrabold uppercase tracking-wide text-emerald-800 bg-emerald-200/80 px-1.5 py-0.2 rounded">
                            Calendly
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                            Schedule
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-emerald-700 font-medium">
                        {isCalendlyCustomized ? 'Open 30-min booking calendar' : 'Instant chat, email & Calendly'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="w-4 h-4 text-[#008060] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              </div>
            </div>

            {/* Response Promise Card */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008060]">
                <Clock className="w-4 h-4" />
                <span>Prompt Response Promise</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                All inquiries receive a thoughtful review within <strong>24 business hours</strong>. I'll inspect your store URL and provide honest preliminary notes before any call.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500 border-t border-gray-200">
                <Shield className="w-3.5 h-3.5 text-[#008060]" />
                <span>Strict Non-Disclosure & Privacy Assurance</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Project Inquiry Form / Success Screen */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              {isSubmitted ? (
                /* Success State */
                <div
                  id="contact-success-state"
                  className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#141414]">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-sm text-[#008060] font-bold">
                      Your project inquiry has been received successfully.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed pt-2">
                      I will review your store details and email you back at <span className="text-[#141414] font-bold">{submittedData?.email}</span> within 24 hours with next steps.
                    </p>
                  </div>

                  {submittedData && (
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
                      <div className="flex justify-between text-gray-600">
                        <span>Requested Service:</span>
                        <span className="font-bold text-[#141414]">{submittedData.service}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Store / Website:</span>
                        <span className="font-bold text-[#141414]">{submittedData.websiteUrl || 'Not provided'}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Target Timeline:</span>
                        <span className="font-bold text-[#141414]">{submittedData.timeline}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-bold text-gray-800 rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Interactive Inquiry Form */
                <form id="project-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-[#141414]">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Fill in what you can—every detail helps me understand your store structure.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#008060]">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-600 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-[#008060]">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Website URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        id="form-company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Horizon Apparel"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Current Website URL
                      </label>
                      <input
                        type="text"
                        id="form-website-url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="yourstore.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      What do you need help with?
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-gray-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current Platform & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Current Platform
                      </label>
                      <select
                        id="form-platform"
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      >
                        {platformOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-gray-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="form-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-gray-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      id="form-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-gray-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Project Details & Current Store Pain Points <span className="text-[#008060]">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a summary of where you feel visitors are hesitating, what you would like to redesign or optimize, and your main business goals..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] text-xs sm:text-sm focus:outline-none focus:border-[#008060] focus:ring-1 focus:ring-[#008060] focus:bg-white"
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-600 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-project-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#007054] text-white font-extrabold text-sm sm:text-base py-4 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-500">
                    No spam, ever. Your contact information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Booking & Calendly Connection Modal */}
      {isBookingModalOpen && (
        <div
          id="booking-consultation-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <div
            id="booking-consultation-modal-container"
            className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-emerald-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#008060] text-white flex items-center justify-center shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#141414]">
                    Book a 30-Minute Consultation
                  </h3>
                  <p className="text-xs text-gray-500">
                    Connect directly with Lola Paul for your Shopify store.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
              {/* Direct Fast Contact Options */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Quick Direct Channels
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={config.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 text-[#008060] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">WhatsApp Chat</span>
                      <span className="text-[10px] text-emerald-700">09131669148 (Fastest)</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${config.email}?subject=Shopify%20Consultation%20Inquiry`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#008060]" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">Direct Email</span>
                      <span className="text-[10px] text-gray-500">{config.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Calendly Integration Section */}
              <div className="pt-2 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#141414]">
                    <Link2 className="w-3.5 h-3.5 text-[#008060]" />
                    <span>Calendly Scheduling</span>
                  </div>
                  {isCalendlyCustomized ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" />
                      Connected
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
                      Needs Your Link
                    </span>
                  )}
                </div>

                {isCalendlyCustomized && (
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <p className="text-xs text-emerald-900 font-medium">
                      Your calendar is connected at:
                    </p>
                    <p className="text-xs font-mono text-emerald-800 truncate bg-white/80 p-2 rounded-lg border border-emerald-200/80">
                      {config.bookingUrl}
                    </p>
                    <div className="pt-1 flex items-center gap-2">
                      <a
                        href={config.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#008060] hover:bg-[#006e52] text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        <span>Open Booking Calendar</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Form to connect or update Calendly link */}
                <form onSubmit={handleConnectCalendly} className="space-y-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <label className="block text-xs font-bold text-gray-700">
                    {isCalendlyCustomized ? 'Update Calendly Link:' : 'Paste your Calendly link to connect:'}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={calendlyInput}
                      onChange={(e) => setCalendlyInput(e.target.value)}
                      placeholder="https://calendly.com/your-username/30min"
                      className="flex-1 px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs font-mono text-gray-900 focus:outline-none focus:border-[#008060]"
                    />
                    <button
                      type="submit"
                      disabled={!calendlyInput.trim() || calendlySavedSuccess}
                      className="px-3.5 py-2 rounded-lg bg-[#008060] hover:bg-[#006e52] disabled:opacity-50 text-white text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
                    >
                      {calendlySavedSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <span>{isCalendlyCustomized ? 'Update' : 'Connect'}</span>
                      )}
                    </button>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-gray-200/80 text-[11px] text-gray-600 space-y-1">
                    <div className="flex items-center gap-1 font-bold text-[#008060]">
                      <HelpCircle className="w-3 h-3" />
                      <span>How to connect your Calendly link:</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-0.5 pl-0.5 text-gray-500 leading-relaxed">
                      <li>Log in to <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-[#008060] underline">calendly.com</a></li>
                      <li>Copy your meeting link (e.g. <code className="text-gray-700 font-mono text-[10px]">calendly.com/your-name/30min</code>)</li>
                      <li>Paste it into the box above and click <strong>Connect</strong></li>
                    </ol>
                  </div>
                </form>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
