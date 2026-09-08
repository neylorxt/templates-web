import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Vous avez trouvé un modèle qui correspond à votre activité ?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Nous pouvons le transformer en un site entièrement personnalisé pour
          votre entreprise.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Choisir un template
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}