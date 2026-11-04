import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="eyebrow">Información legal</p>
        <h1 className="headline mt-4 text-5xl md:text-6xl">{title}</h1>
        <div className="mt-10 space-y-5 leading-8 text-muted-foreground">{children}</div>
      </main>
      <Footer />
    </>
  );
}
