# templates-web

Collection de templates frontend autonomes. Chaque template occupe un dossier dédié à la racine du dépôt et constitue un projet complet et indépendant, avec ses propres dépendances, ses propres scripts et sa propre documentation.

## Templates disponibles

- [pro-service](./pro-service) : site vitrine sur une seule page, construit avec Next.js 16 (App Router) et TypeScript, destiné aux entreprises de services locales. Tout le contenu visible est en français et se personnalise via le fichier `data/company.ts`.

## Ajouter un template

Créer un nouveau dossier autonome à la racine du dépôt, contenant son propre `package.json`, son fichier de verrouillage des dépendances et son `.gitignore`. Il n'existe ni workspace racine, ni outillage partagé : chaque template se configure et se lance de façon indépendante.

## Prérequis

Node.js et npm installés.

## Vérification d'un template

Depuis le dossier du template, par exemple `pro-service` :

```bash
npm run dev
npm run lint
npx tsc --noEmit
```

## Conventions d'écriture

- La documentation du dépôt est rédigée en français.
- Ne pas employer le trait d'union comme simple séparateur dans le texte courant. Le réserver aux noms composés et aux identifiants techniques, comme `templates-web`, `pro-service`, `create-next-app` ou `package.json`, et utiliser la ponctuation française habituelle (deux-points, points, virgules) à la place.

## Déploiement

Chaque template peut être déployé indépendamment, par exemple sur Vercel.