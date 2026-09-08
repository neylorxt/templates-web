import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/config/site";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-coal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Prêt à commencer votre projet&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-300">
            Parlez-moi de votre besoin et construisons ensemble une prestation adaptée.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-500 hover:shadow-lg"
            >
              Me contacter
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#tarifs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Voir les tarifs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}