/*import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border border-gray-400">
      <div className=" w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className=" text-[#414141]">
          <div className=" flex items-center gap-2">
            <p className=" w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className=" flex items-center gap-2">
            <p className=" font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className=" w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      <img src={assets.hero_img} alt="" className=" w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;*/


import React from "react";
import { assets } from "../assets/assets";
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-start"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className=" text-6xl font-bold mx-7">
          <p className=" mb-2">Your</p>
          <p className=" mb-2">Gateway to </p>
          <p className=" mb-2">Exclusive </p>
          <p className=" mb-2">Sneakers.</p>
        </div>
      </div>
      <div className=" bg-black flex uppercase text-5xl font-bold justify-center items-center h-28">
        <p className=" text-neonGreen mx-3"> Lorem Ipsum</p>
        <p className="text-gray-300 mx-3">Lorem Ipsum</p>
        <p className=" text-white mx-3">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default Hero;
