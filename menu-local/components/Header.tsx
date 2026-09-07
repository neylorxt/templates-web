"use client";

import { useState } from "react";
import { Menu, UtensilsCrossed, X } from "lucide-react";
import { nav, siteConfig, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#accueil"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — retour à l'accueil`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-cream">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-dark hover:shadow-md sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Commander
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-ink/10 bg-cream px-4 pb-6 pt-2 lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-sand hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold text-white shadow-sm"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Commander sur WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}