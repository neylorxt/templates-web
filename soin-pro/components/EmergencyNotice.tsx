import { ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";

/**
 * Petit rappel : le site ne remplace pas les services d'urgence.
 * Contenu configurable dans `config/site.ts` (`siteConfig.emergency`).
 */
export default function EmergencyNotice() {
  if (!siteConfig.emergency.show) return null;

  return (
    <Section className="!py-10">
      <div
        className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-8"
        role="note"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-clay-100 text-clay-600">
          <ShieldAlert className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">
            {siteConfig.emergency.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
            {siteConfig.emergency.text}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
            {siteConfig.emergency.note}
          </p>
        </div>
      </div>
    </Section>
  );
}