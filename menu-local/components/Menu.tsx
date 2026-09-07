"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, menu } from "@/config/site";

type CategoryId = (typeof categories)[number]["id"] | "tous";

const badgeStyles: Record<string, string> = {
  Populaire: "bg-brand text-white",
  Maison: "bg-ink text-cream",
  Végétarien: "bg-green-700 text-white",
  Nouveau: "bg-gold text-ink",
  Épicé: "bg-red-600 text-white",
};

function formatPrice(price: number) {
  return `${price.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} €`;
}

export function Menu() {
  const [active, setActive] = useState<CategoryId>("tous");

  const items =
    active === "tous" ? menu : menu.filter((item) => item.category === active);

  return (
    <section id="menu" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Notre carte
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Le menu du moment
          </h2>
          <p className="mt-4 text-ink-soft">
            Une carte courte et de saison, renouvelée chaque semaine. Nos prix
            sont nets, service et pain maison inclus.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrer le menu par catégorie"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === "tous"}
            onClick={() => setActive("tous")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === "tous"
                ? "bg-ink text-cream"
                : "bg-cream text-ink-soft hover:text-brand"
            }`}
          >
            Tout le menu
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active === category.id}
              onClick={() => setActive(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === category.id
                  ? "bg-ink text-cream"
                  : "bg-cream text-ink-soft hover:text-brand"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                      badgeStyles[item.badge] ?? badgeStyles.Maison
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="shrink-0 text-base font-bold text-brand">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}