import { motion } from "motion/react";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/ayush/800/800"
                alt="Ayush - Founder of Flowforge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-display font-bold">Ayush</p>
                <p className="text-primary font-semibold">Founder & Lead Designer</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 fiery-gradient rounded-3xl -z-10 opacity-20 blur-2xl animate-pulse-slow" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase text-sm"
            >
              About Flowforge
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-8"
            >
              Blending Creativity with <span className="fiery-text">Technology</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/60 text-lg mb-8 leading-relaxed"
            >
              We are Flowforge — an AI-powered design studio crafting stunning, animated, and high-performing websites. We blend creativity with technology to forge digital experiences that flow seamlessly.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "AI-Powered Websites",
                "Fluid Animations",
                "Professional Design",
                "End-to-End Solutions"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 fiery-gradient rounded-full" />
                  <span className="text-light/80 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" href="#contact">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
