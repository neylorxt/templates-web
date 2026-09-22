"use client";

import { useState } from "react";
import { Check, MonitorPlay } from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";

type Plan = {
  name: string;
  monthly: number;
  tagline: string;
  screens: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Individuel",
    monthly: 9.99,
    tagline: "Pour regarder où vous voulez.",
    screens: "1 écran simultané",
    features: [
      "Qualité Full HD",
      "1 profil",
      "Téléchargements illimités",
      "Sans publicité",
    ],
  },
  {
    name: "Duo",
    monthly: 13.99,
    tagline: "Deux personnes, deux écrans.",
    screens: "2 écrans simultanés",
    features: [
      "Qualité Full HD",
      "2 profils",
      "Téléchargements illimités",
      "Sans publicité",
    ],
    highlighted: true,
  },
  {
    name: "Famille",
    monthly: 19.99,
    tagline: "La maison entière au même endroit.",
    screens: "4 écrans simultanés",
    features: [
      "Qualité 4K HDR et audio spatial",
      "5 profils",
      "Contrôle parental",
      "Téléchargements illimités",
    ],
  },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function StreamingPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              annual
                ? "text-zinc-400 hover:text-white"
                : "bg-white text-zinc-950"
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
              annual
                ? "bg-white text-zinc-950"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Annuel
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                annual
                  ? "bg-rose-600 text-white"
                  : "bg-rose-500/20 text-rose-300"
              }`}
            >
              2 mois offerts
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const perMonth = annual ? (plan.monthly * 10) / 12 : plan.monthly;
          return (
            <Card
              key={plan.name}
              className={`bg-white/[0.03] ${
                plan.highlighted
                  ? "border-rose-500/60"
                  : "border-white/10"
              }`}
            >
              <Card.Header>
                <div className="flex items-center justify-between gap-3">
                  <Card.Title className="text-lg">{plan.name}</Card.Title>
                  {plan.highlighted ? (
                    <Chip color="accent" variant="soft" size="sm">
                      Recommandé
                    </Chip>
                  ) : null}
                </div>
                <Card.Description>{plan.tagline}</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-col gap-6">
                <div>
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    {euro.format(perMonth)}
                    <span className="text-sm font-normal text-zinc-500">
                      {" "}
                      / mois
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {annual
                      ? `soit ${euro.format(plan.monthly * 10)} par an, 2 mois offerts`
                      : "résiliable à tout moment"}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] px-3.5 py-2.5 text-xs text-zinc-300">
                  <MonitorPlay className="size-4 text-rose-400" />
                  {plan.screens}
                </div>
                <ul className="flex flex-col gap-2.5 text-sm text-zinc-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-rose-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Content>
              <Card.Footer>
                <Button
                  variant={plan.highlighted ? "primary" : "outline"}
                  fullWidth
                >
                  Choisir {plan.name}
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-zinc-500">
        Sans engagement. Changement de formule possible à tout moment, au
        prorata.
      </p>
    </div>
  );
}
