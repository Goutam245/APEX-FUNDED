import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer>
      {/* Newsletter bar */}
      <div className="bg-gradient-gold py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">STAY UPDATED WITH MARKET INSIGHTS</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">Get weekly tips, market analysis, and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            {subscribed ? (
              <p className="text-primary-foreground font-semibold text-sm">✓ Thanks for subscribing!</p>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 md:w-72 h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 outline-none text-sm"
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="h-12 px-6 rounded-lg bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors"
                >
                  Subscribe
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Apex Funded" className="h-[65px] w-auto" style={{ mixBlendMode: 'lighten', filter: 'brightness(1.1)' }} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">The Premier Funded Trading Platform</p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground text-xs mb-4">Trusted by 250,000+ traders worldwide</p>
              
              {/* Trust badges */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border">🔒 SSL Secured</span>
                <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border">🛡️ 256-bit</span>
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                {["Instagram", "Twitter", "Discord", "YouTube", "TikTok"].map((s) => (
                  <div key={s} className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer text-xs font-bold">
                    {s[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Pricing", path: "/pricing" },
                  { name: "Affiliate", path: "/affiliate" },
                  { name: "Contact", path: "/contact" },
                ].map((l) => (
                  <li key={l.name}>
                    <Link to={l.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {["FAQ", "How It Works", "Payout Policy", "Challenge Rules", "Partner Program"].map((item) => (
                  <li key={item} className="hover:text-primary transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {["Terms of Service", "Privacy Policy", "Refund Policy", "Risk Disclosure", "Cookie Policy"].map((item) => (
                  <li key={item} className="hover:text-primary transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary/20 bg-background py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2025 Apex Funded. All rights reserved.</p>
          <p className="text-muted-foreground/60 text-xs text-center md:text-right max-w-lg">
            Risk Warning: Trading involves significant risk. Past performance does not guarantee future results.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "STRIPE", "₿"].map((p) => (
              <div key={p} className="bg-secondary border border-border rounded px-2.5 py-1 text-xs text-muted-foreground font-mono">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
