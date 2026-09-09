import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site de ${siteConfig.name}.`,
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
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
            Les formulaires du site (contact, demande d&apos;estimation)
            collectent les informations que vous nous transmettez : nom,
            téléphone, email, type de demande et, le cas échéant, les
            informations relatives à votre bien (ville, surface, nombre de
            pièces).
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Utilisation des données
          </h2>
          <p className="mt-2">
            Ces données sont utilisées exclusivement pour répondre à votre
            demande, organiser une visite ou réaliser une estimation. Elles ne
            sont ni vendues, ni louées, ni transmises à des tiers à des fins
            commerciales.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Conservation
          </h2>
          <p className="mt-2">
            Vos données sont conservées le temps nécessaire au traitement de
            votre demande, puis au respect des obligations légales et
            comptables de {siteConfig.name}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Vos droits
          </h2>
          <p className="mt-2">
            Conformément au règlement général sur la protection des données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;opposition et de suppression de vos données.
            Pour exercer ces droits, contactez-nous à {siteConfig.contact.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Cookies
          </h2>
          <p className="mt-2">
            Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs
            de suivi. Les cookies strictement nécessaires au fonctionnement du
            site ne collectent aucune donnée personnelle.
          </p>
        </section>
      </div>
    </div>
  );
}