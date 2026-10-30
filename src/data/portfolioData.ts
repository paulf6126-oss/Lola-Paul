import expertPortraitImage from '../assets/images/expert_portrait_1793328168794.jpg';
import storeApparelImg from '../assets/images/store_apparel_ui_1793328515234.jpg';
import storeSkincareImg from '../assets/images/store_skincare_ui_1793328516592.jpg';
import storeCoffeeImg from '../assets/images/store_coffee_ui_1793328517089.jpg';
import storeHomedecorImg from '../assets/images/store_homedecor_ui_1793328517924.jpg';
import storeJewelryImg from '../assets/images/store_jewelry_ui_1793328519291.jpg';
import storeOutdoorImg from '../assets/images/store_outdoor_ui_1793328518678.jpg';
import {
  PortfolioProject,
  ServiceItem,
  CROStage,
  BeforeAfterItem,
  ProcessStep,
  Differentiator,
  MetricItem,
  TestimonialItem,
  FAQItem,
  SiteConfig,
} from '../types';

export const initialSiteConfig: SiteConfig = {
  profileName: 'Lola Paul',
  primaryTitle: 'Shopify Expert & E-commerce Growth Specialist',
  secondaryTitle: 'Shopify Manager • Shopify CRO Expert • Web Designer • E-commerce Consultant',
  bioHeadline: 'More Than a Store Designer. I Think About the Entire Customer Journey.',
  bioParagraph1:
    'Most e-commerce businesses hire one person for visual design, another for CRO, another for maintenance, and another for SEO. This fragmented approach causes disjointed customer experiences and leaked revenue.',
  bioParagraph2:
    'I approach your Shopify store as one unified sales engine. By aligning store architecture, user experience, product presentation, technical performance, and conversion strategy, every customer touchpoint is intentionally built to convert.',
  profileImage: expertPortraitImage,
  email: 'paulf6126@gmail.com',
  whatsapp: 'https://wa.me/2349131669148',
  bookingUrl: 'https://calendly.com',
  linkedinUrl: 'https://linkedin.com',
  fiverrUrl: 'https://www.fiverr.com/lola_paul',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  metrics: [
    {
      id: 'm1',
      value: '[X]+',
      label: 'Stores Worked On',
      description: 'End-to-end setups, redesigns, and optimization audits',
    },
    {
      id: 'm2',
      value: '[X]+',
      label: 'Projects Completed',
      description: 'CRO sprints, theme customizations, and migration tasks',
    },
    {
      id: 'm3',
      value: '[X] Years',
      label: 'Industry Experience',
      description: 'Specializing in Shopify ecosystem and e-commerce growth',
    },
    {
      id: 'm4',
      value: '[X]%',
      label: 'Conversion Potential',
      description: 'Targeted uplift through systematic funnel optimization',
    },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: 'shopify-management',
    title: 'Shopify Store Management',
    description:
      'Ongoing management, theme updates, product catalog optimization, inventory workflow, and continuous technical improvements.',
    iconName: 'Store',
    deliverables: [
      'Catalog & collection structuring',
      'App stack audit & maintenance',
      'Speed & theme health monitoring',
      'Seasonal campaigns & landing page launches',
    ],
    idealFor: 'Growing brands needing a dedicated, proactive technical partner.',
  },
  {
    id: 'shopify-cro',
    title: 'Shopify CRO',
    description:
      'Identify and remove conversion barriers across the homepage, collection discovery, product pages, cart drawer, and checkout flow.',
    iconName: 'TrendingUp',
    deliverables: [
      'Full-funnel conversion barrier audit',
      'Friction point mapping & user session analysis',
      'High-impact UX/UI design refinements',
      'A/B testing roadmap & implementation',
    ],
    idealFor: 'Stores with steady traffic that want to turn more visitors into buyers.',
  },
  {
    id: 'shopify-store-design',
    title: 'Shopify Store Design',
    description:
      'Design and development of modern, responsive Shopify stores engineered directly around the customer buying journey.',
    iconName: 'Layout',
    deliverables: [
      'Custom modern Shopify 2.0 theme architecture',
      'Mobile-first responsive UX/UI layouts',
      'Dynamic section blocks for easy in-house editing',
      'Design system aligned with brand identity',
    ],
    idealFor: 'Brands launching new stores or rebranding existing storefronts.',
  },
  {
    id: 'product-page-optimization',
    title: 'Product Page Optimization',
    description:
      'Restructure product pages with compelling visual hierarchy, trust signals, persuasive benefit sections, and seamless add-to-cart flows.',
    iconName: 'Sparkles',
    deliverables: [
      'Above-the-fold conversion architecture',
      'Sticky add-to-cart & variant selectors',
      'Social proof & review widget hierarchy',
      'Shipping, guarantees, and FAQ micro-modules',
    ],
    idealFor: 'Stores with high product page bounce rates or weak add-to-cart velocity.',
  },
  {
    id: 'ecommerce-seo',
    title: 'E-commerce SEO',
    description:
      'Improve technical crawlability, on-page product SEO, collection keyword hierarchy, metadata, structured schema, and search visibility.',
    iconName: 'Search',
    deliverables: [
      'Technical site health & crawl issue fixes',
      'Product & collection metadata optimization',
      'Schema markup for rich snippets & ratings',
      'Internal linking & site architecture strategy',
    ],
    idealFor: 'Stores looking to reduce paid ad dependency with organic buyer traffic.',
  },
  {
    id: 'store-audit',
    title: 'Comprehensive Store Audit',
    description:
      'In-depth review of your entire store from customer psychology, UX, CRO, SEO, and technical performance viewpoints.',
    iconName: 'FileCheck',
    deliverables: [
      'Detailed video walkthrough & written audit report',
      'Prioritized matrix of quick wins vs strategic projects',
      'Mobile usability & speed diagnostic',
      'Checkout leak & cart abandonment evaluation',
    ],
    idealFor: 'Store owners who need clarity on why their store is underperforming.',
  },
  {
    id: 'mobile-optimization',
    title: 'Mobile Optimization',
    description:
      'Streamline touch targets, thumb-zone ergonomics, mobile checkout simplicity, and quick navigation for mobile-first shoppers.',
    iconName: 'Smartphone',
    deliverables: [
      'Thumb-friendly navigation & search bar design',
      'Compressed high-resolution asset delivery',
      'Slide-out mobile cart drawer enhancements',
      'Frictionless 1-tap mobile payment integrations',
    ],
    idealFor: 'Stores where 70%+ of traffic originates from mobile ad channels.',
  },
  {
    id: 'growth-strategy',
    title: 'E-commerce Growth Strategy',
    description:
      'Develop actionable blueprints connecting customer acquisition, average order value (AOV) expansion, and repeat purchase retention.',
    iconName: 'Compass',
    deliverables: [
      'Cross-sell, bundle, and upsell strategy',
      'Post-purchase retention & email alignment',
      'Customer lifetime value (LTV) roadmap',
      'Tech stack consolidation & cost efficiency',
    ],
    idealFor: 'Founders looking to scale sustainably without bloated overhead.',
  },
];

