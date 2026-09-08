import { Check } from "lucide-react";
import { pricing, pricingNote } from "@/data/pricing";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Tarifs"
          title="Des formules claires et sans surprise"
          subtitle="Choisissez la formule qui vous correspond ; chaque devis reste personnalisé selon votre projet."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 120} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? "bg-ink text-cream shadow-2xl lg:scale-[1.03]"
                    : "border border-stone-200 bg-white shadow-sm"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Le plus choisi
                  </span>
                ) : null}

                <h3
                  className={`font-display text-xl font-semibold ${
                    tier.featured ? "text-cream" : "text-ink"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tier.featured ? "text-stone-300" : "text-stone-500"
                  }`}
                >
                  {tier.description}
                </p>

                <p className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-semibold tracking-tight ${
                      tier.featured ? "text-brand-300" : "text-ink"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-lg font-medium ${
                      tier.featured ? "text-stone-300" : "text-stone-400"
                    }`}
                  >
                    {tier.unit}
                  </span>
                  <span
                    className={`ml-2 text-sm ${
                      tier.featured ? "text-stone-400" : "text-stone-400"
                    }`}
                  >
                    / séance
                  </span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.featured ? "text-brand-300" : "text-brand-600"
                        }`}
                        aria-hidden="true"
                      />
                      <span className={tier.featured ? "text-stone-200" : "text-stone-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    tier.featured
                      ? "bg-brand-600 text-white hover:bg-brand-500"
                      : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-cream"
                  }`}
                >
                  {tier.ctaLabel}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm text-stone-500">{pricingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}