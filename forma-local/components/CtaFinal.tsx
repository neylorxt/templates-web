import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonClassName } from "@/components/Button";

/**
 * Grand CTA final avant le footer.
 */
export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 to-brand-900/90" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Prêt à développer vos compétences ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
          Choisissez votre formation et échangez avec notre équipe pour
          commencer.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/formations"
            className={buttonClassName("light", "lg")}
          >
            Voir les formations
          </Link>
          <Link
            href="/#inscription"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-medium text-white backdrop-blur transition-all duration-200 hover:border-white/50 hover:bg-white/20"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </section>
  );
}