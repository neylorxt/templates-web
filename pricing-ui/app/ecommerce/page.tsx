import type { Metadata } from "next";
import { BarChart3, CreditCard, Truck } from "lucide-react";
import { BackToHome } from "@/components/back-to-home";
import { SalesCalculator } from "./sales-calculator";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "Exemple de tarification e-commerce : abonnement, commission par transaction et simulateur de chiffre d’affaires.",
};

const features = [
  {
    icon: CreditCard,
    title: "Paiements sécurisés",
    description: "Cartes, wallets et paiement en plusieurs fois.",
  },
  {
    icon: Truck,
    title: "Livraison intégrée",
    description: "Transporteurs, suivi et retours gérés.",
  },
  {
    icon: BarChart3,
    title: "Statistiques claires",
    description: "Panier moyen, conversion et produits stars.",
  },
];

export default function EcommercePage() {
  return (
    <main className="theme-ecommerce min-h-dvh bg-[#f2fbf6] text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-bold text-white">
              E
            </span>
            <span className="font-semibold tracking-tight">E-commerce</span>
          </div>
          <BackToHome className="text-zinc-500 hover:text-emerald-700" />
        </header>

        <section className="mx-auto mt-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-medium text-emerald-800">
            2 400 boutiques nous font confiance
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Une tarification qui suit le rythme de vos ventes
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-600">
            Un abonnement léger et une commission dégressive. Plus vous vendez,
            moins la transaction vous coûte.
          </p>
        </section>

        <section className="mt-14">
          <SalesCalculator />
        </section>

        <section className="mt-16 grid gap-5 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-emerald-100 bg-white/70 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 text-sm font-semibold">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {description}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-12 border-t border-emerald-100 py-8 text-center text-xs text-zinc-400">
          E-commerce — démonstration · prix hors taxes
        </footer>
      </div>
    </main>
  );
}
