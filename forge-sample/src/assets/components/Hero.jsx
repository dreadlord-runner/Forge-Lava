import React from "react";
import { CirclePlay } from "lucide-react";
import { ArrowRight, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        {/* ------ BACKGROUND GLOW EFFECTS ------- */}

        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 left-0 -ml-40 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="h-8 w-54 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors text-nowrap">
          <Layers size={18} className="text-red-500" />
          <span className>Introducing Laravel VPS</span>
          <ArrowRight size={18} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-dark">
          The web is your frontier
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Forge gives root access to servers without the cognitive overhead.
          One-click instant provisioning, zero-downtime deployments, and
          automated SSL.
        </p>

        <div className="mt-8 flex justify-center gap-4 mb-30">
          <button className="px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
            Deploy server
          </button>

          <button className="px-6 py-3 border rounded-lg text-sm hover:bg-gray-100 transition">
            Read Docs
          </button>
        </div>
      </div>

      {/*--------------Video Dashboard----------*/}
      <div className="relative mx-auto w-full max-w-[1300px]">
        <div className="rounded-xl ring-1 ring-gray-900/5 shadow-2xl overflow-hidden bg-white ">
          {/* image or video */}
          <div className="w-full aspect-[16/9] bg-gray-50 border-b border-gray-100 flex flex-col">
            <div className="h-10 border-b border-gray-200 bg-white flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-400 font-medium">
              <span className="flex border p-4 rounded-full bg-dark text-white hover:bg-zinc-800">
                <CirclePlay className="mr-2" />
                FORGE IN 4 MIN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ----------Partners---------- */}
      <div className="w-full max-w-7xl mt-10 mx-auto px-6 border-t border-b border-gray-200 p-10">
        <div className="flex flex-1 justify-center items-center gap-10 md:gap-20">
          <p className=" text-sm">
            <span className="text-gray">Trusted by</span>{" "}
            <span>
              {" "}
              1000+ <br /> companies{" "}
            </span>
          </p>
          <span className="text-xl font-bold">OpenAI</span>
          <span className="text-xl font-bold">TailwindCSS</span>
          <span className="text-xl font-bold">webex</span>
          <span className="text-xl font-bold">Fandom</span>
          <span className="text-xl font-bold">intel</span>
          <span className="text-xl font-bold">bitwarden</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
