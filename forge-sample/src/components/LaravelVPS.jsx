import React from "react";
import { Zap, Server } from "lucide-react";
import batmanAvatar from "../assets/images/batman.png";

const servers = [
  {
    label: "Small",
    specs: ["1 vCPU", "1 GB RAM", "25 GB Disk"],
    style: "border border-white/5 bg-[#232522] opacity-100",

    textStyle: "text-gray-300",
    specStyle: "text-gray-500",
  },
  {
    label: "Medium",
    specs: ["2 vCPU", "4 GB RAM", "80 GB Disk"],
    style: "border-2 border-[#10B981]/50 bg-[#1e211e]",

    textStyle: "text-gray-300",
    specStyle: "text-gray-400",
    active: true,
  },
  {
    label: "Large",
    specs: ["4 vCPU", "8 GB RAM", "160 GB Disk"],
    style: "border border-white/5 bg-[#232522] opacity-50",

    textStyle: "text-gray-300",
    specStyle: "text-gray-500",
  },
];

const bottomFeatures = [
  {
    title: "No external setup",
    desc: "Provision and manage servers without leaving Forge.",
  },
  {
    title: "Centralized billing",
    desc: "Keep your infrastructure and payments in one place.",
  },
  {
    title: "Stay ahead of issues",
    desc: "Track CPU, memory, and usage on your dashboard as it happens.",
  },
];

const LaravelVPS = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch border-t border-white/10 bg-[#151715]">
        <div className="w-10 sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-[#4e564c] font-mono text-xs md:text-sm">4</span>
        </div>
        <div className="flex-1 lg:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider whitespace-nowrap">
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
          <div className="flex py-12 md:py-24 px-4 sm:px-8 md:px-0">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0" />
            <div className="flex-1">
              <div className="max-w-4xl">
                <h2 className="text-[#e5e5e5] text-2xl sm:text-[2rem] tracking-tight leading-tight mb-6">
                  A virtual private server to save time and money
                </h2>
                <p className="text-lg sm:text-[1.3rem] font-light text-[#9aa299] leading-relaxed max-w-3xl">
                  Laravel VPS keeps costs down and lets you provision in
                  seconds, not minutes. Set up with a single click, collaborate
                  in real time.
                </p>
              </div>
            </div>
          </div>

          {/*----------2x2 Grid-------------- */}
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/*-------card 1-------- */}
              <div className="py-10 px-4 sm:px-10 md:px-16 flex flex-col">
                <h3 className="text-xl text-[#e5e5e5] mb-3">
                  Instant provisioning
                </h3>
                <p className="text-[#9aa299] leading-relaxed mb-12">
                  Spin up new machines in under 10 seconds with instant servers,
                  ready to run out of the box.
                </p>

                {/* ------Card 1-------- */}
                <div className="relative pt-2 pl-2 rounded-tl-2xl border-t border-l border-white/10 overflow-hidden bg-[#1b1d1b]">
                  <div className="p-4 sm:p-6 border border-white/10 rounded-2xl bg-[#212321]">
                    <div className="flex items-center space-x-2 text-headerGreen mb-6 pl-2">
                      <Zap size={16} fill="currentColor" />
                      <span className="font-semibold text-[#e5e5e5] text-sm">
                        Instant servers
                      </span>
                    </div>

                    <div className="space-y-2">
                      {servers.map(
                        ({
                          label,
                          specs,
                          style,

                          textStyle,
                          specStyle,
                        }) => (
                          <div
                            key={label}
                            className={`flex items-center space-x-3 p-2 rounded-lg shadow-2xl ${style}`}
                          >
                            <div className="w-4 h-4 text-red-500 shrink-0">
                              <Server size={15} />
                            </div>
                            <div className="text-sm flex flex-wrap gap-x-1 gap-y-0.5">
                              <span className={textStyle}>{label}</span>
                              {specs.map((s) => (
                                <React.Fragment key={s}>
                                  <span className="mx-2">·</span>
                                  <span className={specStyle}>{s}</span>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-42 bg-gradient-to-r from-transparent to-[#151715] pointer-events-none"></div>
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-[#151715] pointer-events-none"></div>
                </div>
              </div>

              {/*-------------Card 2-----------------*/}
              <div className="py-10 px-4 sm:px-10 md:px-16 flex flex-col">
                <h3 className="text-xl text-[#e5e5e5] mb-3">Web terminal</h3>
                <p className="text-[#9aa299] leading-relaxed mb-12 lg:pr-10">
                  Real-time shared terminal sessions let your team collaborate
                  directly and securely on Forge.
                </p>

                {/*--------Mock Container-----------*/}
                <div className="relative pb-16">
                  {/*------------ Fake Terminal Window----------- */}
                  <div className="w-full rounded-xl border-t border-l border-white/10 bg-[#0a0a0a] overflow-hidden">
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
                    <div className="p-4 sm:p-6 font-mono text-sm text-gray-400 min-h-[180px]">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span text-xs sm:text-sm>
                          forge@dkr-app-02:~/forge.laravel.com$
                        </span>
                        <div className="w-2.5 h-5 bg-[#10B981] animate-flash"></div>
                      </div>
                    </div>
                  </div>

                  {/*--------------- Floating Notification Toast---------------- */}
                  <div className="absolute bottom-20 -left-2 sm:-left-10 z-10 bg-[#18181b] border border-white/10 rounded-2xl p-4 w-[70%] sm:w-auto sm:max-w-[320px] flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                        <img
                          src={batmanAvatar}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#18181b] rounded-full" />
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
          <div className="w-full border-y border-white/10">
            <div className="flex flex-row max-w-7xl mx-auto divide-x divide-white/10">
              <div className="hidden md:block w-[60px] shrink-0" />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {bottomFeatures.map(({ title, desc }) => (
                  <div key={title} className="py-10 px-6 md:py-14 md:px-10">
                    <h4 className="text-lg text-[#e5e5e5] mb-3">{title}</h4>
                    <p className="text-[#9aa299] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="hidden md:block w-[60px] shrink-0" />
            </div>
          </div>
          <div className="h-15 w-full bg-[#151715]"></div>
        </div>
      </div>
    </section>
  );
};

export default LaravelVPS;
