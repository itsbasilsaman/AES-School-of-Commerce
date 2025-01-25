"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper"
import { testimonials } from "@constants"
import Image from "next/image"

const TestimonialSection = () => {
  return (
    <section className="overflow-hidden font-main py-[76px] md:py-24 lg:pt-36 lg:pb-40 bg-black">
      <div className="mb-10 text-center md:mb-12 relative z-10 lg:mb-14 px-4 max-w-[728px] mx-auto">
        <h2 className="text-white mb-10 lg:mb-6 md:mb-4 md:text-4xl  font-bold leading-tight text-[28px] lg:text-[40px]">
          Hear what our amazing students say
        </h2>
        <p className="text-slate-100 max-w-lg text-center mx-auto flex-1  text-lg mt-6">
          Having the best alumni is what make us the Best Accounting Institute. Hear to what some of our notable alumni have to say
          about us.
        </p>
      </div>
      <div className="relative px-[5%] lg:px-6 max-w-[1048px] mx-auto ">
        <div className="">
          <div className="relative inline-block w-full h-full whitespace-normal text-left">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="px-6 pt-10 md:pb-10 flex z-10 relative gap-10 lg:gap-20 pb-11 md:items-center flex-col md:flex-row overflow-hidden lg:pt-20 lg:pb-[75px] lg:px-[92px] shadow-faq bg-white"
                    data-aos="zoom-up"
                    data-aos-duration="800"
                  >
                    <img
                      src={`/assets/student-${testimonial.id}.jpg`}
                      sizes="(max-width: 768px) 10vw"
                      loading="lazy"
                      className="rounded-[100%] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[150px] h-[150px]   lg:mt-0"
                      alt="Best CA coaching center in Perinthalmanna"
                    />
                    <div className="max-w-[483px]  mb-[14px]">
                      <h3 className="mb-4 text-black font-bold text-[25px] leading-snug">{testimonial.title}</h3>
                      <p className="text-slate-400 text-lg mb-5 ">{testimonial.desciption}</p>
                      <div className="mt-6 mb-[30px] w-full min-h-[1px] bg-slate-400 "></div>
                      <div className="mb-[1px] text-black text-lg leading-normal font-bold">{testimonial.name}</div>
                      <div className="text-lg text-primary font-medium leading-snug ">{testimonial.place}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute hidden lg:block rounded-full -top-48 -right-44 z-0  w-[43%] pt-[43%] border border-slate-600"></div>
          <div className="absolute  hidden lg:block rounded-full -bottom-48 -left-44  w-[43%] pt-[43%] border border-slate-600"></div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
