# 5SeasSolution Business Website

## Overview
A modern, professional, multi-page business website for **5SeasSolution** — a complete business consultancy offering IT, Marketing, CA, Virtual Office, and Creative Services.

## Architecture
- **Full-stack TypeScript** monorepo
- **Frontend**: React 18 + Vite + Tailwind CSS + Shadcn UI + Framer Motion + Wouter
- **Backend**: Express 5 (serves both API and Vite frontend in dev mode)
- **Database**: PostgreSQL via Drizzle ORM (contact_messages table)
- **Routing**: Wouter (client-side SPA routing), Express (server-side API)

## Project Structure
```
├── client/
│   ├── index.html           # App entry with SEO meta tags
│   └── src/
│       ├── App.tsx          # Router with all page routes
│       ├── pages/
│       │   ├── home.tsx     # Home page (Hero, Stats, About, Services, Portfolio, Testimonials, Features, CTA, Contact)
│       │   ├── about.tsx    # About page
│       │   ├── contact.tsx  # Contact page (standalone)
│       │   └── services/
│       │       ├── virtual-office.tsx    # Virtual Office service page
│       │       ├── ca-services.tsx       # CA Services page
│       │       ├── it-services.tsx       # IT Services page
│       │       ├── digital-marketing.tsx # Digital Marketing page (with funnel)
│       │       └── branding.tsx          # Designing & Branding page
│       ├── components/
│       │   ├── navbar.tsx           # Multi-page nav with Services dropdown
│       │   ├── hero.tsx             # Hero section
│       │   ├── about.tsx            # About section
│       │   ├── services.tsx         # Services grid (links to service pages)
│       │   ├── features.tsx         # Why Us section
│       │   ├── contact.tsx          # Contact form section
│       │   ├── footer.tsx           # Footer with page links
│       │   ├── floating-whatsapp.tsx
│       │   ├── stats.tsx            # Trust indicators (100+ clients, etc.)
│       │   ├── testimonials.tsx     # Client testimonials grid
│       │   ├── portfolio.tsx        # Featured projects section
│       │   ├── cta-section.tsx      # Call-to-action section
│       │   └── service-page-layout.tsx  # Reusable service page template
│       └── ui/                      # Shadcn UI primitives
├── server/                          # Express backend
│   ├── index.ts    # Entry point (port 5000)
│   ├── routes.ts   # POST /api/contact
│   ├── db.ts       # PostgreSQL + Drizzle
│   └── storage.ts  # Data access layer
├── shared/
│   ├── schema.ts   # contact_messages table + Zod schemas
│   └── routes.ts   # API types and contract
└── dist/           # Production build output
```

## Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/contact` | Contact |
| `/services/virtual-office` | Virtual Office |
| `/services/ca-services` | CA Services |
| `/services/it-services` | IT Services |
| `/services/digital-marketing` | Digital Marketing (with full funnel) |
| `/services/branding` | Designing & Branding |

## Key Features
- Multi-page SPA with active nav link highlighting
- Services dropdown in navbar
- Stats section: 100+ clients, 250+ projects, 5+ years, 24/7 support
- Portfolio: 6 featured project cards
- Testimonials: 6 client reviews
- Digital Marketing page: full lead generation funnel explanation
- Contact form with PostgreSQL persistence and toast notification
- WhatsApp floating button
- Fully mobile responsive

## Development
- **Run**: `npm run dev` — starts Express + Vite dev server on port 5000
- **Build**: `npm run build`
- **DB Push**: `npm run db:push`
- **Type Check**: `npm run check`

## Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (Replit provisioned)

## Deployment
- Target: **autoscale**
- Build: `npm run build`
- Run: `node dist/index.cjs`
