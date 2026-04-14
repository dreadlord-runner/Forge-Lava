import React from "react";
import awsIcon from "../assets/images/AWS.svg";
import canvaIcon from "../assets/images/Canva.svg";
import digitalOceanIcon from "../assets/images/DigitalOcean.svg";
import laravelVpsIcon from "../assets/images/Laravel VPS.svg";
import reactIcon from "../assets/images/React.svg";
import vultrIcon from "../assets/images/Vultr.svg";
import { CircleCheck, CircleDot } from "lucide-react";
import { FaLaravel, FaSymfony, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiNuxt, SiStatamic } from "react-icons/si";
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
    <section className="w-full bg-white border-y border-gray-100 mb-10 mt-10">
      <div className="max-w-7xl mx-auto border-x border-gray-100 bg-white">
        {/*-------------Header------------ */}
        <div className="flex border-b border-gray-100 items-stretch">
          <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center border-r border-gray-100 py-4 md:py-5">
            <span className="text-gray-400 font-mono text-xs md:text-sm">1</span>
          </div>
          <div className="flex-1 px-6 md:px-10 lg:px-12 py-4 md:py-5 flex items-center space-x-3 font-mono text-xs">
            <span className="text-headerGreen uppercase tracking-wider">
              The Deployment Platform
            </span>
            <span className="text-gray-400 hidden sm:inline truncate">
              James Brooks • [CORE-2627] Ship the next generation of Forge
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex py-16 md:py-24">
          <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
          <div className="flex-1 px-6 md:px-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Simplify your deployments, build great apps
              </h2>
              <p className="text-lg md:text-[1.3rem] text-gray-500 leading-relaxed max-w-2xl">
                Simplify deployment and server management with tools that <br className="hidden md:block" /> scale, without the DevOps complexity.
              </p>
            </div>
          </div>
        </div>

        {/* ---------2x2 Grid----------- */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-100 bg-white">
          {/*--------Card 1------ */}
          <div className="p-10 px-6 md:p-14 border-b lg:border-r border-gray-100 md:pl-[136px] lg:pl-[168px] flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Launch your app your way
            </h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              Spin up a Laravel VPS with instant provisioning or <br /> connect
              to your favorite cloud provider in minutes.
            </p>

            {/* -----Card 1 Container------- */}
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

          {/*-----------Card 2---------- */}
          <div className="p-10 md:p-14 px-6 border-b border-gray-100 flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
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

          {/* --------Card 3--------- */}
          <div className="p-10 px-6 md:p-14 md:pl-[136px] lg:pl-[168px] border-b lg:border-r border-gray-100 flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
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

          {/* ---------Card 4--------- */}
          <div className="p-10 md:p-14 px-6 border-b border-gray-100 flex flex-col bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Laravel-built, ready for anything
            </h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              Forge deploys and supports vanilla PHP, Nuxt, Next.js, <br />{" "}
              Wordpress, and Statamic apps.
            </p>

            <div className="relative h-[270px] p-2 rounded-tl-2xl border-t border-l border-gray-200 mt-auto overflow-hidden bg-[#fbfcfb]">
              <div className="relative h-full rounded-tl-2xl border-t border-l p-2 border-gray-200 bg-white">
                <div className="h-full overflow-hidden pb-12 pr-12 w-[150%] sm:w-full pt-4 pl-4">
                  <div className="flex items-center space-x-4 p-1 rounded-md m-1 hover:bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-500 rounded-md text-white">
                      <FaLaravel size={16} />
                    </div>
                    <span className="font-medium text-gray-900">Laravel</span>
                  </div>
                  <div className="flex items-center space-x-4 p-1 m-1 rounded-md bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-dark rounded-md text-white">
                      <RiNextjsFill size={20} />
                    </div>
                    <span className="font-medium text-gray-900">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-4 p-1 m-1 rounded-md hover:bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-[#00DC82] rounded-md text-white">
                      <SiNuxt size={18} />
                    </div>
                    <span className="font-medium text-gray-900">Nuxt.js</span>
                  </div>
                  <div className="flex items-center space-x-4 p-1 m-1 rounded-md hover:bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-dark rounded-md text-white">
                      <FaSymfony size={18} />
                    </div>
                    <span className="font-medium text-gray-900">Symfony</span>
                  </div>
                  <div className="flex items-center space-x-4 p-1 m-1 rounded-md hover:bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-pink-500 rounded-md text-white">
                      <SiStatamic size={18} />
                    </div>
                    <span className="font-medium text-gray-900">Statamic</span>
                  </div>
                  <div className="flex items-center space-x-4 p-1 m-1 rounded-md hover:bg-gray-100">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-800 rounded-md text-white">
                      <FaWordpress size={20} />
                    </div>
                    <span className="font-medium text-gray-900">WordPress</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
            </div>
          </div>
        </div>
        </div>
        <div className="h-15 w-full bg-white"></div>
      </div>
    </section>
  );
};

export default DeploymentPlatform;
