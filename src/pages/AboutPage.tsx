import { motion } from "framer-motion";
import aboutImage from "@/assets/about-studio.jpg";

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-body mb-3">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
              The <span className="text-gold-gradient italic font-semibold">Maison</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImage}
                alt="Maison Lagos Atelier"
                className="w-full rounded-sm border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-light text-foreground">
                Born in <span className="text-gold-gradient font-semibold">Lagos</span>, Made for the <span className="text-gold-gradient font-semibold">World</span>
              </h2>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Founded in 2020, Maison Lagos was born from a passion to redefine African luxury fashion. We believe that heritage and modernity aren't opposites — they're the perfect pair.
              </p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Every piece in our collection is handcrafted by skilled artisans using the finest fabrics sourced from across West Africa. From rich ankara to hand-woven aso-oke, we select materials that tell a story.
              </p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Our atelier in Lekki Phase 1 is where the magic happens — a space where traditional techniques meet contemporary design, creating pieces that make you feel like royalty.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                {[
                  { num: "500+", label: "Happy Clients" },
                  { num: "6+", label: "Years of Craft" },
                  { num: "100%", label: "Handcrafted" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-semibold text-primary">{stat.num}</p>
                    <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
