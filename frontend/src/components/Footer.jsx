/*import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className=" mb-5 w-32" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            cupiditate dignissimos sequi harum veritatis nobis molestias
            corporis ducimus iste deleniti, dolorem ullam saepe necessitatibus
            reiciendis. Sed consequatur laborum eius saepe.
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-789</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className=" py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;*/

// eslint-disable-next-line no-unused-vars
import React from "react";
import white_logo from "../assets/white_logo.png";
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import X from "../assets/X.png"
import Linkedin from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png"

const Footer = () => {
  const numberWords = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
  ];

  const links = Array.from({ length: 15 }, (_, index) => ({
    content: `Link ${numberWords[index]}`,
  }));

  return (
    <div className=" bg-black border border-black text-white block py-14 mt-20 w-full ">
      <div className=" flex text-base px-12 pb-12">
        <img src={white_logo} alt="" className=" flex size-14 w-24" />
        <div className=" flex mx-16">
          <div className=" grid grid-cols-3">
            {links.map((link, index) => (
              <p key={index} className=" my-3 mx-28">
                {link.content}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex justify-between mx-12 items-center">
        <p>&copy; 2024 MPPL. All rights reserved.</p>
        <div className=" flex gap-4">
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={X} />
        <img src={Linkedin} />
        <img src={Youtube} /></div>
      </div>
    </div>
  );
};

export default Footer;
