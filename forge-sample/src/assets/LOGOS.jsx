import React from "react";

// Swap these placeholders out with your actual SVG components.
const LOGOS = [
  <div
    key="namecheap"
    className="h-16 w-48 bg-gray-200 text-center leading-[4rem]"
  >
    Namecheap SVG
  </div>,
  <div key="intel" className="h-16 w-48 bg-gray-200 text-center leading-[4rem]">
    Intel SVG
  </div>,
  <div
    key="siemens"
    className="h-16 w-48 bg-gray-200 text-center leading-[4rem]"
  >
    Siemens SVG
  </div>,
  <div key="nfl" className="h-16 w-48 bg-gray-200 text-center leading-[4rem]">
    NFL SVG
  </div>,
  <div
    key="laravel"
    className="h-16 w-48 bg-gray-200 text-center leading-[4rem]"
  >
    Laravel SVG
  </div>,
];

export default function VerticalLogoMarquee() {
  return (
    // The container needs a fixed or maximum height so the vertical scroll is constrained
    <section className="relative flex justify-center w-full h-[500px] overflow-hidden bg-white">
      {/* Edge Fade Masks: Moved to top and bottom, using bg-gradient-to-b and bg-gradient-to-t */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white to-transparent"></div>

      {/* Marquee Track: Switched to flex-col and h-max */}
      <div className="flex flex-col h-max animate-marquee-vertical hover:[animation-play-state:paused]">
        {/* Set 1 */}
        <div className="flex flex-col shrink-0 items-center justify-around gap-12 py-6">
          {LOGOS}
        </div>

        {/* Set 2 (Exact Duplicate) */}
        <div
          aria-hidden="true"
          className="flex flex-col shrink-0 items-center justify-around gap-12 py-6"
        >
          {LOGOS}
        </div>
      </div>
    </section>
  );
}
