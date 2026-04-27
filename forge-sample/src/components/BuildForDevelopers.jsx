import React, { useState, useRef } from "react";
import { tweetPosts } from "../../data/tweetPosts";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const totalCards = tweetPosts.length;

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      const topOffset =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, totalCards - 1));
    setActiveIndex(clamped);
    carouselRef.current?.scrollTo({
      left: carouselRef.current.offsetWidth * clamped,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const index = Math.round(
      carouselRef.current.scrollLeft / carouselRef.current.offsetWidth,
    );
    setActiveIndex(index);
  };

  return (
    <section>
      {/*----------- Header----------- */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-10 sm:w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">6</span>
        </div>
        <div className="flex-1 px-4 sm:px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider whitespace-nowrap">
            Built by developers for developers
          </span>
          <span className="text-gray-400 hidden sm:inline truncate">
            Ash Rich - [CORE-2736] Add support for deployment rollbacks
          </span>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="w-full bg-white border-t border-gray-100 mb-20 overflow-hidden pb-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="flex py-12 md:py-24 px-4 sm:px-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-[2rem] font-medium text-gray-900 tracking-tight mb-6 text-center">
                10+ years of developer love
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 text-center max-w-xl mx-auto">
                Crafted with passion for over a decade, loved by web artisans
                shaping the modern web.
              </p>
            </div>
          </div>
        </div>

        {/* --------------- MOBILE & TABLET: swipe carousel ------------- */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tweetPosts.map((post) => (
              <div
                key={post.id}
                className="min-w-full sm:min-w-[50%] snap-start px-4 sm:px-3 py-2"
              >
                <article className="h-full border border-gray-100 bg-[#fcfdfc] rounded-xl px-6 py-5 shadow-sm">
                  <img
                    src={`https://i.pravatar.cc/80?img=${post.avatar}`}
                    alt={`${post.name} avatar`}
                    className="mb-4 h-10 w-10 rounded-full object-cover grayscale-[18%]"
                  />
                  <h3 className="text-[1rem] font-semibold leading-snug text-gray-800">
                    {post.name}
                  </h3>
                  <p className="mt-0.5 text-sm leading-snug text-gray-400">
                    {post.position}
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-[1.45] text-gray-500">
                    {post.tweet}
                  </p>
                </article>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-5 px-4">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {tweetPosts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300 rounded-full cursor-pointer"
                  style={{
                    width: activeIndex === i ? "20px" : "6px",
                    height: "6px",
                    background: activeIndex === i ? "#0B121E" : "#d1d5db",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === totalCards - 1}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            {activeIndex + 1} / {totalCards}
          </p>
        </div>

        {/* ----------DESKTOP---------------*/}
        <div
          className={`hidden lg:block relative mx-auto pt-16 max-w-[1740px] px-8 transition-all duration-500 ease-in-out ${
            showAll ? "" : "h-[900px] overflow-hidden"
          }`}
        >
          <div className="grid lg:grid-cols-5 pt-16">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col ${columnOffsets[columnIndex]}`}
              >
                {column.map((post) => (
                  <article
                    key={post.id}
                    className="min-h-[224px] border border-gray-100 bg-[#fcfdfc] px-7 py-6 lg:min-h-[238px] lg:px-9 lg:py-7"
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

          {!showAll && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/90 to-transparent" />
              <div className="flex justify-center items-center pointer-events-none absolute inset-x-0 bottom-8 z-10">
                <button
                  onClick={handleToggle}
                  className="pointer-events-auto rounded-lg border border-dark bg-dark px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-gray-800 cursor-pointer shadow-sm"
                >
                  Show More
                </button>
              </div>
            </>
          )}

          {showAll && (
            <div className="sticky bottom-8 z-50 flex justify-center pointer-events-none mt-10 pb-8">
              <button
                onClick={handleToggle}
                className="pointer-events-auto rounded-lg border border-dark bg-dark px-7 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-gray-800 cursor-pointer shadow-2xl shadow-black/40"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuildForDevelopers;
