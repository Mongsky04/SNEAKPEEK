/*import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className=" w-full md:max-w-[450px]"
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            quisquam corporis nam incidunt eum, veritatis laudantium cum tempore
            ipsa ut officia libero consequatur dolores natus illo saepe, sed
            autem magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            tempore quaerat pariatur dignissimos placeat, quo maiores quidem
            consectetur? Iusto voluptas illo esse facilis possimus quia
            obcaecati ipsa earum asperiores?
          </p>
          <b className=" text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit facere iusto molestias assumenda blanditiis labore
            voluptate consequuntur exercitationem dolorem quia distinctio totam,
            saepe eaque tenetur ea quidem ipsum id similique.
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;*/

import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import placeimg from "../assets/placeimg.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";
import najwan from "../assets/najwan.png";
import akmal from "../assets/akmal.png";
import aufar from "../assets/aufar.png";
import rayssa from "../assets/rayssa.png";
import zaky from "../assets/zaky.png";


const About = () => {
  return (
    <div>
      <div className=" text-center pt-8 border-0 mb-24">
        <h1 className=" uppercase text-black text-5xl font-bold">our team</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className=" flex justify-center items-center gap-20 my-20">
        <div className=" justify-center items-center text-center block">
          <div className=" flex items-center justify-center">
            <img src={aufar} className=" w-20" />
          </div>
          <p className=" font-semibold mt-3">Abdul Faris Aufar</p>
          <p className=" mb-3">2310511154</p>
          <p>
            System Analyst & UI/UX Designer
          </p>
          <div className=" justify-center flex items-center gap-3 mt-4">
            <img src={Instagram} className=" w-6 bg-black rounded-md" />
            <img src={Linkedin} className=" w-6 bg-black rounded-md" />
          </div>
        </div>

        <div className=" justify-center items-center text-center block">
          <div className=" flex items-center justify-center">
            <img src={najwan} className=" w-20 rounded-full" />
          </div>
          <p className=" font-semibold mt-3">Muhamad Najwan</p>
          <p className=" mb-3">2310511149</p>
          <p>
            Project Manager & UI/UX Designer
          </p>
          <div className=" justify-center flex items-center gap-3 mt-4">
            <img src={Instagram} className=" w-6 bg-black rounded-md" />
            <img src={Linkedin} className=" w-6 bg-black rounded-md" />
          </div>
        </div>

        <div className=" justify-center items-center text-center block">
          <div className=" flex items-center justify-center">
            <img src={rayssa} className=" w-20 rounded-full" />
          </div>
          <p className=" font-semibold mt-3">Rayssa Modeline Joy Simanungkalit</p>
          <p className=" mb-3">2310511151</p>
          <p>
            QA & Product Owner
          </p>
          <div className=" justify-center flex items-center gap-3 mt-4">
            <img src={Instagram} className=" w-6 bg-black rounded-md" />
            <img src={Linkedin} className=" w-6 bg-black rounded-md" />
          </div>
        </div>
      </div>

      <div className=" flex gap-40 justify-center items-center my-20">
        <div className=" justify-center items-center text-center block">
          <div className=" flex items-center justify-center">
            <img src={akmal} className=" w-20 rounded-full" />
          </div>
          <p className=" font-semibold mt-3">Muhamad Akmal Al Fatah</p>
          <p className=" mb-3">2310511165</p>
          <p>
            Product Owner & UI/UX Designer
          </p>
          <div className=" justify-center flex items-center gap-3 mt-4">
            <img src={Instagram} className=" w-6 bg-black rounded-md" />
            <img src={Linkedin} className=" w-6 bg-black rounded-md" />
          </div>
        </div>

        <div className=" justify-center items-center text-center block">
          <div className=" flex items-center justify-center">
            <img src={zaky} className=" w-20" />
          </div>
          <p className=" font-semibold mt-3">Muhamad Zaky Ramadhan</p>
          <p className=" mb-3">2310511159</p>
          <p>
            Developer & System Analyst
          </p>
          <div className=" justify-center flex items-center gap-3 mt-4">
            <img src={Instagram} className=" w-6 bg-black rounded-md" />
            <img src={Linkedin} className=" w-6 bg-black rounded-md" />
          </div>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
        <div className=" border-8 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
        <div className=" border-8 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
        <div className=" border-8 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quo
            voluptatum? Totam nemo tempore magnam delectus dolorum id dolores?
            Vero maxime, cumque ex quia laborum provident facilis ea ullam illo.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
