import React, { useEffect, useState } from "react";
import { products } from "../constants";

function Produits() {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentTheme") === "light" ? "" : "dark"
  );

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
  return (
    <div
      data-theme={`${theme === "dark" ? "dark" : ""}`}
      className="relative mb-4 pb-8 dark:bg-zinc-600 mt-10 dark:mt-0 dark:py-10 border-b border-blue-400 min-h-[250]"
    >
      <div className="text-center">
        <span className="bg-gradient-to-r from-blue-400 to-black text-white rounded-full text-sm font-medium px-2 py-1 uppercase border border-blue-400">
          Nos Produits
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 dark:text-white lg:mt-8 tracking-wide">
          Synoorg – Une marque,
          <span className="dark:bg-gradient-to-r dark:from-blue-600 dark:to-white bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
            {" "}
            plusieurs solutions
          </span>
        </h2>
        <p className="mt-10 text-lg text-center text-blue-400 max-w-4xl mx-auto">
          Synoorg est notre marque SaaS phare, une suite de logiciels
          intelligents destinée aux organisations communautaires, établissements
          scolaires, institutions sociales, médicales et bien plus encore.
        </p>
      </div>

      <div className="flex flex-col mt-10 lg:mt-20 space-y-16">
        {products.map((product, productIndex) => (
          <div key={product.id} className="w-full">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold dark:text-white text-black">
                {product.id}. {product.name}
              </h3>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex mx-6 h-12 p-3 w-12 bg-blue-400 dark:text-white text-black justify-center items-center rounded-full mb-4 border border-blue-400">
                    {feature.icon}
                  </div>
                  <h5 className="text-lg font-medium mb-2 dark:text-white text-black">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-blue-400 px-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
