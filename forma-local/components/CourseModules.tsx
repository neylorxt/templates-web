"use client";

import { useState } from "react";
import { ChevronDown, ListChecks } from "lucide-react";
import type { CourseModule } from "@/types/course";

/**
 * Programme d'une formation affiché en accordéon (page détail).
 */
export default function CourseModules({ modules }: { modules: CourseModule[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white px-6 sm:px-8">
      {modules.map((module, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={module.title}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`course-module-${index}`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                    {index + 1}
                  </span>
                  <span className="font-display text-lg font-semibold text-ink">
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
            </h3>
            <div id={`course-module-${index}`} hidden={!isOpen} className="pb-6 pl-11">
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
  );
}