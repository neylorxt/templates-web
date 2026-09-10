import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { buttonClassName } from "@/components/Button";
import CourseCard from "@/components/CourseCard";

/**
 * Section « Nos formations » de la page d'accueil.
 * Affiche les six premières formations du catalogue, puis un lien vers la
 * page complète /formations.
 */
export default function Courses() {
  const featured = courses.slice(0, 6);

  return (
    <Section id="formations" className="bg-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Catalogue"
          title="Nos formations"
          subtitle="Des programmes concrets, en petit groupe, pour atteindre un objectif clair : progresser en langue, maîtriser un outil ou développer une compétence professionnelle."
        />
        <Link
          href="/formations"
          className={`${buttonClassName("secondary", "md")} shrink-0`}
        >
          Voir toutes les formations
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((course, index) => (
          <Reveal key={course.id} delay={index * 60}>
            <CourseCard course={course} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}