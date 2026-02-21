import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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

const stats = [
  { val: 15, prefix: "$", suffix: "M+", label: "Total Payouts" },
  { val: 250, suffix: "K+", label: "Active Traders" },
  { val: 42, suffix: "K+", label: "Funded Traders" },
  { val: 180, suffix: "+", label: "Countries" },
  { val: 11, suffix: "K+", label: "Payouts Delivered" },
  { val: 99, suffix: "%", label: "Satisfaction Rate" },
];

const OurNumbers = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ PROVEN TRACK RECORD</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          OUR NUMBERS <span className="text-gradient-gold">SPEAK</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-8 text-center">
            <div className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-2">
              <Counter target={s.val} prefix={s.prefix || ""} suffix={s.suffix} />
            </div>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurNumbers;