export const portfolioProjectsData: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'Nordic Threads — Apparel & Lifestyle',
    industry: 'Fashion & Apparel',
    category: 'Shopify',
    imageUrl: storeApparelImg,
    services: ['Shopify Store Design', 'Mobile Optimization', 'CRO Architecture'],
    overview:
      'Store redesign focused on streamlining product discovery, mobile navigation, and visual storytelling for a high-converting Nordic apparel collection.',
    placeholderLabel: 'NORDIC THREADS STOREFRONT PREVIEW',
    caseStudy: {
      title: 'Full Store Redesign & Mobile UX Overhaul for Nordic Threads',
      client: 'Nordic Threads Apparel',
      industry: 'Fashion & Apparel',
      platform: 'Shopify 2.0 (Custom Dawn Architecture)',
      services: ['Shopify Design', 'Mobile UX', 'CRO Architecture', 'Collection Filtering'],
      timeline: '4 Weeks',
      challenge:
        'The existing store suffered from a cluttered multi-tier menu, slow mobile load times, and poor collection filtering that caused mobile visitors to drop off before reaching product pages.',
      strategy:
        'Audited mobile user sessions to identify friction points. Rebuilt the information architecture with streamlined swipeable categories, smart facet filtering, and sticky add-to-bag drawers.',
      theWork: {
        homepage: 'Clear hero messaging with direct category entries and featured bestsellers above the fold.',
        productPages: 'Clean image gallery layout, visual swatch pickers, size advisor modal, and transparent shipping timeline.',
        navigation: 'Mobile-first drawer with search auto-suggest and quick-link category visual tags.',
        mobileUX: 'Ergonomic bottom navigation bar and thumb-friendly touch targets.',
        cartAndCheckout: 'Slide-out cart drawer with dynamic free shipping progress threshold and 1-click upsell items.',
        seoAndTrust: 'Structured schema markup for apparel variants, verified customer reviews, and clear return policies.',
      },
      outcomes: [
        'Significantly reduced mobile bounce rates across top landing collections',
        'Streamlined product discovery path from 4 clicks down to 2 clicks',
        'Eliminated theme bloat and boosted mobile core web vitals',
        'Clean, scalable design system ready for seasonal collection drops',
      ],
    },
  },
  {
    id: 'project-2',
    title: 'Aura Botanics — Organic Skincare & Wellness',
    industry: 'Beauty & Skincare',
    category: 'CRO',
    imageUrl: storeSkincareImg,
    services: ['Shopify CRO', 'Product Page Optimization', 'Trust Architecture'],
    overview:
      'Conversion rate optimization project addressing customer hesitation around clinical purity, skin types, and subscription replenishment.',
    placeholderLabel: 'AURA BOTANICS PDP & CONVERSION FUNNEL',
    caseStudy: {
      title: 'Conversion Funnel & Product Page Optimization for Aura Botanics',
      client: 'Aura Botanics Clean Skincare',
      industry: 'Health & Beauty',
      platform: 'Shopify Plus',
      services: ['Shopify CRO', 'Product Page Redesign', 'Subscription Flow', 'Trust Signals'],
      timeline: '3 Weeks',
      challenge:
        'High ad spend driving traffic to product pages, but visitors hesitated due to complex ingredient lists and unclear subscription vs one-time purchase toggles.',
      strategy:
        'Redesigned the product page into a structured modular story: immediate benefit highlights, visual skin concern tags, simplified subscription selector, and verified dermatologist badges.',
      theWork: {
        homepage: 'Routine builder quiz teaser and social proof highlights from verified beauty editors.',
        productPages: 'Tabbed ingredient breakdowns, before/after customer photo galleries, and sticky ATC with guarantee badge.',
        navigation: 'Category browsing by skin concern (e.g. Dryness, Anti-aging, Sensitivity).',
        mobileUX: 'Simplified swipeable photo carousel and instant accordion toggles.',
        cartAndCheckout: 'Tiered gift-with-purchase progress bar and express checkout wallet priority.',
        seoAndTrust: 'Cruelty-free, organic certification badges, and rich FAQ schema on every product.',
      },
      outcomes: [
        'Enhanced buyer clarity on ingredient safety and product suitability',
        'Improved subscription adoption through transparent billing disclosures',
        'Decreased support inquiries regarding order shipping and ingredients',
        'Established consistent visual credibility across the entire catalog',
      ],
    },
  },
  {
    id: 'project-3',
    title: 'Oak & Linen — Home Decor & Sustainable Living',
    industry: 'Home Decor & Living',
    category: 'Web Design',
    imageUrl: storeHomedecorImg,
    services: ['Shopify Store Design', 'E-commerce SEO', 'Interactive Swatch Builder'],
    overview:
      'Modern, high-performance storefront designed to present curated sustainable Japandi furniture and home decor with clarity and aesthetic confidence.',
    placeholderLabel: 'OAK & LINEN DIGITAL FLAGSHIP STOREFRONT',
    caseStudy: {
      title: 'High-Ticket Aesthetic Storefront & SEO Architecture for Oak & Linen',
      client: 'Oak & Linen Sustainable Living',
      industry: 'Home Decor & Living',
      platform: 'Shopify 2.0',
      services: ['Custom Shopify Design', 'E-commerce SEO', 'Swatch Selectors', 'Free Shipping Bar'],
      timeline: '5 Weeks',
      challenge:
        'As a high-average-order-value brand, buyers required extensive material validation, dimension previews, and financing reassurance before buying.',
      strategy:
        'Created interactive feature breakdowns, live fabric swatch pickers, free shipping progress indicators, and downloadable room planning guides.',
      theWork: {
        homepage: 'Editorial living space hero banners, interior designer curated bundles, and free delivery threshold bar.',
        productPages: 'Interactive fabric & wood colorway swatches, room dimensions visualizer, and craftsmanship badges.',
        navigation: 'Segmented navigation for room types (Living, Dining, Bedroom) and curated designer capsules.',
        mobileUX: 'Fast-rendering technical accordions and sticky floating price summary.',
        cartAndCheckout: 'Transparent delivery calendar and white-glove assembly add-on option.',
        seoAndTrust: 'Targeted high-intent search keywords, collection guides, and in-depth buying guides.',
      },
      outcomes: [
        'Clear customer understanding of sustainable artisan materials and dimensions',
        'Higher engagement with multi-item room set bundles',
        'Top organic ranking on primary sustainable home decor search terms',
        'Intuitive CMS structure allowing the merchandising team to update collections instantly',
      ],
    },
  },
  {
    id: 'project-4',
    title: 'Arterra — Specialty Coffee Roasters',
    industry: 'Food & Beverage',
    category: 'E-commerce',
    imageUrl: storeCoffeeImg,
    services: ['Shopify Management', 'Subscription Flow', 'Cart Optimization'],
    overview:
      'Ongoing Shopify management and subscription optimization for an artisan coffee roaster scaling recurring club subscriptions.',
    placeholderLabel: 'ARTERRA COFFEE SUBSCRIPTION STORE',
    caseStudy: {
      title: 'Arterra Coffee Roastery Subscription & Catalog Optimization',
      client: 'Arterra Coffee Roasters',
      industry: 'Food & Beverage',
      platform: 'Shopify + ReCharge Integration',
      services: ['Shopify Store Management', 'Subscription UX', 'Roast Profile Modals', 'Speed Optimization'],
      timeline: 'Ongoing Support',
      challenge:
        'High customer churn and confusion over grind types and roast profiles on mobile devices during subscription checkout.',
      strategy:
        'Streamlined roast notes into visual flavor radar charts, created a 3-step coffee selector, and built a custom self-service subscription management hub.',
      theWork: {
        homepage: 'Roaster freshness guarantee counter and current seasonal single-origin beans showcase.',
        productPages: 'Flavor profile tags, brew method recommendations, and interactive grind selector preview.',
        navigation: 'Filter by roast level (Light, Medium, Dark) and single-origin region.',
        mobileUX: 'Rapid 1-tap subscription frequency selector (Every 2 Weeks, Every 3 Weeks, Monthly).',
        cartAndCheckout: 'Interactive Ajax cart drawer with dynamic delivery frequency toggle and bundle discounts.',
        seoAndTrust: 'Locally roasted origin stories, ethical sourcing certifications, and brew tutorials.',
      },
      outcomes: [
        'Smoother recurring subscription onboarding experience for coffee club members',
        'Drastic decrease in customer support tickets regarding grind selections',
        'Faster site performance after eliminating unused tracking apps',
        'Consistent weekly management and campaign landing page deployments',
      ],
    },
  },
  {
    id: 'project-5',
    title: 'Summit Ridge — Technical Outdoor Gear',
    industry: 'Sports & Activewear',
    category: 'SEO',
    imageUrl: storeOutdoorImg,
    services: ['E-commerce SEO', 'Speed Optimization', 'Collection UX'],
    overview:
      'Comprehensive technical SEO restructuring and collection taxonomy overhaul to capture high-intent non-branded organic trail traffic.',
    placeholderLabel: 'SUMMIT RIDGE OUTDOOR GEAR SEO OVERHAUL',
    caseStudy: {
      title: 'Technical E-commerce SEO & Site Architecture for Summit Ridge',
      client: 'Summit Ridge Outdoors',
      industry: 'Sports & Activewear',
      platform: 'Shopify 2.0',
      services: ['Technical SEO Audit', 'Collection Hierarchy', 'Core Web Vitals', 'Internal Linking'],
      timeline: '4 Weeks',
      challenge:
        'Duplicate content across tagged collection URLs, missing product schemas, and sluggish page speed impacting Google search rankings.',
      strategy:
        'Cleaned canonical URL architecture, configured automated structured data for product availability and price drops, and optimized theme assets to pass Core Web Vitals.',
      theWork: {
        homepage: 'Clean semantic heading hierarchy and crawlable collection links in the footer and main menus.',
        productPages: 'Optimized image alt tags, JSON-LD schema, waterproof spec icons, and size selectors.',
        navigation: 'Logical silo structure grouping activities (Alpine, Trail, Climbing) and technical membranes.',
        mobileUX: 'Instant mobile facet filtering without page reloads.',
        cartAndCheckout: 'Clean URL checkout flow with standard security seals.',
        seoAndTrust: 'Comprehensive eco-material sustainability reports and B-Corp credentials.',
      },
      outcomes: [
        'Resolved over 400 indexation and duplicate tag canonical issues',
        'Achieved green Core Web Vitals across mobile and desktop devices',
        'Increased non-brand keyword visibility across organic search engines',
        'Stronger organic discovery without relying entirely on paid ad channels',
      ],
    },
  },
  {
    id: 'project-6',
    title: 'Aurelia — Luxury Fine Jewellery',
    industry: 'Luxury & Jewelry',
    category: 'Shopify',
    imageUrl: storeJewelryImg,
    services: ['Shopify Store Design', 'Product Customization', 'Store Audit'],
    overview:
      'Elevated minimalist Shopify digital flagship featuring fine diamond collection galleries, certificate badges, and luxury clienteling.',
    placeholderLabel: 'AURELIA FINE JEWELLERY DIGITAL FLAGSHIP',
    caseStudy: {
      title: 'Luxury Goods Digital Flagship & Custom Jewelry UX for Aurelia',
      client: 'Aurelia Fine Jewellery Studio',
      industry: 'Luxury Accessories & Jewelry',
      platform: 'Shopify 2.0',
      services: ['Shopify Theme Customization', 'Fine Jewelry Galleries', 'Store Audit', 'VIP Experience'],
      timeline: '6 Weeks',
      challenge:
        'The previous website failed to reflect the handcrafted luxury quality of the products and lacked visual authenticity reassurance for high-ticket pieces.',
      strategy:
        'Created a bespoke dark luxury editorial aesthetic with diamond macro showcases, unboxing experience previews, and certificate of authenticity badges.',
      theWork: {
        homepage: 'Full-bleed luxury diamond craftsmanship imagery, press features, and curated signature piece guides.',
        productPages: 'High-res macro zoom, diamond cut and carat specifications, certificate of authenticity badges, and insured shipping guarantee.',
        navigation: 'Minimalist editorial navigation with refined typographic spacing (Engagement, Rings, Necklaces).',
        mobileUX: 'Silky smooth mobile touch gestures and responsive product zoom.',
        cartAndCheckout: 'Custom gift note input, complimentary bespoke packaging selector, and insured shipping toggle.',
        seoAndTrust: 'Ethical sourcing guarantee, London workshop heritage story, and verified buyer reviews.',
      },
      outcomes: [
        'Elevated brand perception matching boutique Bond Street retail flagship standards',
        'Seamless adoption of bespoke diamond engagement inquiries',
        'Higher average order value through integrated luxury packaging add-ons',
        'Dramatically improved user trust and buyer satisfaction ratings',
      ],
    },
  },
];

