import React, { useState, useRef } from 'react';
import { Layers, ArrowRight, Upload, Sparkles, Filter, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { PortfolioProject } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioProps {
  projects: PortfolioProject[];
  onUpdateProjectImage: (projectId: string, imageUrl: string) => void;
  onInquireProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  projects,
  onUpdateProjectImage,
  onInquireProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<PortfolioProject | null>(null);
  const [uploadingProjectId, setUploadingProjectId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Shopify', 'E-commerce', 'CRO', 'Web Design', 'SEO'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleUploadClick = (projectId: string) => {
    setUploadingProjectId(projectId);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadingProjectId) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProjectImage(uploadingProjectId, event.target.result as string);
          setUploadingProjectId(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-white border-t border-gray-200 relative">
      {/* Hidden File Input for Image Uploading */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#008060] text-xs font-bold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven E-commerce Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight mb-2">
              Selected Work
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              A look at the stores, experiences and growth projects I've worked on. Built for speed, conversions, and seamless brand storytelling.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-gray-100/90 border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#008060] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#141414] hover:bg-gray-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid (6+ Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-200 flex flex-col overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Project Screenshot / Placeholder Area */}
              <div className="relative aspect-[16/10] bg-gray-50 border-b border-gray-200 flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-[#008060] uppercase block">
                        {project.placeholderLabel || 'UPLOAD PROJECT SCREENSHOT'}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {project.industry} • {project.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur border border-gray-200 text-[11px] font-bold text-[#008060] uppercase tracking-wider shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Upload Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveCaseStudyProject(project)}
                    className="px-3.5 py-2 bg-[#008060] hover:bg-[#006e52] text-white text-xs font-bold rounded-lg shadow flex items-center gap-1.5"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleUploadClick(project.id)}
                    className="p-2 bg-white border border-gray-300 text-gray-700 text-xs rounded-lg hover:bg-gray-100"
                    title="Upload Custom Screenshot"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-1.5">
                    <span>{project.industry}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#141414] mb-2.5 group-hover:text-[#008060] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {project.overview}
                  </p>

                  {/* Services Provided Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.services.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 border border-gray-200 text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  id={`view-case-study-${project.id}`}
                  onClick={() => setActiveCaseStudyProject(project)}
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#008060] text-gray-800 hover:text-white font-bold text-xs py-3 px-4 rounded-xl border border-gray-200 hover:border-[#008060] transition-all duration-150 shadow-xs"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
