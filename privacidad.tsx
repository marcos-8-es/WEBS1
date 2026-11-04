import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · La Barbería de Fernando" },
      { name: "description", content: "Política de privacidad de La Barbería de Fernando, Salamanca." },
      { property: "og:title", content: "Política de privacidad · La Barbería de Fernando" },
      { property: "og:description", content: "Cómo tratamos tus datos personales." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage title="Política de privacidad">
      <p>Esta web no dispone de formularios ni recoge datos personales de forma directa. Las solicitudes de cita se realizan por teléfono al {BUSINESS.phone}.</p>
      <p>Si nos facilitas datos por teléfono, {BUSINESS.name} los tratará únicamente para gestionar tu cita, conforme al RGPD (UE) 2016/679. Puedes ejercer tus derechos de acceso, rectificación y supresión contactando con nosotros.</p>
      <p>El mapa integrado es un servicio de Google, sujeto a su propia política de privacidad.</p>
    </LegalPage>
  ),
});
