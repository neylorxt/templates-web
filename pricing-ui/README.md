# PricingUI

![Aperçu du template PricingUI](public/preview.png)

Template Next.js de pages de tarification : neuf pages complètes, chacune avec son identité visuelle et sa logique de facturation. L'objectif est de montrer plusieurs styles de pricing dans un même projet, prêts à être adaptés à un produit ou un service.

Tout le contenu visible est en français et les prix, marques et noms affichés sont fictifs.

## Démo incluse

- `/` : accueil, cartes vers les neuf pages.
- `/saas` : trois formules classiques, bascule mensuel ou annuel et carte mise en avant.
- `/cloud` : configurateur CPU, RAM et stockage avec estimation du prix en direct.
- `/ai-api` : facturation au token avec curseur de consommation et paliers dégressifs.
- `/agency` : offres Starter, Business et Custom sur devis.
- `/ecommerce` : abonnement et commission par transaction, avec simulateur de chiffre d'affaires.
- `/education` : offres Basic, Student et School.
- `/streaming` : formules Individuel, Duo et Famille, écrans simultanés.
- `/developer-tools` : offres Free, Pro, Team et Enterprise, options facturées à l'usage.
- `/enterprise` : devis personnalisé et tableau comparatif des niveaux de service.

## Stack technique

- Next.js 16 (App Router, React 19, TypeScript strict)
- HeroUI v3 (`@heroui/react`, `@heroui/styles`), composants composés et thèmes par page
- Tailwind CSS v4, configuré en CSS-first dans `app/globals.css` (pas de `tailwind.config.js`)
- `next/font` pour les polices Google (Geist, Geist Mono, Space Grotesk, Playfair Display)
- `lucide-react` pour les icônes
- Aucun backend : les calculateurs et simulateurs fonctionnent côté client

## Démarrage rapide

Le template est publié dans le dépôt GitHub [templates-web](https://github.com/neylorxt/templates-web), qui regroupe tous les templates. Clonez le dépôt, puis placez-vous dans le dossier du template :

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web/pricing-ui
```

Installez ensuite les dépendances, puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000` dans votre navigateur. Le serveur de développement utilise Turbopack et se recharge automatiquement à chaque modification.

## Personnaliser le template

- **`data/pricing-templates.ts`** : contenu des cartes de l'accueil (slug, titre, description, points forts, couleur). C'est le point d'entrée pour ajouter une page.
- **`app/<page>/page.tsx`** : structure et contenu d'une page ; les interactions vivent dans le composant client voisin (`saas-pricing.tsx`, `configurator.tsx`, `usage-calculator.tsx`, `sales-calculator.tsx`, `plans.tsx`, `quote-form.tsx`).
- **`app/globals.css`** : classes `theme-<page>` qui surchargent `--accent`, `--accent-foreground` et les rayons des composants HeroUI. Les variables dérivées (`--accent-hover`, `--accent-soft`, `--focus`) sont déclarées pour toutes les classes de thème dans `:is(...)` : garder cette liste à jour quand un thème est ajouté.
- **`components/pricing-illustration.tsx`** : illustrations vectorielles des cartes, une par slug.
- Les pages sombres ajoutent `data-theme="dark"` sur leur élément racine.
- Les polices sont déclarées dans `app/layout.tsx`.

## Architecture

```
data/pricing-templates.ts        cartes de l'accueil (source unique)
app/
  layout.tsx                     polices, lang="fr", metadata
  page.tsx                       accueil : cartes vers les neuf pages
  globals.css                    thème Tailwind v4 et classes theme-<page>
  saas/page.tsx + saas-pricing.tsx
  cloud/page.tsx + configurator.tsx
  ai-api/page.tsx + usage-calculator.tsx
  agency/page.tsx
  ecommerce/page.tsx + sales-calculator.tsx
  education/page.tsx
  streaming/page.tsx + plans.tsx
  developer-tools/page.tsx + plans.tsx
  enterprise/page.tsx + quote-form.tsx
components/
  pricing-illustration.tsx       illustrations des cartes
  section-heading.tsx            titres de section
  faq.tsx                        FAQ réutilisable
  back-to-home.tsx               lien de retour vers l'accueil
```

## Vérification

```bash
npm run lint       # eslint
npx tsc --noEmit   # typecheck (pas de script dédié)
npm run build      # build de production
```

## Notes

- **HeroUI v3, pas v2** : composants composés (`Card.Header`), `onPress` plutôt que `onClick`, aucun provider à installer. Consulter la documentation avant d'écrire un composant.
- Les calculs interactifs utilisent `Slider` de HeroUI. Éviter `Slider.Output`, dont le formatage dépend de la locale : afficher la valeur soi-même.
- L'eslint interdit l'apostrophe droite dans le texte JSX : utiliser l'apostrophe typographique `’`.
- Dans la prose française, ne pas employer le trait d'union comme séparateur ; le réserver aux noms composés et identifiants.
- Les prix, marques et chiffres affichés sont fictifs : les remplacer par les tarifs réels avant toute mise en ligne.

## Ressources

- [Documentation Next.js App Router](https://nextjs.org/docs)
- [Documentation HeroUI v3](https://heroui.com/docs/react)
