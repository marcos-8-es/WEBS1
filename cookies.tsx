import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies · La Barbería de Fernando" },
      { name: "description", content: "Política de cookies de La Barbería de Fernando, Salamanca." },
      { property: "og:title", content: "Política de cookies · La Barbería de Fernando" },
      { property: "og:description", content: "Información sobre el uso de cookies en esta web." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage title="Política de cookies">
      <p>Esta web no utiliza cookies propias de análisis ni publicidad.</p>
      <p>El mapa de Google Maps integrado en la sección de contacto puede instalar cookies de terceros gestionadas por Google. Puedes bloquearlas o eliminarlas desde la configuración de tu navegador.</p>
    </LegalPage>
  ),
});