export const croStagesData: CROStage[] = [
  {
    id: 'traffic',
    name: '1. Traffic & Ingress',
    label: 'Traffic',
    description: 'Where visitors first meet your store from Meta, Google, TikTok, email, or direct search.',
    evaluationPoints: [
      'Traffic-to-landing-page intent alignment',
      'Ad promise vs hero message consistency (Message Match)',
      'First-view load speed and Core Web Vitals on cellular networks',
      'Referral source attribution and bounce triggers',
    ],
    commonFriction: [
      'Sending generic ad traffic to a crowded homepage instead of specific product/collection landers',
      'Slow mobile load causing 40%+ drop-off before first render',
      'Misleading ad copy that doesn’t match the on-page pricing or offer',
    ],
    lolaApproach:
      'I ensure every campaign lands on an uncluttered, fast-loading destination with immediate message continuity.',
  },
  {
    id: 'landing',
    name: '2. Landing Page & Hero',
    label: 'Landing Page',
    description: 'The critical 3-second window where visitors decide whether to explore or bounce.',
    evaluationPoints: [
      'Value proposition clarity (Who is this for? What problem does it solve?)',
      'Above-the-fold call-to-action visibility',
      'Credibility anchors (Trust badges, press mentions, reviews)',
      'Visual hierarchy and cognitive load balance',
    ],
    commonFriction: [
      'Vague brand slogans that fail to explain what is being sold',
      'Auto-rotating carousels that distract and push content below the fold',
      'Intrusive full-screen popups appearing immediately upon page load',
    ],
    lolaApproach:
      'I craft focused, distraction-free hero sections with unambiguous value props and direct shopping entry points.',
  },
  {
    id: 'product',
    name: '3. Product Page (PDP)',
    label: 'Product Page',
    description: 'The engine room of your store where purchase decisions are actually made.',
    evaluationPoints: [
      'High-resolution imagery & lifestyle context photos',
      'Price clarity, discount framing, and payment installment disclosures',
      'Prominent sticky Add-to-Cart button with clear stock status',
      'Structured benefit bullets vs boring generic manufacturer text',
      'Transparent shipping timelines and hassle-free return assurances',
    ],
    commonFriction: [
      'Hidden shipping costs causing decision paralysis',
      'Cluttered variant selectors confusing size/color options',
      'Lack of social proof or buried, unverified customer reviews',
    ],
    lolaApproach:
      'I design modular, objection-answering product pages that eliminate hesitation and inspire purchasing confidence.',
  },
  {
    id: 'cart',
    name: '4. Cart Experience',
    label: 'Cart Flow',
    description: 'The bridge between intent and transaction—where unexpected fees or friction cause abandonment.',
    evaluationPoints: [
      'Slide-out Ajax drawer cart vs jarring full-page redirect',
      'Dynamic free shipping progress threshold meter',
      'Contextual 1-click upsells and bundle recommendations',
      'Clear item quantity controls and item removal ergonomics',
    ],
    commonFriction: [
      'Confusing promo code boxes that encourage visitors to leave to search for coupon codes',
      'Surprise taxes or shipping rates revealed too late',
      'Clunky mobile cart editing where buttons overlap',
    ],
    lolaApproach:
      'I build smart slide-out cart drawers that incentivize higher order values while making checkout effortless.',
  },
  {
    id: 'checkout',
    name: '5. Checkout & Payment',
    label: 'Checkout',
    description: 'The final conversion hurdle where seamless security and speed matter most.',
    evaluationPoints: [
      '1-click digital wallet priority (Shop Pay, Apple Pay, Google Pay, PayPal)',
      'Minimal required form fields and autofill compatibility',
      'Visible security reassurance seals and support contact access',
      'Post-purchase confirmation clarity and order tracking anticipation',
    ],
    commonFriction: [
      'Forced account creation before allowing guest checkout',
      'Unsupported popular mobile payment methods',
      'Ambiguous delivery timeframes at the final shipping step',
    ],
    lolaApproach:
      'I streamline checkout steps, prioritize Shop Pay acceleration, and ensure bulletproof trust indicators throughout.',
  },
  {
    id: 'purchase',
    name: '6. Post-Purchase & Retention',
    label: 'Retention',
    description: 'Turning one-time buyers into loyal repeat brand advocates.',
    evaluationPoints: [
      'Clear order confirmation and tracking status email sync',
      'Timely automated post-delivery review requests',
      'Targeted replenishment reminders & loyalty rewards',
      'Seamless customer support access for size exchanges or inquiries',
    ],
    commonFriction: [
      'Radio silence after payment until package arrives',
      'Aggressive spam emails without personalized product recommendations',
      'Complicated return procedures that destroy brand trust',
    ],
    lolaApproach:
      'I align post-purchase touchpoints to maximize customer lifetime value (LTV) and encourage organic word-of-mouth.',
  },
];

