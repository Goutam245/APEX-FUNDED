import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Star } from "lucide-react";
import GoldParticles from "./GoldParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Trading chart background */}
      <div className="absolute inset-0 bg-background">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(48,96%,53%,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Particles */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8">
            <Star size={14} className="text-primary fill-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide">The #1 Funded Trading Platform</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          TRADE BEYOND
          <br />
          <span className="text-gradient-gold glow-gold-text">LIMITS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Get funded up to <span className="text-foreground font-semibold">$200,000</span>. Trade with our capital, keep up to{" "}
          <span className="text-primary font-semibold">90% of the profits</span>. No risk to your own money.
        </motion.p>

        {/* CTA Buttons - HIGHLY VISIBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/pricing"
            className="btn-gold text-base sm:text-lg px-10 py-4 sm:py-5 flex items-center gap-3 group min-w-[220px] justify-center"
          >
            Get Funded Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#how-it-works"
            className="btn-outline-gold text-base sm:text-lg px-10 py-4 sm:py-5 flex items-center gap-3 min-w-[220px] justify-center"
          >
            How It Works
          </a>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-primary fill-primary" />
            ))}
          </div>
          <span>Trusted by 250,000+ traders worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
