# templates-web

Repo of standalone frontend templates. Each template lives in its own top-level folder and is a fully independent app (own `package.json`, lockfile, `node_modules`, `.gitignore`, README, AGENTS.md). There is no root workspace, no root `package.json`, and no shared tooling: run commands inside a template folder, never from the root.

## Layout
- `pro-service/` — Next.js 16 App Router (React 19, TypeScript strict) single-page marketing site for local service businesses; all visible content is in French. Customization point is `data/company.ts`; brand colors are the `--color-brand-*` scale in `app/globals.css`.
- `menu-local/` — Next.js 16 App Router (React 19, TypeScript strict) single-page template for local food businesses (restaurant, bakery, café). All visible content is in French and realistic. Customization point is `config/site.ts`; brand identity via CSS variables in `app/globals.css`.
- Add new templates as new self-contained top-level folders; do not introduce root-level tooling or npm workspaces.

## Per-template guidance
- Read each template's own `AGENTS.md` before editing it. In `pro-service/`, `next dev` rewrites the `BEGIN:nextjs-agent-rules` block at the top of that file; keep it committed so diffs stay clean.
- `pro-service/` runs Next.js 16, which has breaking changes vs older versions; its `AGENTS.md` points to `node_modules/next/dist/docs/` for accurate APIs.

## Conventions
- Repo index and user-facing template content are written in French; keep the root `README.md` in French. In French prose, do not use the hyphen ("-") as a separator (see `MAINTENANCE.md`); reserve it for compound names/identifiers and markdown bullets.
- Root `README.md` is user-oriented; maintainer procedures (adding templates, commit conventions) live in `MAINTENANCE.md`.
- Remote is `origin` → `https://github.com/neylorxt/templates-web.git`.
- No root scripts; each template defines its own (dev, build, lint, typecheck).