import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

const devices = [
  {
    label: "Desktop",
    description: "Parfait sur grand écran",
    icon: Monitor,
  },
  {
    label: "Tablette",
    description: "Une navigation fluide",
    icon: Tablet,
  },
  {
    label: "Mobile",
    description: "Optimisé pour smartphone",
    icon: Smartphone,
  },
];

export function Devices() {
  return (
    <Section id="ecrans" className="bg-zinc-50">
      <SectionHeader
        eyebrow="Conçus pour tous les écrans"
        title="Chaque template est responsive"
        description="Desktop, tablette ou mobile : les sites s'adaptent automatiquement à tous les appareils, sans effort supplémentaire."
      />

      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row">
        {devices.map((device) => (
          <div
            key={device.label}
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:w-auto sm:flex-col sm:px-10 sm:py-8 sm:text-center"
          >
            <device.icon className="h-8 w-8 text-brand-600" aria-hidden="true" />
            <div>
              <p className="font-semibold text-zinc-950">{device.label}</p>
              <p className="mt-1 text-sm text-zinc-500">{device.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}