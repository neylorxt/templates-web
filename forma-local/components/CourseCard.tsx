import Image from "next/image";
import Link from "next/link";
import { BookOpen, CalendarDays, Clock, GraduationCap } from "lucide-react";
import type { Course } from "@/types/course";
import { buttonClassName } from "@/components/Button";

/**
 * Carte d'une formation. Utilisée dans la section « Nos formations » de la
 * page d'accueil et sur la page /formations.
 */
export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={`Formation ${course.title}`}
          width={800}
          height={500}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm">
          {course.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          {course.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {course.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600">
          <li className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
            {course.duration}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <GraduationCap
              className="h-3.5 w-3.5 text-brand-600"
              aria-hidden="true"
            />
            {course.level}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <CalendarDays
              className="h-3.5 w-3.5 text-brand-600"
              aria-hidden="true"
            />
            {course.format}
          </li>
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-5">
          <p className="text-sm">
            {course.price ? (
              <>
                <span className="font-display text-lg font-semibold text-ink">
                  {course.price} €
                </span>{" "}
                <span className="text-xs text-zinc-500">en groupe</span>
              </>
            ) : (
              <span className="font-medium text-zinc-700">Sur demande</span>
            )}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href={`/formations/${course.slug}`}
            className={`${buttonClassName("secondary", "sm")} flex-1`}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Voir le programme
          </Link>
          <Link
            href="/#inscription"
            className={`${buttonClassName("primary", "sm")} flex-1`}
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </article>
  );
}