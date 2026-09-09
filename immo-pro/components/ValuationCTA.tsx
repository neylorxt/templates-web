import { Calculator, CheckCircle2, Phone } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import ValuationForm from "@/components/ValuationForm";
import { Section } from "@/components/Section";
import { WhatsAppIcon } from "@/components/icons";

const benefits = [
  "Estimation gratuite et sans engagement",
  "Étude de marché détaillée de votre secteur",
  "Conseils concrets pour valoriser votre bien",
];

/**
 * Section dédiée aux propriétaires : invitation à demander une estimation.
 */
export default function ValuationCTA() {
  return (
    <Section id="estimation" className="bg-coal">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Propriétaires
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vous souhaitez vendre votre bien ?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Obtenez une première estimation et échangez avec un professionnel
            de votre secteur.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="inline-flex items-center gap-2.5 text-zinc-200"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-white">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Estimation gratuite
              </h3>
              <p className="text-sm text-zinc-400">Réponse sous 24 h ouvrées</p>
            </div>
          </div>
          <ValuationForm />
        </div>
      </div>
    </Section>
  );
}