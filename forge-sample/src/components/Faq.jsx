import React, { useState } from "react";
import { faqs } from "../../data/faqs";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      {/*-------------Header------------ */}
      <div className="flex items-stretch bg-innerBorderGray">
        <div className="w-16 md:w-24 lg:w-[120px] shrink-0 flex items-center justify-center py-2 md:py-2.5">
          <span className="text-gray-400 font-mono text-xs md:text-sm">9</span>
        </div>
        <div className="flex-1 px-8 flex items-center space-x-3 font-mono text-xs">
          <span className="text-headerGreen uppercase tracking-wider">FAQ</span>
          <span className="text-gray-400 hidden sm:inline truncate">
            Jim • [CORE-1234] UI polish
          </span>
        </div>
      </div>
      <div className="w-full bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto border-x border-gray-100">
          <div className="flex pt-16 pb-8 md:pt-24 md:pb-12">
            <div className="hidden md:block w-24 lg:w-[120px] shrink-0"></div>
            <div className="flex-1 px-6 md:px-10 lg:px-35">
              <div className="max-w-4xl">
                <h2 className="text-[2rem] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                  FAQ
                </h2>
                <p className="text-lg md:text-[1.3rem] text-gray-500 leading-relaxed max-w-4xl">
                  Everything you need to know about Forge.
                </p>
              </div>
            </div>
          </div>

          {/*----------FAQs---------------- */}
          <div className="w-full bg-white pb-20">
            <div className="border-t border-gray-100">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex w-full">
                      <div className="mx-auto px-6 md:px-10 lg:px-12">
                        <div className="max-w-3xl">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full py-6 flex justify-between items-center focus:outline-none group"
                            aria-expanded={isOpen}
                          >
                            <span className="text-[1.1rem] font-medium text-gray-900">
                              {faq.question}
                            </span>

                            {/*---------- Plus / Cross Icon----------- */}
                            <div className="flex-shrink-0 ml-4 relative w-3 h-3 text-gray-400 group-hover:text-[#10B981] transition-colors">
                              <div
                                className={`absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-current -translate-x-1/2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                              ></div>

                              <div className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-current -translate-y-1/2"></div>
                            </div>
                          </button>

                          <div
                            className={`grid transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100 pb-6"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-gray-500 font-light text-[16px] pr-8 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-15 w-full border-t border-gray-100 bg-white"></div>
      </div>
    </section>
  );
};

export default Faq;
