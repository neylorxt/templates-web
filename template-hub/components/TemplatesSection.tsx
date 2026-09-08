"use client";

import { useMemo, useState } from "react";
import { templates } from "@/data/templates";
import { TemplateFilters } from "@/components/TemplateFilters";
import { TemplateCard } from "@/components/TemplateCard";
import { TemplateRow } from "@/components/TemplateRow";

type TemplatesSectionProps = {
  initialCategory?: string;
  variant?: "grid" | "list";
};

export function TemplatesSection({
  initialCategory = "Tous",
  variant = "grid",
}: TemplatesSectionProps) {
  const [active, setActive] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (active === "Tous") return templates;
    return templates.filter((template) =>
      template.filters.some((filter) => filter === active)
    );
  }, [active]);

  return (
    <div>
      <TemplateFilters active={active} onChange={setActive} />

      {filtered.length > 0 ? (
        variant === "list" ? (
          <div className="mt-10 space-y-10">
            {filtered.map((template, index) => (
              <TemplateRow
                key={template.slug}
                template={template}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        )
      ) : (
        <p className="mt-10 text-center text-zinc-500">
          Aucun template dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}