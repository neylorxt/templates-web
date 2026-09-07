import Image from "next/image";
import { Sparkles } from "lucide-react";
import { featured, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

function formatPrice(price: number) {
  return `${price.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} €`;
}

export function FeaturedProduct() {
  return (
    <section id="specialite" className="bg-ink py-20 text-cream sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              width={1400}
              height={1050}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -right-3 top-6 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-lg sm:-right-5">
            {featured.badge}
          </span>
        </div>

        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-4 w-4" />
            {featured.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {featured.name}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/80">
            {featured.description}
          </p>

          <div className="mt-6 flex items-baseline gap-4">
            <p className="font-display text-4xl font-semibold text-gold">
              {formatPrice(featured.price)}
            </p>
            <p className="text-sm text-cream/60">{featured.note}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                `Bonjour, je souhaiterais commander ${featured.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1fb457]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Commander cette spécialité
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}