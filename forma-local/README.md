# FormaLocal

![Aperçu du template FormaLocal](public/preview.png)

Template Next.js pour une école privée, un centre de langues, un organisme de formation professionnelle, un centre de soutien scolaire, une auto-école ou une petite structure éducative. Un site commercial complet, en français, moderne et rassurant, pour présenter les formations, rassurer, expliquer les programmes, afficher les tarifs et générer des inscriptions et des demandes d'informations.

Le repo est fourni avec un exemple de démonstration : « FormaLocal », un centre de formation à Lyon (langues, bureautique, digital et management).

## Stack technique

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4, configuré en CSS-first dans `app/globals.css` (pas de `tailwind.config.js`)
- `lucide-react` pour les icônes
- `next/image` pour les images optimisées (Unsplash / Pexels)
- `next/font` pour les polices Google (Geist + Fraunces)

## Démarrage rapide

Le template est publié dans le dépôt GitHub [templates-web](https://github.com/neylorxt/templates-web), qui regroupe tous les templates. Clonez le dépôt, puis placez-vous dans le dossier du template :

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web/forma-local
```

Installez ensuite les dépendances, puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000` dans votre navigateur. Le serveur de développement utilise Turbopack et se recharge automatiquement à chaque modification. Pour adapter le site à un établissement, suivez la section « Personnaliser pour un client » ci-dessous.

## Personnaliser pour un client

Toutes les données du site vivent dans des fichiers simples : **`config/site.ts`** (source unique pour l'identité et les coordonnées) et les fichiers de **`data/`**. Ne jamais écrire ces valeurs en dur dans les composants.

### Fichiers à modifier

| Donnée | Fichier |
| --- | --- |
| Nom, slogan, coordonnées, WhatsApp, réseaux sociaux | `config/site.ts` |
| Horaires, accès (transports, parking), stats | `config/site.ts` |
| Facilités de financement | `financing` dans `config/site.ts` |
| Images du hero, de la section avantages et du CTA final | `images` dans `config/site.ts` |
| Catalogue de formations (cartes, pages détail) | `data/courses.ts` |
| Programme phare en accordéon (accueil) | `data/programs.ts` |
| Avis clients | `data/testimonials.ts` |
| Tarifs (trois formules) | `data/pricing.ts` |
| Avantages « Pourquoi nous choisir » | `data/whyUs.ts` |
| Étapes « Comment ça se passe » | `data/howItWorks.ts` |

### Adapter au type d'établissement

- **Centre de langues** : formations d'anglais, espagnol, FLE, TOEIC…
- **Organisme de formation professionnelle** : Excel, développement web, marketing digital, comptabilité, management…
- **Auto-école** : permis B, conduite accompagnée, code de la route, stage accéléré, perfectionnement…
- **Centre de soutien scolaire** : matières scolaires, niveaux collège / lycée, préparation aux examens…
- **École privée** : classes, filières, inscriptions…

Ajustez le type Schema.org de l'établissement (`EducationalOrganization` par défaut dans `app/layout.tsx`, optionnellement `LocalBusiness`) et les catégories de formation dans `data/courses.ts`.

### Finances et financement

- Ne pas inventer d'éligibilité à un financement : afficher uniquement les dispositifs réellement disponibles chez l'établissement.
- Les tarifs du template sont des **points de départ indicatifs** : les adapter aux prix réels dans `data/pricing.ts`.
- Les statistiques (`stats` dans `config/site.ts`) sont des **exemples de démonstration** : les remplacer par des chiffres réels avant la mise en ligne, ou vider le tableau.

### Avis clients

Les avis du template sont **fictifs et clairement annoncés comme démonstration** dans la page. Avant toute mise en ligne :

- remplacer les avis par de vrais avis autorisés par les apprenants, ou
- masquer la section avec `showTestimonials = false` dans `data/testimonials.ts`.

### Images

- Utiliser uniquement des photos réelles d'Unsplash ou Pexels, cohérentes avec le type d'établissement (élèves, étudiants, cours, salles de classe, langues, ordinateurs, conduite, ateliers…).
- `next.config.ts` déclare les domaines distants : ne pas les retirer, sinon `next/image` casse.
- Toujours fournir un `alt` (SEO et accessibilité).

### Couleurs et typographie

La marque se règle dans `app/globals.css`, dans le bloc `@theme` : bleu profond de marque (`--color-brand-*`), accent ambre (`--color-accent-*`), fonds clair (`--color-mist`, `--color-cream`), encre (`--color-ink`). Les polices (Geist + Fraunces) se changent dans `app/layout.tsx` via `next/font`.

### Formulaire et réception des demandes

Les formulaires (inscription et contact) envoient vers `/api/contact`. Sans configuration, la demande est validée et enregistrée côté serveur : le formulaire est donc fonctionnel dès le départ. Pour relayer les demandes vers un vrai service (email, CRM, Supabase…), définir la variable d'environnement `CONTACT_WEBHOOK_URL` : chaque demande lui sera transmise en POST.

## Architecture

```
config/site.ts              données personnalisables (source unique)
types/course.ts             type Course (formation)
data/
  courses.ts                catalogue de formations (cartes + pages détail)
  programs.ts               programme phare en accordéon (accueil)
  testimonials.ts           avis de démonstration (section masquable)
  pricing.ts                trois formules de tarifs + note
  whyUs.ts                  avantages « Pourquoi nous choisir »
  howItWorks.ts             étapes « Comment ça se passe »
app/
  layout.tsx                polices, lang="fr", metadata, JSON-LD
  page.tsx                  page d'accueil (composition des sections)
  formations/page.tsx       liste des formations + filtres
  formations/[slug]/page.tsx  fiche formation (SSG, metadata dynamiques)
  globals.css               thème Tailwind v4 et variables de marque
  sitemap.ts, robots.ts     SEO
  api/contact/route.ts      réception des formulaires (webhook optionnel)
  mentions-legales/         mentions légales
  politique-de-confidentialite/  politique de confidentialité
  not-found.tsx             404
components/
  Header.tsx                navbar sticky + menu mobile
  Hero.tsx                  titre, CTA, points de confiance, photo
  WhyUs.tsx                 avantages + stats
  Courses.tsx               section « Nos formations » (accueil)
  CourseCard.tsx            carte d'une formation
  CourseFilters.tsx         filtres côté client (page /formations)
  CourseModules.tsx         programme en accordéon (page détail)
  Program.tsx               section « Un programme structuré » (accueil)
  HowItWorks.tsx            déroulement en 4 étapes
  Testimonials.tsx          avis + note globale + bandeau démo
  Pricing.tsx               trois formules de tarifs
  Financing.tsx             financement et facilités
  Registration.tsx          section « Inscrivez-vous »
  RegistrationForm.tsx      formulaire de préinscription
  InfoRequest.tsx           CTA « Vous avez une question ? »
  ContactForm.tsx           formulaire court
  Contact.tsx               coordonnées + formulaire
  Location.tsx              carte OpenStreetMap + accès + itinéraire
  CtaFinal.tsx              section finale avant le footer
  Footer.tsx                pied de page, mentions, copyright dynamique
  MobileActionBar.tsx       barre mobile fixe Appeler / WhatsApp / S'inscrire
  WhatsAppButton.tsx        bouton flottant (optionnel)
  Reveal.tsx                apparition des sections au scroll
  icons.tsx                 icônes de marque (WhatsApp, réseaux) en SVG
```

## Vérification

```bash
npm run lint       # eslint
npx tsc --noEmit   # typecheck (pas de script dédié)
npm run build      # build de production
```

## Notes

- En `lucide-react` v1, les icônes de marque (WhatsApp, Facebook, Instagram, LinkedIn) ne sont plus exportées : elles sont en SVG inline dans `components/icons.tsx`.
- L'eslint interdit l'apostrophe droite dans le texte JSX : écrire `&apos;`.
- Dans la prose française, ne pas employer le trait d'union comme séparateur ; le réserver aux noms composés et identifiants.
- Les pages de formation sont générées statiquement (`generateStaticParams`) à partir de `data/courses.ts` : toute nouvelle formation est automatiquement publiée, indexée dans le sitemap et dotée de ses métadonnées SEO.
- Ce site est une vitrine commerciale et un outil de génération de prospects et d'inscription, pas un système scolaire : l'architecture (statique par défaut) reste connectable plus tard à une API, un CMS, un CRM ou un système de paiement.
- Les consignes pour les agents IA sont dans `AGENTS.md` (bloc géré par `next dev` à conserver).