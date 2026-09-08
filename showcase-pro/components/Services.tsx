import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Services"
          title="Des prestations pensées pour vous"
          subtitle="De la simple séance au pack complet, chaque prestation est adaptée à votre besoin et à votre univers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.name} delay={(index % 3) * 100}>
                <article className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {service.cta ? (
                    <a
                      href={service.cta.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    >
                      {service.cta.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}