import { practitioners } from "@/data/practitioners";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PractitionerCard } from "@/components/PractitionerCard";

export default function Practitioners() {
  return (
    <Section id="praticiens" className="bg-cream">
      <SectionHeading
        eyebrow="Nos praticiens"
        title="Une équipe à votre écoute"
        subtitle="Des professionnels de santé engagés, qui prennent le temps de vous écouter et de vous accompagner."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practitioners.map((practitioner, index) => (
          <Reveal key={practitioner.id} delay={index * 60}>
            <PractitionerCard practitioner={practitioner} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}