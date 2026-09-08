<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# showcase-pro

Next.js 16.3.4 App Router app (React 19, TypeScript strict, Tailwind v4). Single-page template ("ShowcasePro") for photographers, barbers, coaches, freelancers, agencies and service providers. All visible content is in French; demo profile is a Lyon-based photographer.

## Commands
- `npm run dev` — dev server on http://localhost:3000 (Turbopack)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (only script that exists; **no** test or typecheck script)
- Typecheck manually: `npx tsc --noEmit`

## Conventions & gotchas
- App Router in `app/` (routes = `app/**/page.tsx`, layout in `app/layout.tsx`; `/mentions-legales` and `/politique-de-confidentialite` are real pages).
- **Tailwind v4** — CSS-first config, **no** `tailwind.config.*` file. Theme lives in `app/globals.css` via `@import "tailwindcss"` and `@theme` (brand colors: `--color-brand-*`, background: `--color-cream`, dark: `--color-coal`). Configure there, not in a config file.
- Path alias `@/*` → repo root (`tsconfig.json`).
- `next/font` in `app/layout.tsx`: Geist + Geist Mono + Fraunces (display serif); variables exposed as `--font-geist-sans`, `--font-geist-mono`, `--font-fraunces`.
- **lucide-react removed brand icons** (Facebook/Instagram/LinkedIn/WhatsApp): use the custom SVG components in `components/icons.tsx`, never import brand icons from lucide.
- Remote image hosts must be whitelisted in `next.config.ts` (`images.remotePatterns`, currently `images.unsplash.com`). Do **not** set `search` on a pattern or URLs with query strings (e.g. `?auto=format…`) will 400.

## Template structure
- **Customization point:** all site content lives in `config/site.ts` (name, profession, contact, WhatsApp number, booking URL, socials, nav, stats). Change this file to rebrand for a new client. Section content (projects, services, pricing, testimonials, process) lives in `data/*.ts`. Brand colors are the `--color-brand-*` scale in `app/globals.css`.
- Sections are standalone components in `components/` (`Hero`, `Portfolio`, `Services`, `Pricing`, `About`, `Process`, `Testimonials`, `Contact`, `CTASection`, `Header`, `Footer`, `WhatsAppButton`), assembled in `app/page.tsx`. `Header`/`Footer`/`WhatsAppButton` and the `Person`/`ProfessionalService` JSON-LD live in `app/layout.tsx`.
- Client components: `Header`, `Portfolio` (filters + lightbox), `ContactForm`, `Reveal` (IntersectionObserver fade-in). Everything else is a server component.
- Contact form posts to `/api/contact` (works out of the box); set `CONTACT_WEBHOOK_URL` to forward requests to a real service/email API.
- Anchor navigation uses plain `<a href="#...">`; sections use `scroll-mt-24`, the html has `scroll-smooth`.
