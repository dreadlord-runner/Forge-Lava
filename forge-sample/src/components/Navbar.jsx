import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full pb-15">
      {/* ----------------Announcement Banner------------- */}
      <div className="bg-dark text-white flex text-center justify-center text-[15px] hover:bg-zinc-800 cursor-pointer h-[2.2rem] py-2 tracking-tight">
        <span className="group inline-flex items-center hover:text-gray-300 transition-colors">
          Stop managing your database. Let Forge handle backups, patching, and
          failover for you. Learn more
          <span className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      {/*------------ Main Navbar --------------*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center h-16">
          <div className="flex flex-1 items-center justify-start -ml-9">
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
          <div className="flex flex-1 items-center justify-end space-x-3 -mr-10">
            <button className="px-[16px] py-[5.5px] text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer shadow-forge">
              Log in
            </button>
            <button className="px-[17px] py-[5.5px] border border-dark bg-dark text-white text-sm font-medium  rounded-md hover:bg-zinc-800 transition-colors cursor-pointer shadow-forge">
              Deploy server
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
