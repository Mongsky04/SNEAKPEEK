import React from 'react'
import { assets } from '../assets/assets'
import close_icon from "../assets/close_icon.png"

const Banner = () => {
  return (
    <div className=" w-full bg-neonGreen flex flex-row items-center p-2.5 gap-3 h-9 justify-between">
      <div className=" text-base">
        <marquee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim
          veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea
          commodo consequat. Duis aute irure dolor inreprehenderit in voluptate
          velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint
          occaecat cupidatat non proident, sunt inculpa qui officia deserunt
          mollit anim id est laborum.
        </marquee>
      </div>
      <div className=" w-11 justify-center items-center flex">
        <img src={close_icon} alt="" />
      </div>
    </div>
  );
}

export default Banner
