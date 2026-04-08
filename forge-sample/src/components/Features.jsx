import React from "react";
import awsIcon from "../assets/images/AWS.svg";
import canvaIcon from "../assets/images/Canva.svg";
import digitalOceanIcon from "../assets/images/DigitalOcean.svg";
import laravelVpsIcon from "../assets/images/Laravel VPS.svg";
import reactIcon from "../assets/images/React.svg";
import vultrIcon from "../assets/images/Vultr.svg";

const Features = () => {
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
    { name: "DigitalOcean" },
    { name: "AWS" },
    { name: "Vultr", disabled: true },
    { name: "React", disabled: true },
    { name: "Canva", disabled: true },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simplify your deployments, build great apps
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Simplify deployment and server management with tools that scale,
            without the DevOps complexity.
          </p>
        </div>

        <div className="max-w-xl mx-auto p-6">
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {providers.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-5 flex flex-col items-center justify-center gap-3 transition-all duration-200 ${item.active ? "border-emerald-500 shadow-forge" : "border-gray-200"} ${item.disabled ? "opacity-40" : "hover:border-emerald-400 cursor-pointer"}`}
                >
                  {/*--------ICONS---------- */}
                  <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
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
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-sm rounded-b-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
