import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { pricingNote, pricingPlans } from "@/data/pricing";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { buttonClassName } from "@/components/Button";

/**
 * Section « Nos tarifs » : les trois formules issues de `data/pricing.ts`.
 * Les tarifs sont des points de départ, la note sous la grille le précise.
 */
export default function Pricing() {
  return (
    <Section id="tarifs" className="bg-mist">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Tarifs"
          title="Des formules simples et transparentes"
          subtitle="Choisissez le niveau d'accompagnement adapté à votre objectif. Le tarif final dépend de la formation choisie."
        />
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 80} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm ${
                plan.popular
                  ? "border-brand-700 ring-2 ring-brand-700"
                  : "border-zinc-200"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-700 px-4 py-1.5 text-xs font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Le plus choisi
                </span>
              ) : null}

              <h3 className="font-display text-xl font-semibold text-ink">
                Formule {plan.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{plan.description}</p>
              <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-brand-700">
                {plan.priceLabel}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-zinc-700"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/#inscription"
                className={`${buttonClassName(
                  plan.popular ? "primary" : "secondary",
                  "md"
                )} mt-8 w-full`}
              >
                S&apos;inscrire
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-600">
        {pricingNote}
      </p>
    </Section>
  );
}