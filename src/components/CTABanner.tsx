import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0 bg-secondary/20" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsla(48,96%,53%,0.06) 0%, transparent 70%)" }}
        />

        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 relative">
          JOIN <span className="text-gradient-gold glow-gold-text">250,000+</span> TRADERS
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 relative">
          Start your funded trading journey today. No risk, all reward.
        </p>
        <Link
          to="/pricing"
          className="btn-gold inline-flex items-center gap-3 text-base sm:text-lg px-10 py-5 group relative"
        >
          Get Funded Now
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
