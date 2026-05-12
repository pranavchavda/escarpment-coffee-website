import Layout from "@/components/Layout";
import StrataRule from "@/components/StrataRule";

interface Tier {
  index: string;
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  pool: string;
  savings: string;
  selection: string;
  features: string[];
  url: string;
  image: string;
  emphasis: boolean;
}

const TIERS: Tier[] = [
  {
    index: "T/01",
    name: "Tier One",
    price: "$68",
    cadence: "/cycle",
    pitch: "The standing order. A working subscription for the daily-drinker.",
    pool: "18",
    savings: "$11",
    selection: "4 of 18",
    features: [
      "Four 12oz bags per cycle",
      "Roasted-to-order, then dispatched",
      "Pause, skip, or cancel any cycle",
      "Free shipping inside Canada",
    ],
    url: "https://idrinkcoffee.com/products/new-coffee-subscription-tier-1",
    image:
      "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-2_8128fd45-89c7-424e-a908-69a83b50d32c.jpg?v=1690212268",
    emphasis: false,
  },
  {
    index: "T/02",
    name: "Tier Two",
    price: "$75",
    cadence: "/cycle",
    pitch: "The deeper bench. Same cadence, broader selection — including rarer lots.",
    pool: "30",
    savings: "$18",
    selection: "4 of 30",
    features: [
      "Access to single-estate and reserve lots",
      "Four 12oz bags per cycle",
      "Roasted-to-order, then dispatched",
      "Pause, skip, or cancel any cycle",
      "Free shipping inside Canada",
    ],
    url: "https://idrinkcoffee.com/products/new-coffee-subscription-tier-2",
    image:
      "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-3_48159031-7656-4893-9922-c8ecba482880.jpg?v=1694025476",
    emphasis: true,
  },
];

export default function Subscriptions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 pt-14 lg:pt-24 pb-14 lg:pb-20">
          <div className="lg:col-span-8">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary reveal">
              Standing Orders · Two Tiers
            </div>
            <h1
              className="mt-4 font-sans uppercase text-foreground tracking-stratum leading-[0.9] reveal"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", animationDelay: "60ms" }}
            >
              Never run out.
              <br />
              <span className="font-serif italic font-normal normal-case text-primary lowercase tracking-normal">
                always fresh.
              </span>
            </h1>
            <p
              className="mt-6 font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug reveal"
              style={{ animationDelay: "160ms" }}
            >
              Pick your tier. Pick your coffees each cycle. We roast to order and dispatch
              within a couple of days. <em>Cancel any time</em> — this isn't a contract,
              it's a habit.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex flex-col justify-end">
            <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              At a glance
            </div>
            <ul className="font-mono text-sm space-y-2">
              <li className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2">
                <span className="uppercase tracking-[0.18em] text-[0.7rem] text-muted-foreground">
                  Selection
                </span>
                <span>4 bags / cycle</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2">
                <span className="uppercase tracking-[0.18em] text-[0.7rem] text-muted-foreground">
                  Cadence
                </span>
                <span>You choose</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2">
                <span className="uppercase tracking-[0.18em] text-[0.7rem] text-muted-foreground">
                  Shipping
                </span>
                <span>Free in Canada</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2">
                <span className="uppercase tracking-[0.18em] text-[0.7rem] text-muted-foreground">
                  Commitment
                </span>
                <span>None</span>
              </li>
            </ul>
          </aside>
        </div>

        <StrataRule className="text-border" />
      </section>

      {/* Tiers */}
      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TIERS.map((tier) => (
            <TierCard key={tier.index} tier={tier} />
          ))}
        </div>
      </section>

      {/* How it works — parchment */}
      <section className="band-parchment py-20 md:py-28">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary">
              ¶ Method
            </div>
            <h2 className="font-sans uppercase mt-3 text-3xl md:text-4xl leading-tight tracking-stratum">
              How it
              <br />
              works.
            </h2>
            <div className="mt-4">
              <StrataRule className="text-border w-24" />
            </div>
          </div>

          <ol className="lg:col-span-9 grid md:grid-cols-3 gap-10">
            <Step
              n="01"
              title="Subscribe."
              body="Pick Tier One or Tier Two. Set your cycle and shipping address."
            />
            <Step
              n="02"
              title="Choose."
              body="We send you a link each cycle to pick your four coffees from the active pool."
            />
            <Step
              n="03"
              title="Receive."
              body="We roast the day we ship. Bags land within a few days, freshly stamped with roast date."
            />
          </ol>
        </div>
      </section>
    </Layout>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const accent = tier.emphasis;
  return (
    <article
      className={
        "relative flex flex-col bg-card border " +
        (accent ? "border-primary/70" : "border-border")
      }
    >
      {/* Index strip */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3 font-mono text-[0.7rem] uppercase tracking-[0.25em]">
        <span className="text-muted-foreground">{tier.index}</span>
        <span className={accent ? "text-primary" : "text-muted-foreground/80"}>
          {accent ? "● Recommended" : "Standing Order"}
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden border-y border-border/60 mx-6">
        <img
          src={tier.image}
          alt={tier.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
      </div>

      <div className="px-6 pt-6 pb-2">
        <h2 className="font-sans uppercase text-3xl md:text-4xl tracking-stratum leading-[0.95]">
          {tier.name}
        </h2>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-sans text-5xl text-foreground tabular-nums">{tier.price}</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {tier.cadence}
          </span>
        </div>
        <p className="mt-3 font-serif italic text-base text-muted-foreground leading-snug">
          {tier.pitch}
        </p>
      </div>

      <dl className="mx-6 mt-4 grid grid-cols-3 gap-3 font-mono text-xs uppercase border-y border-border/60 py-4">
        <div>
          <dt className="text-[0.625rem] tracking-[0.2em] text-muted-foreground">Selection</dt>
          <dd className="mt-1 text-foreground text-base">{tier.selection}</dd>
        </div>
        <div>
          <dt className="text-[0.625rem] tracking-[0.2em] text-muted-foreground">Pool</dt>
          <dd className="mt-1 text-foreground text-base">{tier.pool} coffees</dd>
        </div>
        <div>
          <dt className="text-[0.625rem] tracking-[0.2em] text-muted-foreground">Save</dt>
          <dd className="mt-1 text-primary text-base">{tier.savings}</dd>
        </div>
      </dl>

      <ul className="px-6 py-6 space-y-2.5 font-mono text-sm text-muted-foreground flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-baseline gap-3">
            <span className="text-primary text-[0.625rem] mt-1">▸</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="px-6 pb-6 pt-2">
        <a
          href={tier.url}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "group flex items-center justify-center gap-3 w-full px-5 py-4 font-sans uppercase tracking-[0.18em] text-sm transition-colors " +
            (accent
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground")
          }
        >
          Subscribe to {tier.name}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="space-y-3">
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary tabular-nums">
        {n}
      </div>
      <h3 className="font-sans uppercase text-2xl tracking-stratum leading-tight">
        {title}
      </h3>
      <p className="font-serif italic text-base text-muted-foreground leading-relaxed">
        {body}
      </p>
    </li>
  );
}
