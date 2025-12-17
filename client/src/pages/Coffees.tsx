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
        <section className="bg-muted/30 py-20 border-b border-border">
          <div className="container text-center">
            <h1 className="font-sans font-bold text-4xl md:text-6xl uppercase text-foreground mb-6">Our Coffees</h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our full selection of ethically sourced, small-batch roasted coffees. 
              From bright and fruity to dark and chocolatey, find your perfect cup.
            </p>
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
                    tags={product.tags.slice(0, 3)}
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
