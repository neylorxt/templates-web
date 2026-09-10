"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { propertyTypes, propertyTypeLabel } from "@/lib/search";

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-zinc-400 transition-colors focus:border-brand-600 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire d'estimation de bien.
 * Fonctionne sans dépendance externe (état de succès local) et transmet la
 * demande à `/api/contact`, qui peut être relié à un webhook ou un CRM.
 */
export default function ValuationForm() {
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
        body: JSON.stringify({ source: "estimation", ...data }),
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
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">
          Demande d&apos;estimation envoyée
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Merci pour votre demande. Un conseiller ImmoPro vous recontacte sous
          24 h ouvrées pour une première estimation gratuite.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="estimation-type"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Type de bien
          </label>
          <select
            id="estimation-type"
            name="type"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choisir un type
            </option>
            {propertyTypes.map((propertyType) => (
              <option key={propertyType} value={propertyType}>
                {propertyTypeLabel(propertyType)}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-zinc-400">
            Appartement, maison, villa, terrain, bureau ou commerce.
          </p>
        </div>
        <div>
          <label
            htmlFor="estimation-ville"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Ville
          </label>
          <input
            id="estimation-ville"
            name="ville"
            type="text"
            placeholder="Lyon 3e, Villeurbanne…"
            className={inputClass}
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Indiquez la commune ou l&apos;arrondissement du bien.
          </p>
        </div>
        <div>
          <label
            htmlFor="estimation-surface"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Surface (m²)
          </label>
          <input
            id="estimation-surface"
            name="surface"
            type="number"
            min="1"
            placeholder="85"
            className={inputClass}
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            La surface habitable du bien en m².
          </p>
        </div>
        <div>
          <label
            htmlFor="estimation-pieces"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Nombre de pièces
          </label>
          <input
            id="estimation-pieces"
            name="pieces"
            type="number"
            min="1"
            placeholder="4"
            className={inputClass}
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Le nombre total de pièces principales.
          </p>
        </div>
        <div>
          <label
            htmlFor="estimation-email"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Email
          </label>
          <input
            id="estimation-email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Pour recevoir votre estimation et le suivi.
          </p>
        </div>
        <div>
          <label
            htmlFor="estimation-telephone"
            className="mb-1.5 block text-sm font-medium text-zinc-200"
          >
            Téléphone
          </label>
          <input
            id="estimation-telephone"
            name="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Pour un premier échange rapide (facultatif).
          </p>
        </div>
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Demander une estimation
          </>
        )}
      </button>
    </form>
  );
}