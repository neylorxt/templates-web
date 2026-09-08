# templates-web

Collection de templates frontend autonomes. Chaque template occupe un dossier dédié à la racine du dépôt et constitue un projet complet et indépendant, avec ses propres dépendances, ses propres scripts et sa propre documentation.

## Templates disponibles

- [pro-service](./pro-service) : site vitrine sur une seule page, construit avec Next.js 16 (App Router) et TypeScript, destiné aux entreprises de services locales. Tout le contenu visible est en français et se personnalise via le fichier `data/company.ts`.
- [menu-local](./menu-local) : site monopage Next.js 16 (App Router, React 19, TypeScript strict) destiné aux commerces alimentaires locaux (restaurant, pâtisserie, café, snack, boulangerie). Tout le contenu visible est en français et se personnalise via le fichier `config/site.ts`.
- [showcase-pro](./showcase-pro) : site monopage Next.js 16 (App Router, React 19, TypeScript strict, Tailwind v4) destiné aux photographes, barbers, coachs, freelances, créateurs, agences et prestataires de services. Tout le contenu visible est en français et se personnalise via le fichier `config/site.ts` (le contenu des sections vitrines se règle dans `data/`).

## Prérequis

Node.js et npm installés.

## Récupérer le dépôt

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web
```

Chaque template se trouve ensuite dans son propre dossier (`pro-service`, `menu-local`, `showcase-pro`). Son README détaille le clonage, l'installation et l'utilisation de bout en bout.

## Vérification d'un template

Depuis le dossier du template, par exemple `pro-service` :

```bash
npm run dev
npm run lint
npx tsc --noEmit
```

## Déploiement

Chaque template peut être déployé indépendamment, par exemple sur Vercel.