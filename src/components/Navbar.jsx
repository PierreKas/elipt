import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import {} from "lucide-react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileDrawerOpen(false);

    if (href.startsWith("/")) {
      // Navigate to route
      navigate(href);
    } else if (href.startsWith("#")) {
      // Smooth scroll
      const target = document.querySelector(href);
      if (target) {
        const offset =
          target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      } else if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
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
  const [isDark, setIsDark] = useState(true); // Default to dark mode based on your design

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Update localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Update document class
    document.documentElement.classList.toggle("dark", newTheme);
  };
  // return (
  //   <div>
  //     <nav className="fixed  top-0 left-0 right-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
  //       <div className="container px-4 mx-auto relative text-sm">
  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center flex-shrink-0">
  //             <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
  //             <span className=" text-xl tracking-tight">ELIPT</span>
  //           </div>
  //           <ul className="hidden lg:flex ml-14 space-x-12">
  //             {navItems.map((item, index) => (
  //               <li key={index}>
  //                 <a
  //                   href={item.href}
  //                   onClick={(e) => handleSmoothScroll(e, item.href)}
  //                 >
  //                   {item.label}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>

  //           {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
  //             <a href="#" className="py-2 px-3 border rounded-md">
  //               {" Sign In"}
  //             </a>
  //             <a
  //               href="#"
  //               className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md"
  //             >
  //               {"Create Account "}
  //             </a>
  //           </div> */}
  //           <div className="hidden lg:flex justify-center items-center">
  //             <button
  //               onClick={toggleTheme}
  //               className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
  //               aria-label="Toggle theme"
  //             >
  //               {isDark ? (
  //                 <Sun className="w-5 h-5 text-orange-500" />
  //               ) : (
  //                 <Moon className="w-5 h-5 text-orange-500" />
  //               )}
  //             </button>
  //           </div>
  //           <div className="lg:hidden md:flex flex-col justify-end">
  //             <button onClick={toggleDrawer}>
  //               {mobileDrawerOpen ? <X /> : <Menu />}
  //             </button>
  //           </div>
  //         </div>
  //         {mobileDrawerOpen && (
  //           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
  //             <ul>
  //               {navItems.map((item, index) => (
  //                 <li key={index} className="py-4">
  //                   <a
  //                     href={item.href}
  //                     onClick={(e) => handleSmoothScroll(e, item.href)}
  //                   >
  //                     {item.label}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //             {/* <div className="lg:hidden  justify-center space-x-12 items-center">
  //               <a href="#" className="py-2 px-3 border rounded-md">
  //                 {" Sign In"}
  //               </a>
  //               <a
  //                 href="#"
  //                 className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md"
  //               >
  //                 {"Create Account "}
  //               </a>
  //             </div> */}
  //           </div>
  //         )}
  //       </div>
  //     </nav>
  //   </div>
  // );
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-lg border-b border-black">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex items-center justify-between">
            <div
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex items-center flex-shrink-0 cursor-pointer"
            >
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-blue-400 text-xl tracking-tight">
                ELIPT
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-blue-400 hover:text-black transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                {" Sign In"}
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md"
              >
                {"Create Account "}
              </a>
            </div> */}
            {/* <div className="hidden lg:flex justify-center items-center">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-blue-400 hover:bg-blue-50 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-blue-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}
              </button>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleDrawer} className="text-blue-400">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>*/}
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
              {/* <div className="lg:hidden  justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-3 border rounded-md">
                  {" Sign In"}
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 rounded-md"
                >
                  {"Create Account "}
                </a>
              </div> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
