import React, { useState, useEffect } from "react";
import openaiLogo from "./images/openai.svg";
import intelLogo from "./images/intel.svg";
import siemensLogo from "./images/siemens.svg";
import nflLogo from "./images/nfl.svg";
import redHatLogo from "./images/red-hat.svg";
import webexLogo from "./images/webex.svg";
import stanfordLogo from "./images/stanford.svg";
import bitwardenLogo from "./images/bitwarden.svg";
import mercedesBenzLogo from "./images/mercedes-benz.svg";

const LOGOS_LIST = [
  <div
    key="openai"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={openaiLogo}
      alt="OpenAI"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="intel"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={intelLogo}
      alt="Intel"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="siemens"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={siemensLogo}
      alt="Siemens"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div key="nfl" className="h-full w-full flex items-center justify-center p-2">
    <img
      src={nflLogo}
      alt="NFL"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="redhat"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={redHatLogo}
      alt="RedHat"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="webex"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={webexLogo}
      alt="Webex"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="stanford"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={stanfordLogo}
      alt="Stanford"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="bitwarden"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={bitwardenLogo}
      alt="BitWarden"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
  <div
    key="mercedes-benz"
    className="h-full w-full flex items-center justify-center p-2"
  >
    <img
      src={mercedesBenzLogo}
      alt="Mercedes Benz"
      className="h-full object-contain max-h-[40px]"
    />
  </div>,
];

function shuffleArray(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function VerticalLogoMarquee() {
  const [logos, setLogos] = useState(() => shuffleArray(LOGOS_LIST));
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (logos.length === 0) return;

    const delay = 2000 + Math.random() * 1000;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
        setLogos((prev) => {
          const newLogos = [...prev];
          const first = newLogos.shift();
          newLogos.push(first);
          return newLogos;
        });
      }, 500);
    }, delay);

    return () => clearInterval(interval);
  }, [logos]);

  if (logos.length === 0) return null;

  return (
    <section className="relative flex justify-center w-full h-[60px] overflow-hidden bg-white">
      <div
        className={`flex flex-col w-full ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{
          transform: isTransitioning ? "translateY(-60px)" : "translateY(0px)",
        }}
      >
        {/* Render only the active logo and the next upcoming logo */}
        {logos.slice(0, 2).map((logo, index) => (
          <div
            key={`${logo.key}-${index}`}
            className="h-[60px] w-full flex items-center justify-center shrink-0"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
