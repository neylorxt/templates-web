import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-zinc-50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            title="Des solutions complètes pour tous vos besoins"
            description="De l'installation à l'intervention urgente, notre équipe qualifiée intervient rapidement avec un travail soigné et des garanties."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-zinc-600">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  En savoir plus
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}