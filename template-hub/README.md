# TemplateHub

Hub et vitrine de templates de sites internet professionnels, prêts à être personnalisés pour des clients.

TemplateHub présente **ProService**, **MenuLocal** et **ShowcasePro** : trois modèles Next.js pensés pour les entreprises de services, les commerces et les indépendants. Le site permet à un prospect de découvrir les modèles, de les comparer, d'ouvrir une démonstration et de contacter l'équipe pour faire personnaliser un template.

Le parcours proposé est le suivant : **découvrir → comparer → ouvrir une démo → choisir → contacter.**

## Templates présentés

- **ProService** — pour garages, plomberie, nettoyage, électricité et petites entreprises de services.
- **MenuLocal** — pour restaurants, pâtisseries, cafés, boulangeries et commerces.
- **ShowcasePro** — pour photographes, barbers, coachs, freelances et petites agences.

## Prérequis

Node.js 20+ et npm installés.

## Récupérer le projet

Le template est publié dans le dépôt GitHub [templates-web](https://github.com/neylorxt/templates-web), qui regroupe tous les templates. Clonez le dépôt, puis placez-vous dans le dossier du template :

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web/template-hub
```

Vous pouvez aussi télécharger l'archive ZIP du dépôt depuis GitHub, la décompresser, puis ouvrir un terminal dans le dossier `template-hub`.

## Installation

Installez les dépendances, puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur. Le serveur de développement utilise Turbopack et se recharge automatiquement à chaque modification de code. Pour adapter le site à votre activité, suivez la section « Personnaliser le site » ci-dessous.

## Personnaliser le site

Les coordonnées, le numéro WhatsApp, les réseaux sociaux et la navigation sont centralisés dans `config/site.ts`.

Les informations des templates sont centralisées dans `data/templates.ts` : nom, catégorie, description, activités compatibles, sections du site, fonctionnalités, lien de démonstration et couleurs d'accent. Les cartes et les pages dédiées sont générées automatiquement depuis ce fichier.

Les aperçus se remplacent dans `public/templates/` :

```text
public/templates/proservice/preview.png
public/templates/menulocal/preview.png
public/templates/showcasepro/preview.png
```

L'identité visuelle (couleur de marque) se règle dans `app/globals.css` via les variables `--color-brand-*`.

## Ajouter un nouveau template

1. Créer un dossier `public/templates/<slug>/` avec les aperçus.
2. Ajouter un objet dans le tableau `templates` de `data/templates.ts`.
3. Ajouter éventuellement une ligne dans `comparisonRows` pour la section comparaison.

Aucune autre modification n'est nécessaire : la carte, la page dédiée, le sitemap et le SEO sont générés automatiquement.

## Vérifications

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Déploiement

Le site peut être déployé sur Vercel, Netlify ou tout service compatible Next.js.

## Ressources

- [Documentation Next.js App Router](https://nextjs.org/docs)
- [Lucide React](https://lucide.dev)