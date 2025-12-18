import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="font-sans font-bold text-4xl mb-8 uppercase tracking-wide text-primary">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert font-mono">
          <p>Last updated: December 18, 2025</p>
          <p>
            Welcome to Escarpment Coffee. By accessing this website, you agree to be bound by these Terms of Service.
          </p>
          
          <h3>Use of Website</h3>
          <p>
            This website is provided for informational purposes regarding our coffee roasting products and brand. All content, including text, images, and logos, is the property of Escarpment Coffee.
          </p>

          <h3>Product Availability</h3>
          <p>
            Our coffee products are sold through our retail partner, iDrinkCoffee.com. Availability and pricing are subject to change without notice on their platform.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            Escarpment Coffee is not liable for any damages arising from the use or inability to use this website.
          </p>

          <h3>Governing Law</h3>
          <p>
            These terms are governed by the laws of Ontario, Canada.
          </p>
        </div>
      </div>
    </Layout>
  );
}
