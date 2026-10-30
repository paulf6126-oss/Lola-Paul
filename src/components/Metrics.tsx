import React from 'react';
import { Sparkles, Edit3, CheckCircle } from 'lucide-react';
import { MetricItem } from '../types';

interface MetricsProps {
  metrics: MetricItem[];
  onOpenEditor: () => void;
}

export const Metrics: React.FC<MetricsProps> = ({ metrics, onOpenEditor }) => {
  return (
    <section id="metrics" className="py-16 lg:py-24 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Quick Edit Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Benchmarks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight">
              Experience & Performance Highlights
            </h2>
          </div>

          <button
            id="metrics-edit-btn"
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#008060] bg-gray-50 border border-gray-200 hover:border-emerald-200 px-3.5 py-2 rounded-lg transition-colors self-start sm:self-auto shadow-xs"
            title="Edit numbers and metrics in Live Editor"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Customize Metrics</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              id={`metric-card-${metric.id}`}
              className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#008060] block mb-2 font-mono">
                  {metric.value}
                </span>
                <h3 className="text-base font-extrabold text-[#141414] mb-1.5">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-gray-600 mt-2 pt-3 border-t border-gray-100 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <p className="text-center text-xs text-gray-500 mt-8">
          * Transparent commitment: Figures are verified and can be customized with exact store stats.
        </p>

      </div>
    </section>
  );
};
