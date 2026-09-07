<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# pro-service

Next.js 16.3.4 App Router app (React 19, TypeScript strict). Single-page marketing site ("ProService") — a reusable template for local service businesses. All visible content is in French.

## Commands
- `npm run dev` — dev server on http://localhost:3000 (Turbopack)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (only script that exists; **no** test or typecheck script)
- Typecheck manually: `npx tsc --noEmit`

## Conventions & gotchas
- App Router in `app/` (routes = `app/**/page.tsx`, layout in `app/layout.tsx`). Root `layout.tsx` uses typed `LayoutProps<"/">` from Next 16.
- **Tailwind v4** — CSS-first config, **no** `tailwind.config.*` file. Global styles/theme live in `app/globals.css` via `@import "tailwindcss"` and `@theme inline`. Configure theme there, not in a config file.
- Path alias `@/*` → repo root (`tsconfig.json`).
- `next/font` (Geist) is loaded in `app/layout.tsx`; font variables exposed as `--font-geist-sans` / `--font-geist-mono`.

## Template structure
- **Customization point:** all site content lives in `data/company.ts` (name, phone, WhatsApp number, services, testimonials, gallery, images, hours). Change this file to rebrand for a new client. Brand colors are the `--color-brand-*` scale in `app/globals.css`; remote image hosts are whitelisted in `next.config.ts` (`images.remotePatterns`, currently `images.unsplash.com`).
- Sections are standalone components in `components/` (`Hero`, `Services`, `About`, `Testimonials`, `Gallery`, `Contact`, `Header`, `Footer`, `WhatsAppButton`), assembled in `app/page.tsx`; `Header`/`Footer`/`WhatsAppButton` and the `LocalBusiness` JSON-LD live in `app/layout.tsx`.
- `Contact.tsx` form is client-side only (success state); wire it to an API/email service via the `handleSubmit` TODO.
- Anchor navigation uses plain `<a href="#...">` (not `Link`) to avoid typed-route friction; sections use `scroll-mt-20` and the html has `data-scroll-behavior="smooth"` (Next 16).
- lucide-react 1.x removed brand icons (Facebook/Instagram/Linkedin) — social links in `data/company.ts` use generic icons.