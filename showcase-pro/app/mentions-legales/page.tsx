import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site de ${siteConfig.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Mentions légales</h1>
      <div className="prose mt-8 space-y-6 text-sm leading-relaxed text-stone-600 sm:text-base">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Éditeur du site</h2>
          <p className="mt-2">
            {siteConfig.name}, {siteConfig.profession.toLowerCase()}, {siteConfig.contact.city}.
            <br />
            Email : {siteConfig.contact.email}
            <br />
            Téléphone : {siteConfig.contact.phoneDisplay}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Hébergement</h2>
          <p className="mt-2">
            Le site est hébergé par un prestataire d’hébergement tiers. Les coordonnées de
            l’hébergeur sont disponibles auprès de l’éditeur du site sur simple demande.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des éléments présents sur ce site (textes, photographies, visuels,
            structure) est protégé par le droit de la propriété intellectuelle. Toute reproduction,
            même partielle, est soumise à l’autorisation préalable de l’éditeur du site.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Responsabilité</h2>
          <p className="mt-2">
            L’éditeur du site s’efforce d’assurer l’exactitude des informations diffusées.
            Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou de la
            disponibilité des informations.
          </p>
        </section>
      </div>
    </div>
  );
}