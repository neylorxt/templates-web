"use client";

import { useState } from "react";
import { Check, TrendingUp } from "lucide-react";
import { Button, Card, Chip, Label, Slider } from "@heroui/react";

type Plan = {
  name: string;
  price: number;
  fee: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: 29,
    fee: 0.02,
    description: "Pour lancer une première boutique.",
    features: [
      "Boutique en ligne",
      "100 produits",
      "Paiement par carte",
      "1 utilisateur",
    ],
  },
  {
    name: "Croissance",
    price: 79,
    fee: 0.01,
    description: "Pour vendre tous les jours.",
    features: [
      "Produits illimités",
      "3 utilisateurs",
      "Codes promo et paniers abandonnés",
      "Support prioritaire",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: 199,
    fee: 0.005,
    description: "Pour les marques qui scalent.",
    features: [
      "10 utilisateurs",
      "Multiboutique",
      "API et webhooks",
      "Paiement en plusieurs fois",
    ],
  },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function monthlyTotal(plan: Plan, revenue: number) {
  return plan.price + revenue * plan.fee;
}

export function SalesCalculator() {
  const [revenue, setRevenue] = useState(15000);

  const totals = plans.map((plan) => monthlyTotal(plan, revenue));
  const cheapest = Math.min(...totals);

  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <TrendingUp className="size-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-900">
                Simulateur de coût
              </p>
              <p className="text-xs text-zinc-500">
                Abonnement + commission sur les ventes
              </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-medium text-emerald-700">
            {euro.format(revenue)} de CA / mois
          </span>
        </div>
        <div className="mt-6">
          <Label className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
            Chiffre d’affaires mensuel
          </Label>
          <Slider
            className="mt-2"
            value={revenue}
            onChange={(value) => setRevenue(Number(value))}
            minValue={500}
            maxValue={100000}
            step={500}
          >
            <Slider.Track>
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
          </Slider>
          <div className="mt-2 flex justify-between text-[11px] text-zinc-400">
            <span>500 €</span>
            <span>50 000 €</span>
            <span>100 000 €</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`bg-white ${
              plan.highlighted
                ? "border-2 border-emerald-500 shadow-lg shadow-emerald-100"
                : "border-zinc-200"
            }`}
          >
            <Card.Header>
              <div className="flex items-center justify-between gap-3">
                <Card.Title className="text-lg">{plan.name}</Card.Title>
                {plan.highlighted ? (
                  <Chip color="accent" variant="soft" size="sm">
                    Le plus vendu
                  </Chip>
                ) : null}
              </div>
              <Card.Description>{plan.description}</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                  {plan.price} €
                  <span className="text-sm font-normal text-zinc-500">
                    {" "}
                    / mois
                  </span>
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  + {(plan.fee * 100).toLocaleString("fr-FR")} % par transaction
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50/70 px-4 py-3">
                <p className="text-xs text-emerald-700">
                  Coût estimé à {euro.format(revenue)} de ventes
                </p>
                <p className="mt-0.5 text-xl font-semibold text-emerald-800">
                  {euro.format(totals[index])}
                  {totals[index] === cheapest ? (
                    <span className="ml-2 align-middle text-xs font-medium text-emerald-600">
                      le moins cher
                    </span>
                  ) : null}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
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
        ))}
      </div>

      <p className="text-center text-xs text-zinc-400">
        Frais de paiement de l’opérateur non inclus. Changez d’offre à tout
        moment.
      </p>
    </div>
  );
}
