import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrightSmileDental = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Bright Smile <span className="text-primary">Dental Clinic</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              A modern dental clinic website designed to build patient trust and increase appointment bookings through clean design and clear structure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://brightsmile-magic.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest"
              >
                LET IT FLOW <ExternalLink size={20} />
              </a>
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/5 transition-all uppercase tracking-widest"
              >
                <ArrowLeft size={20} /> Recede
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Hero Image */}
        <div className="relative max-w-[1200px] mx-auto group">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src="/hero.png" 
            alt="Bright Smile Dental Hero" 
            className="relative w-full h-auto rounded-[20px] shadow-2xl shadow-black border border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Project Sections Showcase */}
      <section className="container mx-auto px-6 py-20 space-y-32">
        {/* HERO Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">01. Hero Section</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/hero.png" 
              alt="Hero Section" 
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* SERVICES Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">02. Services Section</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/services.png" 
              alt="Services Section" 
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* ABOUT Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">03. About Section</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/about.png" 
              alt="About Section" 
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* THUMBNAIL Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">04. Project Thumbnail</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/thumbnail.png" 
              alt="Project Thumbnail" 
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrightSmileDental;
