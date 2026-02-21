import { motion } from "framer-motion";
import { Shield, Zap, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Up to 90% Profit Split",
    desc: "Keep the majority of your profits. Our industry-leading split means more money in your pocket.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    desc: "Get paid within 24 hours. No waiting periods, no hassle. Your profits, delivered fast.",
  },
  {
    icon: Shield,
    title: "No Risk Capital",
    desc: "Trade with our money, not yours. Zero personal financial risk with full upside potential.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to help you succeed on your trading journey.",
  },
];

const WhyTradersLoveUs = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ WHY CHOOSE US</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          WHY TRADERS <span className="text-gradient-gold">LOVE US</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Join thousands of profitable traders who chose Apex Funded as their path to financial freedom.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card-hover p-8 text-center group"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="w-14 h-14 mx-auto mb-5 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              <f.icon size={26} className="text-primary" />
            </motion.div>
            <h3 className="font-display text-lg font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTradersLoveUs;
