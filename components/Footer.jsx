import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import Logo from "@/public/assets/logo.png";
import Facebook from "@/public/assets/facebook.png";
import Instagram from "@/public/assets/instagram.png";
import Twitter from "@/public/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="overflow-x-hidden px-5% py-[100px] bg-white">
      {/* <div className="mx-auto max-w-7xl">
        <div className="grid gap-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="md:col-span-3 flex flex-col">
            <Image src={Logo} className="mb-3" />
            <p className="max-w-[30ch] text-whiteText">
              Compassionate healthcare professionals dedicated to your
              well-being and vitality.
            </p>
            <div className="flex gap-6 mt-10">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-sm flex justify-center items-center border border-whiteText/10 hover:border-whiteText duration-100 "
              >
                <Image src={Facebook} width={18} height={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-sm flex justify-center items-center border border-whiteText/10 hover:border-whiteText duration-100 "
              >
                <Image src={Instagram} width={18} height={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-sm flex justify-center items-center border border-whiteText/10 hover:border-whiteText duration-100 "
              >
                <Image src={Twitter} width={18} height={18} />
              </Link>
            </div>
          </div>
          {footerLinks.map((footerlink,index) => (
            <div key={index}>
              <div className="text-secondary text-xs tracking-[0.06em] font-semibold leading-4 mb-6 uppercase">{footerlink.title}</div>
              <ul className="flex flex-col gap-5">
                {footerlink.links.map((link , index) => (
                  <li key={index}><Link className="text-whiteText" href={link.url}>{link.title}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
