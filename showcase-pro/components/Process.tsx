import { processSteps } from "@/data/process";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="processus" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Comment ça marche"
          title="Un processus simple et rassurant"
          subtitle="Quatre étapes claires, du premier échange à la livraison de vos images."
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 120}>
              <li className="relative">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-display text-lg font-semibold text-brand-700"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                {index < processSteps.length - 1 ? (
                  <span
                    className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-stone-200 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}