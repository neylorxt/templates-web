import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { Section } from "@/components/Section";
import CourseFilters from "@/components/CourseFilters";

export const metadata: Metadata = {
  title: "Nos formations",
  description:
    "Découvrez l'ensemble de nos formations : langues, bureautique, digital et management. Filtrez par catégorie, niveau et format pour trouver la formation adaptée à votre objectif.",
};

export default function FormationsPage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Catalogue
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Nos formations
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Des programmes concrets, en petit groupe, pour atteindre un objectif
            clair. Utilisez les filtres pour trouver la formation adaptée à
            votre niveau et à vos disponibilités.
          </p>
        </div>
      </section>

      <Section id="catalogue" className="bg-white">
        <CourseFilters courses={courses} />
      </Section>
    </>
  );
}