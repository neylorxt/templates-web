"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Calendar, Tag } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState<string>("Tout");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "Tout" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="realisations" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Portfolio"
          title="Mes réalisations"
          subtitle="Une sélection de projets récents : mariages, portraits, événements et éditoriaux. Chaque image est le fruit d'une direction artistique pensée pour vous."
        />

        <Reveal delay={100}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
            role="group"
            aria-label="Filtrer les réalisations par catégorie"
          >
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-ink text-cream shadow-sm"
                      : "border border-stone-300 text-stone-600 hover:border-brand-600 hover:text-brand-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 100}>
              <article className="group">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`Afficher en grand : ${project.title}`}
                  className="relative block w-full cursor-pointer text-left aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-shadow duration-300 group-hover:shadow-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    <Tag className="h-3 w-3 text-brand-600" aria-hidden="true" />
                    {project.category}
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-4 w-full text-left"
                  aria-label={`Voir le détail : ${project.title}`}
                >
                  <p className="text-sm text-stone-500">{project.description}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.date}
                  </p>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Réalisation : ${selected.title}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-cream shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow transition-colors hover:bg-white"
              aria-label="Fermer la fenêtre"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/10] bg-stone-200">
              <Image
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {selected.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {selected.date}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {selected.title}
              </h3>
              <p className="mt-2 leading-relaxed text-stone-600">{selected.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}