import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import PropertySearch from "@/components/PropertySearch";
import { buttonClassName } from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-coal">
      <Image
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=80"
        alt="Maison moderne éclairée en soirée"
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-coal via-coal/60 to-coal/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
          Agence immobilière à Lyon
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Trouvez le bien qui vous ressemble
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-200">
          Découvrez une sélection de maisons, appartements et biens
          d&apos;exception disponibles à la vente et à la location.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/biens" className={buttonClassName("light", "lg")}>
            Voir les biens
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/#estimation"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Estimer mon bien
          </Link>
        </div>

        <div className="mt-12">
          <PropertySearch />
        </div>
      </div>
    </section>
  );
}