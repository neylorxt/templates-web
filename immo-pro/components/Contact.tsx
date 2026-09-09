import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { mailLink, siteConfig, telLink, whatsappLink } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons";

export default function Contact() {
  return (
    <Section id="contact" className="bg-cream">
      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Une question, une visite ou un bien à confier ? Notre équipe vous répond rapidement."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              {siteConfig.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-500">{siteConfig.tagline}</p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Téléphone</p>
                  <a
                    href={telLink()}
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-700"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">WhatsApp</p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-700"
                  >
                    Discuter avec l&apos;agence
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Email</p>
                  <a
                    href={mailLink("Demande d'information", "")}
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-700"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Adresse</p>
                  <p className="text-sm text-zinc-600">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-900">Horaires</p>
                  <p className="text-sm text-zinc-600">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-zinc-100 pt-6">
              <p className="text-sm font-medium text-zinc-900">Suivez-nous</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={siteConfig.socials.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.socials.instagram.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.socials.facebook.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.socials.linkedin.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Envoyez-nous un message
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Nous revenons vers vous sous 24 h ouvrées.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}