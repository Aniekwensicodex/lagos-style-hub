import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const features = [
  { icon: Sparkles, title: "Handcrafted", desc: "Every piece made with precision" },
  { icon: Truck, title: "Lagos Delivery", desc: "Free delivery within Lagos" },
  { icon: Shield, title: "Quality Promise", desc: "Premium fabrics guaranteed" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Maison Lagos luxury fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-xl"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-body mb-4">
              New Collection 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-6 h-full">
              Wear Your
              <span className="block text-gold-gradient font-semibold italic mb-3">Heritage</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Luxury African fashion for the modern woman and man. Handcrafted in Lagos with love, precision, and heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Shop Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 border border-gold text-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold rounded-sm hover:bg-primary/10 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-4">
                <f.icon size={24} className="text-primary shrink-0" />
                <div>
                  <p className="font-display text-lg font-medium text-foreground">{f.title}</p>
                  <p className="text-xs text-muted-foreground font-body">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-body mb-3">
              Curated For You
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Featured <span className="text-gold-gradient italic font-semibold">Pieces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors font-body tracking-wider uppercase"
            >
              View Full Collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-4">
              Ready to <span className="text-gold-gradient italic font-semibold">Stand Out?</span>
            </h2>
            <p className="text-muted-foreground text-sm font-body mb-8 max-w-lg mx-auto">
              Custom orders welcome. Let us bring your dream outfit to life with the finest fabrics and craftsmanship Lagos has to offer.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
