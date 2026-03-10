import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef, memo } from "react";
import { ExternalLink, X, Smartphone, Monitor, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Button from "./Button";

const projects = [
  {
    id: 1,
    title: "Brightsmile Dental Clinic",
    category: "LOCAL BUSINESS WEBSITE",
    description: "Modern dental clinic website focused on patient trust and appointment booking. Clean layout with strong call-to-action sections.",
    image: "/assets/projects/Flowforge Project files/Brightsmile Dental Clinic/Thumbnail.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    features: ["Appointment Booking", "Patient Trust", "Clean Layout"],
    liveLink: "https://brightsmile-magic.vercel.app/"
  },
  {
    id: 2,
    title: "Inklust Tattoo Studio",
    category: "PORTFOLIO & BOOKING",
    description: "A dark, immersive website showcasing artist portfolios and a seamless booking experience, reflecting the studio's edgy and bold identity.",
    image: "/assets/projects/Flowforge Project files/Inklust tattoo studio/thumbnail.png",
    tech: ["React", "GSAP", "Sanity CMS"],
    features: ["Dark Theme Aesthetics", "Artist Portfolios", "Interactive Booking"],
    liveLink: "https://inklust-inkwell.vercel.app/"
  },
  {
    id: 3,
    title: "Saffron & Thyme Restaurant",
    category: "RESTAURANT WEBSITE",
    description: "An elegant dining experience extended to the web. Features a dynamic menu, online reservations, and a rich visual presentation of their culinary offerings.",
    image: "/assets/projects/Flowforge Project files/Saffron & Thyme Restaurant/Thumbnail.png",
    tech: ["Next.js", "Framer Motion", "Stripe"],
    features: ["Dynamic Menu Integration", "Online Reservations", "Elegant Typography"],
    liveLink: "https://saffron-thyme-showcase.vercel.app/"
  },
  {
    id: 4,
    title: "The Grooming District",
    category: "E-COMMERCE & BOOKING",
    description: "A premium grooming lounge website combining service booking with an e-commerce store for luxury men's grooming products.",
    image: "/assets/projects/Flowforge Project files/The Grooming District/Thumbnail.png",
    tech: ["React", "Tailwind", "Webflow"],
    features: ["Service Booking", "Product Store", "Loyalty Integration"],
    liveLink: "https://district-grooming-lounge.vercel.app/"
  },
  {
    id: 5,
    title: "Forging",
    category: "AGENCY PLATFORM",
    description: "An internal agency platform designed to streamline performance tracking, client interactions, and automated design workflows.",
    image: null,
    tech: ["React Native", "Node.js", "PostgreSQL"],
    features: ["Performance Dashboard", "Client Portal", "Automated Workflows"],
    liveLink: "#"
  },
];

export type Project = typeof projects[0];

const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void; 
}) => {
  if (project.image) {
    console.log("Loading image path:", project.image);
    console.log("Encoded path:", encodeURI(project.image));
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-secondary/90 backdrop-blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-light hover:text-primary transition-colors"
        >
          <X size={20} />
        </button>

        {/* Preview Area */}
        <div className="w-full md:w-3/5 bg-pure-black p-8 flex flex-col">
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            <div className="overflow-hidden shadow-2xl transition-all duration-500 ease-in-out w-full h-full rounded-xl border border-white/10 bg-black/50 p-4">
              {project.image ? (
                <img
                  src={encodeURI(project.image)}
                  alt={`${project.title} Mockup`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50 bg-black/20 rounded-lg">
                  No preview available
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Area */}
        <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="text-3xl font-display font-bold mt-2 mb-6">
            {project.title}
          </h3>
          <p className="text-light/60 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-light/40 mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-light/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-light/40 mb-4">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-light/70">
                  <div className="w-1.5 h-1.5 fiery-gradient rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {project.liveLink === "#" ? (
            <div className="block w-full opacity-50 cursor-not-allowed pointer-events-none">
              <Button className="w-full">
                Explore Prototype <ExternalLink size={16} />
              </Button>
            </div>
          ) : (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full">
                Explore Prototype <ExternalLink size={16} />
              </Button>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCarousel = memo(({ onSelectProject }: { onSelectProject: (project: Project) => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;
      if (!horizontalSection) return;

      const totalWidth = horizontalSection.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollAmount = totalWidth - viewportWidth;

      // Main horizontal scroll
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${scrollAmount * 1.5}`, // Make it feel a bit slower/weightier
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      mainTl.to(horizontalSection, {
        x: -scrollAmount,
        ease: "none",
      });

      // Individual card animations (3D Perspective & Parallax)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const img = card.querySelector("img");
        const content = card.querySelector(".card-content");

        gsap.fromTo(card, 
          { 
            rotationY: 15,
            scale: 0.85,
            opacity: 0.4,
            filter: "brightness(0.5)",
          },
          {
            rotationY: -15,
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: mainTl,
              start: "left right",
              end: "right left",
              scrub: true,
            }
          }
        );

        // Internal Image Parallax
        if (img) {
          gsap.fromTo(img,
            { x: -40 },
            { 
              x: 40,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTl,
                start: "left right",
                end: "right left",
                scrub: true,
              }
            }
          );
        }

        // Content floating effect
        if (content) {
          gsap.fromTo(content,
            { x: -20 },
            { 
              x: 20,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTl,
                start: "left right",
                end: "right left",
                scrub: true,
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-pure-black/50 overflow-hidden perspective-1000">
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-start pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full mb-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-widest uppercase text-sm"
              >
                Our Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mt-4"
              >
                Design <span className="fiery-text">Explorations</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/60 max-w-md text-right hidden md:block"
            >
              A collection of digital experiences we've forged with passion and precision. Scroll to explore the depth.
            </motion.p>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={horizontalRef} 
            className="flex gap-16 px-6 md:px-[calc((100vw-450px)/2)] lg:px-[calc((100vw-600px)/2)] w-max"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`group cursor-pointer w-[300px] md:w-[450px] lg:w-[600px] flex-shrink-0 ${index === 0 ? "transition-all duration-[400ms] ease-out hover:-translate-y-4" : ""}`}
                onClick={() => onSelectProject(project)}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div 
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-white/10 transition-all duration-500 ${index === 0 ? "shadow-[0px_20px_50px_rgba(0,0,0,0.4)] group-hover:shadow-[0px_30px_70px_rgba(242,125,38,0.15)] group-hover:border-primary/30" : "shadow-2xl"}`}
                  style={index === 0 ? { 
                    transform: "rotateX(2deg) rotateY(-2deg)",
                  } : {}}
                >
                  {project.image ? (
                    <img
                      src={encodeURI(project.image)}
                      alt={project.title}
                      className={index === 0 ? "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" : "w-[120%] h-full max-w-none object-cover transition-transform duration-700 group-hover:scale-105"}
                      style={index === 0 ? {} : { marginLeft: "-10%" }}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (index === 0) {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070";
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-black" />
                  )}
                  <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 fiery-gradient rounded-full flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 glass text-white text-xs font-bold rounded-full uppercase tracking-wider border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-content px-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light/50 text-base line-clamp-2 max-w-lg">
                    {project.description}
                  </p>
                  


                  <div className="flex gap-3 mt-6">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-primary/60 border border-primary/20 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ProjectCarousel onSelectProject={setSelectedProject} />
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
