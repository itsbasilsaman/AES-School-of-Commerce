'use client'

import { useState } from "react";
import { faqRight, faqLeft } from "../constants";

const Faq = () => {
  const [indexItem , setIndexItem] = useState(null)
  const [isActive,setIsActive] = useState(false);

  const handleClick = (id) => {
    setIndexItem(id);
    setIsActive(!isActive)
  }

  return (
    <section className="overflow-hidden relative bg-[#fbfbfb] px-5% font-main pt-24 pb-[106px]">
      <div className="mx-auto max-w-7xl text-center">
        <div className="max-w-[616px] mx-auto px-6">
          <h2 className="text-black font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="text-textgray text-lg mt-6">
              Here are some of the frequently asked questions by the aspirants persuing their career in accountancy field
          </p>
        </div>
        <div className="grid xl:grid-cols-2 gap-5 xl:gap-14 mt-10" data-aos="fade-up" data-aos-duration="800">
          <div className="relative gap-5 flex flex-col">
            {faqLeft.map((faq, index) => (
              <div
                onClick={ () =>handleClick(faq.id)}
                key={index}
                className={`py-8 px-6 cursor-pointer group shadow-faq transition-[height] ease-linear lg:hover:shadow-faq-hover duration-200  overflow-hidden border ${
                  indexItem === faq.id && isActive ? "border-primary" : "border-slate-50"
                }  bg-white`}
              >
                <div
                  className={`flex duration-200 ${
                    indexItem === faq.id && isActive ? "mb-5" : "mb-0"
                  } items-center gap-5 `}
                >
                  <div
                    className={`w-9 h-9 min-h-[36px] max-h-9 min-w-[36px] rounded-full flex justify-center duration-200 relative items-center ${
                      indexItem === faq.id && isActive ? "bg-primary" : "bg-slate-100"
                    } `}
                  >
                    <div
                      className={`absolute duration-200 w-[14px] min-h-[2px] ${
                        indexItem === faq.id && isActive ? "bg-white" : "bg-slate-400"
                      } `}
                    ></div>
                    <div
                      className={`absolute ${
                        indexItem === faq.id && isActive
                          ? "rotate-90 opacity-0 bg-white"
                          : "rotate-0 opacity-100 bg-slate-400"
                      } group-hover: duration-200 min-h-[14px] w-[2px] `}
                    ></div>
                  </div>
                  <div
                    className={`${
                      indexItem === faq.id && isActive ? "text-primary" : "text-black"
                    } text-lg text-left md:text-[22px] font-bold duration-200`}
                  >
                    {faq.question}
                  </div>
                </div>
                <div>
                  <p
                    className={`text-textgray ease-in transition  ${
                      indexItem === faq.id && isActive ? "opacity-1 h-full" : "opacity-0 h-0"
                    } duration-75  text-left lg:ml-14 text-base md:text-lg`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}

            </div>
          <div className="relative gap-5 flex flex-col ">
          {faqRight.map((faq, index) => (
              <div
                onClick={ () =>handleClick(faq.id)}
                key={index}
                className={`py-8 px-6 cursor-pointer group shadow-faq transition-[height] ease-linear lg:hover:shadow-faq-hover duration-200  overflow-hidden border ${
                  indexItem === faq.id && isActive ? "border-primary" : "border-slate-50"
                }  bg-white`}
              >
                <div
                  className={`flex duration-200 ${
                    indexItem === faq.id && isActive ? "mb-5" : "mb-0"
                  } items-center gap-5 `}
                >
                  <div
                    className={`w-9 h-9 min-h-[36px] max-h-9 min-w-[36px] rounded-full flex justify-center duration-200 relative items-center ${
                      indexItem === faq.id && isActive ? "bg-primary" : "bg-slate-100"
                    } `}
                  >
                    <div
                      className={`absolute duration-200 w-[14px] min-h-[2px] ${
                        indexItem === faq.id && isActive ? "bg-white" : "bg-slate-400"
                      } `}
                    ></div>
                    <div
                      className={`absolute ${
                        indexItem === faq.id && isActive
                          ? "rotate-90 opacity-0 bg-white"
                          : "rotate-0 opacity-100 bg-slate-400"
                      } group-hover: duration-200 min-h-[14px] w-[2px] `}
                    ></div>
                  </div>
                  <div
                    className={`${
                      indexItem === faq.id && isActive ? "text-primary" : "text-black"
                    } text-lg text-left md:text-[22px] font-bold duration-200`}
                  >
                    {faq.question}
                  </div>
                </div>
                <div>
                  <p
                    className={`text-textgray ease-in transition  ${
                      indexItem === faq.id && isActive ? "opacity-1 h-full" : "opacity-0 h-0"
                    } duration-75  text-left lg:ml-14 text-base md:text-lg`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
