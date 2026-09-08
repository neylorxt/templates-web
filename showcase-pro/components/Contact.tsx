import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon, type BrandIcon } from "./icons";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const socialIcons: Record<string, BrandIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedinIcon,
};

export default function Contact() {
  const socials = Object.entries(siteConfig.socials);

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Contact"
          title="Parlons de votre projet"
          subtitle="Une question, un projet, une envie ? Écrivez-moi, je vous réponds rapidement."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={telLink()}
                className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:border-brand-600 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-stone-400">
                    Téléphone
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:border-brand-600 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-stone-400">
                    WhatsApp
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:border-brand-600 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.14em] text-stone-400">
                    Email
                  </span>
                  <span className="mt-0.5 block truncate font-medium text-ink">
                    {siteConfig.contact.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-stone-400">
                    Localisation
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    {siteConfig.contact.city}
                  </span>
                </span>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <span className="block text-xs uppercase tracking-[0.14em] text-stone-400">
                  Réseaux sociaux
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socials.map(([key, social]) => {
                    const Icon = socialIcons[key] ?? ArrowUpRight;
                    return (
                      <a
                        key={key}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-600 transition-all duration-200 hover:border-brand-600 hover:text-brand-600"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                Envoyez-moi votre demande
              </h3>
              <p className="mt-1.5 mb-6 text-sm text-stone-500">
                Réponse garantie sous 24 h ouvrées.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}