import React from "react";

const GlobeStats = () => {
  return (
    <section className="bg-[#151715] text-white pb-24">
      {/*----------Header--------- */}
      <div className="max-w-7xl mx-auto p-5 border-t border-white/10">
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-[#4e564c]">7</span>
          <span className="text-headerGreen uppercase tracking-wider">
            Robust, safe, and blazing fast
          </span>
          <span className="text-[#4e564c] hidden sm:inline">
            Mohamed Said • [CORE-0110] Make Laravel VPS instant{" "}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-md tracking-tight leading-tight mb-6 text-darkThemeText">
              Powering the web, at scale
            </h2>
            <p className="text-xl text-darkThemePara leading-relaxed max-w-xl mb-16">
              From solo projects to enterprise infrastructure, Forge keeps
              applications running smoothly worldwide.{" "}
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex flex-col">
                <span className="text-darkThemeText text-[2rem] font-md text-while leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                  970K
                </span>
                <span className="text-darkThemePara text-sm ml-5">Servers</span>
              </div>

              <div className="flex flex-col">
                <span className="text-darkThemeText text-[2rem] font-md text-while leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                  3M
                </span>
                <span className="text-darkThemePara text-sm ml-5">Sites</span>
              </div>
              <div className="flex flex-col">
                <span className="text-darkThemeText text-[2rem] font-md text-while leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                  56.9M
                </span>
                <span className="text-darkThemePara text-sm ml-5">
                  Deployments
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-darkThemeText text-[2rem] font-md text-while leading-none mb-2 tracking-tight border-l-2 border-headerGreen pl-5">
                  99.9%
                </span>
                <span className="text-darkThemePara text-sm ml-5">Uptime</span>
              </div>
            </div>
          </div>
          {/*----------Globe Image---------- */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="globe-fade w-full max-w-[500px] lg:scale-120 lg:translate-x-20">
              <img
                src="../src/assets/images/globe.svg"
                alt="Global Infrastructure"
                className="w-full h-auto object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeStats;
