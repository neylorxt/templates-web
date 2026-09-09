import {
  Building2,
  Calculator,
  Compass,
  FileText,
  Handshake,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, LucideIcon> = {
  KeyRound,
  Handshake,
  FileText,
  Calculator,
  Building2,
  Compass,
};

export default function Services() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Nos services"
        title="Un accompagnement complet"
        subtitle="De l'estimation à la signature, nous prenons en charge chaque étape de votre projet immobilier avec exigence et transparence."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] ?? KeyRound;
          return (
            <Reveal key={service.title} delay={index * 60}>
              <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}