import { motion } from "framer-motion";
import { TrendingUp, Bitcoin, BarChart3, Gem, Landmark } from "lucide-react";

const instruments = [
  { icon: TrendingUp, name: "Forex", desc: "Trade 60+ currency pairs with tight spreads and deep liquidity." },
  { icon: Bitcoin, name: "Crypto", desc: "Access top cryptocurrencies including BTC, ETH, and more." },
  { icon: BarChart3, name: "Indices", desc: "Trade major global indices — S&P 500, NASDAQ, DAX, FTSE." },
  { icon: Gem, name: "Commodities", desc: "Gold, silver, oil, and other commodities at your fingertips." },
  { icon: Landmark, name: "Stocks", desc: "Trade shares of the world's leading companies." },
];

const TradingInstruments = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-secondary/20" />
    <div className="container mx-auto px-4 relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold text-primary tracking-wide">✦ TRADE EVERYTHING</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          TRADING <span className="text-gradient-gold">INSTRUMENTS</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Access all major markets from a single funded account.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {instruments.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 text-center group"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              <inst.icon size={24} className="text-primary" />
            </motion.div>
            <h3 className="font-display text-lg font-bold mb-2">{inst.name}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{inst.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TradingInstruments;
