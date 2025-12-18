import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/hero-escarpment.jpg" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-sans font-bold text-2xl mb-4 uppercase tracking-wide text-primary">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground leading-relaxed font-mono">
                  Whether you have a question about our roasts, need brewing advice, or just want to say hello, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide">Visit Us</h3>
                    <p className="text-muted-foreground font-mono">
                      Milton, Ontario<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide">Email Us</h3>
                    <p className="text-muted-foreground font-mono">
                      hello@escarpment.coffee
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-sans font-bold text-lg uppercase tracking-wide">Call Us</h3>
                    <p className="text-muted-foreground font-mono">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Name</label>
                    <Input id="name" placeholder="YOUR NAME" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email</label>
                    <Input id="email" type="email" placeholder="YOUR EMAIL" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider">Subject</label>
                  <Input id="subject" placeholder="HOW CAN WE HELP?" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
                  <Textarea id="message" placeholder="YOUR MESSAGE..." className="bg-background min-h-[150px]" />
                </div>

                <Button className="w-full font-sans uppercase tracking-widest font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
