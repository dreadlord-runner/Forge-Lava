import React from "react";
import { tweetPosts } from "../../../data/tweetPosts";

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
  return (
    <section className="pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 py-6">
        {/*---------Header---------- */}
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-gray-400">6</span>
          <span className="text-headerGreen uppercase">
            Built by developers for developers
          </span>
          <span className="text-gray-400">
            Ash Rich - [CORE-2736] Add support for deployment rollbacks
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center mt-12 md:mt-16">
        <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
          10+ years of developer love
        </h2>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Crafted with passion for over a decade, <br /> loved by web artisans
          shaping the modern web.
        </p>
      </div>

      {/*-------------Tweet Post--------------*/}
      <div className="relative mx-auto mt-14 h-[760px] max-w-[1740px] overflow-hidden px-4 sm:h-[820px] sm:px-6 lg:mt-20 lg:h-[900px] lg:px-8">
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

        <div className="pointer-events-none absolute inset-x-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <button className="rounded-lg border border-dark bg-dark px-7 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-gray-800 cursor-pointer">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildForDevelopers;
