import React from "react";
import transistorLogo from "../assets/images/transistor_active-D_BETxq_.svg";
import astaltyLogo from "../assets/images/astalty_active-BKjeao8a.svg";
import mumsnetLogo from "../assets/images/mumsnet_active-BZyMx3wx.svg";
import likkerLogo from "../assets/images/likker_active-LGmXIpRd.svg";
import justinJacksonImage from "../assets/images/Justin_Jackson-B4TIG0MS.svg";

const logos = [
  { src: transistorLogo, alt: "Transistor", active: true },
  { src: astaltyLogo, alt: "Astalty", active: false },
  { src: mumsnetLogo, alt: "Mumsnet", active: false },
  { src: likkerLogo, alt: "Likker", active: false },
];

const Testimonial = () => {
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-10 sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">3</span>
        </div>
        <div className="flex-1 lg:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="uppercase tracking-[0.14em] text-headerGreen whitespace-nowrap">
            Battle-Tested by the Best
          </span>
          <span className="text-gray-400 hidden sm:inline truncate">
            Oliver Nybroe • [CORE-1667] Set PHPStan to max level
          </span>
        </div>
      </div>
      <div className="w-full bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto border-x border-gray-100">
          <div className="bg-white">
            {/* -----------Logos Row---------- */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border-b border-gray-100">
              {logos.map(({ src, alt, active }) => (
                <div
                  key={alt}
                  className={`relative flex items-center justify-center py-6 sm:py-8 cursor-pointer transition-all duration-300 ${active ? "hover:bg-gray-50 after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-[#10B981]" : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0 hover:bg-gray-50"}`}
                >
                  <img src={src} alt={alt} className="h-6 sm:h-8" />
                </div>
              ))}
            </div>

            {/*----------Avatar Image----------- */}
            <div className="flex flex-col md:flex-row md:divide-x divide-gray-100 border-y border-gray-100">
              <div className="md:flex md:w-1/4 items-center justify-center overflow-hidden bg-white py-2 md:py-12">
                <div className="relative w-[200px] sm:w-[300px] md:w-full">
                  <img
                    src={justinJacksonImage}
                    alt="Justin Jackson"
                    className="w-full opacity-55"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.92) 70%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.92) 70%, transparent 100%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white" />
                </div>
              </div>

              {/*-----------Quote--------- */}
              <div className="flex-1 flex flex-col bg-white">
                <div className="flex-1 px-6 sm:px-10 md:px-12 lg:px-20 pt-2 sm:pt-14 md:pt-20 pb-8 sm:pb-10">
                  <h2 className="max-w-[900px] font-serif text-xl sm:text-2xl md:text-[1.6rem] text-gray-900 leading-[1.35] mb-8 sm:mb-10">
                    Forge makes it easy to manage the production and staging
                    versions of our site.
                  </h2>
                  <div className="text-gray-500 font-light">
                    <span className="text-gray-700 font-medium">
                      Justin Jackson
                    </span>
                    , Co-founder
                  </div>
                </div>

                <div className="border-t bg-gray-50/50 border-gray-200 px-6 md:px-12 lg:px-20 py-3">
                  <p className="font-mono text-[13px] text-gray-400">
                    <span className="text-gray-900 ">Transistor.fm</span> runs{" "}
                    <span className="text-gray-900 ">2 servers</span> and{" "}
                    <span className="text-gray-900 ">10 applications</span> on
                    Forge.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-15 w-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
