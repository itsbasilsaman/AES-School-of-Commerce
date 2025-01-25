import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link
      className="bg-primary duration-200 tap-highlight-color-transparent focus:border-none lg:hover:bg-indigo-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary focus:outline-none px-10 py-5 shadow-cta lg:hover:shadow-none rounded-full text-white"
      href={href !== undefined ? href : "/consultation"}
    >
      {text}
    </Link>
  );
};

export default Button;
