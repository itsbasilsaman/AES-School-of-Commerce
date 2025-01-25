import AnimatedButton from "@components/AnimatedButton"
import Button from "@components/Button"
import animationData from "@lottie/system-outline-19-book.json"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="overflow-hidden px-5% font-main pt-10 lg:pt-20 ">
      <div className="mx-auto max-w-7xl    ">
        <div className="grid grid-rows-auto gap-24 xl:grid-cols-2">
          <div
            className="w-full  h-auto relative flex flex-col justify-center"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] 2xl:text-[61px] md:text-[55px] md:leading-[1.233] font-bold">
              The Best Accounting Institute in Perinthalmanna
            </h1>
            <p className=" text-lg text-textgray">
              Learn accounting from the Best Accounting Institute in Perinthalmanna under the guidance of the best faculties. Top the
              world of accounting with AE's school of commerce.
            </p>
            <div className="md:mt-20 mt-14 flex flex-col text-center  md:flex-row gap-5 md:gap-3 ">
              <Button text="Get Free Consultation" href="/contact" />
              <AnimatedButton text="View Courses" animationData={animationData} />
            </div>
          </div>
          <div className="relative  flex justify-center items-center">
            <div
              className="absolute hidden lg:block -top-12 left-40 w-36 h-36 -z-10"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <svg width="200" height="200" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M308.506 154.253C308.506 239.445 239.445 308.506 154.253 308.506C69.0615 308.506 0 239.445 0 154.253C0 69.0615 69.0615 0 154.253 0C239.445 0 308.506 69.0615 308.506 154.253ZM49.2478 154.253C49.2478 212.246 96.2602 259.258 154.253 259.258C212.246 259.258 259.258 212.246 259.258 154.253C259.258 96.2602 212.246 49.2478 154.253 49.2478C96.2602 49.2478 49.2478 96.2602 49.2478 154.253Z"
                  fill="#2e328d"
                />
              </svg>
            </div>
            <div
              className="absolute l -top-2 lg:top-auto lg:bottom-4 left- lg:left-8 w-36 h-36 -z-10 "
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="-200"
            >
              <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Affordable accounting institute in Perinthalmanna" />
            </div>
            <div className="relative ">
              <Image
                src="/assets/hero.webp"
                alt="Top ACCA coaching institute in Perinthalmanna"
                sizes="50 vh"
                width={410}
                height={410}
                priority
                loading="eager"
                data-aos="zoom-out"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="-500"
              />
            </div>

            <div
              className="absolute top-48 -right-6 md:right-14 lg:right-0 w-36 h-36 -z-10 "
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="CMA training center in Perinthalmanna" />
            </div>
          </div>
        </div>
        <div
          className="bg-[#f8f8f8] py-10 mb-9 w-full lg:flex hidden   justify-center  items-center gap-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="max-w-[100px] flex">
            <Image className="flex-custom" src="/assets/ca.png" width={100} height={100} alt="CMA professional course in Perinthalmanna" />
          </div>
          <div className="max-w-[100px] flex">
            <Image className="flex-custom" src="/assets/cma.webp" width={100} height={100} alt="CA coaching classes in Perinthalmanna" />
          </div>
          <div className="max-w-[100px] flex">
            <Image className="flex-custom" src="/assets/cs.webp" width={100} height={100} alt="Advanced CA course in Perinthalmanna" />
          </div>
          <div className="max-w-[100px] flex">
            <Image className="flex-custom" src="/assets/ifrs.png" width={100} height={100} alt="Reputed CS institute in Perinthalmanna" />
          </div>
          <div className="max-w-[100px] flex">
            <Image className="flex-custom" src="/assets/catlam.png" width={100} height={100} alt="CS course in Perinthalmanna" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
