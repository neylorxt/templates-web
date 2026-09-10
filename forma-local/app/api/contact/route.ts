import { NextResponse } from "next/server";

/**
 * Endpoint des formulaires (contact et préinscription).
 *
 * Par défaut, il valide la requête et renvoie un succès : les formulaires sont
 * fonctionnels sans dépendance externe. Pour connecter un vrai service
 * sécurisé (email, CRM, Supabase, webhook…), renseignez la variable
 * d'environnement `CONTACT_WEBHOOK_URL` : chaque demande lui sera alors
 * transmise en POST.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["email", "message"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: `Le champ « ${field} » est requis.` },
          { status: 400 }
        );
      }
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch(() => {
        // On ne bloque pas la réponse du visiteur si l'envoi externe échoue.
      });
    } else if (process.env.NODE_ENV !== "production") {
      console.info(
        "[contact] Nouvelle demande :",
        JSON.stringify(body, null, 2)
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
}