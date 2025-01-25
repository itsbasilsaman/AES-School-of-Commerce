import React from "react";
import Faq from "@components/Faq";
import ContactPage from "./Contact";

export const metadata = {
  title : `Top Accounting Courses in Palakkad | AE's School of Commerce`,
  description : `Professional accounting courses in Palakkad at AE's School of Commerce. Get expert training and practical knowledge to excel in accounting and finance careers.`
}

const Contact = () => {
  return (
    <>
      <ContactPage />
      <Faq />
    </>
  );
};

export default Contact;
