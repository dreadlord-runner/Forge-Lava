import React from "react";
import { LockKeyhole, Server, Zap } from "lucide-react";

const WhyForge = () => {
  return (
    <section className="w-full bg-white mb-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto border-x border-gray-100">
        {/*-------------Header------------ */}
        <div className="flex border-b border-gray-100 items-stretch">
          <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center border-r border-gray-100 py-4 md:py-5">
            <span className="text-gray-400 font-mono text-xs md:text-sm">2</span>
          </div>
          <div className="flex-1 px-6 md:px-10 lg:px-12 py-4 md:py-5 flex items-center space-x-3 font-mono text-xs">
            <span className="text-headerGreen uppercase tracking-wide">Why Forge</span>
            <span className="text-gray-400 hidden sm:inline truncate">
              Ryan Chandler • [CORE-2004] Integrate Cloudflare for on-forge.com
              domains
            </span>
          </div>
        </div>

        {/*-------------Hero Content------------ */}
        <div className="flex py-12 md:py-20 lg:py-24">
          <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
          <div className="flex-1 px-6 md:px-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                An unbeatable standard for control without complexity
              </h2>
              <p className="text-lg md:text-[1.3rem] font-light text-gray-500 max-w-4xl leading-relaxed">
                Forge is the next-generation server management platform built for
                developers who want speed, control, <br className="hidden md:block" /> and ease of use. Designed
                by the Laravel team, it supports any modern web app stack.
              </p>
            </div>
          </div>
        </div>

        {/*-------------Features Grid------------ */}
        <div className="border-t border-gray-100 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Feature 1 */}
            <div className="py-10 px-6 md:py-12 md:pr-10 lg:pr-14 md:pl-[136px] lg:pl-[168px] flex flex-col">
              <LockKeyhole
                className="w-6 h-6 text-[#46c5af] mb-6"
                strokeWidth={2.5}
              />
              <h3 className="text-xl text-gray-900 mb-3">Simple, fast, secure</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Spin up servers, deploy with zero downtime, and ship without SSL
                headaches.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="py-10 px-6 md:py-12 md:px-10 lg:px-14 flex flex-col">
              <Server className="w-6 h-6 text-[#46c5af] mb-6" strokeWidth={2.5} />
              <h3 className="text-xl text-gray-900 mb-3">
                Own your infrastructure
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Choose your cloud, or use Laravel VPS. Forge handles it all, while
                you keep root access to every server.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="py-10 px-6 md:py-12 md:px-10 lg:px-14 flex flex-col">
              <Zap className="w-6 h-6 text-[#46c5af] mb-6" strokeWidth={2.5} />
              <h3 className="text-xl text-gray-900 mb-3">
                Crafted for productivity
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Clean UI with the fewest clicks and toggles. Move faster from code
                to production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForge;
