import React from 'react'
import nike from "../assets/nike.jpg"
import adidas from "../assets/adidas.jpg"
import converse from "../assets/converse.jpg"
import newbalance from "../assets/newbalance.jpg"

const Logo = () => {
  return (
    <div>
      <p className=" font-semibold text-center mt-5 mb-5">
        Used by the world's most average companies
      </p>
      <div className=" flex justify-around border border-black p-5">
        <img src={nike} alt="" className=" size-24 w-40" />
        <img src={adidas} alt="" className=" size-24 w-36" />
        <img src={converse} alt="" className=" size-24 w-40" />
        <img src={newbalance} alt="" className=" size-24 w-48" />
      </div>
    </div>
  );
}

export default Logo
