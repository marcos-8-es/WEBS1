import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, Stars } from "@/components/site/Reveal";
import { BUSINESS, SERVICES, TESTIMONIALS, mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from "@/lib/business";
import hero from "@/assets/hero.jpg";
import tools from "@/assets/tools.jpg";
import station from "@/assets/station.jpg";
import chair from "@/assets/chair.jpg";

const IMAGES = { tools, station, chair };
const TITLE = "La Barbería de Fernando · Barbería en Salamanca";
const DESC =
  "Barbería en Salamanca, en C. Fray Luis de Granada 15. Profesionalidad, cercanía y atención personalizada. 5,0 ★ con 49 reseñas en Google. Llama al 923 16 53 77.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: BUSINESS.name,
          telephone: "+34923165377",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C. Fray Luis de Granada, 15",
            postalCode: BUSINESS.postalCode,
            addressLocality: BUSINESS.city,
            addressCountry: "ES",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: BUSINESS.reviews },
        }),
      },
    ],
  }),
  component: Index,
});

const ease = [0.2, 0.8, 0.2, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const lines = ["El arte de", "un buen corte."];

  return (
    <section id="inicio" ref={ref} className="relative flex h-[95vh] min-h-[620px] items-end overflow-hidden">
      <motion.img
        src={hero}
        alt="Interior de barbería con sillón clásico de cuero e iluminación cálida"
        width={1920}
        height={1088}
        fetchPriority="high"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-side-overlay" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 inline-flex items-center gap-4 border border-beige/40 bg-background/70 px-6 py-3 shadow-lg shadow-black/40 backdrop-blur-md"
        >
          <Stars className="text-xl" />
          <span className="font-display text-sm font-medium tracking-[0.2em] text-foreground md:text-base">
            {BUSINESS.rating} · {BUSINESS.reviews} RESEÑAS EN GOOGLE
          </span>
        </motion.div>

        <h1 className="headline text-[13vw] uppercase sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[0.42em] italic normal-case text-beige"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease }}
            >
              La confianza de siempre.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease }}
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-7 text-foreground/80 md:text-lg">
            Profesionalidad, cercanía y atención personalizada en La Barbería de Fernando, Salamanca.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="btn btn-solid">Solicitar cita</a>
            <a href="#barberia" className="btn btn-outline">Descubrir la barbería</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="barberia" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-12 md:py-36 lg:px-10">
      <Reveal className="relative md:col-span-6">
        <div className="overflow-hidden">
          <motion.img
            src={station}
            alt="Tocador de la barbería con toallas y tónicos"
            width={1024}
            height={1280}
            loading="lazy"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease }}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <span className="absolute -bottom-6 -right-2 font-serif text-8xl italic text-beige/30 md:-right-8">01</span>
      </Reveal>
      <div className="md:col-span-5 md:col-start-8">
        <Reveal><p className="eyebrow">La barbería</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline mt-6 text-5xl uppercase md:text-6xl">
            Más que una barbería, <span className="italic normal-case text-beige">un trato de confianza.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>En La Barbería de Fernando encontrarás un trato cercano, profesionalidad y atención a cada detalle.</p>
          <p>Un espacio pensado para ofrecer una experiencia agradable y un servicio cuidado en cada visita.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 grid grid-cols-3 border-t pt-8">
          {["Profesionalidad", "Higiene", "Cercanía"].map((v) => (
            <p key={v} className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-foreground/70">{v}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow">Servicios</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="headline mt-6 text-5xl uppercase md:text-6xl">
                Cuidado en <span className="italic normal-case text-beige">cada detalle.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground">
              Consulta los servicios disponibles llamando al{" "}
              <a href={BUSINESS.phoneHref} className="link-line text-foreground">{BUSINESS.phone}</a>.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group relative overflow-hidden">
                <img
                  src={IMAGES[s.image]}
                  alt=""
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-hero-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-serif text-lg italic text-beige">0{i + 1}</p>
                  <h3 className="headline mt-2 text-3xl">{s.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-foreground/75 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {s.description}
                  </p>
                  {s.price && <p className="mt-3 font-display tracking-[0.2em] text-beige">{s.price}</p>}
                  <div className="mt-5 h-px w-10 bg-beige transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opiniones" className="mx-auto max-w-7xl px-6 py-24 md:py-36 lg:px-10">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal><p className="eyebrow">Opiniones</p></Reveal>
          <Reveal delay={0.1}>
            <p className="headline mt-6 mb-6 text-[7rem] leading-none lining-nums md:text-[9rem]">
              5,0<span className="text-4xl text-muted-foreground"> / 5</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Stars className="text-2xl" />
            <p className="mt-3 font-display text-xs tracking-[0.3em]">{BUSINESS.reviews} RESEÑAS EN GOOGLE</p>
            <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-10">
              Ver reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="space-y-6 md:col-span-7 md:col-start-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <figure className="group border-l border-beige/40 bg-card p-8 transition-colors duration-500 hover:border-beige md:p-10">
                <Stars className="text-sm" />
                <blockquote className="mt-4 font-serif text-2xl leading-snug md:text-3xl">“{t}”</blockquote>
                <figcaption className="mt-5 font-display text-[0.65rem] tracking-[0.3em] text-muted-foreground">
                  RESEÑA DE GOOGLE
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-card">
      <img src={tools} alt="" width={1024} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:py-36 lg:px-10">
        <div>
          <Reveal><p className="eyebrow">Ubicación y contacto</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline mt-6 text-5xl uppercase md:text-7xl">
              Estamos en Salamanca. <span className="italic normal-case text-beige">Te esperamos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <address className="mt-10 space-y-1 not-italic text-lg leading-8">
              <p className="font-serif text-2xl">{BUSINESS.name}</p>
              <p className="text-muted-foreground">{BUSINESS.street}</p>
              <p className="text-muted-foreground">{BUSINESS.postalCode} {BUSINESS.city}</p>
              <p className="pt-4">
                <span className="eyebrow mr-3">Teléfono</span>
                <a href={BUSINESS.phoneHref} className="link-line font-serif text-3xl">{BUSINESS.phone}</a>
              </p>
            </address>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={BUSINESS.phoneHref} className="btn btn-solid">Llamar ahora</a>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Cómo llegar</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="min-h-[420px] border">
          <iframe
            title="Mapa de La Barbería de Fernando en Salamanca"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full grayscale invert-[0.9] contrast-[0.9]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function MobileCallBar() {
  return (
    <a
      href={BUSINESS.phoneHref}
      className="btn btn-solid fixed inset-x-4 bottom-4 z-40 shadow-2xl md:hidden"
      aria-label={`Llamar a ${BUSINESS.name}`}
    >
      Llamar · {BUSINESS.phone}
    </a>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
