import React from "react";
import { LockKeyhole, Server, Zap } from "lucide-react";

const WhyForge = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 py-6">
        {/*-------------Header------------ */}
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">2</span>
          <span className="text-headerGreen uppercase">Why Forge</span>
          <span className="text-gray-400">
            Ryan Chandler • [CORE-2004] Integrate Cloudflare for on-forge.com
            domains
          </span>
        </div>
      </div>

      <div className="px-6 py-6 md:py-15">
        <div className="max-w-5xl mb-2 ml-20">
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

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-x border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-8 md:py-10 md:pr-12 lg:pr-16 flex flex-col ml-17">
            <LockKeyhole
              className="w-6 h-6 text-[#46c5af] mb-6"
              strokeWidth={2.5}
            />
            <h3 className="text-xl text-gray-900 mb-3">Simple, fast, secure</h3>
            <p className="text-gray-500 font-light">
              Spin up servers, deploy with zero downtime, and ship without SSL
              headaches.
            </p>
          </div>
          <div className="py-8 md:py-10 md:pr-12 lg:pr-16 flex flex-col ml-17">
            <Server className="w-6 h-6 text-[#46c5af] mb-6" strokeWidth={2.5} />
            <h3 className="text-xl text-gray-900 mb-3">
              Own your infrastructure{" "}
            </h3>
            <p className="text-gray-500 font-light">
              Choose your cloud, or use Laravel VPS. Forge handles it all, while
              you keep root access to every server.
            </p>
          </div>
          <div className="py-8 md:py-10 md:pr-12 lg:pr-16 flex flex-col ml-17">
            <Zap className="w-6 h-6 text-[#46c5af] mb-6" strokeWidth={2.5} />
            <h3 className="text-xl text-gray-900 mb-3">
              Crafted for productivity
            </h3>
            <p className="text-gray-500 font-light">
              Clean UI with the fewest clicks and toggles. Move faster from code
              to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForge;
