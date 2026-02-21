import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex M.",
    country: "United States",
    text: "Apex Funded changed my trading career. Got funded in 2 weeks and already received 3 payouts. The process is smooth and transparent.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah K.",
    country: "United Kingdom",
    text: "Best prop firm I've worked with. The instant payouts are real — I received my first withdrawal within 24 hours. Highly recommend!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David R.",
    country: "Germany",
    text: "The $100K challenge was fair and well-structured. No hidden rules, no tricks. Just prove your skills and get funded.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Yuki T.",
    country: "Japan",
    text: "I've tried 5 different prop firms. Apex Funded is hands down the most professional. Fast payouts, great dashboard, amazing support.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Carlos F.",
    country: "Brazil",
    text: "From signup to funded in just 10 days. The 90% profit split is unmatched. Already earned more than my initial investment back.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amira H.",
    country: "UAE",
    text: "The dashboard is incredible — real-time analytics, easy payout requests, and the support team responds within minutes. Love it.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => (
  <section className="py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ TRUSTED BY 250K+ TRADERS</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          TRADERS <span className="text-gradient-gold">TRUST US</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hear from our community of funded traders around the world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass-card-hover p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <img
                src={r.img}
                alt={r.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.country}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
