"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { company } from "@/data/company";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="flex items-center gap-2.5" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            {company.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {company.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-brand-600"
          >
            <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />
            {company.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-zinc-100 bg-white px-4 pb-6 pt-2 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {company.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-brand-600"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-zinc-100 pt-4">
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Demander un devis
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}