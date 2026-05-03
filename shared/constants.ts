// Brand Colors
export const BRAND_COLORS = {
  primary: '#F15A29', // Orange
  secondary: '#1C8ACB', // Blue
  accent: '#0B2545', // Dark Blue
  background: '#FFFFFF',
  lightBg: '#F5F7FA',
  border: '#E8EBF0',
  muted: '#6B7280',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/234',
  facebook: 'https://facebook.com/digitalloop',
  twitter: 'https://twitter.com/digitalloop',
  linkedin: 'https://linkedin.com/company/digitalloop',
  instagram: 'https://instagram.com/digitalloop',
} as const;

// Contact Info
export const CONTACT_INFO = {
  email: 'hello@digitalloop.com',
  phone: '+234 (0) XXX XXX XXXX',
  address: 'Lagos, Nigeria',
  whatsapp: '+234',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'AI Academy', href: '/academy' },
  { label: 'For Business', href: '/business' },
  { label: 'Projects', href: '/projects' },
  { label: 'Free Masterclass', href: '/masterclass' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Announcement Bar
export const ANNOUNCEMENT_TEXT = 'Next cohort starts June 2026 — 12 seats left';

// Masterclass Cohort Date
export const MASTERCLASS_DATE = new Date('2026-06-01');

// Integrations
export const INTEGRATIONS = {
  tallyForm: 'https://tally.so/r/form-id', // Replace with actual Tally form ID
  calendly: 'https://calendly.com/digitalloop', // Replace with actual Calendly URL
  paystack: {
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '',
    currency: 'NGN',
  },
  stripe: {
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    currency: 'USD',
  },
  tidio: {
    projectId: import.meta.env.VITE_TIDIO_PROJECT_ID || '',
  },
  mailerlite: {
    formId: import.meta.env.VITE_MAILERLITE_FORM_ID || '',
  },
  plausible: {
    domain: 'digital-loop.manus.space',
  },
} as const;

// SEO
export const SEO = {
  siteTitle: 'Digital Loop Int\'l Limited - AI Education & Consulting',
  siteDescription: 'AI education and consulting for African businesses. Learn AI, transform your business, and join the digital revolution.',
  siteUrl: 'https://digital-loop.manus.space',
  twitterHandle: '@digitalloop',
} as const;
