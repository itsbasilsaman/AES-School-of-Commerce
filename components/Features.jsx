import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="overflow-hidden relative bg-black px-5% font-main pt-24 pb-[106px]">
      <div className="mx-auto max-w-7xl">
        <div className=" font-main ">
          <h2 className="text-2xl mb-12 text-center font-bold text-white">
            Why we are the Best Accounting Institute?
          </h2>
          <div className="grid z-10 grid-cols-2 overflow-hidden relative xl:grid-cols-none xl:grid-flow-col text-center gap-y-10  " data-aos="zoom-up" data-aos-duration='800'>
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`xl:px-20 px-4 w-full xl:w-auto  ${
                  features.length == feature.id && feature.id % 2 == 0
                    ? " xl:border-none"
                    : ""
                } ${
                  feature.id % 2 == 0
                    ? "border-none xl:border-solid"
                    : "border-solid"
                } border-r border-r-slate-500  text-center`}
              >
                <div className="lg:text-[68px] text-[40px]  mb-4 text-white font-bold">
                  {feature.number}
                </div>
                <div className="text-lg text-neutral-50">{feature.feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute rounded-full -z-0 -top-96 -left-64  w-[43%] pt-[43%] border border-slate-600"></div>
      <div className="absolute rounded-full -z-0 -bottom-96 -right-64  w-[43%] pt-[43%] border border-slate-600"></div>
    </section>
  );
};

export default Features;
