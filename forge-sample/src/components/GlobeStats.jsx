import React from "react";

const GlobeStats = () => {
  return (
    <section className="w-full bg-[#151715] text-white overflow-hidden border-t border-white/10 mb-20 mt-10">
      <div className="max-w-7xl mx-auto border-l border-white/10">
        {/*-------------Header------------ */}
        <div className="flex border-b border-white/10 items-stretch">
          <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center border-r border-white/10 py-4 md:py-5">
            <span className="text-[#4e564c] font-mono text-xs md:text-sm">7</span>
          </div>
          <div className="flex-1 px-6 md:px-10 lg:px-12 py-4 md:py-5 flex items-center space-x-3 font-mono text-xs">
            <span className="text-headerGreen uppercase tracking-wider">
              Robust, safe, and blazing fast
            </span>
            <span className="text-[#4e564c] hidden sm:inline truncate">
              Mohamed Said • [CORE-0110] Make Laravel VPS instant
            </span>
          </div>
        </div>

        {/* Hero & Content Section */}
        <div className="flex py-16 md:py-32">
          <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
          <div className="flex-1 px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column (Text & Stats) */}
            <div className="z-10">
              <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-6 text-[#e5e5e5]">
                Powering the web, at scale
              </h2>
              <p className="text-lg md:text-[1.3rem] text-[#9aa299] leading-relaxed max-w-xl mb-16">
                From solo projects to enterprise infrastructure, Forge keeps
                applications running smoothly worldwide.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                <div className="flex flex-col">
                  <span className="text-[#e5e5e5] text-[2rem] font-medium leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                    970K
                  </span>
                  <span className="text-[#9aa299] text-sm ml-5">Servers</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[#e5e5e5] text-[2rem] font-medium leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                    3M
                  </span>
                  <span className="text-[#9aa299] text-sm ml-5">Sites</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#e5e5e5] text-[2rem] font-medium leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                    56.9M
                  </span>
                  <span className="text-[#9aa299] text-sm ml-5">
                    Deployments
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#e5e5e5] text-[2rem] font-medium leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                    99.9%
                  </span>
                  <span className="text-[#9aa299] text-sm ml-5">Uptime</span>
                </div>
              </div>
            </div>

            {/*----------Globe Image---------- */}
            <div className="relative flex justify-center lg:justify-end z-0">
              <div className="globe-fade w-full max-w-[500px] lg:scale-125 lg:translate-x-32 xl:translate-x-48">
                <img
                  src="../src/assets/images/globe.svg"
                  alt="Global Infrastructure"
                  className="w-full h-auto object-contain opacity-60"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeStats;
