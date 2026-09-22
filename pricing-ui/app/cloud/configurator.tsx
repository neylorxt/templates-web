"use client";

import { useState } from "react";
import {
  Cpu,
  Database,
  HardDrive,
  MemoryStick,
  Rocket,
  Server,
} from "lucide-react";
import { Button, Label, Slider } from "@heroui/react";

const CPU_RATE = 3.1;
const RAM_RATE = 0.9;
const STORAGE_RATE = 0.08;
const BASE_RATE = 6;

const regions = [
  { id: "paris", name: "Paris", zone: "France", multiplier: 1 },
  { id: "francfort", name: "Francfort", zone: "Allemagne", multiplier: 1.05 },
  { id: "montreal", name: "Montréal", zone: "Canada", multiplier: 1.12 },
];

const presets = [
  { name: "Web", cpu: 2, ram: 8, storage: 100, icon: Server },
  { name: "Base de données", cpu: 8, ram: 32, storage: 500, icon: Database },
  { name: "Calcul intensif", cpu: 32, ram: 128, storage: 1000, icon: Rocket },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const euroPerHour = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

function cost(
  cpu: number,
  ram: number,
  storage: number,
  multiplier: number,
) {
  const monthly =
    (BASE_RATE +
      cpu * CPU_RATE +
      ram * RAM_RATE +
      storage * STORAGE_RATE) *
    multiplier;

  return {
    monthly,
    hourly: monthly / 730,
    cpu: cpu * CPU_RATE * multiplier,
    ram: ram * RAM_RATE * multiplier,
    storage: storage * STORAGE_RATE * multiplier,
    base: BASE_RATE * multiplier,
  };
}

export function CloudConfigurator() {
  const [cpu, setCpu] = useState(4);
  const [ram, setRam] = useState(16);
  const [storage, setStorage] = useState(200);
  const [regionId, setRegionId] = useState("paris");

  const region = regions.find((item) => item.id === regionId) ?? regions[0];
  const price = cost(cpu, ram, storage, region.multiplier);

  const activePreset = presets.find(
    (preset) =>
      preset.cpu === cpu && preset.ram === ram && preset.storage === storage,
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
            Configurations
          </span>
          {presets.map(({ name, icon: Icon, ...preset }) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                setCpu(preset.cpu);
                setRam(preset.ram);
                setStorage(preset.storage);
              }}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition ${
                activePreset?.name === name
                  ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-200"
                  : "border-white/10 text-zinc-400 hover:border-emerald-400/40 hover:text-emerald-200"
              }`}
            >
              <Icon className="size-3.5" />
              {name}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <Slider
            value={cpu}
            onChange={(value) => setCpu(Number(value))}
            minValue={2}
            maxValue={64}
            step={2}
          >
            <div className="flex items-end justify-between gap-4">
              <Label className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
                <Cpu className="size-3.5" />
                Processeurs virtuels
              </Label>
              <span className="font-mono text-sm text-emerald-300">
                {cpu} vCPU
              </span>
            </div>
            <Slider.Track className="mt-3">
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-600">
              <span>2</span>
              <span>64</span>
            </div>
          </Slider>

          <Slider
            value={ram}
            onChange={(value) => setRam(Number(value))}
            minValue={4}
            maxValue={256}
            step={4}
          >
            <div className="flex items-end justify-between gap-4">
              <Label className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
                <MemoryStick className="size-3.5" />
                Mémoire vive
              </Label>
              <span className="font-mono text-sm text-emerald-300">
                {ram} Go
              </span>
            </div>
            <Slider.Track className="mt-3">
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-600">
              <span>4</span>
              <span>256</span>
            </div>
          </Slider>

          <Slider
            value={storage}
            onChange={(value) => setStorage(Number(value))}
            minValue={50}
            maxValue={4000}
            step={50}
          >
            <div className="flex items-end justify-between gap-4">
              <Label className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
                <HardDrive className="size-3.5" />
                Stockage NVMe
              </Label>
              <span className="font-mono text-sm text-emerald-300">
                {storage} Go
              </span>
            </div>
            <Slider.Track className="mt-3">
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-600">
              <span>50</span>
              <span>4 000</span>
            </div>
          </Slider>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
            Région
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {regions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRegionId(item.id)}
                aria-pressed={region.id === item.id}
                className={`rounded-md border px-4 py-3 text-left transition ${
                  region.id === item.id
                    ? "border-emerald-400/60 bg-emerald-400/10"
                    : "border-white/10 hover:border-emerald-400/40"
                }`}
              >
                <span className="block text-sm font-medium text-zinc-100">
                  {item.name}
                </span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {item.zone} · ×{item.multiplier.toFixed(2)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-lg border border-emerald-500/30 bg-[#07100c] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-200/60">
            Estimation mensuelle
          </p>
          <p className="mt-3 font-mono text-4xl font-semibold tracking-tight text-emerald-300">
            {euro.format(price.monthly)}
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            soit {euroPerHour.format(price.hourly)} / heure
          </p>

          <dl className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-5 font-mono text-xs">
            <div className="flex items-center justify-between">
              <dt className="text-zinc-500">Instance</dt>
              <dd className="text-zinc-300">{euro.format(price.base)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-zinc-500">{cpu} vCPU</dt>
              <dd className="text-zinc-300">{euro.format(price.cpu)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-zinc-500">{ram} Go de RAM</dt>
              <dd className="text-zinc-300">{euro.format(price.ram)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-zinc-500">{storage} Go NVMe</dt>
              <dd className="text-zinc-300">{euro.format(price.storage)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-zinc-500">Région {region.name}</dt>
              <dd className="text-zinc-300">×{region.multiplier.toFixed(2)}</dd>
            </div>
          </dl>

          <Button className="mt-6" fullWidth>
            Créer l’instance
          </Button>
          <p className="mt-3 text-center font-mono text-[10px] leading-relaxed text-zinc-600">
            Facturation à la seconde · trafic sortant inclus · snapshots gratuits
          </p>
        </div>
      </aside>
    </div>
  );
}
