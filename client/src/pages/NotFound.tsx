import Layout from "@/components/Layout";
import StrataRule from "@/components/StrataRule";
import CoordinateStamp from "@/components/CoordinateStamp";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 pt-16 lg:pt-28 pb-20 lg:pb-32">
          <div className="lg:col-span-8 space-y-8">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              Error · 04
            </div>

            <h1
              className="font-sans uppercase text-foreground tracking-stratum leading-[0.85]"
              style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
            >
              4<span className="text-primary">0</span>4.
            </h1>

            <StrataRule className="text-border" />

            <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-xl leading-snug">
              The page you requested isn't in the catalogue. It may have been retired,
              relocated, or it never existed in this stratum.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 font-sans uppercase tracking-[0.18em] text-sm hover:bg-primary/90 transition-colors"
              >
                Back to the Index
                <span className="transition-transform group-hover:-translate-x-1">←</span>
              </Link>
              <Link
                href="/coffees"
                className="inline-flex items-center gap-3 border border-border px-6 py-3.5 font-sans uppercase tracking-[0.18em] text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Browse Coffees
              </Link>
            </div>

            <CoordinateStamp meta="REQUEST LOGGED" />
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 font-mono text-sm space-y-4">
            <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
              Diagnostic
            </div>
            <dl className="space-y-3">
              <Row label="Status">404 — Not Found</Row>
              <Row label="Likely cause">Stale link · typo</Row>
              <Row label="Stratum">Unknown</Row>
              <Row label="Suggested">/coffees · /subscriptions</Row>
            </dl>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border/60 pb-2">
      <dt className="text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-foreground">{children}</dd>
    </div>
  );
}
