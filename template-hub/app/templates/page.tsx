import type { Metadata } from "next";
import { Check } from "lucide-react";
import { TemplatesSection } from "@/components/TemplatesSection";
import { Section } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { templates, templateCategories } from "@/data/templates";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Découvrez nos templates de sites professionnels pour les entreprises de services, les commerces et les indépendants : ProService, MenuLocal et ShowcasePro.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    title: "Nos templates | TemplateHub",
    description:
      "Découvrez nos templates de sites professionnels pour les entreprises de services, les commerces et les indépendants.",
  },
};

const catalogStats = [
  { value: `${templates.length}`, label: "templates" },
  { value: `${templateCategories.length - 1}`, label: "catégories" },
  { value: "100 %", label: "personnalisables" },
];

export default function TemplatesPage() {
  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Catalogue
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            La bibliothèque de templates
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Chaque modèle est présenté en détail avec sa structure, ses
            fonctionnalités et les activités auxquelles il convient. Filtrez par
            catégorie pour trouver celui qui correspond à votre métier.
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {catalogStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-zinc-500">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-zinc-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section className="pt-14">
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
          <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
          Filtrez les templates par activité
        </div>
        <div className="mt-4">
          <TemplatesSection variant="list" />
        </div>
      </Section>

      <Cta />
    </>
  );
}