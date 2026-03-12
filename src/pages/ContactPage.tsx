import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-body mb-3">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
              Contact <span className="text-gold-gradient italic font-semibold">Us</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-2xl font-light text-foreground">
                We'd love to hear from <span className="text-gold-gradient font-semibold">you</span>
              </h2>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Whether you want a custom piece, have questions about our collection, or simply want to say hello — we're here for you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, text: "12 Admiralty Way, Lekki Phase 1, Lagos" },
                  { icon: Phone, text: "+234 812 345 6789" },
                  { icon: Mail, text: "hello@maisonlagos.com" },
                  { icon: Clock, text: "Mon – Sat: 10AM – 7PM" },
                  { icon: Instagram, text: "@maisonlagos" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <p className="text-sm text-foreground font-body">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-2 block">
                  Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className="text-xs tracking-wider uppercase text-muted-foreground font-body mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your dream outfit..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
