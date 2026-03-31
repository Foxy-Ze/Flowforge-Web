import React, { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code, Layout, Rocket, Zap } from "lucide-react";
import Button from "./Button";
import { gsap } from "gsap";
const services = [
  {
    title: "Website Design",
    description: "Custom, modern website designs tailored to your brand's unique identity and flow.",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing pages forged to turn visitors into loyal customers.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
  {
    title: "Full Website & Redesign",
    description: "Complete builds or refreshes that breathe new life into your digital presence.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI Automation",
    description: "Smart, automated web solutions that streamline your workflow and boost efficiency.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
];

export default function Services() {
  // ═══════════════════════════════════════════
  // AMBIENT FORGE GLOW PHYSICS
  // ═══════════════════════════════════════════
  const emitterRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    if (getComputedStyle(card).position === 'static') card.style.position = 'relative';

    emitterRefs.current[id] = setInterval(() => {
      const spark = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const colors = ['#FF6B35', '#FFC145', '#FF8C42'];
      const rect = card.getBoundingClientRect();

      const isEdge = Math.random() > 0.5;
      const spawnX = isEdge ? Math.random() * rect.width : (Math.random() > 0.5 ? 0 : rect.width);
      const spawnY = isEdge ? rect.height - (Math.random() * 20) : Math.random() * rect.height;

      spark.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${spawnX}px;
        top: ${spawnY}px;
        pointer-events: none;
        box-shadow: 0 0 ${size * 3}px currentColor;
        z-index: -1;
      `;

      card.appendChild(spark);

      gsap.to(spark, {
        y: (Math.random() - 0.5) * 80 - 40,
        x: (Math.random() - 0.5) * 80,
        opacity: 0,
        scale: 0,
        duration: 1 + Math.random(),
        ease: "sine.out",
        onComplete: () => spark.remove()
      });
    }, 50);
  };

  const handleMouseLeave = (id: string) => {
    clearInterval(emitterRefs.current[id]);
  };
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            What We Forge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Our <span className="fiery-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light/60 max-w-2xl mx-auto text-lg"
          >
            We combine cutting-edge AI technology with expert design principles to forge digital experiences that flow seamlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 group glass-orange-hover"
            onMouseEnter={(e) => handleMouseEnter(e, service.title)}
            onMouseLeave={() => handleMouseLeave(service.title)}
          >
              <div className="w-16 h-16 glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-light/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="flex items-center gap-2 text-primary font-semibold group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