export const beforeAfterCases: BeforeAfterItem[] = [
  {
    id: 'pdp-redesign',
    title: 'Product Page Conversion Architecture',
    subtitle: 'From Cluttered & Low-Trust to High-Converting Modular Experience',
    beforeDescription:
      'Generic theme with hidden shipping rates, messy variant drop-downs, weak social proof, and Add-to-Cart pushed below the mobile viewport.',
    afterDescription:
      'Above-the-fold value hierarchy, sticky Buy Bar on mobile, dynamic free shipping bar, verified review stars, and clear payment installment options.',
    afterImage: storeSkincareImg,
    keyImprovements: [
      'Sticky Add-to-Cart button with instant variant preview',
      'Visual benefit icons replacing 500 words of plain paragraph text',
      'Transparent estimated delivery dates badge right beneath the CTA',
      'Integrated Klarna / Shop Pay installment calculator',
    ],
  },
  {
    id: 'cart-drawer-upsell',
    title: 'Slide-Out Cart Drawer & Free Shipping Bar',
    subtitle: 'From Dead-End Page Redirect to Value-Driven Interactive Drawer',
    beforeDescription:
      'Old-fashioned full-page cart redirect that pulled buyers out of the shopping momentum with zero average-order-value incentives.',
    afterDescription:
      'Intelligent Ajax slide-out drawer featuring a live free shipping progress bar, quick-add complementary accessories, and 1-tap express checkout.',
    afterImage: storeCoffeeImg,
    keyImprovements: [
      'Real-time unlocked tier rewards ($50 = Free Shipping, $80 = Free Gift)',
      '1-click cross-sell item recommendations with size selector',
      'Visible return guarantee badge and secure payment seals',
      'Instant item quantity adjustment without page reload lag',
    ],
  },
  {
    id: 'mobile-navigation',
    title: 'Mobile Navigation & Discovery Architecture',
    subtitle: 'From Complex Dropdown Menus to Ergonomic Visual Browsing',
    beforeDescription:
      'Multi-level text menus that required 5 taps to find popular categories, with zero visual cues and buried search functionality.',
    afterDescription:
      'Modern visual category pills, instant predictive search with product thumbnails, and thumb-friendly bottom-anchored controls.',
    afterImage: storeApparelImg,
    keyImprovements: [
      'Search bar with live instant product results & popular queries',
      'Visual category badges for rapid swipe browsing',
      'One-tap access to customer accounts, saved wishlist, and cart',
      'Zero layout shift or accidental menu closing on mobile',
    ],
  },
];

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Deep Brand & Customer Alignment',
    description:
      'I dive into your brand, target customer psychology, current catalog, historical metrics, unit economics, and growth objectives.',
    keyActions: [
      'Review store history and traffic channels',
      'Understand target customer hesitations and buying triggers',
      'Audit existing tech stack and app dependencies',
      'Establish clear scope, priority deliverables, and milestones',
    ],
  },
  {
    number: '02',
    title: 'Audit',
    subtitle: 'Systematic Funnel Diagnostic',
    description:
      'I dissect the entire customer journey across desktop and mobile—pinpointing leaks from initial landing through checkout and post-purchase.',
    keyActions: [
      'Mobile UX and touchpoint usability audit',
      'Product page objection and trust gap analysis',
      'Cart abandonment and checkout friction assessment',
      'Technical SEO, speed, and Core Web Vitals benchmarking',
    ],
  },
  {
    number: '03',
    title: 'Strategy',
    subtitle: 'Prioritized Growth Roadmap',
    description:
      'Instead of an overwhelming list of generic tweaks, I build a prioritized action plan ranked by estimated business impact vs effort.',
    keyActions: [
      'Draft wireframes and conversion architecture blueprints',
      'Define clear UX/UI solutions for high-friction pages',
      'Establish SEO collection taxonomy and metadata guidelines',
      'Review plan together before writing a single line of code',
    ],
  },
  {
    number: '04',
    title: 'Implementation',
    subtitle: 'Precision Shopify Development',
    description:
      'I design, build, test, and integrate the improvements using clean, modular Shopify 2.0 theme architecture with zero bloat.',
    keyActions: [
      'Custom section and block development in Shopify 2.0',
      'Mobile-first responsive styling and typography hierarchy',
      'App integrations and clean event tracking verification',
      'Cross-browser QA on iOS, Android, macOS, and Windows',
    ],
  },
  {
    number: '05',
    title: 'Optimize',
    subtitle: 'Review & Continuous Scale',
    description:
      'After deployment, we review live customer interactions, evaluate feedback, and identify ongoing opportunities to compound performance.',
    keyActions: [
      'Post-launch performance and speed monitoring',
      'Analyze customer heatmaps and session recordings',
      'Provide staff walkthrough on managing new theme sections',
      'Ongoing maintenance, seasonal refreshes, and CRO sprints',
    ],
  },
];

