import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Workflow from "./components/ServiceExpertise";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Product from "./components/ServiceExpertise";
import ServiceExpertise from "./components/ServiceExpertise";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <AboutSection />
        </section>
        <section id="workflow">
          <ServiceExpertise />
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
