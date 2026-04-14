import React, { useState, useRef } from "react";
import { tweetPosts } from "../../data/tweetPosts";

const columns = Array.from({ length: 5 }, (_, columnIndex) =>
  tweetPosts.slice(columnIndex * 5, columnIndex * 5 + 5),
);

const columnOffsets = [
  "lg:translate-y-20",
  "lg:translate-y-0",
  "lg:-translate-y-28",
  "lg:translate-y-0",
  "lg:translate-y-20",
];

const BuildForDevelopers = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      const topOffset =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white border-t border-gray-100 mt-20 mb-10 overflow-hidden pb-10"
    >
      <div className="max-w-7xl mx-auto">
        {/*-------------Header------------ */}
        <div className="flex border-b border-gray-100 items-stretch">
          <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center border-r border-gray-100 py-4 md:py-5">
            <span className="text-gray-400 font-mono text-xs md:text-sm">
              6
            </span>
          </div>
          <div className="flex-1 px-6 md:px-10 lg:px-12 py-4 md:py-5 flex items-center space-x-3 font-mono text-xs">
            <span className="text-headerGreen uppercase tracking-wider">
              Built by developers for developers
            </span>
            <span className="text-gray-400 hidden sm:inline truncate">
              Ash Rich - [CORE-2736] Add support for deployment rollbacks
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex py-16 md:py-24">
          <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
          <div className="flex-1 px-6 md:px-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
                10+ years of developer love
              </h2>
              <p className="text-lg md:text-[1.3rem] text-gray-500 leading-relaxed max-w-2xl">
                Crafted with passion for over a decade,{" "}
                <br className="hidden md:block" /> loved by web artisans shaping
                the modern web.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*-------------Tweet Post--------------*/}
      <div
        className={`relative mx-auto mt-4 max-w-[1740px] px-4 sm:px-6 lg:mt-8 lg:px-8 transition-all duration-500 ease-in-out ${showAll ? "" : "h-[760px] sm:h-[820px] lg:h-[900px] overflow-hidden"}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pt-30">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col ${columnOffsets[columnIndex]}`}
            >
              {column.map((post) => (
                <article
                  key={post.id}
                  className="min-h-[224px] border border-gray-100 bg-[#fcfdfc] px-7 py-6 sm:px-8 lg:min-h-[238px] lg:px-9 lg:py-7"
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${post.avatar}`}
                    alt={`${post.name} avatar`}
                    className="mb-5 h-10 w-10 rounded-full object-cover grayscale-[18%]"
                  />
                  <h3 className="text-[1.04rem] font-semibold leading-snug text-gray-800">
                    {post.name}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-gray-400">
                    {post.position}
                  </p>
                  <p className="mt-5 text-[1.02rem] leading-[1.45] text-gray-500">
                    {post.tweet}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/*----------------Button------------------- */}
        {showAll && (
          <div className="sticky bottom-8 z-50 flex justify-center pointer-events-none mt-10 pb-8">
            <button
              onClick={handleToggle}
              className="pointer-events-auto rounded-lg border border-dark bg-dark px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-gray-800 cursor-pointer shadow-2xl shadow-black/40"
            >
              Show less
            </button>
          </div>
        )}

        {!showAll && (
          <>
            <div className="pointer-events-none absolute inset-x-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col justify-end items-center pb-8" />

            <div className="flex justify-center flex-col items-center pointer-events-none absolute inset-x-0 bottom-8 z-10">
              <button
                onClick={handleToggle}
                className="pointer-events-auto rounded-lg border border-dark bg-dark px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-gray-800 cursor-pointer shadow-sm"
              >
                Show more
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BuildForDevelopers;
