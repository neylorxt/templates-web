import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import {
  mailLink,
  siteConfig,
  telLink,
  whatsappLink,
} from "@/config/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-coal text-zinc-400">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold text-white"
              aria-label={`${siteConfig.name}, retour à l'accueil`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Liens du pied de page">
            <h3 className="text-sm font-semibold text-white">Immobilier</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/biens?transaction=vente"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Acheter
                </Link>
              </li>
              <li>
                <Link
                  href="/biens?transaction=location"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Louer
                </Link>
              </li>
              <li>
                <Link
                  href="/biens"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Nos biens
                </Link>
              </li>
              <li>
                <Link
                  href="/#estimation"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Estimer mon bien
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Navigation du pied de page">
            <h3 className="text-sm font-semibold text-white">L&apos;agence</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/#a-propos"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}
                </span>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailLink("Demande d'information", "")}
                  className="inline-flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.socials.instagram.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.socials.facebook.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.socials.linkedin.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}