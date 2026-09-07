<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# MenuLocal

Template Next.js monopage pour un commerce alimentaire local (restaurant, pâtisserie, café, boulangerie, snack). Site complet, démo commerciale crédible, prêt à personnaliser pour un client. Tout le contenu visible est en **français**, réaliste, jamais de Lorem Ipsum.

## Commandes (à lancer depuis ce dossier)

- `npm run dev`, `npm run build` (Next.js 16.3.4, React 19, TypeScript strict)
- `npm run lint` = eslint via `eslint.config.mjs`. Il n'y a **pas** de script typecheck : vérifier avec `npx tsc --noEmit`.
- Pas de formateur configuré. Ce dossier est un template autonome du repo `templates-web` (pas de workspace racine, pas de scripts racine).

## Configuration du site

- Toutes les données personnalisables (nom, slogan, téléphone, WhatsApp, adresse, horaires, réseaux sociaux, catégories, menu/produits, témoignages, coordonnées GPS, liens externes) vivent dans `config/site.ts`, source unique. Les composants lisent cette config, ne jamais écrire ces valeurs en dur dans les composants.
- Numéro WhatsApp au format international : `https://wa.me/33XXXXXXXXX` sans `+` ni espaces, message prérempli type « Bonjour, je souhaiterais passer une commande… ». CTA WhatsApp nombreux, dont un bouton flottant bas droite.
- Images : uniquement des photos réelles Unsplash/Pexels, cohérentes entre elles. `next.config.ts` déclare les `remotePatterns` pour `images.unsplash.com` et `images.pexels.com` (ne pas les retirer sinon `next/image` casse). Toujours fournir un `alt`.
- Icônes : `lucide-react` (installé). Attention : en v1, les icônes de marque (Facebook, Instagram, Twitter) ne sont plus exportées ; elles sont en SVG inline dans `components/SocialIcons.tsx`.

## Stack et conventions

- Tailwind CSS v4 configuré en CSS-first : `@import "tailwindcss"` + bloc `@theme` dans `app/globals.css` ; il n'existe PAS de `tailwind.config.js`. Marque (typographie, espacement, ambiance gourmande) via variables CSS.
- `app/layout.tsx` : props typées Next 16 (`LayoutProps<"/">`), `lang="fr"`, polices `next/font/google` (Inter + Playfair Display) exposées en variables CSS.
- Composants par section dans `components/` (Header, Hero, Menu, FeaturedProduct, Gallery, Testimonials, OpeningHours, Location, WhatsAppButton, Footer) ; alias `@/*` → racine du dossier.
- SEO : `metadata` Next + JSON-LD Schema.org (`Restaurant` / `Bakery` / `LocalBusiness`, à ajuster selon le client), hiérarchie H1/H2/H3 propre, balises sémantiques.
- En français, ne pas employer le trait d'union comme séparateur dans le texte courant, le réserver aux noms composés et identifiants (voir le README racine du dépôt).