import React from "react";
import {
  TbHeartCheck,
  TbHeartX,
  TbCircleCheck,
  TbChevronDown,
} from "react-icons/tb";
import { BiCopy } from "react-icons/bi";

const Monitoring = () => {
  return (
    <section className="pb-24">
      {/* -----Header----- --- */}
      <div className="max-w-7xl mx-auto p-5 border-t border-gray-100">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">8</span>
          <span className="text-headerGreen uppercase tracking-wider">
            Monitoring
          </span>
          <span className="text-gray-400 hidden sm:inline">
            Bruno Gaspar • [CORE-0000] Enable zero downtime deployments by
            default
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ------Main Header--------- */}
        <div className="py-12 md:py-16">
          <h2 className="text-4xl md:text-[2rem] font-md text-gray-900 tracking-tight leading-tight mb-6">
            Confidence in every deployment
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-5xl">
            View server and app metrics, logs, and notifications in one click.
            Catch issues early with CPU, memory, and bandwidth charts, and
            integrate seamlessly with Laravel Nightwatch for first-class
            monitoring.
          </p>
        </div>

        {/* --------------2x2 Grid---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-gray-100 rounded-tl-xl overflow-hidden bg-white">
          {/* ----------------Card 1--------------- */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Heartbeats
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed w-[450px]">
              Forge monitors scheduled jobs, alerting you if they’re delayed.
            </p>

            {/* ---  Mockup - 1 --- */}
            <div className="relative mt-auto overflow-hidden  min-h-[300px]">
              <div className="absolute top-6 left-10 w-72 md:w-100 bg-innerBorderGray border border-gray-200 rounded-xl z-0 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-[14.5px] text-gray-600 ">
                    Laravel Scheduler
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="text-[13px] text-gray-400">Daily</span>
                    <TbHeartCheck size={18} className="text-green" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-[14.5px] text-gray-500 ">
                    Remove unused packages
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="text-[13px] text-gray-400">Weekly</span>
                    <TbHeartX size={18} className="text-red-500" />
                  </div>
                </div>

                <div className="h-16"></div>
              </div>

              {/* -------------- Foreground Card--------- */}

              <div className="absolute top-[130px] w-[90%] md:w-[480px] bg-innerBorderGray border border-gray-200 rounded-xl shadow-xl p-3 z-10">
                <label className="text-[14px] text-gray-500 font-medium block mb-2">
                  Heartbeat URL
                </label>

                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-1.5 pl-3 bg-white w-full">
                  <code className="text-[15px] text-gray-800 font-mono font-medium tracking-tight truncate flex-1">
                    https://heartbeats.laravel.com/01k3tgkw/ping
                  </code>

                  <button className="border border-gray-200 rounded-md p-1.5 ml-3 hover:bg-gray-50 text-gray-400 transition-colors flex-shrink-0 shadow-sm">
                    <BiCopy size={14} />
                  </button>
                </div>
              </div>

              {/*------------------ Fade Overlays-----------------*/}

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
            </div>
          </div>

          {/* -----------------Card 2------------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Health checks
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed w-[440px]">
              Move to production with confidence. Health checks ping apps
              post-deployment to verify they're live.
            </p>

            {/* -------Mockup 2-------- */}
            <div className="relative mt-auto overflow-hidden min-h-[300px]">
              <div className="absolute top-6 left-10 w-[280px] md:w-[420px] bg-innerBorderGray border border-gray-200 rounded-lg p-2 z-0">
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h4 className="text-[15px] font-medium text-gray-900 mb-1">
                    Health check URL
                  </h4>
                  <p className="text-[13px] text-gray-400 mb-5">
                    Pinged after a deployment is finished.
                  </p>

                  <div className="border border-gray-200 rounded-lg p-1 px-3 bg-white">
                    <code className="text-[15px] text-gray-600 font-mono tracking-tight">
                      https://beep.on-forge.com/up
                    </code>
                  </div>

                  <div className="h-10"></div>
                </div>

                <div className="absolute top-36 -left-10 w-[90%] md:w-[500px] bg-innerBorderGray border border-gray-200 rounded-lg shadow-xl p-5 z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border border-gray-200">
                        <TbCircleCheck size={22} className="text-green" />
                      </div>
                      <span className="text-[15px] font-bold text-gray-900">
                        Health checks
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-500">
                      <span className="text-[15px] font-mono tracking-tight">
                        Operational
                      </span>
                      <TbChevronDown size={18} />
                    </div>
                  </div>

                  <div className="-ml-3 -mr-3 border border-gray-200 rounded-lg bg-innerBorderGray p-3 flex items-center space-x-5">
                    <div className="w-2 h-2 rounded-full bg-[#34d399] flex-shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.4)]"></div>

                    <span className="text-[15px] font-mono text-gray-400 tracking-tight">
                      200
                    </span>

                    <span className="text-[15px] text-gray-500 font-medium flex-1">
                      New York
                    </span>

                    <span className="text-[15px] font-mono text-gray-400 tracking-tight flex-4">
                      300ms
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
            </div>
          </div>

          {/* -------------------Card 3------------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Server monitoring
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed w-[420px]">
              Monitor CPU, disk, and load at a glance with enhanced charts. Get
              instant alerts when things change.
            </p>
            {/*----------Mock Database--------------- */}
            <div className="relative overflow-hidden h-[60%]">
              {/* hhhhhhhhheeeeeeeeerrrrrrrreeeeeeeeeee */}

              {/*---------Foreground Mock Database------- */}

              <div className="absolute top-0 left-44 w-80 bg-innerBorderGray border-t border-l border-gray-200 rounded-xl p-2">
                {/***hhhhhhhhhhhheeeeeeeerrrrrrreeeeeee */}
              </div>
              <div className="absolute inset-y-0 right-0 w-82 bg-gradient-to-r from-transparent to-white pointer-events-none z-20"></div>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
            </div>
          </div>

          {/* ------------------Card 4-----------------*/}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Log access
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed w-[420px]">
              Take the guesswork out of your server maintenance with detailed
              records of system activities and events.
            </p>
            {/*--------Forge Domain--------- */}

            <div className="relative overflow-hidden h-[60%]">
              {/**hhhhhhhhhhheeeeeerrrrrrrreeeeeeee */}

              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
