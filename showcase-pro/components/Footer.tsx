import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, type BrandIcon } from "./icons";
import { siteConfig, telLink } from "@/config/site";

const socialIcons: Record<string, BrandIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedinIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <footer className="bg-ink pb-10 pt-16 text-stone-300">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/#accueil" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-display text-sm font-semibold text-ink">
                {initials}
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold tracking-tight text-cream">
                  {siteConfig.name}
                </span>
                <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-stone-500">
                  {siteConfig.profession}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
              {siteConfig.shortDescription}
            </p>
            <div className="mt-6 flex gap-2">
              {Object.entries(siteConfig.socials).map(([key, social]) => {
                const Icon = socialIcons[key] ?? ArrowUpRight;
                return (
                  <a
                    key={key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all duration-200 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Navigation pied de page">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-stone-300 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={telLink()} className="flex items-center gap-2 transition-colors hover:text-brand-400">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-brand-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Informations
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="/mentions-legales" className="transition-colors hover:text-brand-400">
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/politique-de-confidentialite"
                  className="transition-colors hover:text-brand-400"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-stone-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Conçu avec soin — {siteConfig.contact.city}</p>
        </div>
      </div>
    </footer>
  );
}