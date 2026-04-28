import React from "react";
import { LockKeyhole, SquareCheck, Square, Globe } from "lucide-react";

const FeaturesThatMatter = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-10 sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">5</span>
        </div>
        <div className="flex-1 lg:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider  whitespace-nowrap">
            Features That Matter
          </span>
          <span className="text-gray-400 hidden sm:inline truncate ">
            Irina Nita • [CORE-1528] Implement notification center actions
          </span>
        </div>
      </div>
      <div className="w-full bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto border-x border-gray-100">
          {/* Hero Section */}
          <div className="flex py-12 md:py-24 px-4 sm:px-8 md:px-0">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0" />
            <div className="flex-1">
              <div className="max-w-4xl">
                <h2 className="text-2xl sm:text-[2rem] text-gray-900 tracking-tight leading-tight mb-6">
                  Made for teams who just ship
                </h2>
                <p className="text-base sm:text-[1.3rem] font-light text-gray-500 leading-relaxed max-w-2xl">
                  Deploy, test, and scale your applications without the setup
                  hassle. Build faster and with delight.
                </p>
              </div>
            </div>
          </div>

          {/* --------------2x2 Grid--[[[[[[[[- */}
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-100 bg-white">
              {/* ----------------Card 1--------------- */}
              <div className="pt-10 px-4 sm:px-10 md:px-16 border-b lg:border-r border-gray-100 flex flex-col">
                <h3 className="text-lg text-gray-900 mb-3 font-medium">
                  Scriptable deployments, zero downtime
                </h3>
                <p className="text-gray-500 mb-10">
                  Automate your deployments with scripts and ship updates
                  instantly.
                </p>

                {/*-----------Mock Deployment Script------------ */}
                <div className="relative pt-2 pl-2 rounded-tl-2xl border-t border-l border-gray-200 overflow-hidden bg-innerBorderGray">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 pb-12 pr-12">
                    <h4 className="text-[15px] font-semibold text-gray-900 mb-1">
                      Deployment Script
                    </h4>
                    <p className="text-sm text-gray-400 mb-5 whitespace-nowrap">
                      The deploy commands that will be run to deploy your app
                    </p>

                    <div className="border-2 border-gray-200 rounded-lg flex overflow-hidden font-mono text-[13px] leading-relaxed bg-white">
                      <div className="bg-[#f8f9fa] text-gray-400 py-3 flex flex-col items-end select-none shrink-0">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            className={`px-3 ${n === 3 ? "bg-[#ecefec]" : ""}`}
                          >
                            {n}
                          </span>
                        ))}
                      </div>

                      <div className="py-3 w-full flex flex-col overflow-hidden">
                        <div className="px-4 text-gray-800 truncate">
                          $CREATE_RELEASE
                          <span className="text-purple-500">()</span>
                        </div>
                        <div className="px-4 h-[21px]" />
                        <div className="px-4 bg-[#f4f5f7] truncate">
                          <span className="text-purple-500">npm</span> ci{" "}
                          <span className="text-purple-500"> && npm </span> run
                          build
                        </div>
                        <div className="px-4 text-gray-400 py-0.5 truncate">
                          $ACTIVATE_RELEASE
                          <span className="text-purple-400">()</span>
                        </div>
                        <div className="px-4 h-[20px]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                </div>
              </div>

              {/* -----------------Card 2------------ */}
              <div className="px-4 sm:px-10 md:px-16 pt-10 border-b border-gray-100 flex flex-col">
                <h3 className="text-lg text-gray-900 mb-3 font-medium">
                  Free SSL certificates
                </h3>
                <p className="text-gray-500 mb-10">
                  Secure your sites from the get-go with free, automated SSL.
                </p>
                {/*------Mock Encrypt--------- */}
                <div className="relative pt-2 pl-2 rounded-tl-2xl border-t border-l border-gray-200 overflow-hidden bg-innerBorderGray">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-xl pl-6 pt-6">
                    <div className="flex items-center space-x-3 mb-5">
                      <div className="w-8 h-8 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center flex-shrink-0">
                        <LockKeyhole size={15} />
                      </div>

                      <h4 className="text-[15px] font-bold text-gray-900">
                        Let's Encrypt
                      </h4>
                    </div>
                    <div className="mb-2">
                      <label className="text-sm font-medium text-gray-500">
                        Public key algorithm
                      </label>
                    </div>
                    <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col bg-white">
                      <div className="flex flex-1 items-center p-4 border-b border-gray-200 gap-2">
                        <div className="w-4 h-4 rounded-full border-[4px] border-[#10B981] flex-shrink-0"></div>

                        <div className="ml-2 flex items-center gap-x-3">
                          <span className=" text-gray-500">ECDSA</span>
                          <span className="text-gray-400 text-[14px]">
                            secp384r1
                          </span>
                        </div>
                        <span className="ml-auto text-[13px] tracking-wide text-headerGreen bg-[#10B981]/5 px-2 rounded-md border border-[#10B981]/20 whitespace-nowrap">
                          Recommended
                        </span>
                      </div>
                      <div className="flex items-center p-4">
                        <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"></div>
                        <div className="ml-4 flex items-center space-x-3">
                          <span className="text-gray-500">RSA</span>
                          <span className="text-gray-400 text-[14px]">
                            Legacy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                </div>
              </div>

              {/* -------------------Card 3------------ */}
              <div className="px-4 sm:px-10 md:px-16 pt-10 border-b lg:border-r border-gray-100 flex flex-col">
                <h3 className="text-lg text-gray-900 mb-3 font-medium">
                  Databases, managed
                </h3>
                <p className="text-gray-500 mb-10">
                  Provision, back up, and monitor database clusters without
                  leaving Forge.
                </p>
                {/*----------Mock Database--------------- */}
                <div className="relative overflow-hidden">
                  <div className="block absolute top-20 left-0 w-64 bg-innerBorderGray border-t border-l border-gray-200 rounded-xl pl-2 z-0">
                    <h4 className="text-[15px] font-medium text-gray-900 p-2">
                      Database Details
                    </h4>
                    <div className="border-t border-l border-gray-200 p-3 rounded-2xl bg-white">
                      <h5 className="text-[14px] font-medium text-gray-900 mb-1">
                        Database connection URL
                      </h5>
                      <p className="text-[14px] text-gray-400 mb-3 truncate">
                        Use the database connection string below to connect to
                        your connection
                      </p>
                      <div className="border border-gray-200 rounded-lg p-3 bg-innerBorderGray">
                        <code className="text-[11px] text-gray-400 font-mono tracking-tight truncate">
                          mysql+ssh://forge@165.232.119.159/forge@127.0.
                        </code>
                      </div>
                    </div>
                  </div>

                  {/*---------Foreground Mock Database------- */}

                  <div className="relative ml-32 bg-innerBorderGray border-t border-l border-gray-200 rounded-xl p-2 z-10">
                    <div className="p-4 sm:p-6 border-l border-t border-gray-200 rounded-xl bg-white">
                      <h4 className="text-[15px] font-medium text-gray-900 mb-6">
                        New backup configuration
                      </h4>
                      <div className="mb-5">
                        <label className="text-[13px] text-gray-500 font-medium block mb-2">
                          Frequency
                        </label>
                        <div className="border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-gray-900 bg-white">
                          Daily
                        </div>
                      </div>
                      <label className="text-[14px] text-gray-500 font-medium block mb-2">
                        Databases
                      </label>
                      <div className="border border-gray-100 rounded-xl p-1 shadow-sm bg-white">
                        <div className="flex items-center space-x-3 p-2">
                          <SquareCheck
                            size={24}
                            className="text-white fill-[#14ba9c] flex-shrink-0"
                          />
                          <span className="text-[13px] text-gray-400 font-medium">
                            my_database
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 p-2">
                          <Square
                            size={18}
                            className="text-gray-400 flex-shrink-0 ml-0.5"
                          />
                          <span className="text-[14px] text-gray-400 font-medium">
                            forge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-r from-transparent to-white pointer-events-none z-20"></div>
                  <div className="absolute inset-x-0 bottom-0 h-34 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
                </div>
              </div>

              {/* ------------------Card 4-----------------*/}
              <div className="px-4 sm:px-10 md:px-16 pt-10 flex flex-col border-b border-gray-100">
                <h3 className="text-lg text-gray-900 mb-3 font-medium">
                  Test faster with hosted domains
                </h3>
                <p className="text-gray-500 mb-10">
                  Skip domain setup and launch your app instantly on a
                  on-forge.com domain.
                </p>

                {/*--------Forge Domain--------- */}

                <div className="relative overflow-hidden">
                  <div className="border border-gray-200 shadow-sm rounded-xl p-2 bg-innerBorderGray">
                    <div className="p-4 sm:p-6 pr-6 pb-12 sm:pr-12 border-t border-l border-gray-200 rounded-xl bg-white">
                      <div className="mb-8">
                        <h4 className="text-[15px] font-medium text-gray-900 mb-1">
                          Forge domain
                        </h4>
                        <p className="text-[13px] text-gray-500 mb-4">
                          Every site includes on-forge.com domain.
                        </p>

                        <div className="flex items-center border border-gray-200 rounded-lg p-3.5 px-3 bg-white w-full overflow-hidden">
                          <Globe size={18} className="text-gray-400 shrink-0" />

                          <div className="ml-3 font-mono text-[13px] flex items-center overflow-hidden">
                            <span className="font-semibold text-gray-900 tracking-tight shrink-0">
                              balmy-rain
                            </span>
                            <span className="text-gray-400 tracking-tight shrink-0">
                              .on-forge.com
                            </span>
                            <span className="ml-4 shrink-0">
                              <LockKeyhole
                                size={18}
                                className="text-headerGreen"
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="opacity-40">
                        <h4 className="text-[15px] font-bold text-gray-600 mb-1">
                          Custom domains
                        </h4>
                        <p className="text-[13px] text-gray-400">
                          Add domain and aliases that you own.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-r from-transparent to-white pointer-events-none z-10"></div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------Bottom Grid----------*/}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 bg-white border-b border-gray-100">
              {[
                {
                  title: " Queues as they should be",
                  desc: "Start and manage supervised queue workers directly. No more manual Supervisor configuration.",
                },
                {
                  title: "Task & job scheduling",
                  desc: " Schedule recurring tasks with predefined intervals or custom cron expressions.",
                },
                {
                  title: "⌘K anything",
                  desc: " Do everything without reaching for the mouse with Forge's feature-rich command palette.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="px-6 sm:px-10 md:px-16 py-14 sm:py-14"
                >
                  <h4 className="text-[1.1rem] sm:text-[1.15rem]  text-gray-900 mb-3 font-medium">
                    {title}
                  </h4>
                  <p className="text-gray-500 max-w-xs">{desc}</p>
                </div>
              ))}
            </div>
            <div className="h-15 w-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThatMatter;
