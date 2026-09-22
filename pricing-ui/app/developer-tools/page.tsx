import type { Metadata } from "next";
import { BackToHome } from "@/components/back-to-home";
import { DeveloperPlans } from "./plans";

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Exemple de tarification d’outils développeurs : offres Free, Pro, Team et Enterprise facturées par utilisateur.",
};

const terminalLines = [
  { text: "$ forge deploy --env production", className: "text-zinc-400" },
  { text: "✓ build terminé en 12,4 s", className: "text-cyan-300" },
  { text: "✓ tests 318/318", className: "text-cyan-300" },
  { text: "✓ déployé sur 3 régions", className: "text-cyan-300" },
  { text: "→ https://app.forge.dev", className: "text-zinc-500" },
];

export default function DeveloperToolsPage() {
  return (
    <main
      data-theme="dark"
      className="theme-devtools min-h-dvh bg-[#09090b] font-display text-zinc-100"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-300">
            <span className="text-cyan-400">~/</span>developer-tools
          </span>
          <BackToHome className="text-zinc-500 hover:text-cyan-300" />
        </header>

        <section className="mt-16 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-300/80">
              build · test · deploy
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              L’outillage qui suit votre rythme
            </h1>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-zinc-400">
              Commencez gratuitement, payez par utilisateur quand l’équipe
              grandit. Chaque minute de calcul et chaque gigaoctet restent
              visibles sur votre facture.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/50 p-5 font-mono text-xs leading-relaxed shadow-2xl shadow-cyan-950/20">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-rose-500/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-[10px] text-zinc-600">forge-cli</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {terminalLines.map((line) => (
                <p key={line.text} className={line.className}>
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <DeveloperPlans />
        </section>

        <footer className="mt-16 border-t border-white/10 py-8 font-mono text-[11px] text-zinc-600">
          developer-tools — démonstration · prix hors taxes, facturés par
          utilisateur actif
        </footer>
      </div>
    </main>
  );
}
