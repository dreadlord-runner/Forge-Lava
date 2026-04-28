import React from "react";
import { BsGithub, BsTwitterX, BsYoutube, BsDiscord } from "react-icons/bs";
import PixelText from "../assets/PixelText";

const footerLinks = [
  {
    heading: "Forge",
    links: ["Pricing", "Documentation", "Contact sales", "Status"],
  },
  {
    heading: "Explore",
    links: ["Forge vs Cloud", "Forge vs Vapor", "Terms of Service"],
  },
  {
    heading: "Discover Laravel",
    links: ["Blog", "Careers", "Release Notes", "Privacy Policy", "Community"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-12 sm:pt-16 pb-0 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-y-12 gap-x-8 mb-16 sm:mb-24 mt-4 sm:mt-8">
          <div className="col-span-2 lg:col-span-2">
            <p className="text-innerBorderGray text-base sm:text-[1.1rem] md:text-[1.3rem] leading-relaxed max-w-sm mb-6">
              Next-generation server management platform built for developers
              who want speed, control, and ease of use.
            </p>
            <div className="flex space-x-5 text-footerText ">
              <BsGithub
                size={24}
                className="hover:text-gray-400 cursor-pointer"
              />
              <BsTwitterX
                size={24}
                className="hover:text-gray-400 cursor-pointer"
              />
              <BsYoutube
                size={24}
                className="hover:text-gray-400 cursor-pointer"
              />
              <BsDiscord
                size={24}
                className="hover:text-gray-400 cursor-pointer"
              />
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-footerText">
                &copy; {new Date().getFullYear()} Laravel LLC. All rights
                reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Resources */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-innerBorderGray font-semibold mb-4 sm:mb-5 text-xs sm:text-xs tracking-wider uppercase">
                {heading}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-footerText hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/*--------------Bottom------------ */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <PixelText />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
