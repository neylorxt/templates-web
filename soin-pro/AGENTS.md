<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# soin-pro

Template Next.js 16.3.4 (App Router, React 19.2.8, TypeScript strict, Tailwind v4) pour un professionnel de santé ou un petit cabinet : dentiste, kinésithérapeute, psychologue, nutritionniste, ostéopathe ou cabinet pluridisciplinaire. Site monopage vitrine et prise de rendez-vous, tout le contenu visible est en **français**, réaliste, jamais de Lorem Ipsum.

## Commandes (à lancer depuis ce dossier)

- `npm run dev`, `npm run build`, `npm run start` (Next.js 16, Turbopack en dev).
- `npm run lint` = eslint via `eslint.config.mjs`. Il n'y a **pas** de script typecheck : vérifier avec `npx tsc --noEmit`.
- Pas de formateur ni de test framework configurés. Template autonome du repo `templates-web` (pas de workspace racine).

## Configuration du site

- `config/site.ts` : identité, coordonnées (téléphone international sans `+`, WhatsApp optionnel via `useWhatsApp`), prise de rendez-vous (`booking.online/url/phone/form`), horaires (`hours` au format 24 h, `phoneHours`, `exceptionalClosure`), urgences (`emergency`), accès, stats, réseaux sociaux, navigation, hero (points de confiance + images). Source unique : ne jamais écrire ces valeurs en dur dans les composants.
- `data/specialties.ts` : spécialités (cartes de la section homonyme ; la clé `icon` est un nom Lucide résolu dans `components/Specialties.tsx` — ajouter les nouvelles icônes au map, repli sur `Smile`).
- `data/practitioners.ts` : praticiens. Un professionnel seul fonctionne (une seule entrée). Chaque carte a une bio repliable (client component `PractitionerCard`).
- `data/testimonials.ts` : avis **fictifs de démonstration** (`showTestimonials` pour masquer la section ; un bandeau l'annonce en clair dans la page).
- `data/process.ts` (déroulement d'une consultation) et `data/practicalInfo.ts` (infos pratiques, ne jamais inventer d'infos administratives).
- Couleurs de marque : échelle `--color-brand-*` (vert sauge) + accents `--color-clay-*` et fonds `--color-cream` / `--color-mist` / `--color-ink` dans `app/globals.css`.

## Stack et conventions

- **Tailwind v4 en CSS-first** : `@import "tailwindcss"` + blocs `@theme` dans `app/globals.css`. Il n'existe PAS de `tailwind.config.js`.
- `app/layout.tsx` : props typées Next 16 (`LayoutProps<"/">`), `lang="fr"`, polices `next/font/google` (Geist + Fraunces) en variables CSS, JSON-LD Schema.org selon `siteConfig.schemaType` (`MedicalClinic` par défaut, à adapter au métier : `Dentist`, `Physician`…). Ne pas appliquer un type médical inadapté.
- SEO : `metadata` Next (title/description/Open Graph), `app/sitemap.ts`, `app/robots.ts`, hiérarchie H1/H2/H3 propre, `alt` sur toutes les images.
- Images distantes : **Unsplash/Pexels uniquement**, `next.config.ts` déclare `images.remotePatterns` (ne pas retirer, sinon `next/image` casse). Ne pas mettre de `search` sur un pattern sinon les URL avec query string (`?auto=format…`) renvoient 400. Toujours fournir un `alt`.
- Icônes : `lucide-react` (v1.44). Les icônes de marque (WhatsApp, Facebook, Instagram, LinkedIn) ne sont plus exportées : SVG inline dans `components/icons.tsx`.
- **ESLint interdit l'apostrophe droite dans le texte JSX** (`react/no-unescaped-entities`) : écrire `&apos;`. Les fichiers de données (`config/`, `data/`) et les chaînes JS ne sont pas concernés.
- `@/*` → racine du dossier (`tsconfig.json`). Lien interne `next/link` obligatoire (`@next/next/no-html-link-for-pages`) ; `<a>` réservé à `tel:`, `mailto:`, `https://` et ancres pures `#…`.
- Le statut « Ouvert / Fermé actuellement » est calculé **côté client** (composant `OpeningHours`, fuseau `Europe/Paris` via `lib/hours.ts`) pour éviter tout écart d'hydratation.
- Barre d'actions mobile fixe (`MobileActionBar` : Appeler + Prendre rendez-vous) présente en dessous de `lg`. Ne pas l'oublier lors de l'ajout de sections en bas de page.
- Les formulaires postent vers `/api/contact` (fonctionnels sans dépendance) ; définir `CONTACT_WEBHOOK_URL` pour relayer les demandes vers un service sécurisé. Ne jamais collecter de détails médicaux via le formulaire.
- En prose française, ne pas employer le trait d'union comme séparateur, le réserver aux noms composés et identifiants (voir `MAINTENANCE.md` du repo racine).