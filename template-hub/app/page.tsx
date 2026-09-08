import { Hero } from "@/components/Hero";
import { TemplateTeaser } from "@/components/TemplateTeaser";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { Devices } from "@/components/Devices";
import { Comparison } from "@/components/Comparison";
import { Customization } from "@/components/Customization";
import { Benefits } from "@/components/Benefits";
import { Stack } from "@/components/Stack";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { templates } from "@/data/templates";

const latestTemplates = templates.slice(-3);

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="templates">
        <Reveal>
          <SectionHeader
            eyebrow="Catalogue"
            title="Nos templates"
            description="Trois modèles pensés pour les métiers de service, les commerces et les indépendants. Explorez, comparez et choisissez celui qui vous ressemble."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestTemplates.map((template) => (
              <TemplateTeaser key={template.slug} template={template} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/templates" size="lg">
              Voir tous les templates
            </Button>
          </div>
        </Reveal>
      </Section>

      <Reveal>
        <Devices />
      </Reveal>

      <Reveal>
        <Comparison />
      </Reveal>

      <Reveal>
        <Customization />
      </Reveal>

      <Reveal>
        <Benefits />
      </Reveal>

      <Reveal>
        <Stack />
      </Reveal>

      <Cta />
    </>
  );
}