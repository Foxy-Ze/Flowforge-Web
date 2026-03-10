import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Button from "./Button";
import ForgeCore from "./ForgeCore";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
      alert("Inquiry sent! We'll forge a connection soon.");
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-pure-black">
      {/* 3D Forge Core Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-50">
        <ForgeCore />
      </div>

      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase text-sm"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-8"
            >
              Let's <span className="fiery-text">Forge</span> Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/60 text-lg mb-12 max-w-lg"
            >
              Ready to bring your vision to life? Fill out the form below and let's start crafting your digital future in the heart of the forge.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-light/40 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-xl font-display font-bold">hello@flowforge.ai</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-light/40 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-display font-bold">+91 1234567890</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-light/40 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-xl font-display font-bold">Mumbai, India</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl relative backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-light/50 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-light"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-light/50 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-light"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-light/50 uppercase tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-light"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-light/50 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-light resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <Button className="w-full py-5 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>Forge Connection <Send size={20} /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
