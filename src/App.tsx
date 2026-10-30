import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CROAuditVisualizer } from './components/CROAuditVisualizer';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { Process } from './components/Process';
import { WhyLola } from './components/WhyLola';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { TechStack } from './components/TechStack';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { AuditCTABanner, ProjectCTABanner } from './components/CTABanners';
import { Footer } from './components/Footer';
import { StoreAuditQuiz } from './components/StoreAuditQuiz';
import { ContentEditorModal } from './components/ContentEditorModal';
import { initialSiteConfig, portfolioProjectsData } from './data/portfolioData';
import { SiteConfig, PortfolioProject } from './types';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('lola_paul_site_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.profileImage || parsed.profileImage === '' || parsed.profileImage.includes('1786760609170')) {
          parsed.profileImage = initialSiteConfig.profileImage;
        }
        if (!parsed.email || parsed.email === 'contact@lolapaul.com') {
          parsed.email = initialSiteConfig.email;
        }
        if (!parsed.whatsapp || parsed.whatsapp === 'https://wa.me/1234567890') {
          parsed.whatsapp = initialSiteConfig.whatsapp;
        }
        if (!parsed.fiverrUrl || parsed.fiverrUrl === 'https://fiverr.com') {
          parsed.fiverrUrl = initialSiteConfig.fiverrUrl;
        }
        return parsed;
      }
      return initialSiteConfig;
    } catch {
      return initialSiteConfig;
    }
  });

  const [projects, setProjects] = useState<PortfolioProject[]>(() => {
    try {
      const saved = localStorage.getItem('lola_paul_projects');
      return saved ? JSON.parse(saved) : portfolioProjectsData;
    } catch {
      return portfolioProjectsData;
    }
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAuditQuizOpen, setIsAuditQuizOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('lola_paul_site_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  };

  const handleUpdatePhoto = (photoUrl: string) => {
    const updated = { ...config, profileImage: photoUrl };
    handleSaveConfig(updated);
  };

  const handleUpdateProjectImage = (projectId: string, imageUrl: string) => {
    const updated = projects.map((p) => {
      if (p.id === projectId) {
        return { ...p, imageUrl };
      }
      return p;
    });
    setProjects(updated);
    try {
      localStorage.setItem('lola_paul_projects', JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPrefilledService(serviceName);
  };

  const handleInquireProject = (projectName: string) => {
    setPrefilledService('Shopify Store Design');
    setPrefilledMessage(`I am interested in a project similar to: "${projectName}".`);
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleAuditQuizResult = (resultText: string, suggestedService: string) => {
    setPrefilledService(suggestedService);
    setPrefilledMessage(resultText);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#141414] selection:bg-[#008060] selection:text-white flex flex-col font-sans">
      {/* Sticky Global Navigation */}
      <Navbar
        config={config}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenAuditQuiz={() => setIsAuditQuizOpen(true)}
      />

      {/* Main Page Flow following Visitor Conversion Journey */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          config={config}
          onUpdatePhoto={handleUpdatePhoto}
          onOpenAuditQuiz={() => setIsAuditQuizOpen(true)}
        />

        {/* 2. Hero Credibility Strip */}
        <TrustBar />

        {/* 3. About Lola - Connected Sales System */}
        <About config={config} />

        {/* 4. Full Services Breakdown */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 5. Strategic Conversion CTA Banner */}
        <AuditCTABanner onOpenAuditQuiz={() => setIsAuditQuizOpen(true)} />

        {/* 6. Selected Work & Case Studies */}
        <Portfolio
          projects={projects}
          onUpdateProjectImage={handleUpdateProjectImage}
          onInquireProject={handleInquireProject}
        />

        {/* 7. Interactive CRO Buying Journey Funnel */}
        <CROAuditVisualizer />

        {/* 8. Interactive Before / After Comparison */}
        <BeforeAfterShowcase />

        {/* 9. 5-Step Process */}
        <Process />

        {/* 10. Why Work With Lola (6 Differentiators) */}
        <WhyLola />

        {/* 11. Editable Metrics & Benchmarks */}
        <Metrics
          metrics={config.metrics}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* 12. Client Feedback & Review Structure */}
        <Testimonials onOpenEditor={() => setIsEditorOpen(true)} />

        {/* 13. Technology Ecosystem */}
        <TechStack />

        {/* 14. 10 Detailed FAQs */}
        <FAQ />

        {/* 15. Closing Strategic CTA Banner */}
        <ProjectCTABanner />

        {/* 16. Primary Contact & Project Inquiry Form */}
        <ContactSection
          config={config}
          prefilledService={prefilledService}
          prefilledMessage={prefilledMessage}
          onSaveConfig={handleSaveConfig}
          onOpenEditor={() => setIsEditorOpen(true)}
        />
      </main>

      {/* Premium Footer */}
      <Footer config={config} />

      {/* Interactive 60-Second Store Diagnostic Quiz */}
      <StoreAuditQuiz
        isOpen={isAuditQuizOpen}
        onClose={() => setIsAuditQuizOpen(false)}
        onSelectAuditResult={handleAuditQuizResult}
      />

      {/* Live Content & Contact Editor Modal */}
      <ContentEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}
