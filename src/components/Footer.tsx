import { motion } from "motion/react";
import { Instagram, Twitter, MessageCircle, ArrowUp, Flame } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-pure-black pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px fiery-gradient opacity-20" />

      {/* 
        CRITICAL FIX: Added `relative z-10` to this main content wrapper 
        so it sits above the glowing text layer. 
      */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <Logo className="h-8 w-auto group-hover:scale-105 transition-transform" />
            </a>
            <p className="text-light/40 text-sm leading-relaxed mb-8">
              We craft AI-powered websites with fluid animations & professional design. Forged to perform, built to flow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/50 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-light font-display font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-light/40 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-light font-display font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Web Design", "Landing Pages", "Full Redesign", "AI Solutions"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-light/40 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-light font-display font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-light/40 text-sm mb-6">Stay updated with the latest in AI design.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
              />
              <button className="fiery-gradient p-2 rounded-lg text-white">
                <Flame size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-light/20 text-xs">
            © 2026 Flowforge. All rights reserved. Designed by Ayush.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-light/20 hover:text-light/40 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-light/20 hover:text-light/40 text-xs transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-light/40 hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* AMBIENT GLOWING LOGO INJECTION              */}
      {/* ═══════════════════════════════════════════ */}
      {/* Changed -z-10 to z-0 so it sits on top of the black background, but behind the content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-0 select-none overflow-hidden pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.15, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] font-display font-black leading-none tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: "2px #FF6B35",
            textShadow: "0px 0px 80px rgba(255, 107, 53, 0.4), 0px 10px 40px rgba(255, 107, 53, 0.2)",
          }}
        >
          FLOWFORGE
        </motion.h1>
      </div>
    </footer>
  );
}