import { MapPin, Navigation, Clock } from "lucide-react";
import { directionsLink, mapEmbedUrl, siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Section de localisation : adresse, zone d'intervention et carte intégrée.
 */
export default function Location() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Localisation"
        title="Au cœur de Lyon"
        subtitle="Notre agence vous accueille au centre-ville, au plus près de votre projet immobilier."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {siteConfig.name}
              </h3>
              <div className="mt-6 space-y-5">
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}
                  </span>
                </p>
                <p className="inline-flex items-start gap-3 text-zinc-700">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <span>{siteConfig.contact.hours}</span>
                </p>
              </div>

              <h4 className="mt-8 text-sm font-semibold text-zinc-900">
                Zone d&apos;intervention
              </h4>
              <p className="mt-2 text-sm text-zinc-600">{siteConfig.area}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.areaCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600"
                  >
                    {city}
                  </span>
                ))}
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
              title={`Carte de localisation de ${siteConfig.name}`}
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