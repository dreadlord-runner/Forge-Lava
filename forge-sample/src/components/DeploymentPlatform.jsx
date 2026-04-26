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
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-10 sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">1</span>
        </div>
        <div className="flex-1 px-4 sm:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider whitespace-nowrap">
            The Deployment Platform
          </span>
          <span className="text-gray-400 hidden sm:inline truncate">
            James Brooks • [CORE-2627] Ship the next generation of Forge
          </span>
        </div>
      </div>

      <div className="w-full bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto border-x border-gray-100 bg-white">
          {/* Hero Section */}
          <div className="flex py-12 md:py-20 px-4 sm:px-8 md:px-0">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>

            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-[2rem] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                Simplify your deployments, build great apps
              </h2>
              <p className="text-lg sm:text-[1.3rem] font-light text-gray-500 leading-tight max-w-xl">
                Simplify deployment and server management with tools that scale,
                without the DevOps complexity.
              </p>
            </div>
          </div>

          {/* ---------2x2 Grid----------- */}
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-100 bg-white">
              {/*--------Card 1------ */}
              <div className="border-b px-4 sm:px-10 md:px-16 pt-10 lg:border-r border-gray-100  flex flex-col bg-white">
                <h3 className="text-xl text-gray-900 mb-3">
                  Launch your app your way
                </h3>
                <p className="text-gray-500 mb-12 leading-relaxed max-w-sm">
                  Spin up a Laravel VPS with instant provisioning or connect to
                  your favorite cloud provider in minutes.
                </p>

                {/* -----Card 1 Container------- */}
                <div className="relative overflow-hidden">
                  <div className="border rounded-xl p-2 border-gray-200 bg-[#fbfcfb]">
                    <div className="border rounded-xl p-4 border-gray-200 bg-white">
                      <div className="grid grid-cols-3 gap-x-7 gap-y-2">
                        {providers.map((item, i) => (
                          <div
                            key={i}
                            className={`border-2 rounded-xl px-2 sm:px-4 py-3 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-100 ${item.active ? "border-[#5AB5A5] shadow-[0_0_7px_rgba(1,138,114,0.6)]" : "border-gray-200"} ${item.disabled ? "opacity-40" : "cursor-pointer"}`}
                          >
                            {/*--------ICONS---------- */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gray-200 flex items-center justify-center ">
                              <img
                                src={providerIcons[item.name]}
                                alt={`${item.name} icon`}
                                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                              />
                            </div>

                            <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
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
              <div className="px-4 sm:px-10 md:px-16 pt-10 border-b border-gray-100 flex flex-col bg-white">
                <h3 className="text-xl text-gray-900 mb-3">
                  A full server stack, ready in minutes{" "}
                </h3>
                <p className="text-gray-500 mb-12  leading-relaxed max-w-sm">
                  Forge installs Nginx, PHP, MySQL, Postgres, Redis, and all the
                  essentials on your cloud of choice.
                </p>

                <div className="relative overflow-hidden">
                  <div className="border rounded-xl p-2 border-gray-200 bg-innerBorderGray">
                    <div className="relative border rounded-xl border-gray-200 bg-white p-6 md:p-8">
                      <div className="absolute left-[2.2rem] sm:left-[2.7rem] top-8 bottom-8 w-px bg-gray-200"></div>

                      <div className="relative space-y-8 pr-6">
                        {[
                          {
                            label: "Securing your server",
                            icon: (
                              <CircleCheck
                                size={22}
                                className="border border-black rounded-full text-white fill-black"
                              />
                            ),
                            dim: false,
                          },
                          {
                            label: "Installing base dependencies",
                            icon: (
                              <CircleDot
                                size={22}
                                className="border border-green rounded-full text-white fill-green"
                              />
                            ),
                            dim: false,
                          },
                          {
                            label: "Installing PHP",
                            icon: (
                              <CircleDot
                                size={22}
                                className="border border-green rounded-full text-white fill-green"
                              />
                            ),
                            dim: false,
                          },
                          {
                            label: "Installing PHP",
                            icon: (
                              <CircleDot
                                size={22}
                                className="border border-green rounded-full text-white fill-green"
                              />
                            ),
                            dim: true,
                          },
                        ].map(({ label, icon, dim }) => (
                          <div
                            key={label}
                            className={`flex items-center space-x-6 ${dim ? "opacity-60" : ""}`}
                          >
                            <div className="w-6 h-6 text-[#10B981] flex items-center justify-center bg-white z-10">
                              {icon}
                            </div>
                            <span className="text-gray-900 text-sm sm:text-base">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                </div>
              </div>

              {/* --------Card 3--------- */}
              <div className="px-4 sm:px-10 md:px-16 pt-10 border-b lg:border-r border-gray-100 flex flex-col bg-white">
                <h3 className="text-xl text-gray-900 mb-3">
                  Create any type of server{" "}
                </h3>
                <p className="text-gray-500 mb-12 leading-relaxed max-w-sm">
                  From app to database servers, provision everything with ease.
                  Single or networked, Forge can do it all.
                </p>

                <div className="relative overflow-hidden pb-12">
                  <div className="space-y-2">
                    {[
                      {
                        title: "App server",
                        desc: "A full-stack server, includes everything you need to run application.",
                        bg: "bg-[#fbfcfb]",
                        dim: false,
                      },
                      {
                        title: "Load balancer server",
                        desc: "Distributes traffic across multiple servers.",
                        bg: "bg-white",
                        dim: false,
                      },
                      {
                        title: "Worker server",
                        desc: "A worker server that processes background jobs.",
                        bg: "bg-white",
                        dim: true,
                      },
                    ].map(({ title, desc, bg, dim }) => (
                      <div
                        key={title}
                        className={`p-2 pl-3 border border-gray-200 rounded-lg ${bg} shadow-sm hover:bg-gray-100 ${dim ? "opacity-50" : ""}`}
                      >
                        <div className="text-gray-900 mb-1 text-sm sm:text-base">
                          {title}
                        </div>
                        <div className="text-sm text-gray-500">{desc}</div>
                      </div>
                    ))}

                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* ---------Card 4--------- */}
              <div className="px-4 sm:px-10 md:px-16 pt-10 border-b border-gray-100 flex flex-col bg-white">
                <h3 className="text-xl text-gray-900 mb-3">
                  Laravel-built, ready for anything
                </h3>
                <p className="text-gray-500 mb-12 leading-relaxed max-w-sm">
                  Forge deploys and supports vanilla PHP, Nuxt, Next.js,
                  Wordpress, and Statamic apps.
                </p>

                <div className="relative overflow-hidden">
                  <div className="border rounded-xl p-2 border-gray-200 bg-innerBorderGray">
                    <div className="relative rounded-tl-2xl border-t border-l p-2 border-gray-200 bg-white">
                      <div className="overflow-hidden p-2">
                        {[
                          {
                            label: "Laravel",
                            icon: <FaLaravel size={16} />,
                            bg: "bg-orange-500",
                          },
                          {
                            label: "Next.js",
                            icon: <RiNextjsFill size={20} />,
                            bg: "bg-dark",
                            highlight: true,
                          },
                          {
                            label: "Nuxt.js",
                            icon: <SiNuxt size={18} />,
                            bg: "bg-[#00DC82]",
                          },
                          {
                            label: "Symfony",
                            icon: <FaSymfony size={18} />,
                            bg: "bg-dark",
                          },
                          {
                            label: "Statamic",
                            icon: <SiStatamic size={18} />,
                            bg: "bg-pink-500",
                          },
                          {
                            label: "WordPress",
                            icon: <FaWordpress size={20} />,
                            bg: "bg-blue-800",
                          },
                        ].map(({ label, icon, bg, highlight }) => (
                          <div
                            key={label}
                            className={`flex items-center space-x-4 p-1 rounded-md m-1 ${highlight ? "bg-gray-100" : "hover:bg-gray-100"}`}
                          >
                            <div
                              className={`w-6 h-6 flex items-center ${bg} justify-center rounded-md text-white`}
                            >
                              {icon}
                            </div>
                            <span className="font-medium text-gray-900 text-sm sm:text-base">
                              {label}
                            </span>
                          </div>
                        ))}
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
      </div>
    </section>
  );
};

export default DeploymentPlatform;
