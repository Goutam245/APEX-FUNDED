import { motion } from "framer-motion";
import { Target, Wallet, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "01",
    title: "Take the Challenge",
    desc: "Choose your account size and prove your trading skills with our straightforward evaluation process.",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Get Funded",
    desc: "Pass the challenge and receive a fully funded trading account with real capital to trade.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Earn Rewards",
    desc: "Trade profitably and withdraw up to 90% of your profits. Instant payouts, no limits.",
  },
];

const HowItWorks = () => (
  <section className="py-28 relative" id="how-it-works">
    <div className="absolute inset-0 bg-secondary/20" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ 3 SIMPLE STEPS</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          THE EASY WAY TO <span className="text-gradient-gold">GET FUNDED</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Three simple steps to start trading with our capital and earning real profits.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="text-center relative"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="w-20 h-20 mx-auto mb-6 bg-primary/10 border-2 border-primary/40 rounded-2xl flex items-center justify-center relative"
            >
              <s.icon size={32} className="text-primary" />
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                {s.step}
              </div>
            </motion.div>
            <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
