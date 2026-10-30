export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  category: 'Shopify' | 'E-commerce' | 'CRO' | 'Web Design' | 'SEO';
  services: string[];
  overview: string;
  imageUrl?: string;
  placeholderLabel?: string;
  caseStudy: CaseStudyData;
}

export interface CaseStudyData {
  title: string;
  client: string;
  industry: string;
  platform: string;
  services: string[];
  timeline: string;
  challenge: string;
  strategy: string;
  theWork: {
    homepage: string;
    productPages: string;
    navigation: string;
    mobileUX: string;
    cartAndCheckout: string;
    seoAndTrust: string;
  };
  outcomes: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
}

export interface CROStage {
  id: string;
  name: string;
  label: string;
  description: string;
  evaluationPoints: string[];
  commonFriction: string[];
  lolaApproach: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  beforeDescription: string;
  afterDescription: string;
  keyImprovements: string[];
  beforeImage?: string;
  afterImage?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyActions: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  rating?: number;
  avatarUrl?: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SiteConfig {
  profileName: string;
  primaryTitle: string;
  secondaryTitle: string;
  bioHeadline: string;
  bioParagraph1: string;
  bioParagraph2: string;
  profileImage: string;
  email: string;
  whatsapp: string;
  bookingUrl: string;
  linkedinUrl: string;
  fiverrUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  metrics: MetricItem[];
}
