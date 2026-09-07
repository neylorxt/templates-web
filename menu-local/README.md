# MenuLocal

Template Next.js monopage pour un commerce alimentaire local : restaurant, pâtisserie, café, snack, boulangerie ou petit commerce. Un site complet, en français, réaliste et prêt à être montré à un client comme démo commerciale, puis personnalisé en quelques minutes.

Le repo est fourni avec un exemple crédible : « Le Comptoir de Léa », un bistrot de la Presqu’île de Lyon.

## Stack technique

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4, configuré en CSS-first dans `app/globals.css` (pas de `tailwind.config.js`)
- `lucide-react` pour les icônes
- `next/image` pour les images optimisées (Unsplash / Pexels)
- `next/font` pour les polices Google (Inter + Playfair Display)

## Démarrage rapide

Le template est publié dans le dépôt GitHub [templates-web](https://github.com/neylorxt/templates-web), qui regroupe tous les templates. Clonez le dépôt, puis placez-vous dans le dossier du template :

```bash
git clone https://github.com/neylorxt/templates-web.git
cd templates-web/menu-local
```

Installez ensuite les dépendances, puis lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000` dans votre navigateur. Le serveur de développement utilise Turbopack et se recharge automatiquement à chaque modification de code. Pour adapter le site à un client, suivez la section « Personnaliser pour un client » ci-dessous.

## Personnaliser pour un client

Toute la logique des données vit dans un fichier unique : **`config/site.ts`**. Les composants lisent cette config, ne jamais écrire ces valeurs en dur dans les composants.

### Champs principaux

| Donnée | Clé dans `config/site.ts` |
| --- | --- |
| Nom, slogan, description, type d’activité | `name`, `slogan`, `description`, `type` |
| Téléphone, WhatsApp, e-mail | `phone`, `phoneDisplay`, `whatsapp`, `email` |
| Adresse, quartier, GPS, carte | `address`, `city`, `district`, `gps`, `mapsEmbedUrl`, `mapsDirectionsUrl`, `access` |
| Réseaux sociaux | `instagram`, `facebook`, `url` |
| Note globale des avis | `rating` |
| Menu de navigation | `nav` |
| Éléments de confiance du hero | `trustBadges` |
| Texte et image du hero | `hero` |
| Produit vedette | `featured` |
| Catégories et produits | `categories`, `menu` |
| Horaires | `openingHours` |
| Témoignages | `testimonials` |
| Galerie | `gallery` |
| Section CTA finale | `cta` |
| Mentions légales | `legal` |

Le numéro WhatsApp est au format international sans `+` ni espaces (`wa.me/33XXXXXXXXX`). Tous les boutons WhatsApp du site utilisent ce numéro avec un message prérempli.

### Adapter le type de commerce

- **Pâtisserie ou boulangerie** : ajuster `categories` (Gâteaux, Viennoiseries, Pains, Coffrets, Produits du jour), `featured` devient le gâteau ou la viennoiserie phare, et passer le type Schema.org à `Bakery` dans `app/page.tsx`.
- **Café** : catégories dédiées aux boissons et pâtisseries, type Schema.org `CafeOrCoffeeShop`.
- **Snack** : catégories rapides, type `FastFoodRestaurant` ou `LocalBusiness`.

### Images

- Utiliser uniquement des photos réelles d’Unsplash ou Pexels, cohérentes entre elles.
- `next.config.ts` déclare les domaines distants : ne pas les retirer, sinon `next/image` casse.
- Toujours fournir un `alt` (SEO et accessibilité).
- Pour une photo personnalisée, suivre le format `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`.

### Couleurs et typographie

La marque se règle dans `app/globals.css`, dans le bloc `@theme` : fond crème, encre, terracotta de marque (`--color-brand-*`), doré. Les polices (Inter + Playfair Display) se changent dans `app/layout.tsx` via `next/font`.

### SEO

- `metadata` Next.js et Open Graph dans `app/layout.tsx` (`lang="fr"`).
- Données structurées Schema.org (`Restaurant`, modifiable selon le client) dans `app/page.tsx` via un bloc JSON-LD.
- Hiérarchie H1 / H2 / H3 propre, balises sémantiques, `alt` sur toutes les images.

## Architecture

```
config/site.ts          données personnalisables (source unique)
app/
  layout.tsx            polices, lang="fr", metadata
  page.tsx              composition des sections + JSON-LD
  globals.css           thème Tailwind v4 et variables de marque
components/
  Header.tsx            navbar sticky + menu mobile
  Hero.tsx              grande photo, titres, CTA, badges de confiance
  Menu.tsx              produits avec filtres par catégories
  FeaturedProduct.tsx   produit vedette
  Gallery.tsx           carousel avec lightbox
  Testimonials.tsx      avis clients et note globale
  OpeningHours.tsx      horaires + indicateur ouvert / fermé
  Location.tsx          carte et boutons itinéraire / appel / WhatsApp
  Cta.tsx               section commande finale
  Footer.tsx            pied de page, mentions légales, copyright dynamique
  WhatsAppButton.tsx    bouton flottant bas droite
  WhatsAppIcon.tsx      icône WhatsApp (SVG)
  SocialIcons.tsx       icônes Instagram / Facebook (SVG)
```

## Vérification

```bash
npm run lint       # eslint
npx tsc --noEmit   # typecheck (pas de script dédié)
npm run build      # build de production
```

## Notes

- En `lucide-react` v1, les icônes de marque (Facebook, Instagram, Twitter) ne sont plus exportées : elles sont en SVG inline dans `components/SocialIcons.tsx`.
- L’eslint exige les apostrophes françaises typographiques (`’`) dans le JSX, pas l’apostrophe droite.
- Dans la prose française, ne pas employer le trait d’union comme séparateur ; le réserver aux noms composés et identifiants.
- Les consignes pour les agents IA sont dans `AGENTS.md` (block géré par `next dev` à conserver).