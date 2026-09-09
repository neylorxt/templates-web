"use client";

import { useState } from "react";
import { RotateCcw, SlidersHorizontal, X } from "lucide-react";
import type { Property } from "@/data/properties";
import {
  budgetLabel,
  budgetPresets,
  cities,
  propertyTypeLabel,
  propertyTypes,
  roomsOptions,
  surfaceOptions,
  type PropertyType,
  type TransactionType,
} from "@/lib/search";
import PropertyGrid from "@/components/PropertyGrid";

export type FiltersState = {
  transaction: "" | TransactionType;
  type: "" | PropertyType;
  city: string;
  budgetMin: string;
  budgetMax: string;
  surfaceMin: string;
  rooms: string;
};

export const emptyFilters: FiltersState = {
  transaction: "",
  type: "",
  city: "",
  budgetMin: "",
  budgetMax: "",
  surfaceMin: "",
  rooms: "",
};

type PropertyFiltersProps = {
  properties: Property[];
  initial: FiltersState;
};

const selectClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-800 transition-colors focus:border-brand-600 focus:outline-none";

function matchFilters(property: Property, filters: FiltersState): boolean {
  if (filters.transaction && property.transactionType !== filters.transaction) {
    return false;
  }
  if (filters.type && property.propertyType !== filters.type) {
    return false;
  }
  if (filters.city && property.city !== filters.city) {
    return false;
  }
  const budgetMin = Number(filters.budgetMin) || 0;
  const budgetMax = Number(filters.budgetMax) || Number.POSITIVE_INFINITY;
  if (property.price < budgetMin || property.price > budgetMax) {
    return false;
  }
  const surfaceMin = Number(filters.surfaceMin) || 0;
  if (property.surface < surfaceMin) {
    return false;
  }
  const rooms = Number(filters.rooms) || 0;
  if (property.rooms < rooms) {
    return false;
  }
  return true;
}

function FilterControls({
  filters,
  onChange,
  onReset,
}: {
  filters: FiltersState;
  onChange: (next: FiltersState) => void;
  onReset: () => void;
}) {
  const budgetPresetValues = budgetPresets[filters.transaction || "vente"];

  function set<K extends keyof FiltersState>(key: K, value: FiltersState[K]) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap rounded-full bg-zinc-100 p-1"
        role="group"
        aria-label="Type de transaction"
      >
        {(["", "vente", "location"] as FiltersState["transaction"][]).map(
          (value) => (
            <button
              key={value}
              type="button"
              onClick={() => set("transaction", value)}
              aria-pressed={filters.transaction === value}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filters.transaction === value
                  ? "bg-brand-700 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {value === "" ? "Tous" : value === "vente" ? "À vendre" : "À louer"}
            </button>
          )
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <label htmlFor="filter-type" className="mb-1 block text-xs font-semibold text-zinc-500">
            Type de bien
          </label>
          <select
            id="filter-type"
            className={selectClass}
            value={filters.type}
            onChange={(e) => set("type", e.target.value as FiltersState["type"])}
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
          <label htmlFor="filter-city" className="mb-1 block text-xs font-semibold text-zinc-500">
            Ville
          </label>
          <select
            id="filter-city"
            className={selectClass}
            value={filters.city}
            onChange={(e) => set("city", e.target.value)}
          >
            <option value="">Toutes les villes</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-budget-min" className="mb-1 block text-xs font-semibold text-zinc-500">
            Budget minimum
          </label>
          <select
            id="filter-budget-min"
            className={selectClass}
            value={filters.budgetMin}
            onChange={(e) => set("budgetMin", e.target.value)}
          >
            <option value="">Aucun minimum</option>
            {budgetPresetValues.map((value) => (
              <option key={value} value={value}>
                {budgetLabel(filters.transaction || "vente", value)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-budget-max" className="mb-1 block text-xs font-semibold text-zinc-500">
            Budget maximum
          </label>
          <select
            id="filter-budget-max"
            className={selectClass}
            value={filters.budgetMax}
            onChange={(e) => set("budgetMax", e.target.value)}
          >
            <option value="">Aucun maximum</option>
            {budgetPresetValues.map((value) => (
              <option key={value} value={value}>
                {budgetLabel(filters.transaction || "vente", value)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-surface" className="mb-1 block text-xs font-semibold text-zinc-500">
            Surface minimum
          </label>
          <select
            id="filter-surface"
            className={selectClass}
            value={filters.surfaceMin}
            onChange={(e) => set("surfaceMin", e.target.value)}
          >
            <option value="">Toutes les surfaces</option>
            {surfaceOptions.map((value) => (
              <option key={value} value={value}>
                {value} m² et plus
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-rooms" className="mb-1 block text-xs font-semibold text-zinc-500">
            Nombre de pièces
          </label>
          <select
            id="filter-rooms"
            className={selectClass}
            value={filters.rooms}
            onChange={(e) => set("rooms", e.target.value)}
          >
            <option value="">Indifférent</option>
            {roomsOptions.map((value) => (
              <option key={value} value={value}>
                {value} pièces et plus
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Système de filtres côté frontend : les annonces se mettent à jour sans
 * rechargement de page. Sur mobile, les filtres s'ouvrent dans une modale.
 */
export default function PropertyFilters({
  properties,
  initial,
}: PropertyFiltersProps) {
  const [filters, setFilters] = useState<FiltersState>(initial);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = properties.filter((property) => matchFilters(property, filters));
  const hasActiveFilters =
    JSON.stringify(filters) !== JSON.stringify(emptyFilters);

  function reset() {
    setFilters(emptyFilters);
  }

  return (
    <div>
      <div className="hidden lg:block">
        <FilterControls
          filters={filters}
          onChange={setFilters}
          onReset={reset}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 lg:hidden">
        <p className="text-sm text-zinc-500" aria-live="polite">
          {filtered.length} bien{filtered.length > 1 ? "s" : ""} disponible
          {filtered.length > 1 ? "s" : ""}
        </p>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand-300 hover:text-brand-700"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          Filtrer
          {hasActiveFilters ? (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
              {new URLSearchParams(
                Object.entries(filters).filter(([, value]) => value)
              ).size}
            </span>
          ) : null}
        </button>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-zinc-950/50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Filtrer les biens"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-ink">
                Filtrer les biens
              </h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer les filtres"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <FilterControls
              filters={filters}
              onChange={setFilters}
              onReset={() => {
                reset();
              }}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Afficher {filtered.length} bien{filtered.length > 1 ? "s" : ""}
            </button>
          </div>
        </div>
      ) : null}

      <div className="mt-8 hidden lg:flex items-center justify-between">
        <p className="text-sm text-zinc-500" aria-live="polite">
          {filtered.length} bien{filtered.length > 1 ? "s" : ""} disponible
          {filtered.length > 1 ? "s" : ""}
        </p>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Réinitialiser les filtres
          </button>
        ) : null}
      </div>

      <div className="mt-6">
        <PropertyGrid properties={filtered} />
      </div>
    </div>
  );
}