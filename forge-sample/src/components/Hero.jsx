import React from "react";
import { CirclePlay } from "lucide-react";
import { ArrowRight, Layers } from "lucide-react";
import bannerVideo from "../assets/images/banner.mp4";
import VerticalLogoMarquee from "../assets/LOGOS";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[33px] w-[213px] mx-auto mb-5 bg-gradient-to-b from-green-300 to-gray-300 rounded-full p-[1px] shadow-md shadow-black/20">
        <div className="w-full h-full inline-flex items-center justify-evenly rounded-full bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
          <Layers size={18} className="text-red-500" />
          <span className>Introducing Laravel VPS</span>
          <ArrowRight size={15} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-[4.2rem] font-semibold tracking-tight bg-gradient-to-b from-[#014a3a] to-[#000d0a] bg-clip-text text-transparent">
          The web is your frontier
        </h1>

        <p className="mt-5 text-xl text-gray-600 max-w-4xl mx-auto">
          Forge gives root access to servers without the cognitive overhead.
          One-click instant <br /> provisioning, zero-downtime deployments, and
          automated SSL.
        </p>

        <div className="mt-12 flex justify-center gap-3 mb-30">
          <button className="px-5 py-[9.2px] border border-dark bg-black text-white rounded-md text-sm hover:bg-gray-800 transition cursor-pointer">
            Deploy server
          </button>

          <button className="px-5 py-[9.2px] border border-gray-200 rounded-md text-sm hover:bg-gray-100 transition shadow-forge cursor-pointer">
            Read Docs
          </button>
        </div>
      </div>
      {/*--------------Video Dashboard----------*/}
      <div className="relative mx-auto w-full max-w-[1400px] h-[500px] overflow-hidden px-4 md:px-6">
        <div className="rounded-xl border border-gray-200/80 overflow-hidden bg-white">
          {/* -----------Video---------- */}
          <div className="relative w-full aspect-[16/9] bg-gray-50 border-b border-gray-100">
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-200 bg-white flex items-center px-4 space-x-2 z-20">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={bannerVideo}
              type="video/mp4"
            ></video>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="flex items-center border border-dark px-3 py-2 rounded-full bg-dark text-white hover:bg-zinc-800 cursor-pointer">
                <CirclePlay size={36} className="mr-2" />
                FORGE IN 4 MIN
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
      </div>
      {/* ----------Partners---------- */}
      <div className="w-full mt-24 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto border-x border-dotted border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-dotted divide-gray-200 items-stretch">
            <div className="flex items-center justify-center py-8 px-4">
              <p className="text-[15px] text-gray-500 leading-snug">
                Trusted by{" "}
                <span className="text-gray-900 font-medium">
                  1000+ <br /> companies
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
            <div className="flex items-center justify-center py-8 px-4">
              <VerticalLogoMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
