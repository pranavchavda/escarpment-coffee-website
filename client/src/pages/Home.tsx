import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Package, Truck, Award } from "lucide-react";

export default function Home() {
  const featuredCoffees = [
    {
      id: 1,
      title: "Essential Espresso",
      price: "$18.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/essential-espresso-1758898738151.webp?v=1758899441",
      description: "Rich, velvety crema with a nutty taste and dark chocolate finish. 100% Arabica blend.",
      tags: ["Espresso", "Dark Roast", "Blend"],
      isNew: false
    },
    {
      id: 2,
      title: "Essential Espresso Decaf",
      price: "$22.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/trimmed-essential-1765911539897_50bc81c2-b545-4fc8-9971-8e08b08eb9b6.webp?v=1765911650",
      description: "Swiss Water Process decaf. Smooth, balanced flavour with hints of citrus fruit.",
      tags: ["Decaf", "Espresso", "SWP"],
      isNew: false
    },
    {
      id: 3,
      title: "Coffee Subscription - Tier 1",
      price: "$68.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-2_8128fd45-89c7-424e-a908-69a83b50d32c.jpg?v=1690212268",
      description: "Select 4 coffees out of 18. Save up to $11 on every order.",
      tags: ["Subscription", "Bundle", "Save"],
      isNew: true
    },
    {
      id: 4,
      title: "Coffee Subscription - Tier 2",
      price: "$75.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/Coffee-Tier-3_48159031-7656-4893-9922-c8ecba482880.jpg?v=1694025476",
      description: "Select 4 coffees out of 30. Save up to $18 on every order.",
      tags: ["Subscription", "Premium", "Save"],
      isNew: true
    }
  ];

  const equipment = [
    {
      id: 5,
      title: "Coffee Brain Genesis",
      price: "$599.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/wmed-104CoffeeBrainGenisis-WhitezzzgroundPhotosSet1copy.jpg?v=1761072564",
      description: "Super automatic espresso machine with 2.4-inch colour display and 16 programmable beverages.",
      tags: ["Machine", "Automatic", "Sale"],
      isNew: false
    },
    {
      id: 6,
      title: "Moccamaster Cup-One",
      price: "$344.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/products/71_2B6l_2B9IeSL._AC_SL1500_61e30c06-11bc-48e7-8e7b-1589cce4ac7e.jpg?v=1761072575",
      description: "Handmade single-serve brewer. Perfect cup in just 4 minutes.",
      tags: ["Brewer", "Handmade", "Filter"],
      isNew: false
    },
    {
      id: 7,
      title: "Whitebird KC215A Scale",
      price: "$75.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/wb.jpg?v=1683122219",
      description: "Precision digital scale with timer and 0.1g accuracy.",
      tags: ["Accessory", "Precision"],
      isNew: false
    },
    {
      id: 8,
      title: "Airscape Canister 64oz",
      price: "$42.00",
      image: "https://cdn.shopify.com/s/files/1/1201/3604/files/120BlackFridayGiveAwayPackages.jpg?v=1704991342",
      description: "Preserve freshness with patented air-removing lid technology.",
      tags: ["Storage", "Freshness"],
      isNew: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-2.webp" 
            alt="Niagara Escarpment in Autumn" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight uppercase drop-shadow-lg animate-in slide-in-from-bottom-10 duration-1000">
            Roasted Fresh in <br/><span className="text-primary">Milton, Ontario</span>
          </h1>
          <p className="font-mono text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed animate-in slide-in-from-bottom-10 duration-1000 delay-200">
            We share the best of what we find on our journeys with you. 
            From the rugged escarpment to your morning cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a href="https://idrinkcoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-sans uppercase tracking-widest text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white border-none rounded-none">
                Shop Coffees
              </Button>
            </a>
            <Button size="lg" variant="outline" className="font-sans uppercase tracking-widest text-base px-8 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-none backdrop-blur-sm">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container max-w-5xl mx-auto text-center">
          <span className="font-mono text-primary text-sm uppercase tracking-[0.2em] mb-4 block">Our Mission</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-8 text-foreground uppercase">A Quality Cup of Coffee</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
          <p className="text-lg md:text-xl text-muted-foreground leading-loose font-light max-w-3xl mx-auto">
            We think that an excellent cup of coffee should be easy to come by. Whether you're a coffee aficionado, 
            cafe owner, or simply looking to refine your morning brew, Escarpment Coffee Roasters delivers 
            everything you need to brew superb coffee anywhere.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Featured Coffees - Masonry-ish Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl uppercase text-foreground mb-2">Fresh Roasts</h2>
              <p className="font-mono text-muted-foreground">Small batch, ethically sourced.</p>
            </div>
            <Button variant="link" className="hidden md:flex gap-2 text-primary hover:text-accent uppercase font-bold tracking-wider">
              View All Coffees <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoffees.map((coffee) => (
              <ProductCard 
                key={coffee.id}
                {...coffee}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full uppercase tracking-wider">View All Coffees</Button>
          </div>
        </div>
      </section>



      {/* Features Grid */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-2">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-xl uppercase">Free Shipping</h3>
              <p className="text-sm text-muted-foreground font-mono px-8">
                On all orders over $50 across Canada. Fresh to your door.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-xl uppercase">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground font-mono px-8">
                Ethically sourced, carefully roasted, and quality tested.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-2">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-xl uppercase">Freshness First</h3>
              <p className="text-sm text-muted-foreground font-mono px-8">
                Roasted in small batches to ensure peak flavor profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Parallax */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/coffee-beans-texture.jpg" 
            alt="Coffee Beans Texture" 
            className="h-full w-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container relative z-10 max-w-2xl text-center">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 uppercase text-foreground">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light">
            Be the first to know when we add a new coffee to our collection and get exclusive discounts from time to time.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-background border-2 border-border px-6 py-4 text-base font-mono focus:outline-none focus:border-primary transition-colors"
            />
            <Button size="lg" className="font-sans uppercase tracking-widest px-8 py-6 rounded-none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
