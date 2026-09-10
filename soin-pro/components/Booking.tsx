import { CalendarCheck, Phone, ShieldCheck } from "lucide-react";
import { hasOnlineBooking, siteConfig, telLink, whatsappLink } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { buttonClassName } from "@/components/Button";
import { WhatsAppIcon } from "@/components/icons";

export default function Booking() {
  const online = hasOnlineBooking();

  return (
    <Section id="rendez-vous">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-brand-100 bg-gradient-to-b from-mist to-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Rendez-vous
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Prenez rendez-vous simplement
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Choisissez la solution qui vous convient : un créneau en ligne, un
              appel au cabinet ou un simple message.
            </p>

            <div className="mt-8 space-y-5">
              {online ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                        <CalendarCheck
                          className="h-5 w-5 text-brand-600"
                          aria-hidden="true"
                        />
                        Prise de rendez-vous en ligne
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-600">
                        Consultez les disponibilités et choisissez votre créneau
                        directement sur la plateforme du cabinet.
                      </p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClassName("primary", "md")} mt-5`}
                  >
                    Prendre rendez-vous en ligne
                  </a>
                </div>
              ) : null}

              {siteConfig.booking.phone ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                    <Phone className="h-5 w-5 text-brand-600" aria-hidden="true" />
                    Vous préférez nous appeler ?
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-600">
                    Le secrétariat vous répond aux horaires d&apos;ouverture.
                  </p>
                  <a
                    href={telLink()}
                    className={`${buttonClassName("secondary", "md")} mt-5`}
                  >
                    Appeler le cabinet
                  </a>
                </div>
              ) : null}

              {siteConfig.useWhatsApp ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                    <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                    Écrivez-nous sur WhatsApp
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-600">
                    Posez votre question et recevez une réponse rapide.
                  </p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClassName("secondary", "md")} mt-5`}
                  >
                    Discuter sur WhatsApp
                  </a>
                </div>
              ) : null}

              <p className="flex items-start gap-2.5 text-sm text-zinc-500">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                Vos données restent confidentielles et ne servent qu&apos;à
                organiser votre venue.
              </p>
            </div>
          </div>
        </Reveal>

        {siteConfig.booking.form ? (
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10">
              <h3 className="font-display text-xl font-semibold text-ink">
                Un message à nous transmettre ?
              </h3>
              <p className="mt-1.5 text-sm text-zinc-500">
                Nous revenons vers vous rapidement.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}