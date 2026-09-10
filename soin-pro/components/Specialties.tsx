import {
  Bone,
  Brain,
  Check,
  ChevronDown,
  PersonStanding,
  Salad,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { specialties } from "@/data/specialties";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Smile,
  PersonStanding,
  Brain,
  Salad,
  Bone,
  ShieldCheck,
};

export default function Specialties() {
  return (
    <Section id="specialites">
      <SectionHeading
        eyebrow="Nos spécialités"
        title="Des soins adaptés à vos besoins"
        subtitle="Quel que soit votre motif de consultation, les praticiens du cabinet vous reçoivent dans un cadre bienveillant et sur rendez-vous."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((specialty, index) => {
          const Icon = iconMap[specialty.icon] ?? Smile;
          return (
            <Reveal key={specialty.id} delay={index * 60}>
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {specialty.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {specialty.description}
                </p>

                <details className="group mt-5">
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800">
                    En savoir plus
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <ul className="mt-4 space-y-2.5 border-t border-zinc-100 pt-4 text-sm leading-relaxed text-zinc-600">
                    {specialty.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}