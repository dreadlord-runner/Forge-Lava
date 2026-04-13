import React from "react";
import { BsGithub, BsTwitterX, BsYoutube, BsDiscord } from "react-icons/bs";
import PixelText from "../assets/PixelText";

const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-16 pb-0 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-80 mt-18">
          <div className="col-span-2 lg:col-span-2">
            <p className="text-innerBorderGray text-[1.3rem] leading-relaxed max-w-sm mb-6">
              Next-generation server management platfrm built for developers who
              want speed, control, and ease of use.
            </p>
            <div className="flex space-x-6 text-footerText">
              <BsGithub size={30} />
              <BsTwitterX size={30} />
              <BsYoutube size={30} />
              <BsDiscord size={30} />
            </div>
            <div className="mt-8">
              <p className="text-sm text-footerText">
                &copy; {new Date().getFullYear()} Laravel LLC. All rights
                reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-innerBorderGray font-semibold mb-5 text-sm tracking-wider uppercase">
              Forge
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Contact sales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h3 className="text-innerBorderGray font-semibold mb-5 text-sm tracking-wider uppercase">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Forge vs Cloud
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Forge vs Vapor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-innerBorderGray font-semibold mb-5 text-sm tracking-wider uppercase">
              Discover Laravel
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Release Notes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footerText hover:text-white transition-colors text-sm"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
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
