import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How do I contact support?", a: "You can reach us via email at support@apexfunded.com or through our live chat available 24/7." },
  { q: "What is the response time?", a: "We typically respond within 2 hours during business hours and within 12 hours outside business hours." },
  { q: "Do you offer phone support?", a: "Currently we offer email and live chat support. Phone support is available for funded traders only." },
  { q: "How do I request a payout?", a: "Log into your dashboard, navigate to the Payouts section, and click 'Request Payout'. Payouts are processed within 24 hours." },
  { q: "Can I change my account size?", a: "You can upgrade to a larger account at any time. Contact support to discuss your options." },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <section className="pt-32 pb-28">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">✦ REACH OUT</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-4">
              GET IN <span className="text-gradient-gold">TOUCH</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have questions? We're here to help. Reach out anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email Us", desc: "support@apexfunded.com", sub: "We reply within 2 hours" },
                { icon: MessageCircle, title: "Live Chat", desc: "Available 24/7", sub: "Instant responses" },
                { icon: HelpCircle, title: "Help Center", desc: "Browse our knowledge base", sub: "100+ articles" },
              ].map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <c.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-0.5">{c.title}</h3>
                    <p className="text-foreground text-sm">{c.desc}</p>
                    <p className="text-muted-foreground text-xs mt-1">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-primary font-display text-3xl font-bold mb-2">Thank You!</div>
                  <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                    <input type="email" placeholder="Your Email" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <input type="text" placeholder="Subject" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                  <textarea placeholder="Your Message" rows={5} required className="w-full bg-secondary border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none transition-colors" />
                  <button type="submit" className="w-full btn-gold py-4 text-sm">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>

          <SectionDivider />

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto pt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-primary tracking-wide">✦ QUICK ANSWERS</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">QUICK <span className="text-gradient-gold">ANSWERS</span></h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-semibold text-sm">{faq.q}</span>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
