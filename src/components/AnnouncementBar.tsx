import { motion } from "framer-motion";

const AnnouncementBar = () => (
  <div className="bg-gradient-gold py-2 overflow-hidden relative z-[60]">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-12 whitespace-nowrap"
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-primary-foreground text-xs font-semibold tracking-wide flex items-center gap-12">
          <span>🏆 Over $15M+ Paid Out To Our Traders</span>
          <span>📈 Join 250,000+ Funded Traders Today</span>
          <span>⚡ Instant Payouts Within 24 Hours</span>
          <span>🔒 Bank-Level Security & Encryption</span>
        </span>
      ))}
    </motion.div>
  </div>
);

export default AnnouncementBar;
