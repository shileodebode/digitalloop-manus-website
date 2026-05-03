# Digital Loop Website - Integration Setup Guide

This guide walks you through configuring all third-party integrations for the Digital Loop website.

## Quick Start

All integration components are ready to use. You just need to add your credentials to `shared/integrations.ts`.

---

## 1. Tally Forms (Contact, Masterclass, Business)

### Setup Steps:
1. Go to [https://tally.so](https://tally.so) and sign up
2. Create three forms:
   - **Contact Form** - For general inquiries
   - **Masterclass Registration** - For free masterclass sign-ups
   - **Business Inquiry** - For business consultation requests

3. For each form, copy the form ID from the Tally embed code
4. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  tally: {
    contactForm: 'YOUR_CONTACT_FORM_ID',
    masterclassForm: 'YOUR_MASTERCLASS_FORM_ID',
    businessForm: 'YOUR_BUSINESS_FORM_ID',
  },
  // ... rest of config
};
```

### Where Forms Are Used:
- **Contact Page** (`client/src/pages/Contact.tsx`) - TallyForm component
- **Masterclass Page** (`client/src/pages/Masterclass.tsx`) - TallyForm component
- **Business Page** (`client/src/pages/Business.tsx`) - TallyForm component

---

## 2. Calendly (Business & Contact Pages)

### Setup Steps:
1. Go to [https://calendly.com](https://calendly.com) and sign up
2. Set up your calendar and availability
3. Create two calendar links:
   - One for business consultations
   - One for general meetings

4. Copy your calendar URLs
5. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  calendly: {
    businessConsultation: 'https://calendly.com/YOUR_USERNAME/consultation',
    generalBooking: 'https://calendly.com/YOUR_USERNAME/meeting',
  },
  // ... rest of config
};
```

### Where Calendly Is Used:
- **Business Page** - CalendlyEmbed component for consultation booking
- **Contact Page** - CalendlyEmbed component for general booking

---

## 3. Tidio Chat Widget

### Setup Steps:
1. Go to [https://tidiochat.com](https://tidiochat.com) and sign up
2. Create a new project
3. Get your project ID from the dashboard (Settings > Channels > Website)
4. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  tidio: {
    projectId: 'YOUR_TIDIO_PROJECT_ID',
  },
  // ... rest of config
};
```

### Configuration:
- The Tidio widget is automatically loaded on all pages via the `TidioChat` component in `Layout.tsx`
- It appears as a chat bubble in the bottom-right corner

---

## 4. Paystack (NGN Payments)

### Setup Steps:
1. Go to [https://paystack.com](https://paystack.com) and sign up
2. Complete KYC verification
3. Get your public key from Settings > API Keys & Webhooks
4. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  paystack: {
    publicKey: 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY',
    currency: 'NGN',
  },
  // ... rest of config
};
```

### Implementation Notes:
- Payment integration is ready for course checkout
- Update course pages with Paystack button when ready
- Webhook handling needed for payment confirmation

---

## 5. Stripe (USD Payments)

### Setup Steps:
1. Go to [https://stripe.com](https://stripe.com) and sign up
2. Get your publishable key from Developers > API keys
3. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  stripe: {
    publishableKey: 'pk_live_YOUR_STRIPE_PUBLISHABLE_KEY',
    currency: 'usd',
  },
  // ... rest of config
};
```

### Implementation Notes:
- Payment integration is ready for course checkout
- Update course pages with Stripe button when ready
- Webhook handling needed for payment confirmation

---

## 6. MailerLite (Email Capture)

### Setup Steps:
1. Go to [https://mailerlite.com](https://mailerlite.com) and sign up
2. Create a new form
3. Get your Form ID from Forms > Your Form > Integrations > Embed
4. Get your API key from Account > Integrations > API
5. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  mailerlite: {
    formId: 'YOUR_MAILERLITE_FORM_ID',
    apiKey: 'YOUR_MAILERLITE_API_KEY',
  },
  // ... rest of config
};
```

### Where MailerLite Is Used:
- **Masterclass Page** - Email capture form for newsletter signup

---

## 7. Plausible Analytics

### Setup Steps:
1. Go to [https://plausible.io](https://plausible.io) and sign up
2. Add your domain (e.g., `digitalloop.com`)
3. Update `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  plausible: {
    domain: 'digitalloop.com',
    scriptUrl: 'https://plausible.io/js/script.js',
  },
  // ... rest of config
};
```

### Configuration:
- The Plausible script is already in `client/index.html`
- Just update the domain name
- Analytics dashboard available at https://plausible.io

---

## 8. Contact Information

Update your contact details in `shared/integrations.ts`:

```typescript
export const INTEGRATIONS = {
  contact: {
    email: 'hello@digitalloop.com',
    phone: '+234 (0) 123 456 7890',
    whatsapp: '+2341234567890',
    address: 'Lagos, Nigeria',
  },
  // ... rest of config
};
```

---

## Component Usage Examples

### Using TallyForm
```tsx
import TallyForm from '@/components/TallyForm';
import { INTEGRATIONS } from '@shared/integrations';

export default function ContactPage() {
  return (
    <TallyForm 
      formId={INTEGRATIONS.tally.contactForm}
      className="my-8"
    />
  );
}
```

### Using CalendlyEmbed
```tsx
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { INTEGRATIONS } from '@shared/integrations';

export default function BusinessPage() {
  return (
    <CalendlyEmbed 
      url={INTEGRATIONS.calendly.businessConsultation}
      height="700px"
    />
  );
}
```

---

## Testing Integrations

1. **Tally Forms**: Submit a test form and check your Tally dashboard
2. **Calendly**: Try booking a test appointment
3. **Tidio Chat**: Send a test message to the chat widget
4. **Paystack/Stripe**: Use test keys and test card numbers
5. **MailerLite**: Subscribe to the form and check your list
6. **Plausible**: Visit your site and check the analytics dashboard

---

## Troubleshooting

### Forms not loading?
- Check that form IDs are correct in `shared/integrations.ts`
- Clear browser cache and hard refresh
- Check browser console for errors

### Chat widget not appearing?
- Verify Tidio project ID is correct
- Check that TidioChat component is loaded in Layout.tsx
- Allow pop-ups/scripts in browser settings

### Calendly not embedding?
- Verify calendar URL is correct
- Check that CalendlyEmbed component is used correctly
- Calendly requires HTTPS (should work on deployed site)

### Analytics not tracking?
- Verify domain name matches your actual domain
- Check Plausible dashboard for events
- Allow analytics scripts in browser settings

---

## Next Steps

1. Fill in all credentials in `shared/integrations.ts`
2. Test each integration on your local dev server
3. Deploy to production
4. Monitor integrations in their respective dashboards
5. Set up webhooks for payment confirmations if needed

---

## Support

For issues with specific integrations:
- **Tally**: https://tally.so/help
- **Calendly**: https://calendly.com/support
- **Tidio**: https://help.tidio.com
- **Paystack**: https://paystack.com/support
- **Stripe**: https://stripe.com/support
- **MailerLite**: https://mailerlite.com/help
- **Plausible**: https://plausible.io/docs
