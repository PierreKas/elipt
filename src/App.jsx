import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeartureSection from "./components/FeartureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeartureSection />
        </section>
        <section id="workflow">
          <Workflow />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
