import React from "react";

const WhyForge = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 py-6">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">2</span>
          <span className="text-[#5cccb8] uppercase">Why Forge</span>
          <span className="text-gray-400">
            Ryan Chandler • [CORE-2004] Integrate Cloudflare for on-forge.com
            domains
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 md:py-15">
        <div className="max-w-5xl mb-20 ml-20">
          <h2 className="text-[2rem] font-medium text-gray-900 tracking-tight leading-tight mb-2">
            An unbeatable standard for control without complexity
          </h2>
          <p className="text-[1.3rem] font-light text-gray-500 max-w-5xl">
            Forge is the next-generation server management platform built for
            developers who want speed, control, <br /> and ease of use. Designed
            by the Laravel team, it supports any modern web app stack.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100"></div>
      </div>
    </section>
  );
};

export default WhyForge;
