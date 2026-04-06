import React from "react";
import { ArrowRight, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 w-[600px] h-[600px] -translate-x-1/2 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 blur-3xl opacity-40 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="text-sm flex flex-row space-x-2 px-3 py-1 rounded-full drop shadow-xl/20 inset-shadow-sm">
          <Layers className="text-red-500" />
          <span>Introducing Laravel VPS</span>
          <ArrowRight />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
          The web is your frontier
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Forge gives root access to servers without the cognitive overhead.
          One-click instant provisioning, zero-downtime deployments, and
          automated SSL.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
            Deploy server
          </button>

          <button className="px-6 py-3 border rounded-lg text-sm hover:bg-gray-100 transition">
            Read Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
