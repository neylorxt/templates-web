"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutTemplate, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonClassName } from "@/components/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-950"
          aria-label="TemplateHub, retour à l'accueil"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <LayoutTemplate className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={buttonClassName("ghost", "md")}
          >
            Demander un site
          </Link>
          <Link href="/templates" className={buttonClassName("primary", "md")}>
            Voir les templates
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-5 py-4 lg:hidden">
          <nav
            className="flex flex-col gap-1"
            aria-label="Navigation mobile"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/templates"
              onClick={() => setOpen(false)}
              className={buttonClassName("primary", "md")}
            >
              Voir les templates
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonClassName("secondary", "md")}
            >
              Demander un site
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}