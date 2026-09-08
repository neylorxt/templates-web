import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site de ${siteConfig.name}.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Politique de confidentialité
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone-600 sm:text-base">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Données collectées</h2>
          <p className="mt-2">
            Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être
            collectées : nom, adresse email, téléphone, type de prestation, budget et message. Ces
            données sont utilisées uniquement pour répondre à votre demande.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Utilisation des données</h2>
          <p className="mt-2">
            Les données collectées ne sont ni vendues, ni louées, ni transmises à des tiers, hors
            nécessité légale. Elles sont conservées le temps nécessaire au traitement de votre
            demande et aux obligations légales applicables.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Vos droits</h2>
          <p className="mt-2">
            Conformément au règlement général sur la protection des données (RGPD), vous disposez
            d’un droit d’accès, de rectification, d’effacement et d’opposition concernant vos
            données. Pour l’exercer, contactez-moi à l’adresse suivante : {siteConfig.contact.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Cookies</h2>
          <p className="mt-2">
            Ce site n’utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques
            strictement nécessaires au fonctionnement du site peuvent être déposés.
          </p>
        </section>
      </div>
    </div>
  );
}