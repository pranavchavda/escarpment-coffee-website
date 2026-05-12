import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "lucide-react";
import { useState } from "react";
import StrataRule from "./StrataRule";
import CoordinateStamp from "./CoordinateStamp";

const NAV_ITEMS: { index: string; label: string; href: string }[] = [
  { index: "01", label: "Index", href: "/" },
  { index: "02", label: "Coffees", href: "/coffees" },
  { index: "03", label: "Subscriptions", href: "/subscriptions" },
  { index: "04", label: "Field Notes", href: "/about" },
  { index: "05", label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground grain">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        {/* top hairline + coords row */}
        <div className="hidden md:block border-b border-border/60">
          <div className="container flex items-center justify-between h-7 text-[0.625rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <CoordinateStamp meta="EST. NIAGARA ESCARPMENT" className="text-[0.625rem]" />
            <span className="opacity-70">SMALL-BATCH · SHIPPED ACROSS CANADA</span>
          </div>
        </div>

        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-wide.png"
              alt="Escarpment Coffee Roasters"
              className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          <nav className="hidden md:flex items-stretch gap-7">
            {NAV_ITEMS.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative flex items-baseline gap-2 text-sm font-medium uppercase tracking-[0.18em] transition-colors py-2",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[0.625rem] tabular-nums",
                      active ? "text-primary" : "text-muted-foreground/60",
                    )}
                  >
                    {item.index}
                  </span>
                  <span className="font-sans">{item.label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-transform duration-500 origin-left",
                      active ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href="https://idrinkcoffee.com/collections/coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-sans uppercase tracking-[0.2em] text-xs font-medium border border-border px-3.5 py-2 hover:border-primary hover:text-primary transition-colors"
          >
            Shop <span aria-hidden="true">→</span>
          </a>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <StrataRule className="text-border" />

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur animate-in slide-in-from-top-5">
            <nav className="container flex flex-col py-4">
              {NAV_ITEMS.map((item) => {
                const active = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-baseline gap-3 py-3 uppercase tracking-[0.18em] border-b border-border/40 last:border-b-0",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs tabular-nums",
                        active ? "text-primary" : "text-muted-foreground/60",
                      )}
                    >
                      {item.index}
                    </span>
                    <span className="font-sans text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground">
        <StrataRule className="text-border/60" />

        <div className="container py-16 md:py-24">
          {/* Footer manifesto strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="md:col-span-5 space-y-5">
              <div className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-primary">
                ¶ Colophon
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-tight text-foreground">
                Roasted in <em>small batches</em> in Milton, Ontario — the town the
                Niagara Escarpment runs through. A modest catalogue, deliberately
                maintained.
              </p>
              <CoordinateStamp meta="ROASTERY" />
            </div>

            <div className="md:col-span-2">
              <FooterHeading index="01">Shop</FooterHeading>
              <FooterLinks
                items={[
                  { label: "All Coffees", href: "/coffees" },
                  { label: "Subscriptions", href: "/subscriptions" },
                  {
                    label: "Wholesale ↗",
                    href: "https://wholesale.idrinkcoffee.com/",
                    external: true,
                  },
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <FooterHeading index="02">Studio</FooterHeading>
              <FooterLinks
                items={[
                  { label: "Field Notes", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ]}
              />
            </div>

            <div className="md:col-span-3 space-y-4">
              <FooterHeading index="03">Dispatch</FooterHeading>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Occasional letters about new roasts and arrivals from origin.
              </p>
              <form
                className="flex flex-col gap-2"
                action="//manage.kmail-lists.com/subscriptions/subscribe"
                method="POST"
              >
                <input type="hidden" name="g" value="rH8EgK" />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  aria-label="Email address for newsletter"
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2 text-sm font-mono uppercase tracking-wider placeholder:text-muted-foreground/70 focus-visible:outline-none transition-colors"
                />
                <Button
                  type="submit"
                  className="w-fit font-sans uppercase tracking-[0.18em] text-xs px-0 bg-transparent text-foreground hover:bg-transparent hover:text-primary shadow-none group"
                >
                  Subscribe <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
                </Button>
              </form>

              <div className="flex gap-4 pt-3">
                <SocialLink href="https://www.instagram.com/idrinkcoffeecanada/" label="Instagram">
                  <InstagramIcon className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/iDrinkCoffeecom/" label="Facebook">
                  <FacebookIcon className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="https://twitter.com/idrinkcoffee" label="X (Twitter)">
                  <XIcon className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="https://youtube.com/idrinkcoffeecanada" label="YouTube">
                  <YoutubeIcon className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>
          </div>

          <StrataRule className="text-border/60" />

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.625rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <p>© {new Date().getFullYear()} · Escarpment Coffee Roasters · A Roastery of iDrinkCoffee.com</p>
            <p className="opacity-70">SET IN OSWALD, ROBOTO MONO, FRAUNCES · BUILT IN ONTARIO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h3 className="font-sans uppercase tracking-[0.2em] text-sm text-foreground mb-4 flex items-baseline gap-2">
      <span className="font-mono text-[0.625rem] text-primary tabular-nums">{index}</span>
      {children}
    </h3>
  );
}

function FooterLinks({
  items,
}: {
  items: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <ul className="space-y-2 text-sm text-muted-foreground font-mono">
      {items.map((item) => (
        <li key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors uppercase tracking-wider text-xs"
            >
              {item.label}
            </a>
          ) : (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors uppercase tracking-wider text-xs"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 inline-flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}
