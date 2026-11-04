import { Link } from "@tanstack/react-router";
import { BUSINESS, NAV } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-[0.6rem] tracking-[0.4em] text-beige">LA BARBERÍA DE</p>
          <p className="headline text-4xl tracking-[0.08em]">FERNANDO</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Barbería en Salamanca.</p>
        </div>
        <address className="not-italic text-sm leading-7 text-muted-foreground">
          <p className="eyebrow mb-3">Visítanos</p>
          {BUSINESS.street}
          <br />
          {BUSINESS.postalCode} {BUSINESS.city}
          <br />
          <a href={BUSINESS.phoneHref} className="link-line text-foreground">{BUSINESS.phone}</a>
        </address>
        <nav aria-label="Pie de página" className="text-sm">
          <p className="eyebrow mb-3">Navegación</p>
          <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground md:flex-row md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/aviso-legal" className="hover:text-foreground">Aviso legal</Link>
            <Link to="/privacidad" className="hover:text-foreground">Política de privacidad</Link>
            <Link to="/cookies" className="hover:text-foreground">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
