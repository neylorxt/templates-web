import { MapPin, Navigation, Phone, TrainFront } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Location() {
  return (
    <section id="localisation" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Localisation
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Au cœur de la Presqu’île
          </h2>
          <p className="mt-4 text-ink-soft">
            Au calme, à deux pas de la place Bellecour et des Halles de Lyon.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-ink/5 sm:p-8 lg:col-span-2">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <MapPin className="h-5 w-5 text-brand" />
              {siteConfig.name}
            </h3>
            <address className="mt-4 not-italic leading-relaxed text-ink-soft">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.city}</p>
            </address>

            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2.5">
                <TrainFront className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {siteConfig.access}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-brand">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <a
                href={siteConfig.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/90"
              >
                <Navigation className="h-4 w-4" />
                Voir l’itinéraire
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb457]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-ink/5 lg:col-span-3">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              title={`Carte Google Maps — ${siteConfig.name}, ${siteConfig.address}, ${siteConfig.city}`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="min-h-[320px] border-0 lg:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}