import React, {useState} from "react";
import { Menu, X} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full pb-15">
      {/* ----------------Announcement Banner------------- */}
      <div className="bg-dark text-white flex text-center justify-center text-[13px] sm:text-[15px] hover:bg-zinc-800 cursor-pointer md:h-[2.2rem] py-2 px-4 tracking-tight">
        <span className="group inline-flex items-center hover:text-gray-300 transition-colors">
          Stop managing your database. Let Forge handle backups, patching, and
          failover for you. 
          Learn more
          
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
          <div className="flex md:hidden items-center space-x-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Toggle Menu">
              {menuOpen ? ( 
                <X size={18}/>
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/*------------Menu Bar: Mobile---------- */}
      {menuOpen && (
      <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
        {["Pricing", "Documentation", "Enterprise"].map((link) => (
          <span key={link}
          className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium cursor-pointer transition-colors">
            {link}
          </span>
        ))}
        <div className="pt-5 border-t border-gray-100">
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
      )}
    </nav>
  );
};

export default Navbar;
