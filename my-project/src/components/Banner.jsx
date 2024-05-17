import React from "react";

const Banner = () => {
  return (
    <div className=" section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% max-w-sreen-2xl container mx-auto xl:px-24 px-4">
      <div className="py-24 flex flex-col md:flex-row justify-between  items-center gap-8">
        {/*texts */}
        <div className="md:w-1/2 space-y-7 px-5  ">
          <h1 className="md:text-5xl  text-4xl font-bold md:leading-snug leading-snug ">
            Enjoy the Goodness of Tas ty{" "}
            <span className="text-[#C70039]">Food </span>
          </h1>
          <p className="text-xl text-[#4A4A4A]">
            Where every dish tells a tale of kitchen skill and loving attention
            to detail
          </p>
          <button className="btn bg-[#C70039]  px-8  py-3 font-semibold text-white rounded-full ">
            {" "}
            Order Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="\images\home\banner.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
