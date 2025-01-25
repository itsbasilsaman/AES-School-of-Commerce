import Button from "@components/Button";
import AnimatedButton from "@components/AnimatedButton";
import animationJson from "@/lottie/system-outline-19-book.json";
import { offering } from "@constants";
import Image from "next/image";

const OurOffers = () => {
  return (
    <section className="overflow-hidden  px-5% font-main pt-16 lg:pt-28 py-32">
      <div className="mx-auto max-w-7xl">
        <div className=" relative max-w-md  text-center mx-auto ">
          <h2 className="text-black  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            What AE's believe in ?
          </h2>
        </div>
        <div className="relative z-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid md:grid-cols-2 lg:grid-cols-3 relative text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6"
          >
            {offering.map((offer) => (
              
                <div className="bg-white flex flex-col justify-center text-leftrelative z-10 " key={offer.id}>
                  <div className="pt-10 px-6 pb-10 flex flex-col justify-center items-center bg-[#fbfbfb] md:px-10 md:pb-10 lg:px-8 lg:pt-12 lg:pb-12 ">
                  <div className="w-32 h-32 mb-10  rounded-full bg-primary flex justify-center items-center">
                    {offer.icon}
                  </div>
                    <h3 className="mb-4 lg:group-hover:text-primary text-black text-2xl font-bold leading-snug">
                      {offer.title}
                    </h3>
                    <p className="text-lg text-textgray mb-8">
                      {offer.desciption}
                    </p>
                  </div>
                </div>
            ))}
          </div>
          <div
            className="absolute -top-2  lg:-top-8 -right-4 lg:-right-[5.5rem] w-36 h-36 z-0 "
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Advanced CA course in Perinthalmanna" />
          </div>
          <div
            className="absolute top-auto lg:-bottom-[4.5rem] -left-8 lg:-left-10 w-36 h-36 z-0 "
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-offset="-200"
          >
            <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="CS institute in Perinthalmanna" />
          </div>
        </div>
        <div className="md:mt-20 mt-14 flex flex-col text-center w-full md:justify-center md:items-center  md:flex-row gap-5 md:gap-3">
          <Button text="Get Free Consultation" href="/contact" />
          <AnimatedButton text="View Courses" animationData={animationJson} />
        </div>
      </div>
    </section>
  );
};

export default OurOffers;
