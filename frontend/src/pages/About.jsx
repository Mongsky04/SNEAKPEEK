import React from "react";
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

export default About;
