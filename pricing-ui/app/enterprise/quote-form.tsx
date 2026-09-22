"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const sizes = ["1 à 50", "50 à 200", "200 à 1 000", "Plus de 1 000"];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Check className="size-6" strokeWidth={3} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Demande envoyée
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Un membre de l’équipe revient vers vous sous 24 h ouvrées avec une
            proposition adaptée.
          </p>
        </div>
        <Button variant="outline" onPress={() => setSubmitted(false)}>
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField name="name" isRequired>
          <Label>Nom complet</Label>
          <Input placeholder="Camille Durand" />
        </TextField>
        <TextField name="email" type="email" isRequired>
          <Label>E-mail professionnel</Label>
          <Input placeholder="camille@entreprise.fr" />
        </TextField>
      </div>

      <TextField name="company" isRequired>
        <Label>Entreprise</Label>
        <Input placeholder="Nom de votre entreprise" />
      </TextField>

      <Select
        name="size"
        placeholder="Sélectionner"
        defaultSelectedKey="50 à 200"
      >
        <Label>Effectif concerné</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {sizes.map((size) => (
              <ListBox.Item key={size} id={size} textValue={size}>
                {size}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      <TextField name="message" isRequired>
        <Label>Votre besoin</Label>
        <TextArea
          rows={4}
          placeholder="Contexte, volumétrie, contraintes réglementaires…"
        />
      </TextField>

      <Button type="submit" size="lg" fullWidth>
        Demander un devis
        <Send className="size-4" />
      </Button>
      <p className="text-center text-xs text-slate-400">
        Réponse sous 24 h ouvrées. Aucune donnée transmise à des tiers.
      </p>
    </form>
  );
}
