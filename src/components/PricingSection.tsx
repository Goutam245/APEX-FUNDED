import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  { size: "$10K", price: 89, popular: false },
  { size: "$25K", price: 199, popular: false },
  { size: "$50K", price: 299, popular: true },
  { size: "$100K", price: 499, popular: false },
  { size: "$200K", price: 899, popular: false },
];

const features = [
  "Up to 90% Profit Split",
  "No Time Limit",
  "Free Retries",
  "Instant Payouts",
  "All Instruments",
];

const PricingSection = () => (
  <section className="py-28 relative" id="pricing">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ PRICING PLANS</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          CHOOSE YOUR <span className="text-gradient-gold">ACCOUNT</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Select the account size that fits your trading style. All plans include the same premium features.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.size}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`glass-card-hover p-6 flex flex-col relative overflow-hidden ${
              plan.popular ? "border-primary/50 glow-gold" : ""
            }`}
          >
            {plan.popular && (
              <>
                <div className="absolute inset-0 shimmer-gold" />
                <div className="relative flex items-center gap-1 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              </>
            )}
            <div className={`${plan.popular ? "relative" : ""}`}>
              <div className="font-display text-2xl font-bold mb-1">{plan.size}</div>
              <div className="text-muted-foreground text-sm mb-4">Account Size</div>
              <div className="font-display text-3xl font-bold text-gradient-gold mb-6">
                ${plan.price}
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className={`block text-center text-sm font-bold py-3.5 rounded-lg transition-all ${
                  plan.popular
                    ? "btn-gold"
                    : "border border-border text-foreground hover:border-primary/50"
                }`}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
