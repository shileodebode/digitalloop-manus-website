/**
 * Integration Configuration
 * Replace placeholder values with your actual credentials
 */

export const INTEGRATIONS = {
  // Tally Forms - Replace with your form IDs from https://tally.so
  tally: {
    // Contact form on Contact page
    contactForm: 'nPXjqL',
    // Masterclass registration form
    masterclassForm: 'mZx8Qp',
    // Business inquiry form
    businessForm: 'wAe2Kv',
  },

  // Calendly - Replace with your Calendly URL
  calendly: {
    // For Business page consultation booking
    businessConsultation: 'https://calendly.com/digitalloop/consultation',
    // For Contact page general booking
    generalBooking: 'https://calendly.com/digitalloop/meeting',
  },

  // Tidio Chat Widget - Replace with your project ID
  tidio: {
    projectId: 'YOUR_TIDIO_PROJECT_ID', // Get from https://tidiochat.com
  },

  // Paystack - For NGN payments
  paystack: {
    publicKey: 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your public key
    currency: 'NGN',
  },

  // Stripe - For USD payments
  stripe: {
    publishableKey: 'pk_live_YOUR_STRIPE_PUBLISHABLE_KEY', // Replace with your key
    currency: 'usd',
  },

  // MailerLite - For email capture
  mailerlite: {
    formId: 'YOUR_MAILERLITE_FORM_ID', // Get from https://mailerlite.com
    apiKey: 'YOUR_MAILERLITE_API_KEY',
  },

  // Plausible Analytics
  plausible: {
    domain: 'digitalloop.com', // Replace with your domain
    scriptUrl: 'https://plausible.io/js/script.js',
  },

  // Contact Information
  contact: {
    email: 'hello@digitalloop.com',
    phone: '+234 (0) 123 456 7890',
    whatsapp: '+2341234567890', // WhatsApp number without + for URL
    address: 'Lagos, Nigeria',
  },
};

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. TALLY FORMS:
 *    - Go to https://tally.so and create three forms
 *    - Copy the form IDs and replace the placeholders above
 *    - Forms are already integrated in Contact, Masterclass, and Business pages
 * 
 * 2. CALENDLY:
 *    - Go to https://calendly.com and set up your calendar
 *    - Copy your calendar URLs and replace the placeholders
 *    - Calendly embeds are on Business and Contact pages
 * 
 * 3. TIDIO CHAT:
 *    - Sign up at https://tidiochat.com
 *    - Get your project ID from the dashboard
 *    - Replace 'YOUR_TIDIO_PROJECT_ID' with your actual ID
 * 
 * 4. PAYSTACK:
 *    - Sign up at https://paystack.com
 *    - Get your public key from Settings > API Keys & Webhooks
 *    - Replace 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY'
 * 
 * 5. STRIPE:
 *    - Sign up at https://stripe.com
 *    - Get your publishable key from Developers > API keys
 *    - Replace 'pk_live_YOUR_STRIPE_PUBLISHABLE_KEY'
 * 
 * 6. MAILERLITE:
 *    - Sign up at https://mailerlite.com
 *    - Create a form and get the form ID
 *    - Get your API key from Account > Integrations
 * 
 * 7. PLAUSIBLE ANALYTICS:
 *    - Sign up at https://plausible.io
 *    - Replace 'digitalloop.com' with your actual domain
 *    - Script is already in client/index.html
 */
