import React from "react";
import vid1 from "../assets/vid1.mp4";
import vid3 from "../assets/vid3.mp4";
const HeroSection = () => {
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
  // return (
  //   <div className="flex flex-col items-center mt-6 lg:mt-20">
  //     <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
  //       Bienvenue chez
  //       <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
  //         {" "}
  //         ELIPT
  //       </span>
  //     </h1>
  //     <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
  //       Eliel Paul Technologia (ELIPT) est une entreprise technologique de
  //       conception, production et commercialisation de solutions numériques
  //       innovantes. Fondée avec la vision de transformer l’avenir à travers la
  //       technologie, ELIPT développe des produits tech puissants destinés à
  //       répondre aux besoins des organisations modernes, en Afrique et dans le
  //       monde.{" "}
  //     </p>
  //     <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
  //       Découvrez nos produits, nos solutions et notre vision pour un futur
  //       numérique accessible à tous.{" "}
  //     </p>
  //     <div className="flex justify-center my-10">
  //       <a
  //         href="#about"
  //         onClick={(e) => handleSmoothScroll(e, "#about")}
  //         className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 mx-3 rounded-md"
  //       >
  //         Qui sommes-nous
  //       </a>
  //       <a
  //         href="#contacts"
  //         onClick={(e) => handleSmoothScroll(e, "#contacts")}
  //         className="py-3 px-4 mx-3 rounded-md border"
  //       >
  //         {" "}
  //         Contactez-nous
  //       </a>
  //     </div>
  //     <div className="flex mt-10 justify-center ">
  //       <video
  //         autoPlay
  //         loop
  //         muted
  //         className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
  //       >
  //         <source src={vid1} type="video/mp4" />
  //         Your browser doesn't support the video tag
  //       </video>
  //       <video
  //         autoPlay
  //         loop
  //         muted
  //         className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
  //       >
  //         <source src={vid3} type="video/mp4" />
  //         Your browser doesn't support the video tag
  //       </video>
  //     </div>
  //   </div>
  // );
  // return (
  //   <div className="bg-blue-100 ">
  //     <div className="flex py-6 lg:py-20 bg-blue-100 flex-col items-center ">
  //       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
  //         Bienvenue chez
  //         <span className="bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
  //           {" "}
  //           ELIPT
  //         </span>
  //       </h1>
  //       <p className="mt-10 text-lg text-center text-black blue-400 max-w-4xl">
  //         Eliel Paul Technologia (ELIPT) est une entreprise technologique de
  //         conception, production et commercialisation de solutions numériques
  //         innovantes. Fondée avec la vision de transformer l'avenir à travers la
  //         technologie, ELIPT développe des produits tech puissants destinés à
  //         répondre aux besoins des organisations modernes, en Afrique et dans le
  //         monde.{" "}
  //       </p>
  //       <p className="mt-10 text-lg text-center text-black blue-400 max-w-4xl">
  //         Découvrez nos produits, nos solutions et notre vision pour un futur
  //         numérique accessible à tous.{" "}
  //       </p>
  //       <div className="flex justify-center my-10">
  //         <a
  //           href="#about"
  //           onClick={(e) => handleSmoothScroll(e, "#about")}
  //           className="bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-3 mx-3 rounded-md text-white"
  //         >
  //           Qui sommes-nous
  //         </a>
  //         <a
  //           href="#contacts"
  //           onClick={(e) => handleSmoothScroll(e, "#contacts")}
  //           className="py-3 px-4 mx-3 rounded-md border border-blue-400 text-blue-400 hover:bg-blue-50 transition-colors duration-200"
  //         >
  //           {" "}
  //           Contactez-nous
  //         </a>
  //       </div>
  //       <div className="flex mt-10 justify-center ">
  //         <video
  //           autoPlay
  //           loop
  //           muted
  //           className="rounded-lg w-1/2 border border-blue-400 shadow-blue-400 mx-2 my-4"
  //         >
  //           <source src={vid1} type="video/mp4" />
  //           Your browser doesn't support the video tag
  //         </video>
  //         <video
  //           autoPlay
  //           loop
  //           muted
  //           className="rounded-lg w-1/2 border border-blue-400 shadow-blue-400 mx-2 my-4"
  //         >
  //           <source src={vid3} type="video/mp4" />
  //           Your browser doesn't support the video tag
  //         </video>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-blue-100 dark:bg-black dark">
      <div className="flex py-6 lg:py-20 bg-blue-100 flex-col items-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Bienvenue chez
          <span className="bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
            {" "}
            ELIPT
          </span>
        </h1>

        {/* Option 1: Break into smaller paragraphs with better spacing */}
        <div className="mt-10 text-center text-black max-w-4xl space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed">
            <strong>Eliel Paul Technologia (ELIPT)</strong> est une entreprise
            technologique de conception, production et commercialisation de
            solutions numériques innovantes.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Fondée avec la vision de transformer l'avenir à travers la
            technologie, ELIPT développe des produits tech puissants destinés à
            répondre aux besoins des organisations modernes, en Afrique et dans
            le monde.
          </p>
        </div>

        <div className="mt-8 text-center text-black max-w-3xl">
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
            <source src="vid1.mp4" type="video/mp4" />
            Your browser doesn't support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full lg:w-1/2 border border-blue-400 shadow-lg shadow-blue-400/20"
          >
            <source src="vid3.mp4" type="video/mp4" />
            Your browser doesn't support the video tag
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
