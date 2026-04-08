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
          <div className="flex items-center space-x-3 font-mono text-xs mb-18">
            <span className="text-gray-400">1</span>
            <span className="text-[#5cccb8] uppercase tracking-wider">
              The Deplpoyment Platform
            </span>
            <span className="text-gray-400">
              James Brooks • [CORE-2627] Ship the next generation of Forge
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-4 ml-15 ">
            Simplify your deployments, build great apps
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed ml-15">
            Simplify deployment and server management with tools that <br />{" "}
            scale, without the DevOps complexity.
          </p>
        </div>

        {/* ---------2x2 grid----------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-gray-100 mt-12 rounded-tl-xl overflow-hidden">
          {/*--------Card 1------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Launch your app your way
            </h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              Spin up a Laravel VPS with instant provisioning or <br /> connect
              to your favorite cloud provider in minutes.
            </p>

            {/* -----card 1 containers------- */}
            <div className="relative pt-6 pl-6 rounded-tl-2xl mt-auto overflow-hidden">
              <div className="border rounded-xl p-2 border-gray-200 bg-[#fbfcfb]">
                <div className="border rounded-xl p-4 border-gray-200 bg-white">
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
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              A full server stack, ready in minutes{" "}
            </h3>
            <p className="text-gray-500 mb-12  leading-relaxed">
              Forge installs Nginx, PHP, MySQL, Postgres, Redis, <br /> and all
              the essentials on your cloud of choice.
            </p>

            <div className="relative pt-6 pl-6 rounded-tl-2xl mt-auto overflow-hidden">
              <div className="border rounded-xl p-2 border-gray-200 bg-[#fbfcfb]">
                <div className="relative border rounded-xl border-gray-200 bg-white p-6 md:p-8 min-h-[275px]">
                  <div className="absolute left-[43px] top-8 bottom-8 w-px bg-gray-200"></div>

                  <div className="relative space-y-8 pr-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white z-10">
                        <CircleCheck size={22} />
                      </div>
                      <span className="text-gray-900 font-medium">
                        Securing your server
                      </span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="w-6 h-6 text-[#10B981] flex items-center justify-center bg-white z-10">
                        <CircleDot size={22} />
                      </div>
                      <span className="text-gray-900 font-medium">
                        Installing base dependencies
                      </span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="w-6 h-6 text-[#10B981] flex items-center justify-center bg-white z-10">
                        <CircleDot size={22} />
                      </div>
                      <span className="text-gray-900 font-medium">
                        Installing PHP
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 opacity-60">
                      <div className="w-6 h-6 text-[#10B981] flex items-center justify-center bg-white z-10">
                        <CircleDot size={22} />
                      </div>
                      <span className="text-gray-900 font-medium">
                        Installing Nginx
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
            </div>
          </div>

          {/* --------card 3--------- */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Create any type of server{" "}
            </h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              From app to database servers, provision everything <br /> with
              ease. Single or networked, Forge can do it all.
            </p>

            <div className="relative pt-6 pl-6  mt-auto overflow-hidden">
              <div className="space-y-2 pb-12 w-[150%] sm:w-full">
                <div className="p-2 pl-3 border border-gray-200 rounded-lg bg-[#fbfcfb] shadow-sm hover:bg-gray-100">
                  <div className=" text-gray-900 mb-1">App server</div>
                  <div className="text-sm text-gray-500 truncate">
                    A full-stack server, includes everything you need to run
                    application
                  </div>
                </div>

                <div className="p-2 pl-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:bg-gray-100">
                  <div className=" text-gray-900 mb-1">
                    Load balancer server
                  </div>
                  <div className="text-sm text-gray-500">
                    Distributes traffic across multiple servers.
                  </div>
                </div>

                <div className="p-2 pl-3 border border-gray-200 rounded-lg bg-white shadow-sm opacity-50 hover:bg-gray-100">
                  <div className=" text-gray-900 mb-1">Worker server</div>
                  <div className="text-sm text-gray-500">
                    A worker server that processes background jobs.
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentPlatform;
