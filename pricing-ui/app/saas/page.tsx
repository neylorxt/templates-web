import type { Metadata } from "next";
import { Globe, ShieldCheck, Zap } from "lucide-react";
import { BackToHome } from "@/components/back-to-home";
import { SaasPricing } from "./saas-pricing";

export const metadata: Metadata = {
  title: "SaaS",
  description:
    "Exemple de grille tarifaire SaaS : trois formules, bascule mensuel ou annuel et carte mise en avant.",
};

const guarantees = [
  { icon: Globe, label: "Hébergement en Europe" },
  { icon: ShieldCheck, label: "RGPD par défaut" },
  { icon: Zap, label: "Mises à jour continues" },
];

export default function SaasPage() {
  return (
    <main className="theme-saas min-h-dvh bg-zinc-50 text-zinc-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="size-7 rounded-lg bg-violet-600" />
          <span className="font-semibold tracking-tight">SaaS</span>
        </div>
        <BackToHome className="text-zinc-500 hover:text-zinc-900" />
      </header>

      <section className="mx-auto max-w-2xl px-6 pb-12 pt-10 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
          <Zap className="size-3.5" />
          Nouveau : facturation annuelle à -20 %
        </span>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Le bon plan pour chaque équipe
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-500">
          Commencez seul, ajoutez votre équipe, passez à l’échelle. Vous pouvez
          changer de formule ou arrêter à tout moment.
        </p>
      </section>

      <SaasPricing />

      <section className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-zinc-200 px-6 py-8">
        {guarantees.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 text-sm text-zinc-500"
          >
            <Icon className="size-4 text-violet-500" />
            {label}
          </span>
        ))}
      </section>
    </main>
  );
}
