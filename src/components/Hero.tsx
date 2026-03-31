import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import MoltenElement from './MoltenElement';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const flowTextRef = useRef<HTMLSpanElement>(null);
  const forgeTextRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const threeDRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(threeDRef.current, {
        x: xPos * 60,
        y: yPos * 60,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(glowRef.current, {
        x: xPos * -50,
        y: yPos * -50,
        duration: 1.5,
        ease: "power2.out"
      });

      gsap.to(taglineRef.current, {
        x: xPos * 10,
        y: yPos * 10,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    const ctx = gsap.context(() => {
      window.addEventListener('mousemove', handleMouseMove);

      // ═══════════════════════════════════════════
      // ENTRY ANIMATIONS (Non-scroll)
      // ═══════════════════════════════════════════
      gsap.set(threeDRef.current, { scale: 1.35 });
      const entryTl = gsap.timeline({ delay: 0.5 });

      // Phase 1: "Let it Flow" - flowing in
      entryTl.fromTo(flowTextRef.current,
        { opacity: 0, x: -50, filter: "blur(10px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
      )

      // Phase 2: "Watch it Forge" - slam in
      .fromTo(forgeTextRef.current,
        { opacity: 0, scale: 1.4, y: -30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "+=0.1"
      )

      // Screen shake on forge
      .to(heroRef.current,
        { x: 5, duration: 0.05, repeat: 5, yoyo: true, ease: "power2.inOut" },
        "<"
      )

      // Sparks on forge
      .add(() => createForgesparks(), "<")

      // Fiery glow
      .to(forgeTextRef.current,
        {
          textShadow: "0 0 10px rgba(255,107,53,0.8), 0 0 20px rgba(255,107,53,0.6), 0 0 40px rgba(255,107,53,0.4)",
          duration: 0.4
        },
        "-=0.4"
      )

      // Subtext
      .fromTo(subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "+=0.2"
      )

      // Buttons
      .fromTo(buttonsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
        "-=0.4"
      );

      // Continuous glow pulse
      gsap.to(forgeTextRef.current, {
        textShadow: "0 0 20px rgba(255,107,53,1), 0 0 40px rgba(255,107,53,0.8), 0 0 60px rgba(255,107,53,0.6)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5
      });

      // ═══════════════════════════════════════════
      // SCROLL ANIMATIONS (Refined Parallax)
      // ═══════════════════════════════════════════

      // Ember trail on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const currentScrollY = self.scroll();
          const scrollDelta = currentScrollY - lastScrollY.current;

          // Spawn embers when scrolling down (increased density)
          if (Math.abs(scrollDelta) > 1) {
            const count = Math.min(Math.floor(Math.abs(scrollDelta) / 2), 5);
            for (let i = 0; i < count; i++) {
              if (Math.random() > 0.3) {
                spawnScrollEmber(self.progress);
              }
            }
          }

          lastScrollY.current = currentScrollY;
        }
      });

      // Main scroll timeline (Refined Parallax)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Background glow sinks and expands (Depth)
      scrollTl.to(glowRef.current, {
        y: 200,
        scale: 2.5,
        opacity: 0,
        ease: "none"
      }, 0)

      // 3D element sinks faster (Middle Ground)
      .to(threeDRef.current, {
        scale: 0.75,
        filter: "brightness(0.3) saturate(0.2) grayscale(0.8)",
        y: 300,
        opacity: 0.3,
        ease: "none"
      }, 0)

      // Text rises (Foreground)
      .to(flowTextRef.current, {
        y: -250,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.in"
      }, 0)

      .to(forgeTextRef.current, {
        y: -180,
        opacity: 0,
        filter: "blur(5px)",
        textShadow: "0 0 0px rgba(255,107,53,0)",
        ease: "power2.in"
      }, 0.05)

      .to(subtextRef.current, {
        y: -120,
        opacity: 0,
        ease: "power2.in"
      }, 0.1)

      .to(buttonsRef.current, {
        y: -80,
        opacity: 0,
        ease: "power2.in"
      }, 0.15)

      // Background darkens
      .to(heroRef.current, {
        backgroundColor: "#030303",
        ease: "none"
      }, 0);

    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Forge sparks (initial animation)
  const createForgesparks = () => {
    const colors = ['#FF6B35', '#FFC145', '#FF8C42', '#FFD700'];
    const container = heroRef.current;
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const spark = document.createElement('div');
      const size = Math.random() * 6 + 2;

      spark.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: 50%;
        top: 45%;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px currentColor;
        z-index: 50;
      `;

      container.appendChild(spark);

      gsap.to(spark, {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 300 - 100,
        opacity: 0,
        scale: 0,
        duration: 0.8 + Math.random() * 0.4,
        ease: "power2.out",
        onComplete: () => spark.remove()
      });
    }
  };

  // Scroll embers
  const spawnScrollEmber = (progress: number) => {
    const ember = document.createElement('div');
    const size = Math.random() * 4 + 1; // Slightly smaller for higher density feel
    const colors = ['#FF6B35', '#FFC145', '#FF8C42', '#FFFFFF'];

    ember.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${10 + Math.random() * 80}%; // Wider horizontal spread
      top: ${20 + progress * 60}%;
      pointer-events: none;
      box-shadow: 0 0 ${size * 4}px currentColor;
      z-index: 100;
      opacity: ${0.4 + Math.random() * 0.6};
    `;

    document.body.appendChild(ember);

    gsap.to(ember, {
      y: -(Math.random() * 200 + 100),
      x: (Math.random() - 0.5) * 150,
      opacity: 0,
      scale: 0,
      duration: 1 + Math.random() * 1,
      ease: "sine.out",
      onComplete: () => ember.remove()
    });
  };

  return (
    <section id="hero" ref={heroRef} className="hero">
      {/* Background glow */}
      <div ref={glowRef} className="hero-glow"></div>

      {/* 3D Element container */}
      <div ref={threeDRef} className="three-d-container">
        <MoltenElement />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 ref={taglineRef}>
          <span ref={flowTextRef} className="flow-text">Let it Flow, </span>
          <span ref={forgeTextRef} className="forge-text">Watch it Forge</span>
        </h1>

        <p ref={subtextRef} className="hero-subtext">
          We craft AI-powered websites with fluid animations & professional design.
          Forged to perform, built to flow with your vision.
        </p>

        <div ref={buttonsRef} className="hero-buttons">
          <button className="primary-btn" onClick={() => handleScrollTo('contact')}>Forge Your Vision</button>
          <button className="secondary-btn" onClick={() => handleScrollTo('projects')}>View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
