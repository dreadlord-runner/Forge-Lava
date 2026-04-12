import React from "react";

const BuildForDevelopers = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 py-6">
        {/*---------Header---------- */}
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-gray-400">6</span>
          <span className="text-headerGreen uppercase">
            Built by developers for developers
          </span>
          <span className="text-gray-400">
            Ash Rich • [CORE-2736] Add support for deployment rollbacks
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center mt-12 md:mt-16">
        <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
          10+ years of developer love
        </h2>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Crafted with passion for over a decade, <br /> loved by web artisans
          shaping the modern web.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-16 overflow-hidden">
        <img
          src=""
          alt="Developer Testimonials"
          className="w-full h-auto object-contain min-h-[600px] opacity-90"
        />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-8">
          <button className="bg-dark text-white border border-dark px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildForDevelopers;
