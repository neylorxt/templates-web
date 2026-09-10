import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailLink, siteConfig, telLink, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * CTA secondaire pour les visiteurs pas encore prêts à s'inscrire :
 * téléphone, email ou WhatsApp selon la configuration.
 */
export default function InfoRequest() {
  const showWhatsApp = siteConfig.useWhatsApp;

  return (
    <Section id="information" className="bg-mist">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Vous avez une question avant de vous inscrire ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Notre équipe vous répond et vous aide à choisir la formation la
            plus adaptée à votre objectif, sans engagement.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={telLink()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-base font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
            >
              <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Appeler le centre
            </a>
            <a
              href={mailLink("Demande d'informations", "")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-base font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
            >
              <Mail className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Écrire un email
            </a>
            {showWhatsApp ? (
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-base font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-600" />
                WhatsApp
              </a>
            ) : null}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Utiliser le formulaire
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}