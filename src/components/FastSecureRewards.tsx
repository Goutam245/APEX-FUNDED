import { motion } from "framer-motion";
import { Clock, ShieldCheck, CreditCard, Globe } from "lucide-react";

const rewards = [
  { icon: Clock, title: "24h Payouts", desc: "Withdraw your profits within 24 hours of request." },
  { icon: ShieldCheck, title: "Secure Platform", desc: "Bank-level encryption protects all your data and funds." },
  { icon: CreditCard, title: "Multiple Methods", desc: "Crypto, bank transfer, and more withdrawal options." },
  { icon: Globe, title: "Global Access", desc: "Trade from anywhere in the world with no restrictions." },
];

const FastSecureRewards = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0 bg-secondary/20" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ FAST WITHDRAWALS</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          FAST & SECURE <span className="text-gradient-gold">REWARDS</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {rewards.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover p-8 text-center group"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            >
              <r.icon size={32} className="text-primary mx-auto mb-5" />
            </motion.div>
            <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FastSecureRewards;
