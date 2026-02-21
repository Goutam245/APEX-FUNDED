import { motion } from "framer-motion";

const DashboardPreview = () => (
  <section className="py-28 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ YOUR TRADING HUB</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          CUSTOM <span className="text-gradient-gold">DASHBOARD</span> VIEW
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Track your progress, analyze performance, and manage payouts — all in one powerful dashboard.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="absolute inset-0 glow-gold rounded-2xl opacity-30" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="glass-card p-1 rounded-2xl relative overflow-hidden"
        >
          <div className="bg-card rounded-xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="text-xs text-muted-foreground font-mono ml-auto">dashboard.apexfunded.com</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-4">
              {[
                { label: "Balance", value: "$52,340" },
                { label: "Profit", value: "+$4,680" },
                { label: "Drawdown", value: "2.1%" },
                { label: "Win Rate", value: "73%" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
                  <div className="font-display text-lg font-bold text-gradient-gold">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Real dashboard image */}
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=500&fit=crop"
              alt="Trading dashboard with charts and analytics"
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;
