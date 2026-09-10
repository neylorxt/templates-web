import { Mail, Phone } from "lucide-react";
import { mailLink, siteConfig, telLink } from "@/config/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";

/**
 * Section « Inscrivez-vous » : formulaire de préinscription et coordonnées
 * directes. Le formulaire envoie vers `/api/contact`.
 */
export default function Registration() {
  return (
    <Section id="inscription" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Inscription
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Inscrivez-vous à votre prochaine formation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Remplissez le formulaire de préinscription : notre équipe vous
            recontacte rapidement pour valider votre dossier et répondre à vos
            dernières questions.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={telLink()}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-zinc-500">Par téléphone</p>
                <p className="font-display text-lg font-semibold text-ink">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </div>
            </a>
            <a
              href={mailLink("Demande d'inscription", "")}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-zinc-500">
                  Par email
                </p>
                <p className="font-display text-lg font-semibold text-ink">
                  {siteConfig.contact.registrationEmail}
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={80}>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <RegistrationForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}