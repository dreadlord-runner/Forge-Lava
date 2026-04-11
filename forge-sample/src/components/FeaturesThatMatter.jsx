import React from "react";
import { LockKeyhole } from "lucide-react";

const FeaturesThatMatter = () => {
  return (
    <section className="bg-white pt-10 pb-24">
      {/* -----Header----- --- */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 py-6">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">5</span>
          <span className="text-headerGreen uppercase tracking-wider">
            Features That Matter
          </span>
          <span className="text-gray-400 hidden sm:inline">
            Irina Nita • [CORE-1528] Implement notification center actions
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ------Main Header--------- */}
        <div className="max-w-3xl py-12 md:py-16">
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Made for teams who just ship
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Deploy, test, and scale your applications without the setup hassle.
            Build faster and with delight.
          </p>
        </div>

        {/* --------------2x2 Grid--[[[[[[[[- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-gray-100 rounded-tl-xl overflow-hidden bg-white">
          {/* ----------------Card 1--------------- */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Scriptable deployments, zero downtime
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Automate your deployments with scripts and ship updates instantly.
            </p>

            {/*-----------Mock Deployment Script------------ */}
            <div className="relative pt-2 pl-2 rounded-tl-2xl border-t border-l border-gray-200 mt-auto overflow-hidden bg-innerBorderGray w-[80%] h-[50%]">
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 pb-12 pr-12">
                <h4 className="text-[15px] font-semibold text-gray-900 mb-1">
                  Deployment Script
                </h4>
                <p className="text-sm text-gray-400 mb-5 whitespace-nowrap">
                  The deploy commands that will be run to deploy your app
                </p>

                <div className="border-2 border-gray-200 rounded-lg flex overflow-hidden font-mono text-[13px] leading-relaxed bg-white">
                  <div className="bg-[#f8f9fa] text-gray-400 py-3 flex flex-col items-end select-none">
                    <span className="px-3">1</span>
                    <span className="px-3">2</span>
                    <span className="bg-[#ecefec] px-3">3</span>
                    <span className="px-3">4</span>
                    <span className="px-3">5</span>
                  </div>

                  <div className="py-3 w-full flex flex-col">
                    <div className="px-4 text-gray-800">
                      $CREATE_RELEASE<span className="text-purple-500">()</span>
                    </div>
                    <div className="px-4 h-[21px]"></div>
                    <div className="px-4 bg-[#f4f5f7] whitespace-nowrap">
                      <span className="text-purple-500">npm</span> ci{" "}
                      <span className="text-purple-500"> && npm </span> run
                      build
                    </div>
                    <div className="px-4 text-gray-400 py-0.5">
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
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Free SSL certificates
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Secure your sites from the get-go with free, automated SSL.
            </p>
            {/*------Mock Encrypt--------- */}
            <div className="relative pt-2 pl-2 rounded-tl-2xl border-t border-l border-gray-200 mt-auto overflow-hidden bg-innerBorderGray w-[80%] h-[50%]">
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl pl-6 pt-6">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center relative flex-shrink-0">
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
                  <div className="flex items-center p-4 border-b border-gray-200">
                    <div className="w-4 h-4 rounded-full border-[4px] border-[#10B981] flex-shrink-0"></div>

                    <div className="ml-4 flex flex-wrap items-center gap-x-3">
                      <span className=" text-gray-500">ECDSA</span>
                      <span className="text-gray-400 text-[14px]">
                        secp384r1
                      </span>
                    </div>
                    <div className="m-auto">
                      <span className="text-[14px] tracking-wide text-headerGreen bg-[#10B981]/5 px-2 rounded-md border border-[#10B981]/20">
                        Recommended
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"></div>
                    <div className="ml-4 flex items-center space-x-3">
                      <span className="text-gray-500">RSA</span>
                      <span className="text-gray-400 text-[14px]">Legacy</span>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------Card 3------------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Databases, managed
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Provision, back up, and monitor database clusters without leaving
              Forge.
            </p>
            {/* SVG Image Container with Fades */}
            /////////////////////////////////
          </div>

          {/* ------------------Card 4-----------------*/}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Test faster with hosted domains
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Skip domain setup and launch your app instantly on a on-forge.com
              domain.
            </p>
            {/* SVG Image Container with Fades */}
            //////////////////////////////
          </div>
        </div>

        {/* ----------Bottom Grid----------*/}
        {/* We use border-l here to continue the outer left edge seamlessly from the grid above */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-gray-100 bg-white">
          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              Queues as they should be
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Start and manage supervised queue workers directly. No more manual
              Supervisor configuration.
            </p>
          </div>

          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              Task & job scheduling
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Schedule recurring tasks with predefined intervals or custom cron
              expressions.
            </p>
          </div>

          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              ⌘K anything
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Do everything without reaching for the mouse with Forge's
              feature-rich command palette.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThatMatter;
