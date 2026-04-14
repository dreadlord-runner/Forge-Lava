import React from "react";
import { LockKeyhole, Server, Zap } from "lucide-react";

const WhyForge = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">2</span>
        </div>
        <div className="flex-1 px-8 py-2 md:py-2.5 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wide">
            Why Forge
          </span>
          <span className="text-gray-400 hidden sm:inline truncate">
            Ryan Chandler • [CORE-2004] Integrate Cloudflare for on-forge.com
            domains
          </span>
        </div>
      </div>
      <div className="w-full bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto border-x border-gray-100">
          {/*-------------Hero Content------------ */}
          <div className="flex py-12 md:py-20 lg:py-24">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
            <div className="flex-1">
              <div className="max-w-5xl">
                <h2 className="text-[2rem] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                  An unbeatable standard for control without complexity
                </h2>
                <p className="text-lg md:text-[1.3rem] font-light text-gray-500 max-w-[960px]">
                  Forge is the next-generation server management platform built
                  for developers who want speed, control, and ease of use.
                  Designed by the Laravel team, it supports any modern web app
                  stack.
                </p>
              </div>
            </div>
          </div>

          {/*-------------Features Grid------------ */}
          <div className="bg-white border-y border-gray-100">
            <div className="flex flex-row max-w-7xl mx-auto">
              <div className="border-r border-gray-100 w-[100px]" />
              {/* Feature 1 */}
              <div className="py-12 px-6 flex-1 text-center md:text-left border-r border-gray-100">
                <LockKeyhole
                  className="w-6 h-6 text-[#46c5af] mb-6"
                  strokeWidth={2.5}
                />
                <h3 className="text-xl text-gray-900 mb-3">
                  Simple, fast, secure
                </h3>
                <p className="text-gray-500 font-light">
                  Spin up servers, deploy with zero downtime, and ship without
                  SSL headaches.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="py-12 px-6 flex-1 text-center md:text-left border-r border-gray-100">
                <Server
                  className="w-6 h-6 text-[#46c5af] mb-6"
                  strokeWidth={2.5}
                />
                <h3 className="text-xl text-gray-900 mb-3">
                  Own your infrastructure
                </h3>
                <p className="text-gray-500 font-light ">
                  Choose your cloud, or use Laravel VPS. Forge handles it all,
                  while you keep root access to every server.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="py-12 px-6 flex-1 text-center md:text-left border-r border-gray-100">
                <Zap
                  className="w-6 h-6 text-[#46c5af] mb-6"
                  strokeWidth={2.5}
                />
                <h3 className="text-xl text-gray-900 mb-3">
                  Crafted for productivity
                </h3>
                <p className="text-gray-500 font-light ">
                  Clean UI with the fewest clicks and toggles. Move faster from
                  code to production.
                </p>
              </div>
              <div className=" w-[100px]" />
            </div>
          </div>

          <div className="h-15 w-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyForge;
