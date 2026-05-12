import Layout from "@/components/Layout";
import StrataRule from "@/components/StrataRule";
import CoordinateStamp from "@/components/CoordinateStamp";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 pt-14 lg:pt-24 pb-12 lg:pb-16">
          <div className="lg:col-span-8">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary reveal">
              Correspondence · Contact Card
            </div>
            <h1
              className="mt-4 font-sans uppercase text-foreground tracking-stratum leading-[0.9] reveal"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animationDelay: "60ms" }}
            >
              Write to the
              <br />
              <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                roastery.
              </span>
            </h1>
            <p
              className="mt-6 font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug reveal"
              style={{ animationDelay: "160ms" }}
            >
              Questions about a roast, brewing notes, or wholesale enquiries — the inbox is
              open. We answer in the order they arrive, usually within a working day.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col justify-end">
            <CoordinateStamp meta="MILTON · ONTARIO" />
          </aside>
        </div>

        <StrataRule className="text-border" />
      </section>

      {/* Contact card */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto border border-border bg-card">
            {/* Header strip */}
            <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-border font-mono text-[0.625rem] uppercase tracking-[0.3em]">
              <span className="text-muted-foreground">№ 01 / Contact Card</span>
              <span className="text-primary">Form 04-A</span>
            </div>

            {/* Three channels */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <Channel
                label="Visit"
                heading="The Roastery"
                lines={["1-312 Alliance Road", "Milton, ON · L9T 2V2", "Canada"]}
              />
              <Channel
                label="Write"
                heading="By Email"
                lines={[
                  <a
                    key="email"
                    href="mailto:sales@idrinkcoffee.com"
                    className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    sales@idrinkcoffee.com
                  </a>,
                  "We respond within a working day.",
                ]}
                middle
              />
              <Channel
                label="Call"
                heading="By Phone"
                lines={[
                  <a
                    key="phone"
                    href="tel:1-800-425-5405"
                    className="hover:text-primary transition-colors underline-offset-4 hover:underline tabular-nums"
                  >
                    1-800-425-5405
                  </a>,
                  "Mon–Fri · 9:00–17:00 ET",
                ]}
              />
            </div>

            {/* Footer strip */}
            <div className="px-6 md:px-10 py-5 border-t border-border bg-background/40">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
                <CoordinateStamp meta="CONTACT CARD ISSUED MAY 2026" />
                <span>Wholesale enquiries: wholesale@idrinkcoffee.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale callout */}
      <section className="band-parchment py-16 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ Wholesale
            </div>
            <h2 className="font-sans uppercase text-3xl md:text-4xl tracking-stratum leading-tight">
              Cafés, restaurants, offices.
            </h2>
            <p className="font-serif text-lg md:text-xl leading-relaxed max-w-2xl">
              We supply small-batch coffee at wholesale through iDrinkCoffee. Same beans,
              same roast schedule, business-friendly logistics.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href="https://wholesale.idrinkcoffee.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-sans uppercase tracking-[0.18em] text-sm hover:bg-primary/90 transition-colors"
            >
              Open Wholesale
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Channel({
  label,
  heading,
  lines,
  middle = false,
}: {
  label: string;
  heading: string;
  lines: React.ReactNode[];
  middle?: boolean;
}) {
  return (
    <div
      className={
        "p-6 md:p-10 space-y-3 " +
        (middle ? "md:border-x border-border" : "border-t md:border-t-0 border-border")
      }
    >
      <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
        {label}
      </div>
      <h3 className="font-sans uppercase text-2xl tracking-stratum leading-tight">
        {heading}
      </h3>
      <ul className="space-y-1 font-mono text-sm text-muted-foreground leading-relaxed">
        {lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
