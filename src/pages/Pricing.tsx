import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AccountModels from "@/components/AccountModels";

const plans = [
  { size: "$10K", price: 89, popular: false },
  { size: "$25K", price: 199, popular: false },
  { size: "$50K", price: 299, popular: true },
  { size: "$100K", price: 499, popular: false },
  { size: "$200K", price: 899, popular: false },
];

const features = [
  { name: "Profit Split", values: ["80%", "80%", "85%", "85%", "90%"] },
  { name: "Max Drawdown", values: ["10%", "10%", "10%", "10%", "10%"] },
  { name: "Daily Loss Limit", values: ["5%", "5%", "5%", "5%", "5%"] },
  { name: "Leverage", values: ["1:100", "1:100", "1:100", "1:100", "1:100"] },
  { name: "Min Trading Days", values: ["5", "5", "5", "5", "5"] },
  { name: "Free Retries", values: ["✓", "✓", "✓", "✓", "✓"] },
  { name: "Instant Payouts", values: ["✓", "✓", "✓", "✓", "✓"] },
  { name: "All Instruments", values: ["✓", "✓", "✓", "✓", "✓"] },
];

const challengeRules = [
  { title: "Phase 1 — Evaluation", desc: "Demonstrate consistent profitability. Hit the 8% profit target with no more than 5% daily loss and 10% max drawdown." },
  { title: "Phase 2 — Verification", desc: "Confirm your skills with a 5% profit target. Same risk rules apply. No time limit." },
  { title: "Funded Account", desc: "Once verified, receive your funded account. Trade with real capital and keep up to 90% of all profits." },
];

const faqs = [
  { q: "What is the challenge?", a: "Our challenge is a two-phase evaluation process where you demonstrate your trading skills on a simulated account. Once passed, you receive a funded account." },
  { q: "How long do I have to pass?", a: "There is no time limit. Take as long as you need to meet the profit targets while respecting the drawdown rules." },
  { q: "What instruments can I trade?", a: "You can trade forex, indices, commodities, and crypto — all major markets are available." },
  { q: "How do payouts work?", a: "Request a payout anytime after your first profitable trade. Payouts are processed within 24 hours via crypto or bank transfer." },
  { q: "What happens if I fail?", a: "You get free retries! If you fail the challenge, you can restart at no additional cost." },
  { q: "Can I hold trades overnight?", a: "Yes, you can hold trades overnight and over the weekend. There are no restrictions on trading style." },
  { q: "What platforms are supported?", a: "We support MetaTrader 5, cTrader, TradingView, Match-Trader, and DXtrade." },
  { q: "Are EAs/bots allowed?", a: "Yes, Expert Advisors and trading bots are fully allowed on all account types." },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ TRANSPARENT PRICING</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-4">
              OUR <span className="text-gradient-gold">PLANS</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose your challenge account and start your funded trading journey.
            </p>
          </motion.div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.size}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`glass-card-hover p-6 flex flex-col relative overflow-hidden ${plan.popular ? "border-primary/50 glow-gold" : ""}`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute inset-0 shimmer-gold" />
                    <div className="relative flex items-center gap-1 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </div>
                  </>
                )}
                <div className={plan.popular ? "relative" : ""}>
                  <div className="font-display text-2xl font-bold mb-1">{plan.size}</div>
                  <div className="text-muted-foreground text-sm mb-4">Account Size</div>
                  <div className="font-display text-4xl font-bold text-gradient-gold mb-6">${plan.price}</div>
                  <button className={`w-full text-center text-sm font-bold py-3.5 rounded-lg transition-all ${plan.popular ? "btn-gold" : "border border-border text-foreground hover:border-primary/50"}`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <AccountModels />

      <SectionDivider />

      {/* Challenge Rules */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ CHALLENGE RULES</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">HOW THE CHALLENGE <span className="text-gradient-gold">WORKS</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {challengeRules.map((rule, i) => (
              <motion.div key={rule.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-8">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">{i + 1}</div>
                <h3 className="font-display font-bold text-lg mb-2">{rule.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Comparison table */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold">FULL <span className="text-gradient-gold">COMPARISON</span></h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm text-muted-foreground font-medium">Feature</th>
                  {plans.map((p) => (
                    <th key={p.size} className="py-4 px-4 text-center">
                      <div className={`font-display text-lg font-bold ${p.popular ? "text-primary" : ""}`}>{p.size}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">{f.name}</td>
                    {f.values.map((v, i) => (
                      <td key={i} className="py-4 px-4 text-center text-sm font-medium">
                        {v === "✓" ? <Check size={16} className="text-primary mx-auto" /> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ GOT QUESTIONS?</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">FREQUENTLY <span className="text-gradient-gold">ASKED</span></h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="glass-card overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronDown size={18} className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-5 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/pricing" className="btn-gold inline-flex items-center gap-3 text-lg px-10 py-5 group">
            Get Funded Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
