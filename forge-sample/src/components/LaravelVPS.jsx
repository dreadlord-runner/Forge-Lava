import React from "react";
import { Zap, Server } from "lucide-react";

const LaravelVPS = () => {
  return (
    <section className="bg-[#151715] text-white">
      {/*--------header--------- */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 py-6">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-[#4e564c]">4</span>
          <span className="text-[#5cccb8] uppercase tracking-wider">
            Laravel VPS
          </span>
          <span className="text-[#4e564c] hidden sm:inline">
            Kieran Brown • [CORE-0022] Integrate Terminal service with Forge
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="text-[#e5e5e5] text-xl md:text-[2rem] font-medium tracking-tight leading-tight mb-6">
            A virtual private server to save time and money
          </h2>
          <p className="text-xl text-[#9aa299] leading-relaxed">
            Laravel VPS keeps costs down and lets you provision in seconds, not
            minutes. <br /> Set up with a single click, collaborate in real
            time.{" "}
          </p>
        </div>
      </div>

      {/*----------2x grid-------------- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/*-------card 1-------- */}
          <div className="pt-16 lg:pr-16 flex flex-col">
            <h3 className="text-xl text-[#e5e5e5] font-bold mb-3">
              Instant provisioning
            </h3>
            <p className="text-[#9aa299] leading-relaxed mb-12">
              Spin up new machines in under 10 seconds with instant servers,
              ready to run out of the box.
            </p>

            {/* ------mock container of card 1-------- */}
            <div className="relative pt-6 pl-6 rounded-tl-2xl border-t border-l border-white/10 mt-auto overflow-hidden bg-[#212321]">
              <div className="pb-12 pr-12 w-[120%] sm:w-full">
                <div className="flex items-center space-x-2 text-[#5cccb8] mb-6 pl-2">
                  <Zap size={16} fill="currentColor" />
                  <span className="font-semibold text-[#e5e5e5] text-sm">
                    Instant servers
                  </span>
                </div>

                <div className="space-y-3">
                  {/*------------ Small Server--------- */}
                  <div className="flex items-center space-x-4 p-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/6">
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
                  <div className="flex items-center space-x-4 p-2 rounded-lg border-2 border-[#10B981]/50 bg-[#212321]/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:bg-white/1">
                    <div className="w-4 h-4 text-red-500">
                      <Server size={15} />
                    </div>
                    <div className="text-sm">
                      <span className="text-white font-medium">Medium</span>
                      <span className="text-[#10B981]/50 mx-2">·</span>
                      <span className="text-gray-400">2 vCPU</span>
                      <span className="text-[#10B981]/50 mx-2">·</span>
                      <span className="text-gray-400">4 GB RAM</span>
                      <span className="text-[#10B981]/50 mx-2">·</span>
                      <span className="text-gray-400">80 GB Disk</span>
                    </div>
                  </div>

                  {/* ------------Large Server------------ */}
                  <div className="flex items-center space-x-4 p-2 rounded-lg border border-white/5 bg-white/5 opacity-50 hover:bg-white/8">
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

              {/*---------- Dark Mode Fades-------- */}
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#151715] pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#151715] pointer-events-none"></div>
            </div>
          </div>
          {/*------------- Card 2-----------------*/}
          <div className="pt-16 lg:pl-16 flex flex-col relative pb-20">
            <h3 className="text-xl font-bold mb-3">Web terminal</h3>
            <p className="text-gray-400 leading-relaxed mb-12 lg:pr-10">
              Real-time shared terminal sessions let your team collaborate
              directly and securely on Forge.
            </p>

            {/*--------mock container of card 2-----------*/}
            <div className="relative mt-auto">
              {/*------------ Fake Terminal Window----------- */}
              <div className="w-full max-w-md ml-auto rounded-xl border-t border-l border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
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
              <div className="absolute bottom-1 bg-[#18181b] border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[320px] flex items-start space-x-4 z-10">
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
                  <p className="text-xs text-gray-300 mb-3 leading-snug">
                    <span className="text-white font-semibold">
                      Kieran Brown
                    </span>{" "}
                    started a terminal session in{" "}
                    <span className="text-white font-mono text-xs">
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="py-12 md:py-16 md:pr-12">
            <h4 className="text-lg font-bold mb-3">No external setup</h4>
            <p className="text-gray-400 leading-relaxed">
              Provision and manage servers without leaving Forge.
            </p>
          </div>

          <div className="py-12 md:py-16 md:px-12">
            <h4 className="text-lg font-bold mb-3">Centralized billing</h4>
            <p className="text-gray-400 leading-relaxed">
              Keep your infrastructure and payments in one place.
            </p>
          </div>

          <div className="py-12 md:py-16 md:pl-12">
            <h4 className="text-lg font-bold mb-3">Stay ahead of issues</h4>
            <p className="text-gray-400 leading-relaxed">
              Track CPU, memory, and usage on your dashboard as it happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaravelVPS;
