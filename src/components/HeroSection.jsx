import React, { useEffect, useState } from "react";
import vid1 from "../assets/vid1.mp4";
import vid3 from "../assets/vid3.mp4";
const HeroSection = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentTheme") === "light" ? "" : "dark"
  );

  // Read theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme");

    if (savedTheme) {
      setTheme(savedTheme);
      console.log(`Theme fetched in hero section ${savedTheme}`);
    } else {
      console.log(`No theme saved ${savedTheme}`);
    }
  }, []);
  useEffect(() => {
    const handleThemeChange = (e) => {
      setTheme(e.detail);
      console.log(`Theme changed to: ${e.detail}`);
    };

    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    if (href === "#hero") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to specific section
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div
      data-theme={`${theme === "dark" ? "dark" : ""}`}
      className="bg-blue-100 dark:bg-zinc-600"
    >
      <div className="flex py-6 lg:py-20 bg-blue-100 dark:bg-zinc-600  flex-col items-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl dark:text-white text-center tracking-wide">
          Bienvenue chez
          <span className="bg-gradient-to-r from-blue-400 to-black dark:bg-gradient-to-r dark:from-blue-600 dark:to-white text-transparent bg-clip-text">
            {" "}
            ELIPT
          </span>
        </h1>

        {/* Option 1: Break into smaller paragraphs with better spacing */}
        <div className="mt-10 text-center dark:text-white text-black max-w-4xl space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed">
            <strong>Eliel Paul Technologia (ELIPT)</strong> est une entreprise
            technologique de conception, production et commercialisation de
            solutions numériques innovantes.
          </p>
          <p className="text-base dark:text-white sm:text-lg leading-relaxed">
            Fondée avec la vision de transformer l'avenir à travers la
            technologie, ELIPT développe des produits tech puissants destinés à
            répondre aux besoins des organisations modernes, en Afrique et dans
            le monde.
          </p>
        </div>

        <div className="mt-8 text-center dark:text-white text-black max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed">
            Découvrez nos produits, nos solutions et notre vision pour un futur
            numérique accessible à tous.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center my-10 gap-4 w-full max-w-md">
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, "#products")}
            className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 rounded-md text-white text-center hover:from-blue-500 hover:to-blue-700 transition-all duration-200"
          >
            Nos produits
          </a>
          <a
            href="#contacts"
            onClick={(e) => handleSmoothScroll(e, "#contacts")}
            className="py-3 px-6 rounded-md border border-blue-400 text-blue-400 hover:bg-blue-50 transition-colors duration-200 text-center"
          >
            Contactez-nous
          </a>
        </div>

        <div className="flex flex-col lg:flex-row mt-10 justify-center w-full max-w-6xl gap-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full lg:w-1/2 border border-blue-400 shadow-lg shadow-blue-400/20"
          >
            <source src={vid1} type="video/mp4" />
            Your browser doesn't support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full lg:w-1/2 border border-blue-400 shadow-lg shadow-blue-400/20"
          >
            <source src={vid3} type="video/mp4" />
            Your browser doesn't support the video tag
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
