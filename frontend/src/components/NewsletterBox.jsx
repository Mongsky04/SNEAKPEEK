/*import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" text-center">
      <p className=" text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className=" text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo aut
        corporis laboriosam aperiam?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className=" w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className=" bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;*/

import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" flex justify-between bg-neonPurple">
      <p className=" text-5xl text-white font-semibold m-7">Medium length heading goes here</p>
      <div className=" m-7">
        <p className=" text-xl font-medium text-white mb-2">
          Subscribe now & get 20% off
        </p>
        <p className=" text-white">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className=" w-full flex items-center gap-3 mx-auto my-6 border pl-3 bg-white"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" w-full sm:flex-1 outline-none"
          />
          <button
            type="submit"
            className=" bg-neonPurple text-white font-semibold text-base px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-white text-sm">
          By subscribing, you agree to our <u>Privacy Policy</u> and provide
          consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
};

export default NewsletterBox;
