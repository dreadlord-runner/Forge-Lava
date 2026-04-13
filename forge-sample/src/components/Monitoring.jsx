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
    <section className="pb-12">
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

            {/* -------------  Mockup 3 ------------ */}
            <div className="relative mt-auto overflow-hidde min-h-[300px]">
              <div className="absolute top-15 left-6 w-[280px] md:w-[320px] bg-innerBorderGray border border-gray-200 rounded-xl p-2 z-0">
                <h4 className="text-[15px] font-medium text-gray-900 mb-6">
                  Memory
                </h4>

                <div className="relative h-32 flex">
                  <div className="flex flex-col justify-between text-[12px] text-gray-300 font-mono pr-4">
                    <span>100%</span>
                    <span>80%</span>
                    <span>60%</span>
                    <span>40%</span>
                  </div>

                  <div className="relative flex-1 mt-2">
                    <div className="absolute top-0 w-full border-t border-gray-200"></div>
                    <div className="absolute top-[33.33%] w-full border-t border-gray-200"></div>
                    <div className="absolute top-[66.66%] w-full border-t border-gray-200"></div>
                    <div className="absolute bottom-0 w-full border-t border-gray-200"></div>

                    <svg
                      className="absolute inset-0 w-full h-full -ml-1"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M0 70 L2 75 L4 76 L6 85 L8 76 L10 75 L12 73 L15 75 L18 85 L20 70 L23 75 L26 60 L28 65 L30 55 L32 60 L35 55 L38 65 L40 60 L42 70 L45 75 L48 65 L50 60 L52 65 L55 50 L58 30 L60 35 L62 25 L65 45 L68 25 L70 30 L72 35 L75 30 L78 25 L80 35 L82 30 L85 25 L88 35 L90 40 L92 35 L95 45 L98 40 L100 50"
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute left-44 md:left-56 w-[270px] bg-innerBorderGray border-t border-l border-gray-200 rounded-xl p-2">
                <div className="border-t border-l border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className="text-[15px] font-medium text-gray-900 mb-5">
                    New server monitor
                  </h4>

                  <div className="mb-5">
                    <label className="text-[14px] text-gray-500 font-medium block mb-2">
                      Metric
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-1.5 text-[15px] text-gray-600 bg-white border-r-0">
                      CPU Load Average
                    </div>
                  </div>

                  <div>
                    <label className="text-[14px] text-gray-500 font-medium block mb-2">
                      Condition
                    </label>

                    <div className="border border-gray-200 rounded-lg px-3 py-1.5 text-[15px] text-gray-600 bg-white border-r-0">
                      Greater than or equal to
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none z-20"></div>
              <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
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

            {/* --------------Mockup 4 ----------- */}
            <div className="relative mt-auto overflow-hidden bg-innerBorderGray min-h-[300px]">
              <div className="border border-gray-200 rounded-xl p-3 pb-12 pr-12 w-[150%] sm:w-[130%] font-mono text-[13px] leading-relaxed">
                <div className="flex px-3 py-1.5 items-center">
                  <span className="text-gray-400 w-24 shrink-0">10:41:02</span>
                  <span className="text-gray-600 truncate">
                    App\Jobs\UploadFile ................RUNNING
                  </span>
                </div>

                <div className="flex px-3 py-1.5 items-center">
                  <span className="text-gray-400 w-24 shrink-0">10:39:31</span>
                  <span className="text-gray-600 truncate">
                    App\Jobs\UploadFile..............26.5ms DONE
                  </span>
                </div>

                <div className="flex px-3 py-2 items-center bg-[#f8f9fa] rounded-md my-0.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]">
                  <span className="text-gray-400 w-24 shrink-0">10:27:19</span>
                  <span className="text-gray-600 truncate">
                    Running [App\Jobs\CreatePost]..... 13.5ms DONE
                  </span>
                </div>

                <div className="flex px-3 py-1.5 items-center">
                  <span className="text-gray-400 w-24 shrink-0">10:24:41</span>
                  <span className="text-gray-600 truncate">
                    Running [App\Jobs\UploadFile]......2.2ms DONE
                  </span>
                </div>

                <div className="flex px-3 py-1.5 items-center">
                  <span className="text-gray-400 w-24 shrink-0">10:19:17</span>
                  <span className="text-gray-600 truncate">
                    App\Jobs\CreatePost..............86.4ms DONE
                  </span>
                </div>

                <div className="flex px-3 py-2 items-center bg-[#fff5f5] text-[#fca5a5] rounded-md mt-0.5">
                  <span className="w-24 shrink-0">10:18:53</span>
                  <span className="truncate">Something went wrong</span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-white pointer-events-none z-20"></div>
              <div className="absolute inset-x-0 bottom-0 h-38 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
