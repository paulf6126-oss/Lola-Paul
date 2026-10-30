import React, { useState } from 'react';
import {
  Store,
  TrendingUp,
  Layout,
  Sparkles,
  Search,
  FileCheck,
  Smartphone,
  Compass,
  ArrowRight,
  CheckCircle,
  X,
  Zap,
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Store':
        return <Store className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    setActiveServiceModal(null);
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/60 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
              <span>Full-Stack E-Commerce Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
              How I Can Help Your Store Grow
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            Targeted solutions tailored for ambitious brands—from rapid conversion friction audits to complete custom Shopify architecture.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group rounded-2xl bg-white p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060] mb-5 group-hover:bg-[#008060] group-hover:text-white transition-colors">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-extrabold text-[#141414] mb-2.5 group-hover:text-[#008060] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action */}
              <button
                id={`service-learn-more-${service.id}`}
                onClick={() => setActiveServiceModal(service)}
                className="w-full flex items-center justify-between text-xs font-bold text-[#008060] bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200/80 px-3.5 py-2.5 rounded-lg transition-all"
              >
                <span>View Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {activeServiceModal && (
        <div
          id="service-detail-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveServiceModal(null)}
        >
          <div
            id="service-detail-modal-content"
            className="bg-white border border-gray-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 text-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="service-modal-close-btn"
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                {getIcon(activeServiceModal.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#008060] uppercase tracking-wider">
                  Service Breakdown
                </span>
                <h3 className="text-xl font-extrabold text-[#141414]">
                  {activeServiceModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {activeServiceModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Key Scope & Deliverables:
              </h4>
              <div className="space-y-2.5">
                {activeServiceModal.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 mb-6">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Ideal For:
              </span>
              <p className="text-xs sm:text-sm text-gray-700">
                {activeServiceModal.idealFor}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                id="service-modal-inquire-btn"
                onClick={() => handleInquire(activeServiceModal.title)}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-sm transition-all"
              >
                <span>Request {activeServiceModal.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
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
