import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sparkles, Sliders, Mail, Share2, Calendar, ExternalLink, HelpCircle } from 'lucide-react';
import { SiteConfig, MetricItem } from '../types';
import { initialSiteConfig } from '../data/portfolioData';

interface ContentEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (newConfig: SiteConfig) => void;
}

export const ContentEditorModal: React.FC<ContentEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<SiteConfig>({ ...config });
  const [activeTab, setActiveTab] = useState<'profile' | 'metrics' | 'contact'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleMetricChange = (id: string, field: keyof MetricItem, value: string) => {
    const updated = formData.metrics.map((m) => {
      if (m.id === id) {
        return { ...m, [field]: value };
      }
      return m;
    });
    setFormData({ ...formData, metrics: updated });
  };

  const handleSave = () => {
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset all content, contact links, and metrics back to defaults?')) {
      setFormData({ ...initialSiteConfig });
      onSaveConfig({ ...initialSiteConfig });
    }
  };

  return (
    <div
      id="content-editor-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        id="content-editor-modal-container"
        className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008060]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#141414]">
                Live Portfolio Content & Contact Editor
              </h3>
              <p className="text-xs text-gray-500">
                Update Lola's contact links, bio, and verified metrics directly.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'profile'
                ? 'border-[#008060] text-[#008060]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Profile & Bio
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'metrics'
                ? 'border-[#008060] text-[#008060]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Editable Metrics
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'contact'
                ? 'border-[#008060] text-[#008060]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Contact & Social Links
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.profileName}
                  onChange={(e) => setFormData({ ...formData, profileName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Primary Positioning Title
                </label>
                <input
                  type="text"
                  value={formData.primaryTitle}
                  onChange={(e) => setFormData({ ...formData, primaryTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  About Headline
                </label>
                <input
                  type="text"
                  value={formData.bioHeadline}
                  onChange={(e) => setFormData({ ...formData, bioHeadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  About Paragraph 1 (Problem of Disjointed Teams)
                </label>
                <textarea
                  rows={3}
                  value={formData.bioParagraph1}
                  onChange={(e) => setFormData({ ...formData, bioParagraph1: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  About Paragraph 2 (Connected Growth System)
                </label>
                <textarea
                  rows={3}
                  value={formData.bioParagraph2}
                  onChange={(e) => setFormData({ ...formData, bioParagraph2: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500">
                Update the numbers displayed in the metrics section when verified stats are ready.
              </p>

              {formData.metrics.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                        Metric Value (e.g. 50+, 8 Years)
                      </label>
                      <input
                        type="text"
                        value={m.value}
                        onChange={(e) => handleMetricChange(m.id, 'value', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-[#008060] font-extrabold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                        Metric Label
                      </label>
                      <input
                        type="text"
                        value={m.label}
                        onChange={(e) => handleMetricChange(m.id, 'label', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-[#141414] font-bold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">
                      Context / Description
                    </label>
                    <input
                      type="text"
                      value={m.description}
                      onChange={(e) => handleMetricChange(m.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500">
                Configure actual URLs and channels for client inquiries.
              </p>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Primary Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="paulf6126@gmail.com"
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  WhatsApp Link / Phone
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="https://wa.me/2349131669148"
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                />
              </div>

              {/* Booking / Calendly URL Section */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#008060]" />
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Calendly / Discovery Call Link
                    </label>
                  </div>
                  {formData.bookingUrl && formData.bookingUrl !== 'https://calendly.com' && formData.bookingUrl.includes('calendly.com/') ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" />
                      Connected
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100/80 border border-amber-300 px-2 py-0.5 rounded-full">
                      Link not set yet
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.bookingUrl}
                    onChange={(e) => {
                      let val = e.target.value.trim();
                      setFormData({ ...formData, bookingUrl: e.target.value });
                    }}
                    onBlur={(e) => {
                      let val = e.target.value.trim();
                      if (val && !val.startsWith('http://') && !val.startsWith('https://')) {
                        if (val.startsWith('calendly.com/')) {
                          val = 'https://' + val;
                        } else {
                          val = 'https://calendly.com/' + val;
                        }
                        setFormData({ ...formData, bookingUrl: val });
                      }
                    }}
                    placeholder="https://calendly.com/your-username/30min"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-xs text-[#141414] focus:outline-none focus:border-[#008060] shadow-2xs font-mono"
                  />
                  {formData.bookingUrl && formData.bookingUrl.length > 8 && (
                    <a
                      href={formData.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
                      title="Test this link in a new tab"
                    >
                      <span>Test</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Helpful instructions on how to connect */}
                <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/60 text-[11px] text-gray-700 space-y-1">
                  <div className="font-bold text-[#008060] flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    <span>How to connect your Calendly:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-0.5 text-gray-600 pl-0.5 leading-relaxed">
                    <li>Create an account or log in at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-[#008060] underline font-medium">calendly.com</a></li>
                    <li>Click <strong>Copy Link</strong> on your 15-min or 30-min discovery call event</li>
                    <li>Paste the link above (e.g. <code className="bg-white/80 px-1 py-0.5 rounded text-[10px] text-emerald-800 font-mono">https://calendly.com/username/30min</code>) and save</li>
                  </ol>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Fiverr Pro / Profile URL
                  </label>
                  <input
                    type="text"
                    value={formData.fiverrUrl}
                    onChange={(e) => setFormData({ ...formData, fiverrUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Instagram URL
                  </label>
                  <input
                    type="text"
                    value={formData.instagramUrl}
                    onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Facebook URL
                  </label>
                  <input
                    type="text"
                    value={formData.facebookUrl}
                    onChange={(e) => setFormData({ ...formData, facebookUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-[#141414] focus:outline-none focus:border-[#008060] focus:bg-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-gray-200 flex items-center justify-between bg-gray-50">
          <button
            onClick={handleResetToDefaults}
            className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-xs font-bold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#008060] hover:bg-[#007054] text-white text-xs font-extrabold shadow-sm transition-all"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
