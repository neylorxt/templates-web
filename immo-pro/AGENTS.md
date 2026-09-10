<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# immo-pro

Next.js 16.3.4 App Router app (React 19, TypeScript strict, Tailwind v4). Single-page-plus-catalog template ("ImmoPro") for real estate agencies, independent agents, developers and small property firms. All visible content is in French; demo agency is Lyon-based. Built to be rebranded per client.

## Commands
- `npm run dev` — dev server on http://localhost:3000 (Turbopack)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (only script that exists; **no** test or typecheck script)
- Typecheck manually: `npx tsc --noEmit`

## Conventions & gotchas
- App Router: routes = `app/**/page.tsx`; dynamic catalog at `/biens/[slug]` (SSG via `generateStaticParams`, dynamic `generateMetadata`). `params`/`searchParams` are **Promises** — always `await` them. Root layout uses typed `LayoutProps<"/">`.
- `/biens` query params are **one-way**: only the hero `PropertySearch` builds them (`/biens?transaction=…&type=…&city=…&budgetMax=…`) to seed the initial filter state in `PropertyFilters` (`app/biens/page.tsx` → `buildInitialFilters`). `PropertyFilters` is keyed on the normalized initial state, so arriving with different params re-applies the filters via remount. Header/footer nav links point to plain `/biens`; filtering happens client-side and changing filters in the UI does **not** rewrite the URL.
- **Tailwind v4** — CSS-first, **no** `tailwind.config.*`. Theme lives in `app/globals.css`: brand navy scale `--color-brand-*`, premium gold accent `--color-gold-*`, backgrounds `--color-cream` / `--color-coal`. Heading font is Fraunces (`font-display`), body Geist; configured in `app/layout.tsx`.
- **ESLint flags raw `'` in JSX text** (`react/no-unescaped-entities`) — write apostrophes as `&apos;` in JSX text. Data files (`config/`, `data/`, `lib/`) and JS strings are unaffected.
- Internal links must use `next/link` (`@next/next/no-html-link-for-pages`); plain `<a>` only for `tel:`, `mailto:`, `https://` and hash anchors.
- Remote images must be whitelisted in `next.config.ts` (`images.remotePatterns`, currently `images.unsplash.com`). Do **not** set `search` on a pattern or URLs with query strings (e.g. `?auto=format…`) will 400.
- **lucide-react removed brand icons** (WhatsApp/Facebook/Instagram/LinkedIn): use the custom SVGs in `components/icons.tsx`, never import brand icons from lucide.
- Path alias `@/*` → repo root (`tsconfig.json`).

## Structure
- **Customization points:** all site identity/contact/WhatsApp number in `config/site.ts` (helpers: `whatsappLink`, `telLink`, `mailLink`, `directionsLink`, `mapEmbedUrl`). Properties in `data/properties.ts` (drives home grid, `/biens`, filters, detail pages, sitemap); testimonials in `data/testimonials.ts`; services in `data/services.ts` (the `icon` string is a Lucide name resolved via a map in `components/Services.tsx` — add new icons there, unknown names fall back to `KeyRound`). Brand colors in `app/globals.css`. Static French copy lives in `app/mentions-legales/` and `app/politique-de-confidentialite/` (not data-driven).
- Formatting/labels helpers live in `lib/format.ts`; shared filter/search options in `lib/search.ts`.
- Home is assembled in `app/page.tsx` from sections in `components/` (`Hero`, `PropertyGrid`, `FeaturedProperty`, `About`, `Services`, `Testimonials`, `Location`, `CtaFinal`). Contact is a dedicated page: `app/contact/page.tsx` renders a banner + `components/Contact.tsx` (info + `ContactForm`); nav/footer/CTA links point to `/contact` (not an anchor). Same for property valuation: `app/estimation/page.tsx` renders a banner + `components/ValuationCTA.tsx` (dark section with `ValuationForm`, label-colored for its dark background); links point to `/estimation`. `Header`/`Footer`/`WhatsAppButton` and the `RealEstateAgent` JSON-LD live in `app/layout.tsx`; each property page adds an `Offer` JSON-LD. `app/sitemap.ts` also lists `/contact` and `/estimation`.
- Shared UI: `components/Section.tsx` + `SectionHeading.tsx` (section wrapper, eyebrow/subtitle heading), `components/Button.tsx` (exports `buttonClassName(variant, size)` — use it for consistent pill buttons), `components/icons.tsx` (inline brand SVGs, see lucide note above).
- Client components: `Header`, `PropertySearch`, `PropertyFilters` (filters + mobile modal), `ContactForm`, `ValuationForm`, `PropertyGallery` (lightbox), `ShareButton`, `WhatsAppButton` (message auto-personalized on `/biens/[slug]`), `Reveal` (IntersectionObserver fade-in). Everything else is a server component.
- Forms POST to `/api/contact` (works out of the box); set `CONTACT_WEBHOOK_URL` to forward leads (email/CRM/Supabase).
- Mobile CTA bar on property pages is `lg:hidden` fixed at bottom; the floating WhatsApp button shifts up (`bottom-24 lg:bottom-5`) on those pages to avoid overlap.