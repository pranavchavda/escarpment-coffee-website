import Layout from "@/components/Layout";
import StrataRule from "@/components/StrataRule";

const SECTIONS = [
  {
    n: "01",
    title: "Use of Website",
    body: "This website is provided for informational purposes regarding our coffee roasting products and brand. All content — including text, images, and logos — is the property of Escarpment Coffee.",
  },
  {
    n: "02",
    title: "Product Availability",
    body: "Our coffee products are sold through our retail partner, iDrinkCoffee.com. Availability and pricing are subject to change without notice on their platform.",
  },
  {
    n: "03",
    title: "Limitation of Liability",
    body: "Escarpment Coffee is not liable for any damages arising from the use of, or inability to use, this website.",
  },
  {
    n: "04",
    title: "Governing Law",
    body: "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
  },
];

export default function Terms() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="container pt-14 lg:pt-24 pb-10 lg:pb-14">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
            Legal · § 02
          </div>
          <h1
            className="mt-4 font-sans uppercase text-foreground tracking-stratum leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Terms of
            <br />
            <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
              service.
            </span>
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Last revised · December 18, 2025
          </p>
        </div>

        <StrataRule className="text-border" />
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 space-y-3">
              <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">
                Contents
              </div>
              <ul className="space-y-2 font-mono text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.n}>
                    <a
                      href={`#sec-${s.n}`}
                      className="flex items-baseline gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="tabular-nums text-primary text-[0.7rem]">{s.n}</span>
                      <span className="uppercase tracking-[0.15em] text-xs">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-12">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground max-w-3xl">
              Welcome to Escarpment Coffee. By accessing this website you agree to be bound
              by the terms below. Read them — they are short.
            </p>

            <div className="border-t border-border">
              {SECTIONS.map((s) => (
                <article
                  key={s.n}
                  id={`sec-${s.n}`}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border scroll-mt-32"
                >
                  <div className="col-span-2 md:col-span-1 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary tabular-nums">
                    § {s.n}
                  </div>
                  <h2 className="col-span-10 md:col-span-4 font-sans uppercase text-2xl tracking-stratum leading-tight">
                    {s.title}
                  </h2>
                  <p className="col-span-12 md:col-span-7 font-serif text-lg leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
