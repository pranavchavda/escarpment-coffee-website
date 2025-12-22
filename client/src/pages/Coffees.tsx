import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchCoffeeProducts, type Product } from "@/lib/api";

export default function Coffees() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchCoffeeProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <section className="relative h-[60vh]  flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-story.webp" 
              alt="Niagara Escarpment" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          </div>
          <div className="container z-10 text-center">
            <h1 className="font-sans  font-bold text-4xl md:text-6xl uppercase text-foreground mb-6">Our Coffees</h1>
            <p className="font-mono  text-muted-foreground max-w-2xl mx-auto text-lg">
Explore our full selection of premium specialty coffees, freshly roasted in Canada. Whether you prefer complex acidity or a rich, full body, browse our range to discover your ideal cup            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="container">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id}
                    title={product.title}
                    price={`$${product.priceRange.minVariantPrice.amount}`}
                    image={product.featuredImage?.url || ""}
                    description={product.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
                    tags={product.tags}
                    isNew={false}
                    productUrl={`https://idrinkcoffee.com/products/${product.handle}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
