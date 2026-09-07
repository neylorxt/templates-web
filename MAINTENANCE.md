# Maintenance de templates-web

Ce document s'adresse aux mainteneurs du dépôt. Pour l'utilisation des templates, voir le [README](README.md). Pour les consignes destinées aux agents IA, voir le [AGENTS.md](AGENTS.md).

## Rôle des fichiers racine

- `README.md` : parcours utilisateur (présentation, clonage, utilisation, déploiement).
- `AGENTS.md` : consignes de travail pour les agents IA (conventions, pièges, structure).
- `MAINTENANCE.md` : procédures de maintenance (ce document).

## Ajouter un nouveau template

Créer un nouveau dossier autonome à la racine du dépôt. Chaque template est indépendant : il n'existe ni workspace racine, ni outillage partagé.

Un template doit contenir au minimum :

- `package.json` et son fichier de verrouillage (`package-lock.json`).
- `.gitignore` (au minimum `node_modules`, `.next`, `next-env.d.ts`, `*.tsbuildinfo`).
- `AGENTS.md` et `README.md`, avec un contenu visible rédigé en français.
- `CLAUDE.md` optionnel, pointant vers `AGENTS.md`.

Avant de publier un template :

1. Installer les dépendances : `npm install`.
2. Vérifier la qualité : `npm run lint`, puis `npx tsc --noEmit`.
3. Tester la compilation : `npm run build`.
4. Contrôler le rendu : `npm run dev`, puis vérification visuelle sur http://localhost:3000.

Mettre à jour l'index : ajouter le template dans la section « Templates disponibles » du `README.md` racine et dans la section « Layout » du `AGENTS.md`.

## Conventions d'écriture

- La documentation du dépôt et le contenu visible des templates sont rédigés en français.
- Dans la prose française, ne pas employer le trait d'union comme séparateur. Le réserver aux noms composés et aux identifiants techniques (`templates-web`, `pro-service`, `create-next-app`, `package.json`) et aux puces de liste.
- Les README des templates sont orientés utilisateur : cloner, installer, lancer, personnaliser. Les détails de maintenance restent dans ce document.

## Conventions de commit

- Suivre le format Conventional Commits, avec un sujet en français : `feat:`, `docs:`, `fix:`, `refactor:`, `chore:`.
- Un commit représente une unité logique : un template entier, une documentation, une correction.
- Préciser le périmètre quand c'est utile : `docs(pro-service): ...`.
- Exemples : `feat: ajoute le template menu-local`, `docs: oriente le README racine vers l'utilisateur`.

## Dépôt distant

- Remote : `origin` → https://github.com/neylorxt/templates-web.git.
- Branche par défaut : `main`, poussée avec `git push`.
- Réécrire l'historique uniquement en cas de besoin, avec `git push --force-with-lease` (jamais de `--force` simple).