import Link from "next/link";
import { Clock, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { mailLink, siteConfig, telLink, whatsappLink } from "@/config/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.values(siteConfig.socials);

  const socialIcon = (label: string) => {
    const key = label.toLowerCase();
    if (key === "instagram") return InstagramIcon;
    if (key === "facebook") return FacebookIcon;
    return LinkedinIcon;
  };

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
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}
                </span>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="inline-flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailLink("Demande d'information", "")}
                  className="inline-flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Horaires</h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                <span>{siteConfig.phoneHours}</span>
              </li>
              <li className="text-sm text-zinc-400">
                {siteConfig.hours[0].label} à {siteConfig.hours[5].label}.
              </li>
            </ul>

            {socials.length > 0 ? (
              <div className="mt-5 flex gap-3">
                {socials.map((social) => {
                  const Icon = socialIcon(social.label);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
                {siteConfig.useWhatsApp ? (
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-zinc-300 transition-colors hover:border-brand-500 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 pb-4 sm:flex-row">
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