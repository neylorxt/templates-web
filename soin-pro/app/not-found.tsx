import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8">
        <p className="font-display text-6xl font-semibold text-brand-200">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
          Cette page est introuvable
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          La page que vous recherchez n&apos;existe plus ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}