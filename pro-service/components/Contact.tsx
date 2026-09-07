"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: connectez ici votre API ou votre service d'envoi d'emails.
    // Exemple : POST vers /api/contact avec les données du formulaire.
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <>
      {/* Bandeau d'appel à l'action */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <Image
          src={company.ctaImage.src}
          alt={company.ctaImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-zinc-950/75"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {company.ctaTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-200">
                {company.ctaSubtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-500 hover:shadow-xl sm:w-auto"
                >
                  Demander un devis
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={company.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-100 sm:w-auto"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-zinc-50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Parlons de votre projet"
              description="Une question, un projet, une urgence ? Notre équipe vous répond rapidement et gratuitement."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
            <Reveal className="lg:col-span-2">
              <div className="flex h-full flex-col gap-6">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-500">Téléphone</p>
                      <p className="font-semibold text-zinc-900">{company.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-500">Email</p>
                      <p className="font-semibold text-zinc-900">{company.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-500">Adresse</p>
                      <p className="font-semibold text-zinc-900">
                        {company.address}, {company.postalCode} {company.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="w-full">
                      <p className="text-sm font-medium text-zinc-500">Horaires</p>
                      <ul className="mt-1 space-y-0.5">
                        {company.hours.map((slot) => (
                          <li key={slot.day} className="flex justify-between gap-3 text-sm">
                            <span className="text-zinc-600">{slot.day}</span>
                            <span className="font-semibold text-zinc-900">
                              {slot.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1ebe5b] hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-3">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-center shadow-sm">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-zinc-900">
                    Merci pour votre demande !
                  </h3>
                  <p className="mt-3 max-w-md text-zinc-600">
                    Votre message a bien été pris en compte. Notre équipe vous
                    recontacte dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-7 rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nom"
                        className="mb-1.5 block text-sm font-medium text-zinc-700"
                      >
                        Nom complet
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Votre nom"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telephone"
                        className="mb-1.5 block text-sm font-medium text-zinc-700"
                      >
                        Téléphone
                      </label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="06 12 34 56 78"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-zinc-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="votre@email.fr"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-zinc-700"
                      >
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Sélectionnez un service
                        </option>
                        {company.services.map((service) => (
                          <option key={service.title} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-zinc-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Décrivez votre besoin..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="flex items-start gap-3 text-sm text-zinc-600">
                      <input
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-500/30"
                      />
                      <span>
                        J&apos;accepte que mes informations soient utilisées pour
                        traiter ma demande. En savoir plus sur notre{" "}
                        <a href="#" className="font-medium text-brand-600 underline underline-offset-2">
                          politique de confidentialité
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    Envoyer ma demande
                    <Send
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}