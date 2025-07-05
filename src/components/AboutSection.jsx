import React, { useEffect, useState } from "react";
import { features } from "../constants/index.jsx";
const AboutSection = () => {
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
      className="relative py-2  bg-blue-100 border-b dark:bg-zinc-600 border-black min-h-[250px]"
    >
      <div className="text-center">
        <span className="bg-gradient-to-r from-blue-400 to-black text-white rounded-full text-sm font-medium px-2 py-1 uppercase border border-blue-400">
          à propos
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl dark:text-white mt-4 lg:mt-8 tracking-wide">
          Qui sommes
          <span className="dark:bg-gradient-to-r dark:from-blue-600 dark:to-white bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
            {""}
            -nous ?
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full">
            <div className="flex">
              <div className="flex mx-6 h-10 p-2 w-10 bg-black dark:bg-white dark:text-blue-600 text-white justify-center items-center rounded-full border border-white">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl dark:text-white text-black">
                  {feature.text}
                </h5>
                <p className="text-md p-2 mb-8 text-blue-400">
                  {feature.description}
                </p>
                <p className="text-md p-2 dark:text-white text-shadow-black">
                  {feature.description2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
