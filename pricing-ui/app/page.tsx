import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PricingIllustration } from "@/components/pricing-illustration";
import {
  pricingTemplates,
  type PricingTemplate,
} from "@/data/pricing-templates";

function TemplateCard({ template }: { template: PricingTemplate }) {
  return (
    <Link
      href={template.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition hover:border-white/25 hover:bg-zinc-900/70"
    >
      <div
        className="flex h-50 items-center justify-center border-b border-white/10"
        style={{ backgroundColor: template.accentSoft }}
      >
        <PricingIllustration
          slug={template.slug}
          color={template.accent}
          className="h-32 w-52"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-zinc-100">
            {template.title}
          </h2>
          <ArrowUpRight className="ml-auto size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200" />
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          {template.description}
        </p>
        <p className="mt-auto pt-2 text-[11px] text-zinc-500">
          {template.highlights.join(" · ")}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-zinc-950 text-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-violet-500 text-sm font-bold text-white">
              P
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Pricing UI
            </span>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
            Next.js 16 · HeroUI v3 · Tailwind v4
          </span>
        </header>

        <section className="mx-auto mt-20 max-w-2xl text-center lg:mt-28">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-400">
            Neuf pages, neuf styles
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Neuf façons de présenter vos tarifs
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-400">
            Chaque carte mène vers une page de pricing complète, avec sa propre
            identité visuelle, ses interactions et sa logique de facturation.
            Les tarifs sont fictifs, les mises en page sont réutilisables.
          </p>
        </section>

        <section className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </section>

        <footer className="mt-16 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-xs text-zinc-500">
          <p>
            9 pages autonomes, un seul projet. Ouvrez une page, revenez,
            ouvrez-en une autre : l’ambiance change à chaque fois.
          </p>
          <p>Projet de démonstration, prix et noms fictifs.</p>
        </footer>
      </div>
    </main>
  );
}
