# Digital Loop Int'l Limited - Marketing Website

A production-quality marketing website for Digital Loop, an African AI education and consulting company. Built with React 19, TypeScript, Tailwind CSS 4, and Express.js.

## 🚀 Quick Start

### Development
```bash
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:3000`

### Build & Deploy
```bash
pnpm build
pnpm start
```

---

## 📋 Project Structure

```
client/
├── src/
│   ├── pages/           # 7 main pages (Home, Academy, Business, Projects, Masterclass, About, Contact)
│   ├── components/      # Reusable components (Navigation, Footer, CTAs, Forms, etc.)
│   ├── contexts/        # React contexts
│   ├── lib/             # tRPC client setup
│   ├── App.tsx          # Main app with routing
│   └── index.css        # Global styles with brand colors
├── public/              # Static assets (favicon, robots.txt)
└── index.html           # HTML template with Plausible analytics

server/
├── routers.ts           # tRPC procedures
├── db.ts                # Database queries
└── _core/               # Framework plumbing (OAuth, context, etc.)

shared/
├── constants.ts         # Brand colors, navigation links, content
└── integrations.ts      # Third-party service credentials

drizzle/
└── schema.ts            # Database schema

---

## 🎨 Design System

### Brand Colors
- **Primary**: #F15A29 (Orange)
- **Secondary**: #1C8ACB (Blue)
- **Accent/Dark**: #0B2545 (Dark Blue)
- **Background**: #FFFFFF & #F5F7FA (Light Gray)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Components
- Rounded corners: 8–12px
- Soft shadows throughout
- Generous white space
- Subtle scroll animations (Framer Motion)

---

## 📄 Pages Overview

### 1. Home (`/`)
- Hero section with primary CTA
- Trust bar with client logos
- "The Shift" market opportunity section
- Three paths (Academy, Business, Projects)
- Featured program card
- Projects grid preview (6 cards)
- How it works (4-step process)
- Testimonials section
- Final CTA with dark background
- Exit-intent modal offering free masterclass

### 2. AI Academy (`/academy`)
- Hero section
- Horizontal learning path visual
- Course cards grid (outcome-first subtitles)
- FAQ accordion
- Final CTA section
- FAQ schema markup

### 3. For Business (`/business`)
- Hero section
- Three service cards
- 6-step process visualization
- Client logos row
- Case study highlights (2-3 cards)
- Calendly embed for consultation booking

### 4. Projects (`/projects`)
- Grid of 6 project cards
- Modal overlays with full case studies
- Project details and outcomes

### 5. Free Masterclass (`/masterclass`)
- Hero section
- "What you'll learn" list
- "Who this is for" list
- Registration form (Tally embed)
- Countdown timer to next cohort
- Instructor bio block
- Email capture (MailerLite)

### 6. About (`/about`)
- Founder story section
- Core beliefs/mission
- Team member cards

### 7. Contact (`/contact`)
- Contact form (Tally embed)
- Calendly embed for booking
- WhatsApp click-to-chat link
- Office address and contact info

---

## 🔌 Integrations

All integrations are configured in `shared/integrations.ts`. See `INTEGRATION_SETUP.md` for detailed setup instructions.

### Forms
- **Tally** - Contact, Masterclass, and Business inquiry forms
  - Component: `TallyForm`
  - Usage: Contact, Masterclass, Business pages

### Booking
- **Calendly** - Consultation and meeting scheduling
  - Component: `CalendlyEmbed`
  - Usage: Business and Contact pages

### Chat
- **Tidio** - AI-powered customer support chat
  - Component: `TidioChat`
  - Usage: Global (all pages)

### Payments
- **Paystack** - NGN payments for Nigerian customers
  - Configuration: `shared/integrations.ts`
  - Ready for course checkout integration

- **Stripe** - USD payments for international customers
  - Configuration: `shared/integrations.ts`
  - Ready for course checkout integration

### Email
- **MailerLite** - Email capture and newsletter
  - Usage: Masterclass page
  - Configuration: `shared/integrations.ts`

### Analytics
- **Plausible** - Privacy-focused analytics
  - Script: `client/index.html`
  - Configuration: `shared/integrations.ts`

---

## 🔐 Environment Variables

The following environment variables are automatically injected by Manus:

```
DATABASE_URL              # MySQL/TiDB connection string
JWT_SECRET                # Session cookie signing secret
VITE_APP_ID              # Manus OAuth application ID
OAUTH_SERVER_URL         # Manus OAuth backend URL
VITE_OAUTH_PORTAL_URL    # Manus login portal URL
OWNER_OPEN_ID            # Owner's Manus ID
OWNER_NAME               # Owner's name
BUILT_IN_FORGE_API_URL   # Manus built-in APIs URL
BUILT_IN_FORGE_API_KEY   # Manus built-in APIs key
VITE_FRONTEND_FORGE_API_KEY    # Frontend Forge API key
VITE_FRONTEND_FORGE_API_URL    # Frontend Forge API URL
VITE_ANALYTICS_ENDPOINT  # Analytics endpoint
VITE_ANALYTICS_WEBSITE_ID # Analytics website ID
```

---

## 📱 Mobile Optimization

The website is built mobile-first with special optimization for Nigeria:

- Responsive design (< 1024px: hamburger menu)
- Touch-friendly CTA buttons (thumb-reachable)
- Optimized image loading for slow networks
- Lightweight animations (Framer Motion)
- Efficient CSS (Tailwind 4)

---

## 🧪 Testing

Run tests with:
```bash
pnpm test
```

Tests are located in `server/*.test.ts` using Vitest.

---

## 🚢 Deployment

### Via Manus UI
1. Create a checkpoint in the Management UI
2. Click the "Publish" button
3. Configure custom domain if needed

### Manual Deployment
```bash
pnpm build
pnpm start
```

---

## 📚 Key Features

✅ **All 7 Pages** - Complete marketing site with all required sections
✅ **Sticky Navigation** - Translucent header with mobile menu
✅ **Announcement Bar** - "Next cohort starts June 2026 — 12 seats left"
✅ **Floating WhatsApp** - Fixed button on all pages
✅ **Exit-Intent Modal** - Offers free masterclass on homepage
✅ **Scroll Animations** - Subtle Framer Motion effects
✅ **Form Integrations** - Tally forms on Contact, Masterclass, Business
✅ **Booking Integration** - Calendly embeds for scheduling
✅ **Chat Widget** - Tidio for customer support
✅ **Payment Ready** - Paystack (NGN) and Stripe (USD) configured
✅ **Email Capture** - MailerLite for newsletter signup
✅ **Analytics** - Plausible privacy-focused tracking
✅ **SEO Ready** - Meta tags, schemas, Open Graph images
✅ **Responsive Design** - Mobile-first, optimized for Nigeria
✅ **Brand Consistent** - Full color system and typography applied

---

## 🛠️ Customization

### Update Brand Colors
Edit `client/src/index.css` and `shared/constants.ts`

### Update Content
Edit `shared/constants.ts` for navigation, contact info, and metadata
Edit individual page files in `client/src/pages/` for page content

### Update Integrations
Edit `shared/integrations.ts` with your credentials
See `INTEGRATION_SETUP.md` for detailed instructions

---

## 📖 Documentation

- `INTEGRATION_SETUP.md` - Complete integration setup guide
- `shared/constants.ts` - Brand constants and navigation
- `shared/integrations.ts` - Integration credentials
- Individual page files in `client/src/pages/` - Page-specific content

---

## 🤝 Support

For issues or questions:
1. Check the relevant documentation file
2. Review the component code in `client/src/components/`
3. Check the page implementation in `client/src/pages/`
4. Review integration setup in `INTEGRATION_SETUP.md`

---

## 📄 License

© 2026 Digital Loop Int'l Limited. All rights reserved.
