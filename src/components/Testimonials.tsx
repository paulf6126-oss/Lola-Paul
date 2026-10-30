import React from 'react';
import { Quote, Star, MessageSquare, PlusCircle } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

interface TestimonialsProps {
  onOpenEditor: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenEditor }) => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight">
              Testimonials & Client Experience
            </h2>
          </div>

          <button
            id="testimonials-manage-btn"
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#008060] bg-gray-50 border border-gray-200 hover:border-emerald-200 px-3.5 py-2 rounded-lg transition-colors self-start sm:self-auto shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Manage Reviews</span>
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#008060]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#008060]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300" />
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-xs text-[#008060]">
                  {test.clientName.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#141414]">
                    {test.clientName}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {test.role} • {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tasteful Placeholder Assurance */}
        <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200 text-center max-w-xl mx-auto">
          <p className="text-xs text-gray-500">
            Client reviews are continuously updated as new growth milestones and case studies are finalized.
          </p>
        </div>

      </div>
    </section>
  );
};