export const differentiatorsData: Differentiator[] = [
  {
    title: 'Business-Focused',
    description:
      'Every design recommendation is tied to revenue, conversion rate, and average order value—never superficial visual trends that hurt usability.',
    iconName: 'Briefcase',
  },
  {
    title: 'Conversion-Focused',
    description:
      'Every section, button, and image on your store has an intentional role in guiding the customer from curiosity to confident checkout.',
    iconName: 'Target',
  },
  {
    title: 'Deep Shopify Expertise',
    description:
      'Native mastery of Shopify 2.0 Liquid, theme architectures, checkout extensibility, and the entire e-commerce app ecosystem.',
    iconName: 'Code',
  },
  {
    title: 'Customer-Centered',
    description:
      'Decisions are based on actual buyer behavior, mobile ergonomics, cognitive load reduction, and psychological trust triggers.',
    iconName: 'Users',
  },
  {
    title: 'Practical Execution',
    description:
      'You get both high-level growth strategy and hands-on technical execution. No passing the buck to third-party subcontractors.',
    iconName: 'Wrench',
  },
  {
    title: 'Long-Term Mindset',
    description:
      'I build clean, maintainable theme structures that your internal team can easily update for years without breaking the design.',
    iconName: 'ShieldCheck',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Client Review Slot 01',
    company: 'D2C Apparel Brand',
    role: 'Founder & CEO',
    content:
      'Lola’s approach transformed our mobile shopping experience. She identified checkout friction points we had overlooked for months and redesigned our product pages into a smooth, high-trust experience.',
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: 't2',
    clientName: 'Client Review Slot 02',
    company: 'Health & Wellness Store',
    role: 'Head of E-commerce',
    content:
      'Working with Lola eliminated the headache of coordinating separate designers, developers, and CRO consultants. She understands the complete customer journey and delivered clean Shopify 2.0 sections.',
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: 't3',
    clientName: 'Client Review Slot 03',
    company: 'Specialty Retail Brand',
    role: 'Managing Director',
    content:
      'The store audit Lola conducted was eye-opening. Every recommendation was clear, practical, and backed by solid conversion psychology. Truly an expert in the Shopify ecosystem.',
    rating: 5,
    isPlaceholder: false,
  },
];

