import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Users, DollarSign, Link as LinkIcon, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const tiers = [
  { range: "1-20 Referrals", bonus: "10% Commission", icon: "🥉" },
  { range: "20-50 Referrals", bonus: "13% Commission", icon: "🥈" },
  { range: "50-200 Referrals", bonus: "15% + Bonus", icon: "🥇" },
  { range: "250-500 Referrals", bonus: "20% + Merch", icon: "🏆" },
];

const steps = [
  { icon: Users, title: "Sign Up", desc: "Create your free affiliate account in seconds." },
  { icon: LinkIcon, title: "Share Your Link", desc: "Share your unique referral link with your audience." },
  { icon: DollarSign, title: "Get Paid", desc: "Earn commission on every successful referral." },
];

const affiliateTestimonials = [
  { name: "Mark T.", country: "USA", text: "I earned $8,400 in my first month as an affiliate. The commission structure is incredible.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Lisa W.", country: "Canada", text: "Best affiliate program in the trading space. Payouts are fast and the tracking is transparent.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { name: "Ravi S.", country: "India", text: "I've been promoting Apex for 6 months and it's now my primary income. Highly recommend.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
];

const topAffiliates = [
  { rank: 1, name: "TraderMike", referrals: 487, earnings: "$29,100" },
  { rank: 2, name: "ForexQueen", referrals: 342, earnings: "$20,400" },
  { rank: 3, name: "CryptoChris", referrals: 298, earnings: "$17,800" },
  { rank: 4, name: "AlphaSignals", referrals: 256, earnings: "$15,300" },
  { rank: 5, name: "TradingAcademy", referrals: 201, earnings: "$12,000" },
];

const Affiliate = () => {
  const [referrals, setReferrals] = useState(50);
  const avgSale = 299;
  const rate = referrals >= 250 ? 0.2 : referrals >= 50 ? 0.15 : referrals >= 20 ? 0.13 : 0.1;
  const earnings = Math.round(referrals * avgSale * rate);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ EARN WITH US</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-4">
              BECOME AN <span className="text-gradient-gold">AFFILIATE</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Start earning today. Share Apex Funded and earn generous commissions on every sale.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/login" className="btn-outline-gold px-8 py-3 text-sm">Login</Link>
              <Link to="/register" className="btn-gold px-8 py-3 text-sm">Sign Up</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Tiers */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold">EARN <span className="text-gradient-gold">BONUSES</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tiers.map((t, i) => (
              <motion.div key={t.range} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-8 text-center">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-display text-lg font-bold text-gradient-gold mb-2">{t.bonus}</div>
                <p className="text-muted-foreground text-sm">{t.range}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
            GROW YOUR <span className="text-gradient-gold">INCOME</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} className="w-16 h-16 mx-auto mb-5 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <s.icon size={28} className="text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Calculator */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 md:p-14 max-w-2xl mx-auto text-center glow-gold-sm">
            <h2 className="font-display text-3xl font-bold mb-2">
              HOW MUCH CAN YOU <span className="text-gradient-gold">MAKE?</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-8">Slide to see your potential earnings</p>
            <input type="range" min={1} max={500} value={referrals} onChange={(e) => setReferrals(Number(e.target.value))} className="w-full accent-primary mb-6" />
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>{referrals} referrals</span>
              <span>{Math.round(rate * 100)}% commission</span>
            </div>
            <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold glow-gold-text">${earnings.toLocaleString()}</div>
            <p className="text-muted-foreground text-sm mt-2">Estimated earnings</p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Top Affiliates */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ LEADERBOARD</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">TOP <span className="text-gradient-gold">AFFILIATES</span></h2>
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-3">
            {topAffiliates.map((a, i) => (
              <motion.div key={a.rank} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${a.rank <= 3 ? "bg-gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{a.rank}</div>
                  <span className="font-semibold text-sm">{a.name}</span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-muted-foreground">{a.referrals} referrals</span>
                  <span className="font-bold text-gradient-gold">{a.earnings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Affiliate testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12">AFFILIATE <span className="text-gradient-gold">SUCCESS STORIES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {affiliateTestimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-primary fill-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover border border-primary/30" loading="lazy" />
                  <div>
                    <div className="font-semibold text-xs">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/register" className="btn-gold inline-flex items-center gap-3 text-lg px-10 py-5 group">
            Join Affiliate Program <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliate;
