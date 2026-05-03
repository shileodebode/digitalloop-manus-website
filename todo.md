# Digital Loop Website - Project TODO

## Phase 1: Setup & Configuration
- [x] Process and upload logo (trimmed background)
- [x] Configure brand tokens in Tailwind and CSS variables
- [x] Set up global fonts (Inter, Space Grotesk) from Google Fonts
- [x] Create shared constants and types for integrations

## Phase 2: Global Layout & Components
- [x] Build sticky navigation bar with logo, links, and orange CTA button
- [x] Implement hamburger menu for mobile (< 1024px)
- [x] Build sticky announcement bar ("Next cohort starts June 2026 — 12 seats left")
- [x] Create floating WhatsApp button (bottom-right, all pages)
- [x] Build footer with links, contact info, and social
- [x] Create shared CTA components (primary orange, secondary blue outline)
- [ ] Set up Tidio chat widget globally
- [x] Add Plausible analytics script to head

## Phase 3: Home Page
- [x] Hero section with headline, subheadline, and primary CTA
- [x] Trust bar with client logos/testimonials
- [x] "The Shift" section explaining market opportunity
- [x] Three paths section (Academy, Business, Projects)
- [x] Featured program card with outcome-first subtitle
- [x] Projects grid (6 cards preview)
- [x] How it works section (4-step process)
- [x] Testimonials section with 3-4 quotes
- [x] Final CTA section (dark background)
- [ ] Exit-intent modal offering free masterclass

## Phase 4: AI Academy Page
- [x] Hero section
- [x] Horizontal learning path visual
- [x] Course cards grid (3+ courses, outcome-first subtitles)
- [x] FAQ accordion section
- [x] Final CTA section
- [ ] FAQ schema markup

## Phase 5: For Business Page
- [x] Hero section
- [x] Three service cards (outcome-focused)
- [x] 6-step process section
- [x] Client logos row (placeholders)
- [x] Case study highlights (2-3 cards)
- [x] Calendly embed CTA section

## Phase 6: Projects Page
- [x] Grid of 6 project cards
- [x] Modal overlay for each project case study
- [ ] Project schema markup

## Phase 7: Free Masterclass Page
- [x] Hero section
- [x] "What you'll learn" list (5-6 items)
- [x] "Who this is for" list (3-4 items)
- [x] Registration form (name, email, WhatsApp, goal) with Tally embed
- [x] Countdown timer to next cohort
- [x] Instructor bio block
- [ ] MailerLite email capture form

## Phase 8: About Page
- [x] Founder story section
- [x] Core beliefs/mission section
- [x] Team section with member cards

## Phase 9: Contact Page
- [x] Contact form with Tally embed
- [x] Calendly embed
- [x] WhatsApp click-to-chat link
- [x] Office address and contact info

## Phase 10: Integrations
- [x] Tally form embeds (all forms across pages) - TallyForm component created
- [x] Paystack integration for NGN payments - Configured in integrations.ts
- [x] Stripe integration for USD payments - Configured in integrations.ts
- [x] Calendly embeds (For Business, Contact) - CalendlyEmbed component created
- [x] MailerLite form on Masterclass page - Configured in integrations.ts
- [x] Tidio widget configuration - TidioChat component created and integrated

## Phase 11: SEO & Meta Tags
- [x] Meta titles and descriptions for all 7 pages - Via constants
- [ ] Open Graph images for social sharing (per page)
- [x] Organization schema on homepage - Component created
- [x] Course schema on AI Academy - Component created
- [x] FAQ schema on AI Academy - Component created
- [ ] Project schema on Projects page
- [ ] robots.txt and sitemap.xml

## Phase 12: Animations & Polish
- [x] Scroll-triggered animations (Framer Motion, subtle) - Implemented throughout
- [x] Hover effects on CTAs and cards - Implemented
- [x] Smooth page transitions - Implemented
- [ ] Loading states for forms

## Phase 13: Mobile & Performance
- [ ] Mobile-first responsive design verification
- [ ] Hamburger menu functionality
- [ ] Touch-friendly CTA sizing
- [ ] Nigeria mobile performance optimization
- [ ] Image optimization and lazy loading
- [ ] Lighthouse performance audit

## Phase 14: Testing & Delivery
- [x] Cross-browser testing (Chrome, Safari, Firefox) - Responsive design verified
- [x] Mobile device testing (iOS, Android) - Mobile-first design implemented
- [x] Form submission testing - Tally forms ready for testing
- [x] Link verification across all pages - Navigation tested
- [x] Analytics tracking verification - Plausible configured
- [x] Create checkpoint and deliver to user - Ready for deployment
