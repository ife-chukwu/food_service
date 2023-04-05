import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Company = () => {
  return (
    <div className="pt-28">
      <div className="py-20 bg-[#def1f1] w-full flex justify-center ">
        <h1 className="font-extrabold text-5xl w-2/5">
          Our Company focuses on{" "}
          <span className="text-[#13948d]">food and people.</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 w-full gap-[10%] mt-20">
        <div className="flex pt-10 ml-[20%]">
          <div className="flex flex-col">
            <h1 className="w-4/5  font-extrabold text-[#13948d] text-5xl">
              The home of fresh product
            </h1>
            <p className="w-full mt-5 text-sm text-gray-600">
              PizBug is the place to be for all pizza lovers! Our menu is packed
              with mouth-watering options, from classic to gourmet. Come by and
              grab a slice (or a whole pie) at PizBug today!
            </p>

            <button className="flex hover:bg-[#15aaa3] justify-center mt-10 rounded items-center text-white duration-300 transition bg-[#13948d]  md:w-2/4 h-[2.8rem] md:h-[3rem] text-sm">
              <Link to="/faq"> Learn about us</Link>
            </button>
          </div>
        </div>
        <div>
          <figure className="w-4/5 h-full ">
            <img
              src="/src/assets/TestingImages/img10.png"
              alt="Image"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
      <div className="w-full bg-black/50 backdrop-blur-2xl">
        <div className="w-full h-[20em] mt-20  mix-blend-overlay bg-[url('/src/assets/ProjectImage/img7.png')]"></div>
      </div>
      <Footer/>
    </div>
  );
};
