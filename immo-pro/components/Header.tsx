"use client";

import Link from "next/link";
import { useState } from "react";
import { Building2, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { siteConfig, telLink } from "@/config/site";
import { buttonClassName } from "@/components/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-zinc-100 bg-cream md:block">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-5 text-xs text-zinc-600 sm:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.contact.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.contact.city}
            </span>
          </div>
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-brand-700"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-b border-zinc-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-ink"
            aria-label={`${siteConfig.name}, retour à l'accueil`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 text-white">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
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
            <Link href="/contact" className={buttonClassName("ghost", "md")}>
              Nous contacter
            </Link>
            <Link href="/estimation" className={buttonClassName("primary", "md")}>
              Estimer mon bien
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
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
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
                href="/estimation"
                onClick={() => setOpen(false)}
                className={buttonClassName("primary", "md")}
              >
                Estimer mon bien
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={buttonClassName("secondary", "md")}
              >
                Nous contacter
              </Link>
            </div>
            <a
              href={telLink()}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-zinc-50 px-3 py-2.5 text-sm font-semibold text-brand-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}