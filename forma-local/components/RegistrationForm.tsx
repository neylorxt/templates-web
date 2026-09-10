"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { courses } from "@/data/courses";

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-zinc-400 transition-colors focus:border-brand-600 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire de préinscription.
 *
 * Fonctionne sans dépendance externe (état de succès local) et transmet la
 * demande à `/api/contact`, qui peut être relié à un service sécurisé (email,
 * CRM, Supabase…) via la variable d'environnement `CONTACT_WEBHOOK_URL`.
 */
export default function RegistrationForm() {
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
          Demande d&apos;inscription envoyée
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Merci pour votre demande. Notre équipe vous contactera rapidement
          pour confirmer votre inscription et répondre à vos questions.
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
            htmlFor="registration-prenom"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Prénom
          </label>
          <input
            id="registration-prenom"
            name="prenom"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Votre prénom"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="registration-nom"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Nom
          </label>
          <input
            id="registration-nom"
            name="nom"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="registration-telephone"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Téléphone
          </label>
          <input
            id="registration-telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="registration-email"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Email
          </label>
          <input
            id="registration-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="registration-formation"
          className="mb-1.5 block text-sm font-medium text-zinc-800"
        >
          Formation souhaitée
        </label>
        <select
          id="registration-formation"
          name="formation"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Choisir une formation
          </option>
          {courses.map((course) => (
            <option key={course.id} value={course.title}>
              {course.title}
            </option>
          ))}
          <option value="Autre formation">Autre formation</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="registration-niveau"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Niveau actuel
          </label>
          <select
            id="registration-niveau"
            name="niveau"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choisir votre niveau
            </option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Tous niveaux">Tous niveaux</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="registration-format"
            className="mb-1.5 block text-sm font-medium text-zinc-800"
          >
            Format souhaité
          </label>
          <select
            id="registration-format"
            name="format"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choisir un format
            </option>
            <option value="présentiel">Présentiel</option>
            <option value="en ligne">En ligne</option>
            <option value="hybride">Hybride</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="registration-message"
          className="mb-1.5 block text-sm font-medium text-zinc-800"
        >
          Message
        </label>
        <textarea
          id="registration-message"
          name="message"
          rows={4}
          required
          placeholder="Vos disponibilités, votre objectif, vos questions…"
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="registration-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-zinc-300 text-brand-700 focus:ring-brand-600"
        />
        <label
          htmlFor="registration-consent"
          className="text-xs leading-relaxed text-zinc-500"
        >
          J&apos;accepte que mes informations soient utilisées uniquement pour
          traiter ma demande d&apos;inscription, conformément à la politique de
          confidentialité.
        </label>
      </div>

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          Une erreur est survenue. Merci de réessayer ou de nous appeler.
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
            Envoyer ma demande d&apos;inscription
          </>
        )}
      </button>
    </form>
  );
}