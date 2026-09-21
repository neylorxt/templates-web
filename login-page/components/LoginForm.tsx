"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Spinner,
  TextField,
  toast,
} from "@heroui/react";
import { EyeIcon, EyeSlashIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Formulaire de connexion, prêt à brancher sur votre fournisseur d'authentification. */
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailInvalid = submitted && !EMAIL_PATTERN.test(email);
  const isPasswordInvalid = submitted && password.length === 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!EMAIL_PATTERN.test(email) || password.length === 0) return;

    setIsSubmitting(true);
    // TODO: appeler votre fournisseur d'authentification (NextAuth, Clerk, API…).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);

    toast.success("Connexion réussie", {
      description: `Bienvenue dans votre espace ${siteConfig.name}.`,
    });
  }

  return (
    <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        isDisabled={isSubmitting}
        isInvalid={isEmailInvalid}
        name="email"
        value={email}
        onChange={setEmail}
      >
        <Label>Adresse e-mail</Label>
        <Input autoComplete="email" placeholder="vous@exemple.fr" type="email" />
        {isEmailInvalid ? (
          <FieldError>Saisissez une adresse e-mail valide.</FieldError>
        ) : null}
      </TextField>

      <TextField
        fullWidth
        isDisabled={isSubmitting}
        isInvalid={isPasswordInvalid}
        name="password"
        value={password}
        onChange={setPassword}
      >
        <Label>Mot de passe</Label>
        <InputGroup fullWidth>
          <InputGroup.Input
            autoComplete="current-password"
            placeholder="••••••••"
            type={isPasswordVisible ? "text" : "password"}
          />
          <InputGroup.Suffix className="pe-0">
            <Button
              isIconOnly
              aria-label={isPasswordVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              size="sm"
              variant="ghost"
              onPress={() => setIsPasswordVisible((visible) => !visible)}
            >
              {isPasswordVisible ? (
                <EyeSlashIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
        {isPasswordInvalid ? <FieldError>Saisissez votre mot de passe.</FieldError> : null}
      </TextField>

      <div className="flex items-center justify-between gap-4">
        <Checkbox
          isDisabled={isSubmitting}
          isSelected={remember}
          name="remember"
          onChange={setRemember}
        >
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Se souvenir de moi
          </Checkbox.Content>
        </Checkbox>
        <a className="link text-sm" href="#">
          Mot de passe oublié&nbsp;?
        </a>
      </div>

      <Button fullWidth isPending={isSubmitting} type="submit">
        {isSubmitting ? <Spinner color="current" size="sm" /> : null}
        {isSubmitting ? "Connexion…" : "Se connecter"}
      </Button>
    </Form>
  );
}
