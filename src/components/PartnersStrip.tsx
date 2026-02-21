import { motion } from "framer-motion";

const partners = [
  "MetaTrader 5", "cTrader", "TradingView", "Match-Trader", "DXtrade",
  "MetaTrader 5", "cTrader", "TradingView", "Match-Trader", "DXtrade",
];

const PartnersStrip = () => (
  <section className="py-12 border-y border-border overflow-hidden">
    <p className="text-center text-muted-foreground text-xs mb-6 uppercase tracking-[0.3em]">
      Trusted Platforms & Partners
    </p>
    <div className="relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-16 whitespace-nowrap"
      >
        {partners.map((p, i) => (
          <div key={i} className="text-muted-foreground/40 font-display text-xl md:text-2xl font-bold tracking-wider flex-shrink-0 hover:text-primary transition-colors duration-300">
            {p}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PartnersStrip;
