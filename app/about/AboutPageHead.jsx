import React from "react"
import Button from "@components/Button"
import AnimatedButton from "@components/AnimatedButton"
import animationData from "@lottie/system-outline-19-book.json"
import Image from "next/image"
  
const AboutPageHead = () => {
  return (
    <section className="oveflow-hidden font-main relative px-5% pt-5 md:pt-10 lg:pt-20 pb-14 lg:pb-32">
      <div className="mx-auto max-w-7xl ">
        <div className="flex lg:flex-row flex-col-reverse gap-y-14 relative justify-between items-center">
          <div className="relative  flex max-w-2xl lg:mr-9 justify-center items-center">
          <Image
  className="relative z-10"
  src="/assets/hero.png" // Remove "/public" as it's redundant
  width={500} // Specify width here (adjust as needed)
  height={300} // Specify height here (adjust as needed)
  alt="CMA training center in Perinthalmanna"
  data-aos="zoom-out"
  data-aos-duration="800"
  data-aos-delay="100"
/>
            <div
              className="absolute  lg:-top-2 -bottom-8 lg:left-8  z-0 "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-offset="-200"
            >
              <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="CMA professional course in Perinthalmanna" />
            </div>
          </div>
          <div
            className="relative z-10 lg:max-w-[43%] lg:min-w-[438px]"
            data-aos="zoom-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
              About us
            </h1>
            <p className=" text-lg  text-textgray mb-10 ">
              AE's School of Commerce, the Best Accounting Institute in Perinthalmanna offers a wide range of Best Accounting Courses
              including CATLAM, IFRS, CA, CMA, and CS, led by experienced faculty, to shape a successful career in the
              accounting field.
            </p>
            <div className="mb-3 grid grid-cols-1  gap-4 ">
              <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={13} cy={13} r="13" fill="#2e328d" />
                  <path d="M19.5 8.66666L10.8334 17.3333L6.50003 13" stroke="white" stroke-miterlimit="10" />
                </svg>
                <div className="text-lg font-medium">15+ years of experience</div>
              </div>
            </div>
            <div className="mb-12 grid grid-cols-1  gap-4 ">
              <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={13} cy={13} r="13" fill="#2e328d" />
                  <path d="M19.5 8.66666L10.8334 17.3333L6.50003 13" stroke="white" stroke-miterlimit="10" />
                </svg>
                <div className="text-lg font-medium">10+ Experts to teach</div>
              </div>
              <div className="mb-3 grid grid-cols-1  gap-4 ">
                <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={13} cy={13} r="13" fill="#2e328d" />
                    <path d="M19.5 8.66666L10.8334 17.3333L6.50003 13" stroke="white" stroke-miterlimit="10" />
                  </svg>
                  <div className="text-lg font-medium">Teached over 255+ students </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col text-center  md:flex-row gap-5 md:gap-3 ">
              <Button text="Get Free Consultation" href="/contact" />
              <AnimatedButton text="View Courses" animationData={animationData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPageHead
