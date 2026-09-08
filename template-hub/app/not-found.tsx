import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClassName } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-5 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-600">
          La page que vous cherchez a peut-être été déplacée ou n&apos;existe plus.
          Retournez à l&apos;accueil pour découvrir nos templates.
        </p>
        <Link href="/" className={`${buttonClassName("primary", "lg")} mt-8`}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}