export const techStackData = [
  { name: 'Shopify', category: 'Core Platform', highlight: true },
  { name: 'Shopify Plus', category: 'Enterprise', highlight: true },
  { name: 'Liquid & Theme 2.0', category: 'Architecture', highlight: true },
  { name: 'Webflow', category: 'Design/CMS', highlight: false },
  { name: 'WordPress / WooCommerce', category: 'Platform', highlight: false },
  { name: 'Google Analytics 4', category: 'Analytics', highlight: true },
  { name: 'Google Merchant Center', category: 'Product Feed', highlight: false },
  { name: 'Klaviyo', category: 'Email & Retention', highlight: true },
  { name: 'Meta Ads', category: 'Paid Traffic', highlight: false },
  { name: 'Google Ads', category: 'Search & Shopping', highlight: false },
  { name: 'Zapier & Make', category: 'Automation', highlight: false },
  { name: 'Technical SEO', category: 'Organic Growth', highlight: true },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of Shopify stores do you work with?',
    answer:
      'I work with direct-to-consumer (D2C) brands, boutique retailers, high-ticket technical products, apparel, skincare, food & beverage, and scaling stores across the Shopify and Shopify Plus ecosystem.',
  },
  {
    id: 'faq-2',
    question: 'Do you only design Shopify stores?',
    answer:
      'No. While custom store design is a major part of my work, I specialize in the complete growth ecosystem: Conversion Rate Optimization (CRO), product page restructuring, Shopify store management, technical SEO, and mobile usability optimization.',
  },
  {
    id: 'faq-3',
    question: 'Can you manage my Shopify store after the redesign?',
    answer:
      'Yes. I offer ongoing store management partnerships where I handle catalog updates, app maintenance, promotional landing page builds, speed audits, and continuous conversion improvements.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide standalone CRO audits?',
    answer:
      'Yes. If you are not ready for a full store redesign, a Comprehensive Store & CRO Audit is the best way to uncover exactly why visitors are dropping off, complete with a video walkthrough and a prioritized action roadmap.',
  },
  {
    id: 'faq-5',
    question: 'Can you work with an existing Shopify theme?',
    answer:
      'Absolutely. I frequently work within existing custom or commercial Shopify 2.0 themes (Dawn, Prestige, Impulse, Broadcast, etc.), refining architecture, adding custom section blocks, and cleaning up unnecessary apps without needing a ground-up rebuild.',
  },
  {
    id: 'faq-6',
    question: 'Can you optimize my product pages specifically?',
    answer:
      'Yes. Product pages are the core engine of your store. I optimize visual hierarchies, sticky Add-to-Cart bars, trust badges, review widgets, ingredient/spec tables, and shipping timeline clarity to maximize add-to-cart rates.',
  },
  {
    id: 'faq-7',
    question: 'Do you work with international clients?',
    answer:
      'Yes. I collaborate seamlessly with e-commerce brands across the US, UK, Canada, Australia, Europe, and worldwide using asynchronous updates, video reviews, and structured milestones.',
  },
  {
    id: 'faq-8',
    question: 'How does the project process work?',
    answer:
      'My process follows 5 structured steps: Discovery & Alignment → Funnel & Technical Audit → Strategy & Wireframing → Precision Shopify Development → Testing & Continuous Optimization.',
  },
  {
    id: 'faq-9',
    question: 'How long does a typical project take?',
    answer:
      'A focused CRO audit typically takes 3–5 business days. Targeted product page or cart optimizations take 1–2 weeks. Complete custom Shopify store redesigns typically range between 3–6 weeks depending on catalog complexity.',
  },
  {
    id: 'faq-10',
    question: 'Can you provide ongoing monthly Shopify growth consulting?',
    answer:
      'Yes. For select brands seeking continuous growth, I offer dedicated monthly retainer partnerships focusing on regular CRO testing sprints, theme enhancements, seasonal campaign executions, and technical health monitoring.',
  },
];
