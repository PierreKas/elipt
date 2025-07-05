import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import {} from "lucide-react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const chooseDarkMode = () => {
    setTheme("dark");
    localStorage.setItem("currentTheme", "dark");
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: "dark" }));
  };
  const chooseLightMode = () => {
    setTheme("light");
    localStorage.setItem("currentTheme", "light");
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: "light" }));
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme");
    if (savedTheme) {
      setTheme(savedTheme);
      console.log(`Theme successfully fetched in nav bar ${savedTheme}`);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
    console.log(`Theme saved in nav bar ${theme}`);
  }, [theme]);
  const toggleDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

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

    // Close mobile drawer after clicking
    setMobileDrawerOpen(false);
  };

  return (
    <div
      data-theme={`${theme === "dark" ? "dark" : ""}`}
      className="dark:bg-zinc-600"
    >
      <nav className="fixed dark:bg-zinc-600 top-0 left-0 right-0 z-50 py-3 backdrop-blur-lg border-b border-black">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex items-center justify-between">
            <div
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex items-center flex-shrink-0 cursor-pointer"
            >
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="dark:text-white text-blue-400 text-xl tracking-tight">
                ELIPT
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="dark:text-white text-blue-400 hover:text-black dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center items-center">
              <div>
                <div className="bg-zinc-100  dark:bg-zinc-600 rounded-xl">
                  <button
                    onClick={() => chooseLightMode()}
                    className="bg-transparent hover:bg-zinc-200 p-3 dark:hover:bg-zinc-100/10 dark:text-white rounded-lg text-black"
                  >
                    <Sun />
                  </button>
                  <button
                    onClick={() => chooseDarkMode()}
                    className="bg-transparent hover:bg-zinc-200 p-3 dark:hover:bg-zinc-100/10 dark:text-white rounded-lg text-black"
                  >
                    <Moon />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleDrawer} className="text-blue-400">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="lg:hidden  justify-center space-x-12 items-center">
                <div>
                  <div className="bg-zinc-100  dark:bg-zinc-600 rounded-xl">
                    <button
                      onClick={() => chooseLightMode()}
                      className="bg-transparent hover:bg-zinc-200 p-3 dark:hover:bg-zinc-100/10 dark:text-white rounded-lg text-black"
                    >
                      <Sun />
                    </button>
                    <button
                      onClick={() => chooseDarkMode()}
                      className="bg-transparent hover:bg-zinc-200 p-3 dark:hover:bg-zinc-100/10 dark:text-white rounded-lg text-black"
                    >
                      <Moon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
