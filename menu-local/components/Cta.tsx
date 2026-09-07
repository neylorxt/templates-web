import { UtensilsCrossed } from "lucide-react";
import { cta, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Cta() {
  return (
    <section id="contact" className="bg-cream px-4 pb-20 pt-4 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark px-6 py-16 text-center text-cream sm:py-20">
        <span className="inline-flex items-center justify-center rounded-full bg-cream/10 px-4 py-1.5 text-sm font-medium">
          <UtensilsCrossed className="mr-2 h-4 w-4 text-gold" />
          Sur place ou à emporter
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream/85">{cta.subtitle}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1fb457]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Commander sur WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            Voir le menu
          </a>
        </div>
      </div>
    </section>
  );
}