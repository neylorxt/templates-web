"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { properties } from "@/data/properties";

const requestTypes = [
  "Acheter",
  "Louer",
  "Vendre",
  "Estimer mon bien",
  "Autre",
];

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-zinc-400 transition-colors focus:border-brand-600 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire de contact principal.
 * Fonctionne sans dépendance externe (état de succès local) et transmet la
 * demande à `/api/contact`, qui peut être relié à un webhook ou un CRM.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur réseau");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">
          Demande envoyée
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Merci pour votre message. Un conseiller ImmoPro vous répond sous
          24 h ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-nom"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Nom
          </label>
          <input
            id="contact-nom"
            name="nom"
            type="text"
            required
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="contact-telephone"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Téléphone
          </label>
          <input
            id="contact-telephone"
            name="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="contact-type"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Type de demande
          </label>
          <select
            id="contact-type"
            name="type"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choisir une demande
            </option>
            {requestTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-bien"
          className="mb-1.5 block text-sm font-medium text-zinc-800"
        >
          Bien concerné
        </label>
        <select id="contact-bien" name="bien" defaultValue="" className={inputClass}>
          <option value="">Aucun bien en particulier</option>
          {properties.map((property) => (
            <option key={property.id} value={property.title}>
              {property.title} ({property.city})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-zinc-800"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Parlez-nous de votre projet…"
          className={inputClass}
        />
      </div>

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          Une erreur est survenue. Merci de réessayer ou de passer par WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}