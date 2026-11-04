import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal · La Barbería de Fernando" },
      { name: "description", content: "Aviso legal del sitio web de La Barbería de Fernando, Salamanca." },
      { property: "og:title", content: "Aviso legal · La Barbería de Fernando" },
      { property: "og:description", content: "Aviso legal del sitio web de La Barbería de Fernando." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage title="Aviso legal">
      <p>Este sitio web pertenece a {BUSINESS.name}, con domicilio en {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}. Teléfono: {BUSINESS.phone}.</p>
      <p>El titular deberá completar aquí sus datos identificativos (nombre o razón social y NIF) conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información.</p>
      <p>Los contenidos de esta web tienen carácter informativo. Queda prohibida su reproducción sin autorización.</p>
    </LegalPage>
  ),
});
