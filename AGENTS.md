# templates-web

Repo of standalone frontend templates. Each template lives in its own top-level folder and is a fully independent app (own `package.json`, lockfile, `node_modules`, `.gitignore`, README, AGENTS.md). There is no root workspace, no root `package.json`, and no shared tooling: run commands inside a template folder, never from the root.

## Layout
- `pro-service/` — Next.js 16 App Router (React 19, TypeScript strict) single-page marketing site for local service businesses; all visible content is in French. Customization point is `data/company.ts`; brand colors are the `--color-brand-*` scale in `app/globals.css`.
- `menu-local/` — Next.js 16 App Router (React 19, TypeScript strict) single-page template for local food businesses (restaurant, bakery, café). All visible content is in French and realistic. Customization point is `config/site.ts`; brand identity via CSS variables in `app/globals.css`.
- `showcase-pro/` — Next.js 16 App Router (React 19, TypeScript strict, Tailwind v4) single-page template for photographers, barbers, coaches, freelancers, agencies and service providers. All visible content is in French; demo profile is a Lyon-based photographer. Customization point is `config/site.ts`; section content (projects, services, pricing, testimonials, process) in `data/*.ts`; brand colors are the `--color-brand-*` scale in `app/globals.css`.
- `template-hub/` — Next.js 16 App Router (React 19, TypeScript strict, Tailwind v4) hub / showcase of the sibling templates: cards, filters, comparison, detail pages and a contact form, all in French. Customization point is `data/templates.ts` (template data, generated cards/pages) and `config/site.ts` (brand, contact, WhatsApp).
- `immo-pro/` — Next.js 16 App Router (React 19, TypeScript strict, Tailwind v4) single-page-plus-catalog template for real estate agencies, agents, developers and property firms; all visible content is in French, demo agency Lyon-based. Customization points: `config/site.ts` (identity, contact, WhatsApp), `data/properties.ts` (catalog: home grid, `/biens`, filters, detail pages, sitemap), `data/testimonials.ts`, `data/services.ts`; brand colors in `app/globals.css`.
- Add new templates as new self-contained top-level folders; do not introduce root-level tooling or npm workspaces.

## Per-template guidance
- Read each template's own `AGENTS.md` before editing it. All Next.js templates run Next.js 16, which has breaking changes vs older versions. Their `AGENTS.md` files carry a `BEGIN:nextjs-agent-rules` block pointing to `node_modules/next/dist/docs/` for accurate APIs; `next dev` rewrites that block, so keep it committed to keep diffs clean.

## Conventions
- Repo index and user-facing template content are written in French; keep the root `README.md` in French. In French prose, do not use the hyphen ("-") as a separator (see `MAINTENANCE.md`); reserve it for compound names/identifiers and markdown bullets.
- Root `README.md` is user-oriented; maintainer procedures (adding templates, commit conventions) live in `MAINTENANCE.md`.
- Remote is `origin` → `https://github.com/neylorxt/templates-web.git`.
- No root scripts; each template defines its own (dev, build, start, lint). There is no `typecheck` script; type-check with `npx tsc --noEmit` from the template folder.