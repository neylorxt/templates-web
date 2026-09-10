import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site de ${siteConfig.name}.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Informations
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Politique de confidentialité
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Données collectées
          </h2>
          <p className="mt-2">
            Les formulaires du site (contact et préinscription) collectent
            uniquement les informations nécessaires au traitement de votre
            demande : nom, prénom, téléphone, email, formation souhaitée,
            niveau et message. Aucune donnée sensible n&apos;est demandée.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Utilisation des données
          </h2>
          <p className="mt-2">
            Vos données sont utilisées uniquement pour répondre à votre demande
            et gérer votre préinscription. Elles ne sont ni revendues ni
            transmises à des tiers, hors nécessité technique d&apos;exécution
            (hébergement, service d&apos;envoi).
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Durée de conservation
          </h2>
          <p className="mt-2">
            Les données des demandes non abouties sont conservées le temps de
            traiter la demande, puis supprimées. Les données des apprenants
            inscrits sont conservées conformément aux obligations légales
            applicables à l&apos;établissement.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Vos droits
          </h2>
          <p className="mt-2">
            Conformément au règlement général sur la protection des données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation et d&apos;opposition
            sur vos données. Pour exercer ces droits, contactez :{" "}
            {siteConfig.contact.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Cookies
          </h2>
          <p className="mt-2">
            Ce site n&apos;utilise pas de cookies publicitaires ou de suivi. Des
            cookies techniques strictement nécessaires au fonctionnement du
            site peuvent être déposés.
          </p>
        </section>
      </div>
    </div>
  );
}