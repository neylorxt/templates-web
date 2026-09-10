"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, GraduationCap, ListChecks } from "lucide-react";
import { featuredProgram } from "@/data/programs";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Section « Un programme structuré » : le déroulé pédagogique d'une formation
 * phare, affiché en accordéon. Les modules viennent de `data/programs.ts`.
 */
export default function Program() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="programme" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Pédagogie"
          title="Un programme structuré pour progresser étape par étape"
          subtitle={featuredProgram.intro}
        />
      </div>

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {featuredProgram.title}
              </h3>
              <p className="text-sm text-zinc-600">{featuredProgram.summary}</p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-zinc-200">
            {featuredProgram.modules.map((module, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={module.title}>
                  <h4>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`module-${index}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-ink">
                          {module.title}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h4>
                  <div
                    id={`module-${index}`}
                    hidden={!isOpen}
                    className="pb-5 pl-11"
                  >
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {module.description}
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-zinc-700"
                        >
                          <ListChecks
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                            aria-hidden="true"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {featuredProgram.courseSlug ? (
            <div className="mt-6 flex justify-center border-t border-zinc-100 pt-6">
              <Link
                href={`/formations/${featuredProgram.courseSlug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
              >
                Voir la fiche complète de la formation
              </Link>
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}