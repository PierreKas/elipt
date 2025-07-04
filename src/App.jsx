import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ServiceExpertise from "./components/ServiceExpertise";
import ContactAndLocation from "./components/Contact";
import Produits from "./components/Produits";
import TeamMembers from "./components/TeamMembers";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="products">
          <Produits />
        </section>
        <section id="services">
          <ServiceExpertise />
        </section>
        <section id="contacts">
          <ContactAndLocation />
        </section>
        {/* <section>
          <TeamMembers />
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
