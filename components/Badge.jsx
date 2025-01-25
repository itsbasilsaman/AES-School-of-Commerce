import React from "react";
import Button from "./Button";

const Badge = () => {
  return (
    <section className="overflow-hidden bg-two-sides px-5% font-main ">
      <div className="mx-auto max-w-7xl   ">
        <div className="relative flex flex-col lg:flex-row overflow-hidden text-center lg:text-left gap-14 px-6 py-12 lg:p-14 xl:p-20 justify-between bg-black items-center ">
          <div
            className="relative z-10  overflow-hidden w-full lg:max-w-[500px] lg:mr-8 flex-1"
            data-aos="zoom-up"
            data-aos-duration="500"
          >
            <h2 className="text-white text-center lg:text-left mb-6 font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
              Start Learning Today!
            </h2>
            <p className="text-slate-400 text-center lg:text-left text-lg">
              Discover some of our Best Accounting courses and build your
              dream career with us
            </p>
          </div>
          <div
            className="relative z-10"
            data-aos="zoom-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <Button text="Get Free Consultation" href="/contact" />
          </div>
          <div className="absolute rounded-full -top-80 -left-10  w-[43%] pt-[43%] border border-slate-600"></div>
          <div className="absolute rounded-full -bottom-80 -right-10  w-[43%] pt-[43%] border border-slate-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Badge;
