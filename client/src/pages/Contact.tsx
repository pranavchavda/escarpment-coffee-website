import Layout from "@/components/Layout";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/images/hero-escarpment.webp"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-white uppercase tracking-widest text-center">
              Get in Touch
            </h1>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-sans font-bold text-2xl mb-4 uppercase tracking-wide text-primary">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground leading-relaxed font-mono">
                  Whether you have a question about our roasts, need brewing advice, or just want to say hello, we're here to help.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide mb-2">Visit Us</h3>
                    <p className="text-muted-foreground font-mono text-sm">
                      1-312 Alliance Road<br />
                      Milton, ON L9T 2V2<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide mb-2">Email Us</h3>
                    <a href="mailto:sales@idrinkcoffee.com" className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors">
                      sales@idrinkcoffee.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide mb-2">Call Us</h3>
                    <a href="tel:1-800-425-5405" className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors">
                      1-800-425-5405
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
