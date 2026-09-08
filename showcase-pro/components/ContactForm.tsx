"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const budgets = ["Moins de 100 €", "100 € à 200 €", "200 € à 300 €", "Plus de 300 €", "À définir"];

const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-stone-400 transition-colors focus:border-brand-600 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

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
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Demande envoyée</h3>
        <p className="max-w-sm text-sm leading-relaxed text-stone-600">
          Merci pour votre message. Je vous réponds sous 24 h ouvrées pour échanger sur votre projet.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
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
          <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-ink">
            Nom
          </label>
          <input id="nom" name="nom" type="text" required placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-ink">
            Téléphone
          </label>
          <input id="telephone" name="telephone" type="tel" placeholder="06 12 34 56 78" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="vous@exemple.fr" className={inputClass} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="prestation" className="mb-1.5 block text-sm font-medium text-ink">
            Type de prestation
          </label>
          <select id="prestation" name="prestation" className={inputClass} defaultValue="">
            <option value="" disabled>
              Choisir une prestation
            </option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Autre">Autre / À définir</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
            Budget
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>
              Choisir un budget
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Parlez-moi de votre projet, de vos dates, de vos envies…"
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
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