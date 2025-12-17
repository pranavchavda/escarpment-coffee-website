import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Coffees", href: "/coffees" },
    { label: "Equipment", href: "/equipment" },
    { label: "Subscriptions", href: "/subscriptions" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-muted flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                <span className="font-sans font-bold text-xl text-primary group-hover:text-accent">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl tracking-wide uppercase leading-none text-foreground group-hover:text-primary transition-colors">Escarpment</span>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Coffee Roasters</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider",
                    location === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider py-2",
                      location === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Search className="h-4 w-4" /> Search
                </Button>
                <Button variant="default" className="w-full justify-start gap-2">
                  <ShoppingBag className="h-4 w-4" /> Cart
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card text-card-foreground">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                  <span className="font-sans font-bold text-primary">E</span>
                </div>
                <span className="font-sans font-bold text-lg uppercase tracking-wide">Escarpment Coffee</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Roasted fresh in Milton, Ontario. We share the best of what we find on our journeys with you.
              </p>
            </div>
            
            <div>
              <h3 className="font-sans font-bold text-lg mb-4 uppercase tracking-wider text-primary">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/coffees" className="hover:text-primary transition-colors">All Coffees</a></li>
                <li><a href="/equipment" className="hover:text-primary transition-colors">Equipment</a></li>
                <li><a href="/subscriptions" className="hover:text-primary transition-colors">Subscriptions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-bold text-lg mb-4 uppercase tracking-wider text-primary">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wholesale</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-bold text-lg mb-4 uppercase tracking-wider text-primary">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Be the first to know about new roasts and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 bg-background border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>JOIN</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Escarpment Coffee Roasters.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Shipping</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
