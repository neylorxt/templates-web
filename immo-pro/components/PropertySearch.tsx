"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import {
  budgetLabel,
  budgetPresets,
  cities,
  propertyTypeLabel,
  propertyTypes,
  type PropertyType,
  type TransactionType,
} from "@/lib/search";

const selectClass =
  "w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 transition-colors focus:border-brand-600 focus:outline-none";

/**
 * Moteur de recherche rapide du hero.
 * Redirige vers la page « Nos biens » avec les critères sélectionnés,
 * qui servent de filtres initiaux.
 */
export default function PropertySearch() {
  const router = useRouter();
  const [transaction, setTransaction] = useState<TransactionType>("vente");
  const [type, setType] = useState<PropertyType | "">("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("transaction", transaction);
    if (type) params.set("type", type);
    if (city) params.set("city", city);
    if (budget) params.set("budgetMax", budget);
    router.push(`/biens?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-5"
      aria-label="Recherche rapide de biens immobiliers"
    >
      <div className="flex flex-wrap gap-2">
        <div
          className="flex rounded-full bg-zinc-100 p-1"
          role="group"
          aria-label="Type de transaction"
        >
          {(["vente", "location"] as TransactionType[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setTransaction(value)}
              aria-pressed={transaction === value}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                transaction === value
                  ? "bg-brand-700 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {value === "vente" ? "Acheter" : "Louer"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="search-type"
            className="mb-1.5 block text-xs font-semibold text-zinc-500"
          >
            Type de bien
          </label>
          <select
            id="search-type"
            className={selectClass}
            value={type}
            onChange={(e) => setType(e.target.value as PropertyType | "")}
          >
            <option value="">Tous les types</option>
            {propertyTypes.map((propertyType) => (
              <option key={propertyType} value={propertyType}>
                {propertyTypeLabel(propertyType)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="search-city"
            className="mb-1.5 block text-xs font-semibold text-zinc-500"
          >
            Ville
          </label>
          <select
            id="search-city"
            className={selectClass}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Toutes les villes</option>
            {cities.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="search-budget"
            className="mb-1.5 block text-xs font-semibold text-zinc-500"
          >
            Budget maximum
          </label>
          <select
            id="search-budget"
            className={selectClass}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Tous les budgets</option>
            {budgetPresets[transaction].map((value) => (
              <option key={value} value={value}>
                {budgetLabel(transaction, value)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Rechercher
          </button>
        </div>
      </div>
    </form>
  );
}