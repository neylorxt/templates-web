import Link from "next/link";
import { buttonClassName } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Erreur 404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-600">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Retournez à l&apos;accueil ou parcourez nos formations.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className={buttonClassName("primary", "lg")}>
          Retour à l&apos;accueil
        </Link>
        <Link href="/formations" className={buttonClassName("secondary", "lg")}>
          Voir les formations
        </Link>
      </div>
    </div>
  );
}