"use client";

import { templateCategories } from "@/data/templates";

type TemplateFiltersProps = {
  active: string;
  onChange: (category: string) => void;
};

export function TemplateFilters({ active, onChange }: TemplateFiltersProps) {
  return (
    <div
      id="categories"
      className="scroll-mt-24 overflow-x-auto pb-2"
      role="group"
      aria-label="Filtrer les templates par catégorie"
    >
      <div className="mx-auto flex w-max gap-2">
        {templateCategories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              aria-pressed={isActive}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}