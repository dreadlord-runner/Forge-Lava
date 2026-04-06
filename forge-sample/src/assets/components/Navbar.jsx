import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full font-sans">
      {/* ----------------announcement banner------------- */}
      <div className="bg-[#111111] text-white py-3 px-4 text-center text-sm md:text-base font-medium border-b border-white/10">
        <a href="#" className="hover:underline">
          Stop managing your database. Let Forge handle backups, patching, and
          failover for you. Learn more →
        </a>
      </div>

      {/*------------ Main Nav --------------*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter italic text-[#0B121E]">
              FORGE
            </span>
          </div>

          {/*----------- Links------------ */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 font-medium"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 font-medium"
            >
              Enterprise
            </a>
          </div>

          {/* -----------Auth Buttons ---------------*/}
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="px-5 py-2 bg-[#111111] text-white font-medium rounded-md hover:bg-black transition-colors">
              Deploy server
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
