<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# FormaLocal

Template Next.js 16.3.4 (App Router, React 19.2.8, TypeScript strict, Tailwind v4) destiné aux écoles privées, centres de langues, organismes de formation professionnelle, centres de soutien scolaire et auto-écoles. Site de présentation commerciale : catalogue de formations, pages détail, tarifs, témoignages, préinscription et contact. Tout le contenu visible est en **français**, réaliste, jamais de Lorem Ipsum.

## Commandes (à lancer depuis ce dossier)

- `npm run dev`, `npm run build`, `npm run start` (Next.js 16, Turbopack en dev).
- `npm run lint` = eslint via `eslint.config.mjs`. Il n'y a **pas** de script typecheck : vérifier avec `npx tsc --noEmit`.
- Pas de formateur ni de test framework configurés. Template autonome du repo `templates-web` (pas de workspace racine, pas de scripts racine).
- `npx next typegen` régénère les types de routes (dont les globaux `LayoutProps<'/'>`, `PageProps<'/formations/[slug]'>`). À relancer après l'ajout d'une route si `tsc` se plaint d'une route inconnue.

## Configuration du site

- `config/site.ts` : identité, tagline, coordonnées (téléphone international sans `+`, `registrationEmail`, WhatsApp optionnel via `useWhatsApp` + `whatsappMessage`), horaires, accès, `heroHighlights`, `stats` (**exemples de démonstration à remplacer avant mise en ligne**), `financing` (n'afficher que les dispositifs réellement disponibles, ne jamais inventer d'éligibilité), images, réseaux sociaux, navigation. Source unique : ne jamais écrire ces valeurs en dur dans les composants. Helpers : `whatsappLink(message)`, `telLink()`, `mailLink()`, `directionsLink()`, `mapEmbedUrl()`.
- `data/courses.ts` : catalogue de formations (type `Course` dans `types/course.ts`). Chaque formation alimente les cartes, la page `/formations` et `/formations/[slug]` (contenu, objectifs, prérequis, public, modules). `courseCategories`, `courseLevels`, `getCourseBySlug()`.
- `data/programs.ts` : `featuredProgram` affiché en accordéon dans la section « Un programme structuré » de l'accueil.
- `data/testimonials.ts` : avis **fictifs de démonstration** (`showTestimonials` pour masquer la section ; un bandeau l'annonce en clair dans la page).
- `data/pricing.ts` : trois formules de tarifs + note sous la grille.
- `data/whyUs.ts` (avantages, clé `icon` = nom Lucide résolu dans `components/WhyUs.tsx`) et `data/howItWorks.ts` (étapes).
- Couleurs de marque : échelle `--color-brand-*` (bleu profond) + accents `--color-accent-*` (ambre) et fonds `--color-mist` / `--color-cream` / `--color-ink` / `--color-coal` dans `app/globals.css`.

## Stack et conventions

- **Tailwind v4 en CSS-first** : `@import "tailwindcss"` + blocs `@theme` dans `app/globals.css`. Il n'existe PAS de `tailwind.config.js`.
- `app/layout.tsx` : props typées Next 16 (`LayoutProps<"/">`), `lang="fr"`, polices `next/font/google` (Geist + Fraunces) en variables CSS, JSON-LD `EducationalOrganization`.
- Routes dynamiques : `params` est une **Promise** (await dans les pages et `generateMetadata`), `PageProps<'/formations/[slug]'>`, `generateStaticParams` sur `data/courses.ts`.
- SEO : `metadata` Next (title/description/Open Graph), `app/sitemap.ts` (inclut toutes les formations), `app/robots.ts`, metadata **dynamiques** par formation, JSON-LD `Course` par page détail, hiérarchie H1/H2/H3, `alt` sur toutes les images.
- Images distantes : **Unsplash/Pexels uniquement**, `next.config.ts` déclare `images.remotePatterns` (ne pas retirer, sinon `next/image` casse). Ne pas mettre de `search` sur un pattern sinon les URL avec query string (`?auto=format…`) renvoient 400. Toujours fournir un `alt`.
- Icônes : `lucide-react` (v1.44). Les icônes de marque (WhatsApp, Facebook, Instagram, LinkedIn) ne sont plus exportées : SVG inline dans `components/icons.tsx`.
- **ESLint interdit l'apostrophe droite dans le texte JSX** (`react/no-unescaped-entities`) : écrire `&apos;`. Les fichiers de données (`config/`, `data/`) et les chaînes JS ne sont pas concernés.
- `@/*` → racine du dossier (`tsconfig.json`). Lien interne `next/link` obligatoire (`@next/next/no-html-link-for-pages`) ; `<a>` réservé à `tel:`, `mailto:`, `https://` et ancres pures `#…`.
- Les filtres de la page `/formations` sont **côté client** (`CourseFilters`). Les formulaires postent vers `/api/contact` (fonctionnels sans dépendance) ; définir `CONTACT_WEBHOOK_URL` pour relayer les demandes vers un service sécurisé (email, CRM, Supabase…).
- WhatsApp : bouton flottant (`WhatsAppButton`) + message prérempli global, et message spécifique à la formation sur les pages détail (`whatsappLink`). Barre d'actions mobile fixe (`MobileActionBar` : Appeler / WhatsApp / S'inscrire) sous `lg`. Penser à l'ajustement `h-[68px]` du layout si la barre change.
- Les animations (Reveal, accordéons) sont désactivées pour `prefers-reduced-motion` (voir `app/globals.css` et `components/Reveal.tsx`).
- En prose française, ne pas employer le trait d'union comme séparateur, le réserver aux noms composés et identifiants (voir `MAINTENANCE.md` du repo racine).