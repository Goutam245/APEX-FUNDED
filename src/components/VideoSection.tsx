import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide">✦ PLATFORM DEMO</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            WATCH HOW IT <span className="text-gradient-gold">WORKS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Watch our platform in action and discover why 250,000+ traders trust Apex Funded.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card overflow-hidden rounded-2xl relative aspect-video group cursor-pointer" onClick={() => setPlaying(true)}>
            {!playing ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop"
                  alt="Trading platform preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ boxShadow: ["0 0 30px hsla(48,96%,53%,0.3)", "0 0 60px hsla(48,96%,53%,0.5)", "0 0 30px hsla(48,96%,53%,0.3)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center"
                  >
                    <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="text-foreground font-display text-xl font-bold">Platform Overview</div>
                  <div className="text-muted-foreground text-sm">3 min watch</div>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/K4TOrB7at0Y"
                title="How Funded Trading Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
