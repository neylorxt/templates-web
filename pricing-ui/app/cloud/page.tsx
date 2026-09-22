import type { Metadata } from "next";
import { Headphones, ShieldCheck, TerminalSquare } from "lucide-react";
import { BackToHome } from "@/components/back-to-home";
import { CloudConfigurator } from "./configurator";

export const metadata: Metadata = {
  title: "Cloud",
  description:
    "Exemple de tarification cloud : configurateur CPU, RAM et stockage avec estimation en direct.",
};

const features = [
  {
    icon: ShieldCheck,
    title: "99,99 % de disponibilité",
    description: "SLA contractuel et redondance sur trois zones.",
  },
  {
    icon: TerminalSquare,
    title: "API et CLI complètes",
    description: "Provisionnez une instance en une commande.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Ingénieurs disponibles par chat et téléphone.",
  },
];

export default function CloudPage() {
  return (
    <main
      data-theme="dark"
      className="theme-cloud min-h-dvh bg-[#05070a] font-display text-zinc-100"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="font-semibold tracking-tight">cloud</span>
          </div>
          <BackToHome className="text-zinc-500 hover:text-emerald-300" />
        </header>

        <section className="mt-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-300/80">
            Tarification à l’usage
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Louez la puissance,
            <br />
            pas le superflu.
          </h1>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-zinc-400">
            Composez votre instance : processeurs, mémoire et stockage NVMe.
            Vous ne payez que ce que vous allouez, à la seconde.
          </p>
        </section>

        <section className="mt-12">
          <CloudConfigurator />
        </section>

        <section className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-5"
            >
              <Icon className="size-5 text-emerald-300" />
              <h2 className="mt-4 text-sm font-semibold text-zinc-100">
                {title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {description}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-12 border-t border-white/10 py-8 font-mono text-[11px] text-zinc-600">
          cloud — démonstration · prix hors taxes par mois
        </footer>
      </div>
    </main>
  );
}
