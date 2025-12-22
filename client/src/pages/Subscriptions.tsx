import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Subscriptions() {
  const tiers = [
    {
      title: "Tier 1 Subscription",
      price: "$68.00",
      description: "Perfect for the daily drinker who loves variety.",
      features: [
        "Select 4 coffees out of 18 options",
        "Save up to $11 on every order",
        "Flexible delivery schedule",
        "Cancel anytime"
      ],
      url: "https://idrinkcoffee.com/products/new-coffee-subscription-tier-1",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-2_8128fd45-89c7-424e-a908-69a83b50d32c.jpg?v=1690212268"
    },
    {
      title: "Tier 2 Subscription",
      price: "$75.00",
      description: "For the connoisseur seeking premium selections.",
      features: [
        "Select 4 coffees out of 30 options",
        "Includes premium single origins",
        "Save up to $18 on every order",
        "Flexible delivery schedule"
      ],
      url: "https://idrinkcoffee.com/products/new-coffee-subscription-tier-2",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-3_48159031-7656-4893-9922-c8ecba482880.jpg?v=1694025476"
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/20">
                    <div className="absolute inset-0 z-0">
            <img 
              src="/images/brewing-process.webp" 
              alt="Niagara Escarpment" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 text-center">

            <h1 className="font-sans font-bold text-4xl md:text-6xl uppercase text-foreground mb-6">Never Run Out</h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
              Fresh roasted coffee delivered to your door on your schedule. 
              Choose your tier, pick your beans, and save on every cup.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-card border border-border flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={tier.image} 
                      alt={tier.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-sans font-bold text-2xl uppercase mb-2">{tier.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-4">{tier.price} <span className="text-sm text-muted-foreground font-normal">/ month</span></div>
                    <p className="text-muted-foreground mb-8 font-mono text-sm">{tier.description}</p>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 p-1 rounded-full">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={tier.url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full font-sans uppercase tracking-widest py-6 text-base">
                        Subscribe Now
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
