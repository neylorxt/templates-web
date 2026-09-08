import { Check, Minus, X } from "lucide-react";
import { comparisonRows, templates } from "@/data/templates";
import { Section, SectionHeader } from "@/components/Section";

function ValueCell({ value }: { value: string }) {
  if (value === "Oui") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-brand-700">
        <Check className="h-4 w-4" aria-hidden="true" />
        Oui
      </span>
    );
  }
  if (value === "Non") {
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-400">
        <X className="h-4 w-4" aria-hidden="true" />
        Non
      </span>
    );
  }
  if (value === "Optionnel") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-amber-600">
        <Minus className="h-4 w-4" aria-hidden="true" />
        Optionnel
      </span>
    );
  }
  return <span className="font-medium text-zinc-700">{value}</span>;
}

export function Comparison() {
  return (
    <Section id="comparaison">
      <SectionHeader
        eyebrow="Comparaison"
        title="Comparez les templates"
        description="Un aperçu rapide pour choisir le modèle qui correspond à votre activité."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-zinc-500">
                  Fonctionnalité
                </th>
                {templates.map((template) => (
                  <th
                    key={template.slug}
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-zinc-950"
                  >
                    {template.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.label}
                  className={index % 2 === 0 ? "" : "bg-zinc-50/50"}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-sm font-medium text-zinc-900"
                  >
                    {row.label}
                  </th>
                  {templates.map((template) => (
                    <td key={template.slug} className="px-6 py-4 text-sm">
                      <ValueCell value={row.values[template.slug] ?? "Non"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:hidden">
        {templates.map((template) => (
          <div
            key={template.slug}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-zinc-950">
              {template.name}
            </h3>
            <dl className="mt-4 space-y-3">
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <dt className="text-zinc-500">{row.label}</dt>
                  <dd>
                    <ValueCell value={row.values[template.slug] ?? "Non"} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}