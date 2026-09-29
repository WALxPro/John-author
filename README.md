# John T. Rhoads — Author Website

Cinematic author site for **Hope for the Wolf** (Book One).
Vite · React 18 · React Router 6 · Tailwind CSS 3 · GSAP + ScrollTrigger (`@gsap/react`) · Framer Motion

## Quick start
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview
```
Add the image files to `public/assets/` (see the README there).

## Structure
```
src/
├── App.jsx                 # providers + layout + routes only
├── main.jsx
├── config/                 # links, assets, navigation, site constants
├── data/                   # book copy, FAQs, reviews, pack cards, author content
├── context/                # AppContext (motion prefs, loader state), ToastContext
├── hooks/                  # useReveal, useEyeTracking, useTilt, useMediaQuery, usePageTitle
├── lib/                    # gsap setup + refresh helper, SVG path generators
├── routes/AppRoutes.jsx    # AnimatePresence + routes
├── components/
│   ├── layout/             # Header, MobileMenu, Footer, Layout, PageTransition
│   ├── ui/                 # Button, Logo, SmartImage, Icon, SocialLinks, forms, Typewriter
│   ├── effects/            # Loader, Cursor, Particles, Aurora, Stars, Grain, Wolf, Forest…
│   ├── book/               # BookCover3D, CoverFallback
│   └── shared/             # PageHero, BuyCTA, RetailerMarquee, FeatureCard, ClawMarks
├── sections/               # home/ book/ author/ contact/ faq/  — page sections
├── pages/                  # Home, AboutBook, AboutAuthor, Contact, Faqs, NotFound
└── styles/                 # base, components, effects, sections (+ Tailwind layers)
```

## Where to edit
- **All external links / email** → `src/config/links.js`
- **Image paths** → `src/config/assets.js`
- **Copy** → `src/data/*`
- **Newsletter / contact submission** → `NewsletterForm.jsx`, `ContactForm.jsx` (frontend only: plug in Formspree, Netlify Forms, Mailchimp, etc.)

## Animation rules followed
- Reveals start at `top 85–88%`, run 0.5–1s, `once: true`, and never re-hide content.
- Scrub is used only for parallax, the book teaser and the Enter the Pack story.
- Pins are only on the Home book teaser (short) and Enter the Pack (distance = measured track width).
- `gsap.matchMedia()` disables pins/parallax on mobile and for `prefers-reduced-motion`.
- All GSAP code runs through `useGSAP()` for automatic cleanup.

## Deploy
SPA fallbacks are included for Netlify (`public/_redirects`) and Vercel (`vercel.json`).

## Placeholders to replace
Reader reviews, author biography, author cards, timeline milestones, contact email and retailer/social URLs.
