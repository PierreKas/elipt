import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20  border-t py-10 px-12 md:px-16 lg:px-20 border-e-neutral-700">
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold mb-4">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold mb-4">Comunity</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <p className="text-center mt-10 font-bold">
        © 2025 Eliel Paul Technologia (ELIPT). Tout droits reservés.
      </p>
    </footer>
  );
};

export default Footer;
