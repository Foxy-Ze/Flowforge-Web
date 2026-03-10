/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BrightSmileDental from "./pages/projects/BrightSmileDental";
import { motion, useScroll, useSpring } from "motion/react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 fiery-gradient z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/bright-smile-dental" element={<BrightSmileDental />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
