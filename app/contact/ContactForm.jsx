"use client";

import React from "react";
import { useForm } from "@formcarry/react";

const ContactForm = () => {
  const { state, submit } = useForm({
    id: `4CHDBW1LNq`,
  });

  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="relative font-main bg-white w-full lg:max-w-[687px] max-w-full"
      data-aos="zoom-out"
      data-aos-duration="800"
      data-aos-delay="300"
      data-aos-offset="-200"
    >
      <div className="min-h-[850px] shadow-faq py-12 px-6 md:min-h-[951px] md:py-14 md:px-9 lg:min-h-[729px] relative z-10 lg:py-20 lg:px-10 flex items-center border border-[#eaeaea]">
        <div className="flex-1 lg:mr-4">
          <form onSubmit={submit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-y-5 gap-x-9">
              <div className="">
                <label
                  htmlFor="name"
                  className="block mb-4 text-lg text-blackbg leading-[1.1] font-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="px-5 w-full lg:px-6 min-h-[68px]  focus:border-primary focus:outline-none mb-0 border-2 bg-[#fbfbfb] rounded-full border-[#fbfbfb] text-blackbg font-lg leading-[1.1]"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-4 text-lg text-blackbg leading-[1.1] font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@yourmail.com"
                  id="email"
                  name="email"
                  className="px-5  lg:px-6 min-h-[68px] w-full mb-0 border-2 focus:border-primary focus:outline-none bg-[#fbfbfb]  rounded-full border-[#fbfbfb] text-blackbg font-lg leading-[1.1]"
                />
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="block mb-4 text-lg text-blackbg leading-[1.1] font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  id="phone"
                  name="phone"
                  className="px-5 lg:px-6 min-h-[68px] w-full mb-0 focus:border-primary focus:outline-none border-2 bg-[#fbfbfb]  rounded-full border-[#fbfbfb] text-blackbg font-lg leading-[1.1]"
                />
              </div>
              <div className="">
                <label
                  htmlFor="subject"
                  className="block mb-4 text-lg text-blackbg leading-[1.1] font-bold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Course Enquiry"
                  id="subject"
                  name="subject"
                  className="px-5 lg:px-6 min-h-[68px] w-full mb-0 focus:border-primary focus:outline-none border-2 bg-[#fbfbfb]  rounded-full border-[#fbfbfb] text-blackbg font-lg leading-[1.1]"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="block mb-4 text-lg text-blackbg leading-[1.1] font-bold"
              >
                Message
              </label>
              <textarea
                placeholder="write your message here.."
                maxLength={5000}
                id="message"
                name="message"
                className="h-auto px-5 max-h-[200px] max-w-full rounded-xl focus:border-primary focus:outline-none bg-[#fbfbfb]  min-h-[163px] min-w-full mb-0 py-5 lg:px-6 border-2 border-[#fbfbfb] text-blackbg text-lg "
              ></textarea>
            </div>
            <button
              onSubmit={submit}
              type="submit"
              className="block px-6 cursor-pointer py-6 w-full lg:w-auto lg:py-6 lg:px-12 bg-primary lg:hover:bg-indigo-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary focus:outline-none shadow-cta  rounded-full mt-7 text-white leading-[1.1] font-bold text-center"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
