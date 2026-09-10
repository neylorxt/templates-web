"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Course } from "@/types/course";
import { courseCategories, courseLevels } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

const selectClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink focus:border-brand-600 focus:outline-none";

type Filters = {
  query: string;
  category: string;
  level: string;
  format: string;
};

/**
 * Filtres fonctionnels côté client de la page /formations : recherche par mot
 * clé, catégorie, niveau et format (présentiel / en ligne / hybride).
 */
export default function CourseFilters({ courses }: { courses: Course[] }) {
  const [filters, setFilters] = useState<Filters>({
    query: "",
    category: "Toutes",
    level: "Tous",
    format: "Tous",
  });

  const filtered = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return courses.filter((course) => {
      if (
        query &&
        !`${course.title} ${course.shortDescription} ${course.category}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }
      if (filters.category !== "Toutes" && course.category !== filters.category) {
        return false;
      }
      if (filters.level !== "Tous" && course.level !== filters.level) {
        return false;
      }
      if (filters.format !== "Tous" && course.format !== filters.format) {
        return false;
      }
      return true;
    });
  }, [courses, filters]);

  const resetFilters = () =>
    setFilters({ query: "", category: "Toutes", level: "Tous", format: "Tous" });

  return (
    <div>
      <div className="rounded-3xl border border-zinc-200 bg-mist p-5 sm:p-6">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={filters.query}
            onChange={(event) =>
              setFilters((value) => ({ ...value, query: event.target.value }))
            }
            placeholder="Rechercher une formation…"
            aria-label="Rechercher une formation"
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-zinc-400 focus:border-brand-600 focus:outline-none"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="filter-categorie"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500"
            >
              Catégorie
            </label>
            <select
              id="filter-categorie"
              value={filters.category}
              onChange={(event) =>
                setFilters((value) => ({
                  ...value,
                  category: event.target.value,
                }))
              }
              className={selectClass}
            >
              <option value="Toutes">Toutes les catégories</option>
              {courseCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-niveau"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500"
            >
              Niveau
            </label>
            <select
              id="filter-niveau"
              value={filters.level}
              onChange={(event) =>
                setFilters((value) => ({ ...value, level: event.target.value }))
              }
              className={selectClass}
            >
              <option value="Tous">Tous les niveaux</option>
              {courseLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-format"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-500"
            >
              Format
            </label>
            <select
              id="filter-format"
              value={filters.format}
              onChange={(event) =>
                setFilters((value) => ({ ...value, format: event.target.value }))
              }
              className={selectClass}
            >
              <option value="Tous">Tous les formats</option>
              <option value="présentiel">Présentiel</option>
              <option value="en ligne">En ligne</option>
              <option value="hybride">Hybride</option>
            </select>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-zinc-500" role="status">
        {filtered.length} formation{filtered.length > 1 ? "s" : ""} trouvée
        {filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-ink">
            Aucune formation ne correspond à ces critères.
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Essayez d&apos;élargir votre recherche ou contactez-nous : une
            formation sur mesure est peut-être possible.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}