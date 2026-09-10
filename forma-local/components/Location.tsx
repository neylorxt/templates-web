import { Accessibility, Car, MapPin, Navigation, TrainFront } from "lucide-react";
import {
  directionsLink,
  fullAddress,
  mapEmbedUrl,
  siteConfig,
} from "@/config/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Section « Localisation » : carte intégrée, adresse, accès et itinéraire.
 * La carte utilise OpenStreetMap (aucune dépendance externe).
 */
export default function Location() {
  const access = siteConfig.access;

  return (
    <Section id="localisation" className="bg-white">
      <SectionHeading
        eyebrow="Localisation"
        title="Un centre facile d'accès"
        subtitle="Notre centre vous accueille au cœur de la ville, à deux pas des transports en commun."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
            <iframe
              src={mapEmbedUrl()}
              title={`Carte de localisation de ${siteConfig.name}`}
              width="100%"
              height="420"
              className="block w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex h-full flex-col">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {siteConfig.contact.address}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  {siteConfig.contact.postalCode} {siteConfig.contact.city},{" "}
                  {siteConfig.contact.region}
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <TrainFront className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Transports</h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {access.transport}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Car className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Parking</h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {access.parking}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Accessibility className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Accessibilité</h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {access.accessibility}
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Voir l&apos;itinéraire
            </a>
            <p className="mt-3 text-xs text-zinc-500">{fullAddress()}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}