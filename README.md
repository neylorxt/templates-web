# templates-web

Collection de templates frontend autonomes. Chaque template occupe un dossier dédié à la racine du dépôt et constitue un projet complet et indépendant, avec ses propres dépendances, ses propres scripts et sa propre documentation.

## Templates disponibles

- [pro-service](./pro-service) : site vitrine sur une seule page, construit avec Next.js 16 (App Router) et TypeScript, destiné aux entreprises de services locales. Tout le contenu visible est en français et se personnalise via le fichier `data/company.ts`.
- [menu-local](./menu-local) : site monopage Next.js 16 (App Router, React 19, TypeScript strict) destiné aux commerces alimentaires locaux (restaurant, pâtisserie, café, snack, boulangerie). Tout le contenu visible est en français et se personnalise via le fichier `config/site.ts`.
- [showcase-pro](./showcase-pro) : site monopage Next.js 16 (App Router, React 19, TypeScript strict, Tailwind v4) destiné aux photographes, barbers, coachs, freelances, créateurs, agences et prestataires de services. Tout le contenu visible est en français et se personnalise via le fichier `config/site.ts` (le contenu des sections vitrines se règle dans `data/`).
- [template-hub](./template-hub) : hub et vitrine des trois templates ci-dessus. Site multi-pages Next.js 16 (App Router, React 19, TypeScript strict, Tailwind v4) pour découvrir, comparer et démontrer les modèles : cartes, filtres, pages de détail et formulaire de contact, le tout en français. Les données des templates se règlent dans `data/templates.ts` et les coordonnées du site dans `config/site.ts`.
- [immo-pro](./immo-pro) : site vitrine multi-pages Next.js 16 (App Router, React 19, TypeScript strict, Tailwind v4) pour agences immobilières, agents indépendants, promoteurs et petites structures du secteur. Il permet de présenter les biens, de les filtrer, de mettre en avant certains d'entre eux et de générer des demandes de visite, avec contact par téléphone et WhatsApp. Les données se règlent dans `config/site.ts` (identité et coordonnées) et `data/properties.ts` (catalogue des biens).
- [soin-pro](./soin-pro) : site vitrine monopage Next.js 16 (App Router, React 19, TypeScript strict, Tailwind v4) pour un professionnel de santé ou un petit cabinet (dentiste, kinésithérapeute, psychologue, nutritionniste, ostéopathe, cabinet pluridisciplinaire). Spécialités, praticiens, horaires avec indicateur ouvert ou fermé, prise de rendez-vous en ligne ou par téléphone et formulaire de contact. Les données se règlent dans `config/site.ts` (identité, coordonnées, horaires, prise de rendez-vous, WhatsApp) et `data/` (spécialités, praticiens, avis, informations pratiques).

## Prérequis

Node.js et npm installés.

## Récupérer le dépôt

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web
```

Chaque template se trouve ensuite dans son propre dossier (`pro-service`, `menu-local`, `showcase-pro`, `template-hub`, `immo-pro`, `soin-pro`). Son README détaille le clonage, l'installation et l'utilisation de bout en bout.

## Vérification d'un template

Depuis le dossier du template, par exemple `pro-service` :

```bash
npm run dev
npm run lint
npx tsc --noEmit
```

## Déploiement

Chaque template peut être déployé indépendamment, par exemple sur Vercel.