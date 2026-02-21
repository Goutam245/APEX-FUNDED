import { motion } from "framer-motion";
import { BadgeCheck, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const certificates = [
  {
    name: "Alex M.",
    flag: "🇺🇸",
    amount: "$4,200",
    date: "Jan 15, 2025",
    account: "1-Step $50K",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah K.",
    flag: "🇬🇧",
    amount: "$8,500",
    date: "Jan 22, 2025",
    account: "2-Step $100K",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Yuki T.",
    flag: "🇯🇵",
    amount: "$2,800",
    date: "Feb 3, 2025",
    account: "Instant $25K",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Carlos F.",
    flag: "🇧🇷",
    amount: "$6,100",
    date: "Feb 10, 2025",
    account: "1-Step $100K",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Amira H.",
    flag: "🇦🇪",
    amount: "$3,750",
    date: "Feb 14, 2025",
    account: "2-Step $50K",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David R.",
    flag: "🇩🇪",
    amount: "$1,200",
    date: "Feb 18, 2025",
    account: "Instant $10K",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const PayoutCertificates = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ REAL VERIFIED PAYOUTS</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          PROOF OF <span className="text-gradient-gold">PAYOUTS</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real payouts to real traders. Every withdrawal verified and processed within 24 hours.
        </p>
      </motion.div>

      {/* Certificate cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative rounded-xl border border-primary/30 bg-[#111111] p-6 overflow-hidden group hover:border-primary/60 transition-all duration-500"
            style={{
              boxShadow: "0 0 0px transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 25px hsl(48 96% 53% / 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 0px transparent";
            }}
          >
            {/* Top header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Payout Certificate</span>
              </div>
              <div className="flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-2.5 py-1">
                <BadgeCheck size={12} className="text-emerald-400" />
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Verified</span>
              </div>
            </div>

            {/* Payout amount */}
            <div className="text-center mb-5">
              <p className="font-display text-4xl font-bold text-gradient-gold">{cert.amount}</p>
            </div>

            <div className="h-px bg-border mb-5" />

            {/* Trader info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={cert.photo}
                alt={cert.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <p className="font-display font-bold text-sm">
                  {cert.name} <span className="ml-1">{cert.flag}</span>
                </p>
                <p className="text-muted-foreground text-xs">{cert.account}</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{cert.date}</span>
              <span className="text-primary/40 font-display font-bold text-[10px] tracking-wider">APEX FUNDED</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom stats + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16 space-y-6"
      >
        <div className="font-display text-3xl md:text-5xl font-bold">
          <span className="text-gradient-gold">$15M+</span> Total Paid Out
        </div>
        <Link
          to="/register"
          className="btn-gold inline-flex items-center gap-3 text-base px-8 py-4 group"
        >
          Join Them Today
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PayoutCertificates;
