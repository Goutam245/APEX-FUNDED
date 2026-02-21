import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Shield, Zap, Award, ArrowLeft } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex relative">
      {/* Back to Home */}
      <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-card items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=1600&fit=crop"
            alt="Trading charts"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 p-12 max-w-lg">
          <Link to="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-display font-bold text-primary-foreground text-sm">AF</div>
            <span className="font-display text-2xl font-bold text-foreground">APEX <span className="text-gradient-gold">FUNDED</span></span>
          </Link>
          <h2 className="font-display text-4xl font-bold mb-4">Start Trading Today</h2>
          <p className="text-muted-foreground text-lg mb-10">Join 250,000+ traders and get funded up to $200,000.</p>
          <div className="space-y-4">
            {[
              { icon: Shield, text: "Bank-level security" },
              { icon: Zap, text: "Instant payouts" },
              { icon: Award, text: "Up to 90% profit split" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon size={18} className="text-primary" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center font-display font-bold text-primary-foreground text-sm">AF</div>
              <span className="font-display text-xl font-bold text-foreground">APEX <span className="text-gradient-gold">FUNDED</span></span>
            </Link>
          </div>

          <h1 className="font-display text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground mb-8">Fill in your details to get started</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-foreground outline-none transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-foreground outline-none transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full h-12 px-4 pr-12 rounded-lg bg-card border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-foreground outline-none transition-all" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30 text-foreground outline-none transition-all" />
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-border accent-primary" />
              <span className="text-sm text-muted-foreground">I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a></span>
            </label>

            <button type="submit" className="btn-gold w-full h-12 text-base font-bold">Create Account</button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-background px-4 text-sm text-muted-foreground">OR</span></div>
            </div>

            <button type="button" className="w-full h-12 rounded-lg border border-border bg-card hover:bg-secondary/50 text-foreground font-medium flex items-center justify-center gap-3 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
