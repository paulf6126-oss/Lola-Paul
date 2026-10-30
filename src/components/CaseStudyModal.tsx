import React from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, ShoppingBag, Smartphone, Layers, Search, FileText } from 'lucide-react';
import { PortfolioProject } from '../types';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full my-auto max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-[#141414]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-5 sm:p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold uppercase tracking-wider">
              {project.category} Case Study
            </span>
            <span className="text-xs text-gray-300">|</span>
            <span className="text-xs text-gray-600 font-medium">{caseStudy.industry}</span>
          </div>

          <button
            id="case-study-close-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Main Title & Overview Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] mb-6 leading-tight">
              {caseStudy.title}
            </h2>

            {project.imageUrl && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50">
                <div className="bg-gray-100/90 px-4 py-2 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white border border-gray-200 text-[11px] font-mono text-gray-600 max-w-xs truncate">
                    shopify-storefront-preview
                  </div>
                  <div className="text-[11px] text-[#008060] font-bold hidden sm:block">
                    Live E-commerce Architecture
                  </div>
                </div>
                <div className="aspect-[16/9] w-full max-h-[420px] overflow-hidden bg-white">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  Client / Brand
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#141414]">{caseStudy.client}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  Platform
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#008060]">{caseStudy.platform}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  Industry
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#141414]">{caseStudy.industry}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  Scope Timeline
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#141414]">{caseStudy.timeline}</p>
              </div>
            </div>
          </div>

          {/* Services Provided Badges */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
              Services Delivered
            </span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* The Challenge & The Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                The Challenge
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008060] block mb-2">
                The Strategy & Approach
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {caseStudy.strategy}
              </p>
            </div>
          </div>

          {/* The Work Detailed Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#008060]" />
              <h3 className="text-base sm:text-lg font-bold text-[#141414] uppercase tracking-wider">
                The Architectural Breakdown (What Was Built & Optimized)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  Homepage & Hero Flow
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.homepage}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  Product Pages (PDP)
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.productPages}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  Navigation & Discovery
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.navigation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  Mobile UX & Touchpoints
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.mobileUX}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  Cart Drawer & Checkout
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.cartAndCheckout}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-[#008060] uppercase tracking-wider block mb-1">
                  SEO & Trust Elements
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  {caseStudy.theWork.seoAndTrust}
                </p>
              </div>
            </div>
          </div>

          {/* The Outcome (Verified & Qualitative Only) */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008060] block mb-3">
              The Qualitative Outcomes
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm font-bold text-[#141414]">
                Interested in achieving similar results for your store?
              </p>
              <p className="text-xs text-gray-500">
                Let's discuss your current store challenges and growth roadmap.
              </p>
            </div>

            <button
              id="case-study-inquire-cta"
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <span>Start a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
