# ProService

Template de site vitrine professionnel, sur une seule page, destiné aux petites entreprises de services : garages automobiles, entreprises de nettoyage, plombiers, électriciens, artisans et services locaux.

Construit avec **Next.js 16** (App Router), **React 19**, **TypeScript** et **Tailwind CSS v4**. Tout le contenu visible est en français.

## Fonctionnalités

- Navbar fixe avec menu mobile et bouton « Demander un devis »
- Section héro avec points de confiance
- Six services présentés en cartes
- Section à propos avec statistiques
- Avis clients avec note globale
- Galerie de réalisations avec effet au survol
- Bandeau d'appel à l'action
- Section contact avec formulaire (côté client) et bouton WhatsApp
- Bouton WhatsApp flottant
- Footer complet avec copyright dynamique
- SEO : metadata, Open Graph, balises sémantiques et données structurées `LocalBusiness`
- Design entièrement responsive et animations légères à l'apparition des sections

## Prérequis

Pour installer et faire fonctionner le site en local, vous avez besoin de :

- **Node.js** version 20.9 ou supérieure. Next.js 16 ne fonctionne pas avec les versions antérieures. Vérifiez votre version avec la commande `node --version`.
- **npm**, le gestionnaire de paquets livré avec Node.js. Vérifiez sa présence avec la commande `npm --version`.

Si Node.js n'est pas encore installé sur votre machine, téléchargez la version LTS la plus récente depuis le site officiel de Node.js, puis installez le paquet. npm est installé automatiquement avec lui.

## Récupérer le projet

Le template est publié dans le dépôt GitHub [templates-web](https://github.com/neylorxt/templates-web), qui regroupe tous les templates. Clonez le dépôt, puis placez-vous dans le dossier du template :

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web/pro-service
```

Vous pouvez aussi télécharger l'archive ZIP du dépôt depuis GitHub, la décompresser, puis ouvrir un terminal dans le dossier `pro-service`. Toutes les commandes ci-dessous se lancent depuis la racine du template.

## Installation des dépendances

Toutes les dépendances du projet (Next.js, React, Tailwind CSS, lucide-react, etc.) sont déclarées dans le fichier `package.json`. Pour les installer, lancez :

```bash
npm install
```

Cette commande crée le dossier `node_modules` (qui contient les paquets installés) et s'appuie sur le fichier de verrouillage `package-lock.json` pour garantir des versions identiques d'une machine à l'autre. Le premier lancement peut prendre quelques minutes selon la connexion.

Si l'installation rencontre une erreur, commencez par supprimer le dossier `node_modules` à la racine du projet, puis relancez la commande `npm install`.

## Lancement en développement

Une fois les dépendances installées, lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur. Le serveur de développement utilise Turbopack et se recharge automatiquement à chaque modification de code. Le site s'affiche en français ; pour le personnaliser, suivez la section « Personnaliser le template pour un nouveau client » ci-dessous.

## Compilation pour la production

```bash
npm run build
npm run start
```

`npm run build` génère une version optimisée et statique du site. `npm run start` la sert ensuite, par défaut sur http://localhost:3000.

## Vérifications

```bash
npm run lint      # analyse du code avec ESLint
npx tsc --noEmit  # vérification des types TypeScript
```

Il n'existe pas de script de tests ni de typecheck dédié ; la vérification des types se lance manuellement avec `npx tsc --noEmit`.

## Personnaliser le template pour un nouveau client

Toute la configuration du site se trouve dans le fichier `data/company.ts` : nom de l'entreprise, slogan, numéro de téléphone, numéro WhatsApp, email, adresse, horaires, services, témoignages, galerie, images et liens des réseaux sociaux.

Deux autres fichiers servent à la personnalisation :

- `app/globals.css` : la palette de couleurs de la marque (échelle `--color-brand-*`, configurée avec Tailwind v4).
- `next.config.ts` : la liste des hôtes d'images distants autorisés (`images.remotePatterns`), par défaut `images.unsplash.com`.

Le formulaire de contact fonctionne côté frontend (un état de confirmation s'affiche après l'envoi). Pour l'envoyer réellement, connectez-le à une API ou à un service d'envoi d'emails via la fonction `handleSubmit` dans `components/Contact.tsx`, signalée par un TODO.

## Structure du projet

```text
app/            page d'accueil, layout global et styles (globals.css)
components/     sections du site : Header, Hero, Services, About,
                Testimonials, Gallery, Contact, Footer, WhatsAppButton
data/           company.ts, le fichier de configuration central
public/         ressources statiques
```

## Déploiement

Le site est entièrement statique et peut être déployé sur n'importe quelle plateforme prenant en charge Next.js, par exemple Vercel. Il suffit d'importer le dépôt et de laisser la configuration par défaut, le build étant exécuté automatiquement.