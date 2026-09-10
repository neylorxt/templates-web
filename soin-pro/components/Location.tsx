import { Accessibility, Bus, Car, MapPin, Navigation } from "lucide-react";
import { directionsLink, mapEmbedUrl, siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function Location() {
  return (
    <Section id="localisation">
      <SectionHeading
        eyebrow="Localisation"
        title="Nous trouver facilement"
        subtitle="Un cabinet central, accessible en transports en commun et en voiture."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {siteConfig.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                {siteConfig.profession}
              </p>

              <div className="mt-6 space-y-5">
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span>
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.postalCode} {siteConfig.contact.city}
                  </span>
                </p>
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <Bus
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span>Transports : {siteConfig.access.transport}</span>
                </p>
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <Car
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span>Stationnement : {siteConfig.access.parking}</span>
                </p>
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <Accessibility
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span>Accès : {siteConfig.access.accessibility}</span>
                </p>
              </div>
            </div>

            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Voir l&apos;itinéraire
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-zinc-200">
            <iframe
              src={mapEmbedUrl()}
              title={`Carte de localisation du ${siteConfig.name}`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}