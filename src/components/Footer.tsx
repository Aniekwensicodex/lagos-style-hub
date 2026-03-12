import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-[0.15em] text-gold-gradient mb-4">
              MAISON LAGOS
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Where African heritage meets contemporary luxury. Handcrafted pieces that tell your story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Collection", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>12 Admiralty Way, Lekki Phase 1, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+234 802 827 7607</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} className="text-primary" />
                <span>@maisonlagos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            © 2026 Maison Lagos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
