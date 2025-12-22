import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-escarpment.webp" 
              alt="Niagara Escarpment" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 text-center text-white">
            <h1 className="font-sans font-bold text-5xl md:text-7xl uppercase mb-6">Our Story</h1>
            <p className="font-mono text-xl max-w-2xl mx-auto">
              Rooted in the Escarpment. Roasted in Milton.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-32">
          <div className="container max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2 className="font-sans font-bold text-3xl uppercase text-primary mb-8">The Escarpment Philosophy</h2>
              <p className="text-lg leading-relaxed mb-8">
                Escarpment Coffee Roasters was born from a simple belief: that an excellent cup of coffee should be easy to come by. 
                Located in the heart of Milton, Ontario, just steps from the majestic Niagara Escarpment, we draw inspiration 
                from the rugged beauty and enduring strength of our natural surroundings.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                We are explorers at heart. We scour the globe to find the finest beans, building relationships with farmers 
                who share our commitment to quality. We bring these treasures back to our roastery, where we roast them in small batches to highlight their unique character and flavour profiles.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
                <div className="bg-muted p-8 border-l-4 border-primary">
                  <h3 className="font-sans font-bold text-xl uppercase mb-4">Our Mission</h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    To make superb coffee accessible to everyone—whether you're a seasoned aficionado, a cafe owner, 
                    or someone simply looking to elevate their morning ritual.
                  </p>
                </div>
                <div className="bg-muted p-8 border-l-4 border-accent">
                  <h3 className="font-sans font-bold text-xl uppercase mb-4">Our Craft</h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    We believe in precision and passion. Every batch is roasted with care, tasted for quality, 
                    and packed fresh to ensure you experience the coffee exactly as intended.
                  </p>
                </div>
              </div>

              <h2 className="font-sans font-bold text-3xl uppercase text-primary mb-8">Community & Connection</h2>
              <p className="text-lg leading-relaxed">
                Coffee is more than just a beverage; it's a catalyst for connection. It brings people together, 
                starts conversations, and fuels ideas. We are proud to be able to share our passion with coffee lovers 
                across Canada. Grab a bag of Escarpment Coffee and taste what we’re excited to roast right now.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
