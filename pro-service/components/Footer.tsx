import { Clock, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#accueil" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                {company.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {company.slogan}. {company.heroSubtitle}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {company.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nos services">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  {company.address}
                  <br />
                  {company.postalCode} {company.city}
                </span>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  {company.hours[0].day} : {company.hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-7 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {year} {company.legalName}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-white">
              {company.legal.mentionsLegalesLabel}
            </a>
            <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-white">
              {company.legal.confidentialiteLabel}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}