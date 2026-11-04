import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, BUSINESS } from "@/lib/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/#inicio" className="flex flex-col leading-none" aria-label={BUSINESS.name}>
          <span className="font-display text-[0.6rem] tracking-[0.4em] text-beige">LA BARBERÍA DE</span>
          <span className="headline text-2xl tracking-[0.08em]">FERNANDO</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-line text-sm text-foreground/80 hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>

        <a href={BUSINESS.phoneHref} className="btn btn-solid hidden min-h-11 lg:inline-flex">
          Solicitar cita
        </a>

        <button
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className={`h-px w-7 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 h-[calc(100dvh-5rem)] bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 pt-10" aria-label="Móvil">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="headline border-b py-4 text-4xl"
                >
                  {n.label}
                </motion.a>
              ))}
              <a href={BUSINESS.phoneHref} className="btn btn-solid mt-8 w-full">
                Solicitar cita · {BUSINESS.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
