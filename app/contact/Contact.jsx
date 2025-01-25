import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { Mail, Phone, Map } from "lucide-react";



const ContactPage = () => {
  
  return (
    <section className="oveflow-hidden font-main relative px-5% pt-5 md:pt-10 lg:pt-20">
      <div className="mx-auto max-w-7xl ">
        <div
          className="grid grid-cols-none lg:grid-cols-2 gap-y-10 mb-40 "
          data-aos="zoom-up"
          data-aos-duration="800"
          data-aos-delay="100"
          
        >
          <div className="z-10 relative w-full lg:max-w-xl lg:min-w-[380px] mr-8">
            <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
              Contact Best Accounting Institute Today!
            </h1>
            <p className=" text-lg text-textgray mb-10 ">
              Want to know more about how to enroll in our specially designed courses and build a great career out of it. Lets talk and start realizing your dreams now.
            </p>
            <div className="grid gap-5  md:gap-7 lg:gap-8">
              <Link
                className="flex items-center lg:hover:text-primary hover:gap-2 duration-200 group box-border text-blackbg leading-none font-bold text-base gap-3 "
                href="mailto:aeschoolofcommerce@gmail.com"
              >
                <div className="w-[35px] lg:group-hover:scale-110 duration-200 lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center flex-1 rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                  <Mail color="white" size={20} />
                </div>
                <div className="mb-[10px]">aeschoolofcommerce@gmail.com</div>
              </Link>
              <Link
                className="flex items-center lg:hover:text-primary text-blackbg group hover:gap-2 duration-200 leading-none font-bold text-base gap-3 "
                href="tel:+918089145551"
              >
                <div className="w-[35px] lg:w-[42px] lg:group-hover:scale-110 duration-200 lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                  <Phone color="white" size={20} />
                </div>
                <div className="mb-[10px] ">+91 80891 45551</div>
              </Link>
              <div className="flex items-center text-blackbg  leading-none font-bold text-base gap-3">
                <div className="w-[35px] lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] lg:max-h-[42px] lg:max-w-[42px]  flex justify-center  flex-shrink-0 rounded-full items-center bg-primary h-[35px] min-w-[35px] min-h-[35px]  mb-[10px]">
                  <Map color="white" size={20} />
                </div>
                <div className="mb-[10px] max-w-sm leading-tight">
                  2nd floor, Sahari building, Jubilee Rd,
                  Perintalmanna,Malappuram, Kerala 679322
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};



export default ContactPage;
