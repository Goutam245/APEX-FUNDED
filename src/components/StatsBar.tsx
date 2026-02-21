import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Success Rate", value: 100, suffix: "%", prefix: "" },
  { label: "Total Payouts", value: 15, suffix: "M+", prefix: "$" },
  { label: "Active Traders", value: 250, suffix: "K+", prefix: "" },
  { label: "Countries", value: 180, suffix: "+", prefix: "" },
];

const Counter = ({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const StatsBar = () => (
  <section className="relative z-10 -mt-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-10 glow-gold-sm"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-1">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsBar;
