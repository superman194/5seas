# 5SeasSolution Business Website

## Overview
A modern, professional, and responsive business website for **5SeasSolution** — a complete business consultancy offering IT, Marketing, CA, Virtual Office, and Creative Services.

## Architecture
- **Full-stack TypeScript** monorepo
- **Frontend**: React 18 + Vite + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: Express 5 (serves both API and Vite frontend in dev mode)
- **Database**: PostgreSQL via Drizzle ORM
- **Routing**: Wouter (client-side), Express (server-side API)

## Project Structure
```
├── client/          # React frontend (Vite root)
│   ├── src/
│   │   ├── components/  # UI components (including shadcn/ui primitives)
│   │   ├── pages/       # Page components (home, not-found)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions and API clients
│   └── index.html
├── server/          # Express backend
│   ├── index.ts     # Server entry point (port 5000)
│   ├── routes.ts    # API routes
│   ├── db.ts        # PostgreSQL + Drizzle setup
│   ├── storage.ts   # Data access layer
│   ├── vite.ts      # Vite dev middleware integration
│   └── static.ts    # Static file serving (production)
├── shared/          # Shared code between frontend and backend
│   ├── schema.ts    # Drizzle + Zod schemas
│   └── routes.ts    # Shared route constants
├── script/          # Build scripts
└── dist/            # Production build output
```

## Key Features
- Hero section with call-to-action buttons
- Services showcase
- About section
- Contact form (saves to PostgreSQL `contact_messages` table)
- Smooth scroll animations via Framer Motion

## Development
- **Run**: `npm run dev` — starts Express + Vite dev server on port 5000
- **Build**: `npm run build` — builds frontend with Vite + bundles server
- **DB Push**: `npm run db:push` — apply schema changes to database
- **Type Check**: `npm run check`

## Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (provisioned by Replit)
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` — individual DB credentials

## Deployment
- Target: **autoscale**
- Build command: `npm run build`
- Run command: `node dist/index.cjs`
