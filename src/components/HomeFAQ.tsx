import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What is Apex Funded?", a: "Apex Funded is a proprietary trading firm that provides traders with funded accounts up to $200,000. Pass our challenge and trade with our capital." },
  { q: "How much does it cost to start?", a: "Plans start at just $89 for a $10K account. Choose from 5 account sizes to match your trading style and experience level." },
  { q: "What is the profit split?", a: "You keep up to 90% of all profits you generate. Our profit split is among the highest in the industry." },
  { q: "Is there a time limit?", a: "No! Unlike other firms, we offer unlimited time to pass the challenge. Trade at your own pace with no pressure." },
  { q: "What instruments can I trade?", a: "Trade forex pairs, crypto, indices, commodities, and stocks — all from a single account with competitive spreads." },
  { q: "How fast are payouts?", a: "Payouts are processed within 24 hours. We offer crypto, bank transfer, and other withdrawal methods." },
  { q: "Do I get free retries?", a: "Yes! If you don't pass the challenge, you can retry for free. We believe in giving traders every opportunity to succeed." },
  { q: "Is Apex Funded legitimate?", a: "Absolutely. We've paid out over $15M to traders worldwide and have a community of 250,000+ members. Check our verified reviews." },
];

const HomeFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide">✦ GOT QUESTIONS?</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            FREQUENTLY <span className="text-gradient-gold">ASKED</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-sm">{faq.q}</span>
                <ChevronDown size={18} className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
