import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="font-sans font-bold text-4xl mb-8 uppercase tracking-wide text-primary">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert font-mono">
          <p>Last updated: December 18, 2025</p>
          <p>
            At Escarpment Coffee, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          
          <h3>Information Collection</h3>
          <p>
            We do not collect personal information directly on this website for e-commerce transactions, as all purchases are processed through our partner, iDrinkCoffee.com. Please refer to iDrinkCoffee.com's privacy policy for information regarding purchase data.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you contact us via email or our contact form, we will use your email address and name solely to respond to your inquiry. We do not share this information with third parties for marketing purposes.
          </p>

          <h3>Cookies</h3>
          <p>
            We may use cookies to improve your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings.
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
        </div>
      </div>
    </Layout>
  );
}
