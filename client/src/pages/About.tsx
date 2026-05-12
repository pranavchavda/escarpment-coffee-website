import Layout from "@/components/Layout";
import StrataRule from "@/components/StrataRule";
import CoordinateStamp from "@/components/CoordinateStamp";

export default function About() {
  return (
    <Layout>
      {/* Hero — editorial 7/5 with image stratum */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 pt-14 lg:pt-24 pb-14 lg:pb-20">
          <div className="lg:col-span-7">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary reveal">
              Field Notes · A Brief Treatise
            </div>
            <h1
              className="mt-4 font-sans uppercase text-foreground tracking-stratum leading-[0.88] reveal"
              style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", animationDelay: "60ms" }}
            >
              Rooted in
              <br />
              the escarpment.
              <br />
              <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                roasted in milton.
              </span>
            </h1>
            <p
              className="mt-6 font-serif text-xl md:text-2xl text-muted-foreground max-w-xl leading-snug reveal"
              style={{ animationDelay: "160ms" }}
            >
              An independent roastery operating with deliberate restraint — fewer farms, longer
              relationships, and a working schedule we can actually keep.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <img
                src="/images/hero-escarpment.webp"
                alt="Niagara Escarpment cliffside"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-foreground/90">
                <div className="opacity-80">PLATE_002</div>
                <div className="opacity-60">CARBONIFEROUS LIMESTONE</div>
              </div>
            </div>
          </div>
        </div>

        <StrataRule className="text-border" />
      </section>

      {/* ¶ 01 Philosophy — parchment */}
      <section className="band-parchment py-20 md:py-28">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
          <header className="lg:col-span-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ 01 — Philosophy
            </div>
            <h2 className="mt-3 font-sans uppercase text-3xl md:text-4xl tracking-stratum leading-tight">
              The
              <br />
              escarpment
              <br />
              method.
            </h2>
            <div className="mt-4">
              <StrataRule className="text-border w-24" />
            </div>
          </header>

          <div className="lg:col-span-9 space-y-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed dropcap">
              Coffee, like the limestone bedrock that this roastery sits on, was laid down
              slowly. We are not interested in catching trends — we are interested in
              cupping a coffee twenty times before it goes on the shelf, and pulling it
              when it is past its peak. That is the whole pitch.
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-muted-foreground">
              We source through long-relationship importers, work with farms we know by
              name, and roast in small enough batches that nothing goes stale. <em>It is a
              small, slow business.</em> That is intentional.
            </p>
          </div>
        </div>
      </section>

      {/* ¶ 02 Method */}
      <section className="py-20 md:py-28">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
          <header className="lg:col-span-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ 02 — Practice
            </div>
            <h2 className="mt-3 font-sans uppercase text-3xl md:text-4xl tracking-stratum leading-tight">
              What
              <br />
              we do
              <br />
              every week.
            </h2>
          </header>

          <ol className="lg:col-span-9 space-y-0 border-t border-border">
            <Practice
              n="A"
              title="Cup new green coffee."
              body="Every lot is cupped blind before it enters production. If it doesn't earn the shelf, it doesn't get on the shelf."
            />
            <Practice
              n="B"
              title="Profile in test batches."
              body="A roast curve is developed across at least three test batches, then frozen. Production batches follow the locked curve."
            />
            <Practice
              n="C"
              title="Rest the bag."
              body="Beans rest off-roast for roughly seven days before they ship. Espresso lots rest longer. We won't send something that isn't ready to drink."
            />
            <Practice
              n="D"
              title="Date every bag."
              body="Roast date is stamped on the bag, not buried in a lot code. If you don't know when it was roasted, you don't know what you're drinking."
            />
          </ol>
        </div>
      </section>

      {/* ¶ 03 Roastery — parchment with coordinate stamp */}
      <section className="band-parchment py-20 md:py-28">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ 03 — Roastery
            </div>
            <h2 className="mt-3 font-sans uppercase text-3xl md:text-5xl tracking-stratum leading-tight">
              Where the
              <br />
              <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                escarpment runs through town.
              </span>
            </h2>
            <p className="mt-6 font-serif text-lg md:text-xl leading-relaxed max-w-xl">
              The Niagara Escarpment is a 725-kilometre stretch of fossil reef that runs
              from New York to Manitoulin Island. It passes through Milton, Ontario — and
              we roast about ten minutes east of its cliff face. A working roastery, not a
              showroom.
            </p>
            <div className="mt-6">
              <CoordinateStamp meta="ESCARPMENT COFFEE · ROASTERY" />
            </div>
          </div>

          <dl className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-sm">
            <Spec label="Stratum">Limestone</Spec>
            <Spec label="Age">~430 Ma</Spec>
            <Spec label="Length">725 km</Spec>
            <Spec label="Roastery elev.">≈ 200 m</Spec>
            <Spec label="Province">Ontario · CA</Spec>
            <Spec label="Distribution">Canada-wide</Spec>
          </dl>
        </div>
      </section>
    </Layout>
  );
}

function Practice({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="grid grid-cols-12 gap-4 md:gap-8 border-b border-border py-8 md:py-10">
      <div className="col-span-2 md:col-span-1 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary tabular-nums">
        {n}
      </div>
      <h3 className="col-span-10 md:col-span-4 font-sans uppercase text-2xl tracking-stratum leading-tight">
        {title}
      </h3>
      <p className="col-span-12 md:col-span-7 font-serif text-lg leading-relaxed text-muted-foreground">
        {body}
      </p>
    </li>
  );
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border/70 pb-2">
      <dt className="text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-foreground text-base">{children}</dd>
    </div>
  );
}
