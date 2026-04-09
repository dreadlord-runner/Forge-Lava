import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 py-6">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">3</span>
          <span className="text-[#5cccb8]">Battle-Tested by the Best</span>
          <span className="text-gray-400">
            Oliver Nybroe • [CORE-1667] Set PHPStan to max level
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-gray-100 bg-white ">
          {/* -----------Logos Row---------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 border-b border-gray-100">
            {/*---------active tab---------- */}
            <div className="py-8 flex items-center justify-center cursor-pointer border-b-2 border-[#10B981] relative -mb-[1px] bg-gray-50/50 hover:bg-gray-50">
              <img
                src="../src/assets/images/transistor_active-D_BETxq_.svg"
                alt="Transistor"
              />
            </div>

            {/*--------inactive tab-------- */}
            <div className="py-8 flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-gray-50">
              <img
                src="../src/assets/images/astalty_active-BKjeao8a.svg"
                alt="Astalty"
              />
            </div>
            <div className="py-8 flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-gray-50">
              <img
                src="../src/assets/images/mumsnet_active-BZyMx3wx.svg"
                alt="mumsnet"
              />
            </div>
            <div className="py-8 flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-gray-50">
              <img
                src="../src/assets/images/likker_active-LGmXIpRd.svg"
                alt="Likker"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
