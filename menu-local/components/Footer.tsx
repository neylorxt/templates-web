import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { legal, nav, openingHours, siteConfig, whatsappLink } from "@/config/site";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  const openDays = openingHours.filter((day) => day.open && day.close);

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#accueil" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — retour à l'accueil`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-cream">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">{siteConfig.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {siteConfig.footerDescription}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre sur Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-brand"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre sur Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-brand"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuter sur WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-[#25D366]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h3 className="font-display text-lg font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Clock className="h-4 w-4 text-gold" />
            Horaires
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li className="text-cream/50">Lundi : fermé</li>
            {openDays.slice(0, 4).map((day) => (
              <li key={day.day}>
                {day.day} : {day.open?.replace(":", "h")} à {day.close?.replace(":", "h")}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {siteConfig.address}
              <br />
              {siteConfig.city}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-cream">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-cream/50 sm:flex-row sm:px-6">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <details className="cursor-pointer">
            <summary className="text-sm text-cream/50 transition-colors hover:text-cream">
              Mentions légales
            </summary>
            <p className="mt-2 max-w-md text-xs leading-relaxed">
              {siteConfig.name} · {legal.owner} · {legal.registeredAt} · SIRET {legal.siret} ·{" "}
              {siteConfig.address}, {siteConfig.city}. Site de démonstration
              réalisé pour un template professionnel.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}