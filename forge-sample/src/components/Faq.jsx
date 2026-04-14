import React, { useState } from "react";
import { faqs } from "../../data/faqs";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="border border-gray-200 mb-12">
      {/*----------Header---------- */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400 ">9</span>
          <span className="text-headerGreen uppercase">FAQ</span>
          <span className="text-gray-400 hidden sm:inline">
            Jim • [CORE-1234] UI polish
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-3xl text-start mb-2">FAQ</h1>
        <p className="text-xl text-start text-gray-500 font-light mb-16">
          Everything you need to know about Forge.
        </p>
      </div>

      {/*----------FAQs---------------- */}
      <div className="max-w-7xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-100 hover:bg-gray-50"
            >
              <div className="max-w-3xl mx-auto">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
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
                    <p className="text-gray-500 font-light text-[16px] pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
