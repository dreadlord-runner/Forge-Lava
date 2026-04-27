import React from "react";
import globeImage from "../assets/images/globe.svg";

const stats = [
  { value: "970K", label: "Servers" },
  { value: "3M", label: "Sites" },
  { value: "56.9M", label: "Deployment" },
  { value: "99.9%", label: "Uptime" },
];

const GlobeStats = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch border-t border-white/10 bg-[#151715]">
        <div className="w-10  sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-[#4e564c] font-mono text-xs md:text-sm">7</span>
        </div>
        <div className="flex-1 lg:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider whitespace-nowrap">
            Robust, safe, and blazing fast
          </span>
          <span className="text-[#4e564c] hidden sm:inline truncate">
            Mohamed Said • [CORE-0110] Make Laravel VPS instant
          </span>
        </div>
      </div>
      <div className="w-full bg-[#151715] text-white overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto border-l border-white/10">
          <div className="flex py-12 md:py-32">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0" />
            <div className="flex-1 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="z-10">
                <h2 className="text-2xl sm:text-[2rem] font-medium leading-tight mb-4 text-[#e5e5e5]">
                  Powering the web, at scale
                </h2>
                <p className="text-base sm:text-lg md:text-[1.3rem] text-[#9aa299] max-w-xl mb-16">
                  From solo projects to enterprise infrastructure, Forge keeps
                  applications running smoothly worldwide.
                </p>

                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-8 sm:gap-y-12">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-[#e5e5e5] text-2xl sm:text-[2rem] font-medium leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-4 sm:pl-5">
                        {value}
                      </span>
                      <span className="text-[#9aa299] text-sm ml-4 sm:ml-5">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/*----------Globe Image---------- */}
              <div className="hidden lg:block relative z-0">
                <div className="globe-fade w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] lg:scale-125 lg:translate-x-32 xl:translate-x-48">
                  <img
                    src={globeImage}
                    alt="Global Infrastructure"
                    className="w-full h-auto object-contain opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeStats;
