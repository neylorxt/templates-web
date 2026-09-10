import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { fullAddress, mailLink, siteConfig, telLink } from "@/config/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

/**
 * Section « Contact » : coordonnées, horaires et formulaire court.
 */
export default function Contact() {
  return (
    <Section id="contact" className="bg-mist">
      <SectionHeading
        eyebrow="Contact"
        title="Contactez-nous"
        subtitle="Une question sur une formation, un financement ou une inscription ? Notre équipe vous répond du lundi au samedi."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="flex h-full flex-col gap-6">
            <div className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Adresse</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.postalCode} {siteConfig.contact.city}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Téléphone</h3>
                  <a
                    href={telLink()}
                    className="mt-1 block text-sm text-zinc-600 transition-colors hover:text-brand-700"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-zinc-500">{siteConfig.phoneHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Email</h3>
                  <a
                    href={mailLink("Demande d'informations", "")}
                    className="mt-1 block text-sm text-zinc-600 transition-colors hover:text-brand-700"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Horaires</h3>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-600">
                    {siteConfig.hours.map((day) => (
                      <li key={day.label}>
                        <span className="font-medium text-zinc-800">
                          {day.label}
                        </span>{" "}
                        : {day.slots.join(" et ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-500">{fullAddress()}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Envoyer un message
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Décrivez votre demande, nous revenons vers vous rapidement.
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