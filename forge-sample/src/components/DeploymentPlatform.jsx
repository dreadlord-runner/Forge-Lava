import React from "react";
import awsIcon from "../assets/images/AWS.svg";
import canvaIcon from "../assets/images/Canva.svg";
import digitalOceanIcon from "../assets/images/DigitalOcean.svg";
import laravelVpsIcon from "../assets/images/Laravel VPS.svg";
import reactIcon from "../assets/images/React.svg";
import vultrIcon from "../assets/images/Vultr.svg";
import { CircleCheck, CircleDot } from "lucide-react";

const DeploymentPlatform = () => {
  const providerIcons = {
    "Laravel VPS": laravelVpsIcon,
    DigitalOcean: digitalOceanIcon,
    AWS: awsIcon,
    Vultr: vultrIcon,
    React: reactIcon,
    Canva: canvaIcon,
  };

  const providers = [
    { name: "Laravel VPS", active: true },
    { name: "DigitalOcean", disabled: true },
    { name: "AWS", disabled: true },
    { name: "Vultr", disabled: true },
    { name: "React", disabled: true },
    { name: "Canva", disabled: true },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/*--------Header------- */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center space-x-3 font-mono text-xs mb-8">
            <span className="text-gray-400">1</span>
            <span className="text-[#5cccb8] uppercase tracking-wider">
              The Deplpoyment Platform
            </span>
            <span className="text-gray-400">
              James Brooks • [CORE-2627] Ship the next generation of Forge
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Simplify your deployments, build great apps
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Simplify deployment and server management with tools that scale,
            without the DevOps complexity.
          </p>
        </div>

        {/* ---------2x2 grid----------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-gray-100 mt-12 rounded-tl-xl overflow-hidden">
          {/*--------Card 1------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Launch your app your way
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Spin up a Laravel VPS with instant provisioning or connect to your
              favorite cloud provider in minutes.
            </p>

            {/* -----card 1 containers------- */}
            <div className="relative pt-6 pl-6 rounded-tl-2xl mt-auto overflow-hidden">
              <div className="border rounded-xl p-2 border-gray-200">
                <div className="border rounded-xl p-4 border-gray-200">
                  <div className="grid grid-cols-3 gap-3 ">
                    {providers.map((item, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:bg-gray-100 ${item.active ? "border-[#5AB5A5] shadow-[0_0_7px_rgba(1,138,114,0.6)]" : "border-gray-200"} ${item.disabled ? "opacity-40" : "cursor-pointer"}`}
                      >
                        {/*--------ICONS---------- */}
                        <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center ">
                          <img
                            src={providerIcons[item.name]}
                            alt={`${item.name} icon`}
                            className="w-6 h-6 object-contain"
                          />
                        </div>

                        <p className="text-sm font-medium text-gray-700">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/*-----------card 2---------- */}
          <div className="p-10 md:p-14 border-r border-b border-gray-100 flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              A full server stack, ready in minutes{" "}
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Forge installs Nginx, PHP, MySQL, Postgres, Redis, and all the
              essentials on your cloud of choice.
            </p>
            {/* ---------card 2 container-------- */}
            <div className="relative p-2 rounded-tl-2xl border-t border-l border-gray-100 mt-auto overflow-hidden">
              <div className="border rounded-xl p-2 border-gray-200">
                <div className="relative space-y-8 pb-12 pr-12 w-[150%] sm:w-full">
                  <div className="absolute left-[11px] top-4 bottom-0 w-px bg-gray-200 -z-10"></div>

                  <div className="flex items-center space-x-6">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <CircleCheck size={22} />
                    </div>
                    <span className="text-gray-900 font-medium">
                      Securing your server
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-6 h-6 text-[#10B981] flex items-center justify-center">
                      <CircleDot size={22} />
                    </div>
                    <span className="text-gray-900 font-medium">
                      Installing base dependencies
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-6 h-6 text-[#10B981] flex items-center justify-center">
                      <CircleDot size={22} />
                    </div>
                    <span className="text-gray-900 font-medium">
                      Installing PHP
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-6 h-6 text-[#10B981] flex items-center justify-center">
                      <CircleDot size={22} />
                    </div>
                    <span className="text-gray-900 font-medium">
                      Installing Nginx
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentPlatform;
