import React from "react";
import AboutPageHead from "./AboutPageHead";
import Mission from "./Mission";
import OurOffers from "./OurOffers";

export const metadata = {
  title: "Top Accounting Courses in Malappuram | AE's School of Commerce",
  description: "Join the Best Accounting Courses in Malappuram at AE's School of Commerce. Learn from expert faculty and gain a successful career in accounting and finance Now",
};

const about = () => {
  return (
    <div>
      <AboutPageHead />
      <Mission />
      <OurOffers />
    </div>
  );
};

export default about;
