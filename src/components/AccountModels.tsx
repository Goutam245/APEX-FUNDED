import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Zap, Target, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    id: "1-step",
    label: "1-STEP",
    icon: Zap,
    heading: "1-Step Challenge",
    description: "One phase. Pass once. Get funded instantly.",
    plans: [
      { size: "$10K", price: 89 },
      { size: "$25K", price: 219 },
      { size: "$50K", price: 329, popular: false },
      { size: "$100K", price: 549 },
      { size: "$200K", price: 949 },
    ],
    features: [
      { label: "Profit Target", value: "10%" },
      { label: "Max Drawdown", value: "10%" },
      { label: "Daily Drawdown", value: "5%" },
      { label: "Profit Split", value: "Up to 90%" },
      { label: "Min Trading Days", value: "5" },
      { label: "Time Limit", value: "Unlimited" },
    ],
  },
  {
    id: "2-step",
    label: "2-STEP",
    icon: Target,
    heading: "2-Step Challenge",
    description: "Phase 1 + Phase 2. Prove consistency. Get funded.",
    plans: [
      { size: "$10K", price: 89 },
      { size: "$25K", price: 199 },
      { size: "$50K", price: 299, popular: false },
      { size: "$100K", price: 499 },
      { size: "$200K", price: 899 },
    ],
    features: [
      { label: "Phase 1 Target", value: "8%" },
      { label: "Phase 2 Target", value: "5%" },
      { label: "Max Drawdown", value: "10%" },
      { label: "Daily Drawdown", value: "5%" },
      { label: "Profit Split", value: "Up to 85%" },
      { label: "Time Limit", value: "Unlimited" },
    ],
  },
  {
    id: "instant",
    label: "INSTANT",
    icon: Rocket,
    heading: "Instant Funding",
    description: "No challenge. No waiting. Start trading immediately.",
    plans: [
      { size: "$10K", price: 199 },
      { size: "$25K", price: 449 },
      { size: "$50K", price: 699, popular: true },
      { size: "$100K", price: 1199 },
      { size: "$200K", price: 1999 },
    ],
    features: [
      { label: "No Challenge Required", value: "✓" },
      { label: "Start Trading Today", value: "✓" },
      { label: "Profit Split", value: "Up to 80%" },
      { label: "Max Drawdown", value: "8%" },
      { label: "Daily Drawdown", value: "4%" },
    ],
  },
];

const AccountModels = () => (
  <section className="py-28 relative" id="account-models">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ FLEXIBLE ACCOUNT TYPES</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          CHOOSE YOUR <span className="text-gradient-gold">TRADING MODEL</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Three ways to get funded. Pick the model that suits your trading style.
        </p>
      </motion.div>

      <Tabs defaultValue="2-step" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 bg-secondary/50 border border-border h-14 mb-12 rounded-xl p-1">
          {models.map((m) => (
            <TabsTrigger
              key={m.id}
              value={m.id}
              className="font-display font-bold text-sm tracking-wider data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300"
            >
              {m.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {models.map((model) => (
          <TabsContent key={model.id} value={model.id}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <model.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{model.heading}</h3>
                <p className="text-muted-foreground max-w-lg mx-auto">{model.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {model.plans.map((plan, i) => (
                  <motion.div
                    key={plan.size}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative rounded-xl border bg-[#111111] p-6 flex flex-col overflow-hidden transition-all duration-500 ${
                      plan.popular
                        ? "border-primary/50 glow-gold"
                        : "border-primary/30 hover:border-primary/60"
                    }`}
                    style={{
                      boxShadow: plan.popular
                        ? undefined
                        : undefined,
                    }}
                  >
                    {/* Popular badge */}
                    {plan.popular && (
                      <>
                        <div className="absolute inset-0 shimmer-gold" />
                        <div className="relative flex items-center gap-1 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                          <Star size={12} fill="currentColor" />
                          Most Popular
                        </div>
                      </>
                    )}

                    <div className={plan.popular ? "relative" : ""}>
                      {/* Account size */}
                      <div className="font-display text-3xl font-bold text-gradient-gold mb-1">{plan.size}</div>
                      <div className="text-muted-foreground text-xs mb-4">Account Size</div>

                      {/* Price */}
                      <div className="font-display text-2xl font-bold mb-5">${plan.price}</div>

                      {/* Features */}
                      <div className="space-y-2.5 mb-6 flex-1">
                        {model.features.map((f) => (
                          <div key={f.label} className="flex items-start gap-2 text-sm">
                            <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {f.label}: <span className="text-foreground font-medium">{f.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        to="/register"
                        className="block text-center text-sm font-bold py-3.5 rounded-lg btn-gold"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default AccountModels;
