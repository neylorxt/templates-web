"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";

function Brand() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <Link href="/#accueil" className="flex items-center gap-3" aria-label={siteConfig.name}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-cream">
        {initials}
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </span>
        <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
          {siteConfig.profession}
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const ctaHref = siteConfig.booking.url || whatsappLink();
  const ctaLabel = siteConfig.booking.url ? siteConfig.booking.label : "Me contacter";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-200/70 bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Brand />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 hover:shadow-md sm:inline-flex"
          >
            {ctaLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-brand-600 hover:text-brand-600 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-mobile" className="lg:hidden">
          <nav aria-label="Navigation mobile" className="px-5 pb-6 pt-2">
            <ul className="flex flex-col divide-y divide-stone-200">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-medium text-stone-700 transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}