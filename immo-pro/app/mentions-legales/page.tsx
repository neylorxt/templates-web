import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site de ${siteConfig.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
        Informations
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Mentions légales
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Éditeur du site
          </h2>
          <p className="mt-2">
            {siteConfig.name}, agence immobilière, {siteConfig.contact.city}.
            <br />
            Adresse : {siteConfig.contact.address}, {siteConfig.contact.city}
            <br />
            Téléphone : {siteConfig.contact.phoneDisplay}
            <br />
            Email : {siteConfig.contact.email}
            <br />
            Directrice de la publication : {siteConfig.agent.name}
          </p>
          <p className="mt-2">
            La dénomination sociale, le numéro SIRET, la carte professionnelle
            et le garant financier de l&apos;agence sont précisés à
            l&apos;accueil de l&apos;agence et disponibles sur simple demande.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Hébergement
          </h2>
          <p className="mt-2">
            Le site est hébergé par un prestataire d&apos;hébergement tiers.
            Les coordonnées de l&apos;hébergeur sont disponibles auprès de
            l&apos;éditeur du site sur simple demande.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des éléments présents sur ce site (textes,
            photographies, visuels, structure) est protégé par le droit de la
            propriété intellectuelle. Toute reproduction, même partielle, est
            soumise à l&apos;autorisation préalable de l&apos;éditeur du site.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Responsabilité
          </h2>
          <p className="mt-2">
            L&apos;éditeur du site s&apos;efforce d&apos;assurer
            l&apos;exactitude des informations diffusées. Toutefois, il ne
            saurait être tenu responsable des erreurs, omissions ou de la
            disponibilité des informations.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Protection des données
          </h2>
          <p className="mt-2">
            Les informations recueillies par les formulaires font l&apos;objet
            d&apos;un traitement destiné à répondre à votre demande. Elles ne
            sont ni revendues ni transmises à des tiers. Vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression : voir notre
            politique de confidentialité.
          </p>
        </section>
      </div>
    </div>
  );
}