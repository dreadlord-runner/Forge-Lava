import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "border-b border-gray-100 shadow-sm" : "border-b border-transparent"}`}
    >
      {/* ----------------Announcement Banner------------- */}
      <div className="bg-dark text-white flex text-center justify-center text-[13px] sm:text-[15px] hover:bg-zinc-800 cursor-pointer md:h-[2.2rem] py-2 px-4 tracking-tight">
        <span className="group inline-flex items-center hover:text-gray-300 transition-colors">
          Stop managing your database. Let Forge handle backups, patching, and
          failover for you. Learn more
          <span className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      {/*------------ Main Navbar --------------*/}
      <div className="max-w-[1400px] px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="flex items-center h-16">
          <div className="flex flex-1 items-center justify-start">
            <span className="text-2xl font-black tracking-tighter italic text-[#0B121E] cursor-pointer">
              FORGE
            </span>
          </div>

          {/*----------- Links------------ */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-9 ">
            <span className="text-gray-500 hover:text-gray-900 font-medium cursor-pointer">
              Pricing
            </span>
            <span className="text-gray-500 hover:text-gray-900 font-medium cursor-pointer">
              Docs
            </span>
            <span className="text-gray-500 hover:text-gray-900 font-medium cursor-pointer">
              Enterprise
            </span>
          </div>

          {/* -----------Auth Buttons ---------------*/}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-3">
            <button className="px-[16px] py-[5.5px] text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer shadow-forge">
              Log in
            </button>
            <button className="px-[17px] py-[5.5px] border border-dark bg-dark text-white text-sm font-medium  rounded-md hover:bg-zinc-800 transition-colors cursor-pointer shadow-forge">
              Deploy server
            </button>
          </div>

          {/*--------------Mobile Auth----------- */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span
                className="block transition-all duration-300 ease-in-out"
                style={{
                  transform: menuOpen
                    ? "rotate(90deg) scale(1.1)"
                    : "rotate(0deg) scale(1)",
                  opacity: 1,
                }}
              >
                {menuOpen ? (
                  <X
                    size={18}
                    className="transition-all duration-300"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Menu
                    size={18}
                    className="transition-all duration-300"
                    strokeWidth={2.5}
                  />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*------------Menu Bar: Mobile---------- */}
      <div
        className={`md:hidden absolute left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-b border-gray-100 shadow-lg px-4 py-3 space-y-1 transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        {["Pricing", "Documentation", "Enterprise"].map((link, i) => (
          <span
            key={link}
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium cursor-pointer transition-colors"
            style={{
              transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            {link}
          </span>
        ))}
        <div className="py-5 border-t border-gray-100">
          <div className="flex flex-1 items-center justify-center space-x-3">
            <button className="px-[1.2rem] py-[0.5rem] text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer shadow-forge">
              Sign in
            </button>
            <button className="px-[1.2rem] py-[0.5rem] border border-dark bg-dark text-white text-sm font-medium  rounded-md hover:bg-zinc-800 transition-colors cursor-pointer shadow-forge">
              Deploy server
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
