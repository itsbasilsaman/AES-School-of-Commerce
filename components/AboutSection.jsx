import React from "react"
import Button from "./Button"
import AnimatedButton from "./AnimatedButton"
import AnimationJson from "@lottie/system-outline-19-book.json"
import Image from "next/image"

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:gap-32 place-items-center lg:grid-cols-2">
          <div className="w-full order-2 lg:order-1 relative h-auto  flex flex-col justify-center items-center">
            <div
              className="absolute z-0 -bottom-2 lg:-bottom-[4.5rem] -right-4 lg:-right-[5.5rem] w-36 h-36  "
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Certified ACCA training in Perinthalmanna" />
            </div>
            <Image
              src="/assets/classroom.jpg"
              alt="CMA course near me in Perinthalmanna"
              data-aos="zoom-out"
              data-aos-duration="800"
              className="z-10"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <div
            className="relative flex order-1 lg:order-2 flex-col justify-center lg:mr-5"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">About Us</h2>
            <p className="mt-6 text-textgray text-lg ">
              AE's School of Commerce is one of the Best Accounting Institutes in Perinthalmannna offering Best Accounting
              Courses in the malabar region.
              <br />
              <br /> We provide the Best Accounting courses like CATLAM, IFRS, CA, CMA, CS that help our student to pursue a
              great career in the accounting field. Our team of highly experienced faculties guide you to a successfull
              path.
            </p>
            <div className="md:mt-16 mt-14 flex flex-col text-center  md:flex-row gap-5 md:gap-3">
              <Button text="About Us" href="/about" />
              <AnimatedButton text="View Courses" animationData={AnimationJson} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
