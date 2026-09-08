<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# template-hub

Next.js 16.3.4 App Router site (React 19.2.8, TypeScript strict, Tailwind v4 via `@tailwindcss/postcss`, ESLint flat config). TemplateHub is a hub / showcase of website templates: it presents the sibling templates (ProService, MenuLocal, ShowcasePro) with cards, filters, comparison, detail pages and a contact form. All visible content is in French. The folder is not yet committed; customize it like the sibling templates before committing.

## Architecture
- `data/templates.ts` — single source of truth for the 3 templates (slug, category, filters, description, tags, target activities, structure, features, accent colors, demo link). Cards, detail pages, sitemap and SEO are generated from this array; add a template by adding an object (plus images in `public/templates/<slug>/`).
- `config/site.ts` — brand identity, contact coordinates, WhatsApp number, socials, nav, base URL used for SEO (sitemap, robots, Open Graph).
- Routes: `/`, `/templates`, `/templates/[slug]`, `/comment-ca-marche`, `/contact`, `/mentions-legales`; SEO via `app/sitemap.ts` and `app/robots.ts`.
- Lucide React is used for icons; the brand icons (Instagram, Facebook, LinkedIn) are inline SVGs in `components/Footer.tsx` because lucide-react ≥1.4 no longer exports them.
- Light scroll animations come from `components/Reveal.tsx` (IntersectionObserver); framer-motion is intentionally not installed.

## Commands
- `npm run dev` — dev server.
- `npm run build` — production build (all pages prerendered statically).
- `npm run lint` — ESLint (`eslint.config.mjs`).
- `npx tsc --noEmit` — type-check; there is no `typecheck` script.
- No test framework is installed.

## Conventions
- Path alias `@/*` → repo root (`tsconfig.json`).
- Per the repo `MAINTENANCE.md`: visible content and README are in French; README is user-oriented. Do not use the hyphen as a separator in French prose.
- In JSX text, apostrophes must be escaped as `&apos;` (eslint `react/no-unescaped-entities`).
- `next dev` rewrites the `nextjs-agent-rules` block above; keep it committed to keep diffs clean.
- `CLAUDE.md` just references this file with `@AGENTS.md`.
