/*import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.hero_img}
          alt=""
          className=" w-full md:max-w-[480px] object-cover"
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washinton, USA
          </p>
          <p className=" text-gray-500">
            Tel: (415) 555-5552 <br /> Email: admin@sneakpeek.com
          </p>
          <p className=" font-semibold text-xl text-gray-600">
            Careers at Sneakpeek
          </p>
          <p className=" text-gray-500">
            Learn more about our team and job openings.
          </p>
          <button className=" border border-black px-8 py-4 text-sm hover:bg-neonGreen hover:text-black transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;*/


import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import contactlogo from "../assets/contactlogo.png"

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={contactlogo}
          alt=""
          className=" w-full md:max-w-[480px]"
        />
        <div className=" flex flex-col justify-center items-start gap-0">
          <p className=" font-semibold text-4xl text-black">Get in touch</p>
          <p className=" text-black">
            Tel : 081234567890
          </p>
          <p className=" text-black">
            Email : admin@sneakpeak.com
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
