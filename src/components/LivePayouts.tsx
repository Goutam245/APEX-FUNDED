import { motion } from "framer-motion";

const payouts = [
  "Alex M. received $4,200 payout ✓",
  "Sarah K. received $8,750 payout ✓",
  "David R. received $3,100 payout ✓",
  "Yuki T. received $12,500 payout ✓",
  "Carlos F. received $5,900 payout ✓",
  "Amira H. received $7,300 payout ✓",
  "James L. received $2,800 payout ✓",
  "Nina P. received $6,400 payout ✓",
];

const LivePayouts = () => (
  <section className="py-6 border-y border-border overflow-hidden bg-secondary/30">
    <div className="container mx-auto px-4 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Live Trader Payouts</span>
      </div>
    </div>
    <div className="relative">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {[...payouts, ...payouts].map((p, i) => (
          <div key={i} className="glass-card px-5 py-2.5 rounded-full text-sm text-foreground flex-shrink-0">
            {p}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default LivePayouts;
