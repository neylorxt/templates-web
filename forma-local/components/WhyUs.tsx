import Image from "next/image";
import {
  CalendarClock,
  FileText,
  HeartHandshake,
  Target,
  UserCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { advantages } from "@/data/whyUs";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, typeof UserCheck> = {
  UserCheck,
  Target,
  HeartHandshake,
  CalendarClock,
  Users,
  FileText,
};

/**
 * Section « Pourquoi nous choisir » : avantages de l'établissement et
 * quelques chiffres. Les statistiques viennent de `siteConfig.stats`
 * (exemples de démonstration à remplacer avant mise en ligne).
 */
export default function WhyUs() {
  return (
    <Section id="pourquoi-nous" className="bg-mist">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-lg shadow-brand-900/10">
            <Image
              src={siteConfig.images.about}
              alt="Apprenants en train de travailler en petit groupe"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Nos engagements"
            title={`Pourquoi choisir ${siteConfig.name} ?`}
            subtitle="Notre pédagogie repose sur l'écoute, la pratique et le suivi : vous ne suivez pas un cours, vous avancez vers un objectif."
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {advantages.map((advantage, index) => {
              const Icon = iconMap[advantage.icon] ?? UserCheck;
              return (
                <Reveal key={advantage.title} delay={index * 60}>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">
                        {advantage.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                        {advantage.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          {siteConfig.stats.length > 0 ? (
            <dl className="mt-12 grid grid-cols-2 gap-6 rounded-3xl border border-brand-100 bg-white p-6 sm:grid-cols-4 sm:p-8">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2 mt-1 text-xs font-medium text-zinc-500">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-2xl font-semibold tracking-tight text-brand-700 sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </Section>
  );
}