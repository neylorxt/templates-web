import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, MessageCircle } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-coal">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coal to-coal/60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
          Votre projet
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Un projet immobilier ? Parlons-en.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Achat, vente ou location : notre équipe vous accompagne à chaque
          étape de votre projet.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-brand-900 transition-colors hover:bg-brand-50"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Nous contacter
          </Link>
          <Link
            href="/#estimation"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Estimer mon bien
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}