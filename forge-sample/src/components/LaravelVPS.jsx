import React from "react";
import { Zap, Server } from "lucide-react";

const LaravelVPS = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch border-t border-white/10 bg-[#151715]">
        <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-[#4e564c] font-mono text-xs md:text-sm">4</span>
        </div>
        <div className="flex-1 px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider">
            Laravel VPS
          </span>
          <span className="text-[#4e564c] hidden sm:inline truncate">
            Kieran Brown • [CORE-0022] Integrate Terminal service with Forge
          </span>
        </div>
      </div>
      <div className="w-full bg-[#151715] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto border-x border-white/10">
          {/* Hero Section */}
          <div className="flex py-16 md:py-24">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
            <div className="flex-1 px-6 md:px-10 lg:px-12">
              <div className="max-w-4xl">
                <h2 className="text-[#e5e5e5] text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium tracking-tight leading-tight mb-6">
                  A virtual private server to save time and money
                </h2>
                <p className="text-lg md:text-[1.3rem] text-[#9aa299] leading-relaxed max-w-3xl">
                  Laravel VPS keeps costs down and lets you provision in
                  seconds, not minutes. <br className="hidden md:block" /> Set
                  up with a single click, collaborate in real time.
                </p>
              </div>
            </div>
          </div>

          {/*----------2x2 Grid-------------- */}
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/*-------card 1-------- */}
              <div className="pt-16 pb-16 px-6 md:pr-10 lg:pr-14 md:pl-[136px] lg:pl-[168px] flex flex-col">
                <h3 className="text-xl text-[#e5e5e5] font-bold mb-3">
                  Instant provisioning
                </h3>
                <p className="text-[#9aa299] leading-relaxed mb-12">
                  Spin up new machines in under 10 seconds with instant servers,
                  ready to run out of the box.
                </p>

                {/* ------Card 1-------- */}
                <div className="w-[80%] h-[50%] relative left-10 bottom-20 pt-4 pl-4 rounded-tl-2xl border-t border-l border-white/10 mt-auto overflow-hidden bg-[#1b1d1b]">
                  <div className="p-6 -mt-2 -ml-2 border border-white/10 rounded-2xl bg-[#212321]">
                    <div className=" w-[110%] sm:w-full">
                      <div className="flex items-center space-x-2 text-headerGreen mb-6 pl-2">
                        <Zap size={16} fill="currentColor" />
                        <span className="font-semibold text-[#e5e5e5] text-sm">
                          Instant servers
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/*------------ Small Server--------- */}
                        <div className="flex items-center space-x-4 p-2 rounded-lg border border-white/5 shadow-2xl bg-[#232522] hover:bg-white/2">
                          <div className="w-4 h-4 text-red-500">
                            <Server size={15} />
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-300">Small</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">1 vCPU</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">1 GB RAM</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">25 GB Disk</span>
                          </div>
                        </div>

                        {/*----------- Medium Server--------------- */}
                        <div className="flex items-center space-x-4 p-2 rounded-lg border-2 border-[#10B981]/50 bg-[#1e211e] shadow-2xl hover:bg-white/2">
                          <div className="w-4 h-4 text-red-500">
                            <Server size={15} />
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-300">Medium</span>
                            <span className="text-[#10B981]/50 mx-2">·</span>
                            <span className="text-gray-400">2 vCPU</span>
                            <span className="text-[#10B981]/50 mx-2">·</span>
                            <span className="text-gray-400">4 GB RAM</span>
                            <span className="text-[#10B981]/50 mx-2">·</span>
                            <span className="text-gray-400">80 GB Disk</span>
                          </div>
                        </div>

                        {/* ------------Large Server------------ */}
                        <div className="flex items-center space-x-4 p-2 rounded-lg border border-white/5 bg-[#232522] shadow-2xl opacity-50 hover:bg-white/4">
                          <div className="w-4 h-4 text-red-500">
                            <Server size={15} />
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-300">Large</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">4 vCPU</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">8 GB RAM</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-500">160 GB Disk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-42 bg-gradient-to-r from-transparent to-[#151715] pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-[#151715] pointer-events-none"></div>
                </div>
              </div>
              {/*-------------Card 2-----------------*/}
              <div className="pt-16 px-6 lg:pl-16 lg:pr-16 flex flex-col relative pb-20">
                <h3 className="text-xl text-[#e5e5e5] font-bold mb-3">
                  Web terminal
                </h3>
                <p className="text-[#9aa299] leading-relaxed mb-12 lg:pr-10">
                  Real-time shared terminal sessions let your team collaborate
                  directly and securely on Forge.
                </p>

                {/*--------Mock Container-----------*/}
                <div className="relative mt-auto">
                  {/*------------ Fake Terminal Window----------- */}
                  <div className="w-full max-w-md ml-auto rounded-xl border-t border-l border-white/10 bg-[#0a0a0a] overflow-hidden">
                    {/*--------- Terminal Header--------- */}
                    <div className="flex items-center bg-[#18181b] border-b border-white/5 px-2 pt-2">
                      <div className="flex items-center space-x-2 bg-[#27272a] px-4 py-2 rounded-t-lg text-xs font-mono text-gray-300 border-t border-x border-white/5">
                        <span>dkr-app-02</span>
                        <span className="text-gray-500 hover:text-white cursor-pointer ml-2">
                          ×
                        </span>
                      </div>
                      <div className="px-4 text-gray-500 hover:text-white cursor-pointer">
                        +
                      </div>
                    </div>
                    {/*--------- Terminal Body------ */}
                    <div className="p-6 font-mono text-sm text-gray-400 min-h-[180px]">
                      <div className="flex items-center space-x-2">
                        <span>forge@dkr-app-02:~/forge.laravel.com$</span>
                        <div className="w-2.5 h-5 bg-[#10B981] animate-flash"></div>
                      </div>
                    </div>
                  </div>

                  {/*--------------- Floating Notification Toast---------------- */}
                  <div className="absolute bottom-1 bg-[#18181b] border border-white/10 rounded-2xl p-4 max-w-[320px] flex items-start space-x-4 z-10">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                        <img
                          src="../src/assets/images/batman.png"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#18181b] rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-xs text-[#9aa299] mb-3 leading-snug">
                        <span className="text-[#e5e5e5]">Kieran Brown</span>{" "}
                        started a terminal session in{" "}
                        <span className="text-[#e5e5e5] font-mono text-xs">
                          dkr-app-02
                        </span>{" "}
                        server.
                      </p>
                      <div className="flex space-x-3">
                        <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-1.5 px-4 rounded-lg transition-colors cursor-pointer">
                          Join
                        </button>
                        <button className="text-gray-400 hover:text-white text-xs font-semibold py-1.5 px-2 transition-colors cursor-pointer">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 w-42 bg-gradient-to-r from-transparent to-[#151715] pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#151715] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
          {/* --- -----3-COLUMN ----- --- */}
          <div className="w-full">
            <div className="flex flex-row max-w-7xl mx-auto border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="w-[60px]" />
              <div className="flex-1 py-10 px-6 md:py-14 md:px-10">
                <h4 className="text-lg text-[#e5e5e5] font-bold mb-3">
                  No external setup
                </h4>
                <p className="text-[#9aa299] leading-relaxed">
                  Provision and manage servers without leaving Forge.
                </p>
              </div>

              <div className="flex-1 py-10 px-6 md:py-14 md:px-10">
                <h4 className="text-lg text-[#e5e5e5] font-bold mb-3">
                  Centralized billing
                </h4>
                <p className="text-[#9aa299] leading-relaxed">
                  Keep your infrastructure and payments in one place.
                </p>
              </div>

              <div className="flex-1 py-10 px-6 md:py-14 md:px-10">
                <h4 className="text-lg text-[#e5e5e5] font-bold mb-3">
                  Stay ahead of issues
                </h4>
                <p className="text-[#9aa299] leading-relaxed">
                  Track CPU, memory, and usage on your dashboard as it happens.
                </p>
              </div>
              <div className="w-[60px]" />
            </div>
          </div>
          <div className="h-15 w-full bg-[#151715]"></div>
        </div>
      </div>
    </section>
  );
};

export default LaravelVPS;
