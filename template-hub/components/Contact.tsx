"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { mailLink, siteConfig, telLink, whatsappLink } from "@/config/site";
import { templates } from "@/data/templates";
import { Section, SectionHeader } from "@/components/Section";
import { buttonClassName } from "@/components/Button";

const inputClasses =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const labelClasses =
  "mb-1.5 block text-sm font-medium text-zinc-700";

const activityTypes = [
  "Services",
  "Restaurant / Commerce",
  "Portfolio / Créatif",
  "Autre",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nom = String(form.get("nom") ?? "");
    const entreprise = String(form.get("entreprise") ?? "");
    const telephone = String(form.get("telephone") ?? "");
    const email = String(form.get("email") ?? "");
    const activite = String(form.get("activite") ?? "");
    const template = String(form.get("template") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Nom : ${nom}`,
      `Entreprise : ${entreprise}`,
      `Téléphone : ${telephone}`,
      `Email : ${email}`,
      `Type d'activité : ${activite}`,
      `Template souhaité : ${template}`,
      "",
      message,
    ].join("\n");

    window.location.href = mailLink("Demande de site TemplateHub", body);
    setSubmitted(true);
  }

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez votre activité et nous vous proposerons le template le plus adapté."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/10 text-[#128c4b]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-zinc-950">WhatsApp</span>
              <span className="mt-1 block text-sm text-zinc-600">
                Réponse rapide en message direct.
              </span>
            </span>
          </a>

          <a
            href={telLink()}
            className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-zinc-950">Téléphone</span>
              <span className="mt-1 block text-sm text-zinc-600">
                {siteConfig.contact.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={mailLink("Demande de site TemplateHub", "")}
            className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-zinc-950">Email</span>
              <span className="mt-1 block text-sm text-zinc-600">
                {siteConfig.contact.email}
              </span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 p-10 text-center">
              <CheckCircle2
                className="h-12 w-12 text-brand-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                Merci pour votre demande !
              </h3>
              <p className="mt-2 max-w-md text-zinc-600">
                Votre messagerie va s&apos;ouvrir avec votre demande pré-remplie. Vous
                pouvez aussi nous joindre directement sur WhatsApp.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClassName("primary", "md")} mt-6`}
              >
                Continuer sur WhatsApp
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className={labelClasses}>
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="entreprise" className={labelClasses}>
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Nom de votre entreprise"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className={labelClasses}>
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@exemple.fr"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="activite" className={labelClasses}>
                    Type d&apos;activité
                  </label>
                  <select
                    id="activite"
                    name="activite"
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez votre activité
                    </option>
                    {activityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="template" className={labelClasses}>
                    Template souhaité
                  </label>
                  <select
                    id="template"
                    name="template"
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez un template
                    </option>
                    {templates.map((template) => (
                      <option key={template.slug} value={template.name}>
                        {template.name}
                      </option>
                    ))}
                    <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre projet et vos besoins..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`${buttonClassName("primary", "md")} mt-6 w-full sm:w-auto`}
              >
                Envoyer ma demande
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}