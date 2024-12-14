import React from 'react'
import Card1 from "../assets/Card1.png"
import Card2 from "../assets/Card2.png"
import Card3 from "../assets/Card3.png"
import nbimage from "../assets/nbimage.png"

const Zine = () => {
  return (
    <div>
      <div className=" justify-center items-center text-center mt-7 mb-7">
        <p className=" font-bold text-6xl uppercase">lorem ipsum lorem</p>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex justify-around border border-black p-5">
        <img src={Card1} className=" border border-black" />
        <img src={Card2} className=" border border-black" />
        <img src={Card3} className=" border border-black" />
      </div>
      <div className=" flex justify-between mt-16 mb-16">
        <div><p className=" font-bold uppercase text-7xl">lorem lorem <br/> lorem lorem <br/> lorem lorem</p><p className=" mt-8 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Modi asperiores maxime voluptatum ducimus! Repellat libero commodi <br/> nulla iure aliquid, voluptates sit adipisci, omnis mollitia deleniti <br/> vitae iste porro sapiente cum.</p></div>
        <img src={nbimage} className=" size-2/4"/>

      </div>
    </div>
  );
}

export default Zine
