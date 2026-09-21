"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Button,
  Checkbox,
  Description,
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
const MIN_PASSWORD_LENGTH = 8;

/** Formulaire d'inscription, prêt à brancher sur votre API. */
export function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isNameInvalid = submitted && fullName.trim().length < 2;
  const isEmailInvalid = submitted && !EMAIL_PATTERN.test(email);
  const isPasswordInvalid = submitted && password.length < MIN_PASSWORD_LENGTH;
  const isConfirmationInvalid = submitted && confirmation !== password;
  const isTermsInvalid = submitted && !acceptedTerms;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const isValid =
      fullName.trim().length >= 2 &&
      EMAIL_PATTERN.test(email) &&
      password.length >= MIN_PASSWORD_LENGTH &&
      confirmation === password &&
      acceptedTerms;

    if (!isValid) return;

    setIsSubmitting(true);
    // TODO: appeler votre API d'inscription (route handler, Server Action…).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);

    toast.success("Compte créé", {
      description: `Bienvenue dans votre espace ${siteConfig.name}.`,
    });

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmation("");
    setAcceptedTerms(false);
    setSubmitted(false);
  }

  return (
    <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        isDisabled={isSubmitting}
        isInvalid={isNameInvalid}
        name="name"
        value={fullName}
        onChange={setFullName}
      >
        <Label>Nom complet</Label>
        <Input autoComplete="name" placeholder="Marie Dupont" />
        {isNameInvalid ? <FieldError>Indiquez votre nom complet.</FieldError> : null}
      </TextField>

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
            autoComplete="new-password"
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
        {isPasswordInvalid ? (
          <FieldError>
            Le mot de passe doit contenir au moins {MIN_PASSWORD_LENGTH} caractères.
          </FieldError>
        ) : (
          <Description>{MIN_PASSWORD_LENGTH} caractères minimum.</Description>
        )}
      </TextField>

      <TextField
        fullWidth
        isDisabled={isSubmitting}
        isInvalid={isConfirmationInvalid}
        name="password-confirmation"
        value={confirmation}
        onChange={setConfirmation}
      >
        <Label>Confirmer le mot de passe</Label>
        <Input autoComplete="new-password" placeholder="••••••••" type="password" />
        {isConfirmationInvalid ? (
          <FieldError>Les deux mots de passe ne correspondent pas.</FieldError>
        ) : null}
      </TextField>

      <Checkbox
        isDisabled={isSubmitting}
        isInvalid={isTermsInvalid}
        isSelected={acceptedTerms}
        name="terms"
        onChange={setAcceptedTerms}
      >
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <span>
            J&apos;accepte les{" "}
            <a className="link" href={siteConfig.legal.termsUrl}>
              conditions générales
            </a>{" "}
            et la{" "}
            <a className="link" href={siteConfig.legal.privacyUrl}>
              politique de confidentialité
            </a>
            .
          </span>
        </Checkbox.Content>
        {isTermsInvalid ? (
          <FieldError>Vous devez accepter les conditions pour créer un compte.</FieldError>
        ) : null}
      </Checkbox>

      <Button fullWidth isPending={isSubmitting} type="submit">
        {isSubmitting ? <Spinner color="current" size="sm" /> : null}
        {isSubmitting ? "Création du compte…" : "Créer mon compte"}
      </Button>
    </Form>
  );
}
