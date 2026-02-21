import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Award, Globe, Users, Calendar } from "lucide-react";

const Counter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 125;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const comparison = [
  { feature: "Profit Split", us: "Up to 90%", ftmo: "80%", be: "75%", fn: "80%" },
  { feature: "Time Limit", us: "No Limit", ftmo: "30 Days", be: "30 Days", fn: "Unlimited" },
  { feature: "Free Retries", us: true, ftmo: false, be: false, fn: true },
  { feature: "Scaling Plan", us: true, ftmo: true, be: false, fn: true },
  { feature: "Max Drawdown", us: "10%", ftmo: "10%", be: "8%", fn: "10%" },
];

const achievements = [
  { val: 15, prefix: "$", suffix: "M+", label: "Paid Out" },
  { val: 42, suffix: "K+", label: "Funded Traders" },
  { val: 180, suffix: "K+", label: "Challenges Started" },
  { val: 148, suffix: "K+", label: "Trading Accounts" },
  { val: 250, suffix: "K+", label: "Community Members" },
  { val: 11, suffix: "K+", label: "Payouts Delivered" },
];

const milestones = [
  { year: "2022", event: "Company Founded", desc: "Apex Funded launched with a mission to democratize trading." },
  { year: "2023", event: "100K Traders", desc: "Crossed 100,000 registered traders in 12 months." },
  { year: "2024", event: "$10M+ Paid Out", desc: "Surpassed $10 million in total trader payouts." },
  { year: "2025", event: "250K Community", desc: "Grew to 250,000+ active community members worldwide." },
];

const mediaLogos = ["Bloomberg", "Forbes", "Reuters", "CNBC", "CoinDesk", "FX Street"];

const About = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navbar />
    
    {/* Hero */}
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide">✦ OUR STORY</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-bold mb-4">
            ABOUT <span className="text-gradient-gold">APEX FUNDED</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about the most trusted funded trading platform
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-5xl mx-auto mb-20 rounded-2xl overflow-hidden border border-border glow-gold-sm">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop" alt="Apex Funded office" className="w-full h-48 md:h-72 object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>

    <SectionDivider />

    {/* Mission */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            OUR <span className="text-gradient-gold">MISSION</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We believe every skilled trader deserves access to capital. Our mission is to remove financial barriers and empower traders worldwide to achieve their full potential — without risking their own money.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, val: "2022", label: "Established" },
              { icon: Users, val: "40+", label: "Team Members" },
              { icon: Globe, val: "180+", label: "Countries" },
              { icon: Award, val: "100%", label: "Own Technology" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <s.icon size={20} className="text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-gradient-gold mb-1">{s.val}</div>
                <p className="text-muted-foreground text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <SectionDivider />

    {/* Timeline */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide">✦ OUR JOURNEY</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">COMPANY <span className="text-gradient-gold">MILESTONES</span></h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-6 flex items-start gap-6">
              <div className="font-display text-2xl font-bold text-gradient-gold flex-shrink-0 w-16">{m.year}</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{m.event}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Comparison */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">HOW WE <span className="text-gradient-gold">COMPARE</span></h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground font-medium">Feature</th>
                <th className="py-4 px-4 text-center text-primary font-bold">Apex Funded</th>
                <th className="py-4 px-4 text-center text-muted-foreground">FTMO</th>
                <th className="py-4 px-4 text-center text-muted-foreground">BE</th>
                <th className="py-4 px-4 text-center text-muted-foreground">Funded Next</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-4 px-4 text-muted-foreground">{row.feature}</td>
                  {[row.us, row.ftmo, row.be, row.fn].map((v, i) => (
                    <td key={i} className={`py-4 px-4 text-center font-medium ${i === 0 ? "text-primary" : ""}`}>
                      {typeof v === "boolean" ? (v ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-destructive mx-auto" />) : v}
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

    {/* Achievements */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 md:p-14 max-w-5xl mx-auto glow-gold-sm">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ BY THE NUMBERS</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">OUR <span className="text-gradient-gold">ACHIEVEMENTS</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                  <Counter target={s.val} prefix={s.prefix || ""} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <SectionDivider />

    {/* As Seen In */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-8">As Seen In</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {mediaLogos.map((logo) => (
            <div key={logo} className="text-muted-foreground/40 font-display text-xl font-bold tracking-wider hover:text-primary transition-colors">{logo}</div>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Team */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide">✦ LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">OUR <span className="text-gradient-gold">TEAM</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "James Chen", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" },
            { name: "Maria Lopez", role: "CTO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face" },
            { name: "Daniel Park", role: "Head of Trading", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" },
            { name: "Sophie Müller", role: "Head of Support", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" },
          ].map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-6 text-center">
              <img src={t.img} alt={t.name} className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-primary/30" loading="lazy" />
              <h3 className="font-display font-bold text-sm">{t.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
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

export default About;
