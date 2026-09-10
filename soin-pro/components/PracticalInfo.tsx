import {
  CalendarCheck,
  CreditCard,
  FileText,
  HandHeart,
  Languages,
  Video,
  type LucideIcon,
} from "lucide-react";
import { practicalInfo } from "@/data/practicalInfo";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  FileText,
  CalendarCheck,
  Video,
  Languages,
  HandHeart,
};

export default function PracticalInfo() {
  if (practicalInfo.length === 0) return null;

  return (
    <Section id="infos-pratiques">
      <SectionHeading
        eyebrow="Informations pratiques"
        title="Ce qu'il faut savoir avant de venir"
        subtitle="Quelques repères utiles pour préparer votre consultation en toute sérénité."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practicalInfo.map((item, index) => {
          const Icon = iconMap[item.icon] ?? FileText;
          return (
            <Reveal key={item.label} delay={index * 60}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900">{item.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}