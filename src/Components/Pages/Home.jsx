import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Home = () => {
  const [activeItem, setActiveItem] = useState("pizza");

  const activeHandler = (item) => {
    setActiveItem(item);
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="w-full h-auto pt-[40%] md:pt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[10%] ">
        <div className="flex py-10 md:ml-[20%] bg-[#e4fcfa] md:bg-transparent">
          <div className="flex flex-col w-full">
            <div className="flex justify-center md:justify-start">
              <h1 className="w-full font-extrabold text-4xl text-center text-black/80 md:text-start md:text-5xl">
                Beautiful food & takeaway,
                <span className="text-[#13948d]">Delivered </span>to your door
                step.
              </h1>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="w-4/5 text-center md:text-start mt-5 text-sm text-gray-600">
                PizBug is the place to be for all pizza lovers! Our menu is
                packed with mouth-watering options, from classic to gourmet.
                Come by and grab a slice (or a whole pie) at PizBug today!
              </p>
            </div>
            <div className="w-full flex justify-center md:justify-start">
              <div className="flex flex-col">
                <button className="flex hover:bg-[#15aaa3] justify-center mt-10 rounded-md md:rounded-xl items-center text-white duration-300 transition bg-[#13948d] w-[100%] md:w-[100%] h-[2.8rem] md:h-[2.5rem] text-sm">
                  <Link to="/order"> Place an Order</Link>
                </button>
                <div className="flex items-center justify-center md:justify-start mt-4">
                  <RiStarSFill className="text-[green] text-2xl" />
                  <p>Trust Pilot</p>
                </div>
                <p className="text-[13px]">
                  <span className="text-[#13948d]">5.8 out of 5 </span>based of
                  2000+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-full flex justify-center">
            <figure className="w-4/5 h-full ">
              <img
                src="projectImage/img15.png"
                alt="Image"
                className="w-full h-full"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[10%] mt-40 bg-[#e7f8f7]">
        <div className="flex pt-20 md:pt-40 w-full md:ml-[20%]">
          <div className="flex flex-col">
            <div className="flex justify-center text-center md:text-start md:justify-start">
              <h1 className="w-3/5 md:w-4/5 font-extrabold text-[#13948d] text-3xl md:text-5xl">
                The home of fresh products
              </h1>
            </div>
            <div className="flex justify-center text-center md:text-start md:justify-start">
              <p className="w-4/5 mt-5 text-sm text-gray-600">
                PizBug is the place to be for all pizza lovers! Our menu is
                packed with mouth-watering options, from classic to gourmet.
                Come by and grab a slice (or a whole pie) at PizBug today!
              </p>
            </div>
            <div className="flex w-full justify-center text-center md:text-start md:justify-start">
              <button className="flex hover:bg-[#15aaa3] justify-center mt-10 rounded-md md:rounded-xl items-center text-white duration-300 transition bg-[#13948d] w-[50%] md:w-2/5 h-[2.8rem] md:h-[2.5rem] text-sm">
                <Link to="/faq"> Learn about us</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <figure className="w-4/5 h-full">
            <img
              src="projectImage/img2.png"
              alt="Image"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
      <div>
        <h1 className="w-full mt-40 mb-10 font-extrabold text-[#13948d] text-3xl flex justify-center">
          How it works.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:ml-[5%]">
          <div>
            <div className="w-full justify-center flex">
              <figure className="w-4/5">
                <img src="projectImage/img3.png" className="w-full h-full" />
              </figure>
            </div>
            <h2 className="flex justify-center font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept your menu items
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-center w-4/5 flex justify-center text-gray-600 text-sm">
                Easily adapt the menu using the webflow CMS and allow customers
                to browse your items.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full justify-center flex">
              <figure className="w-4/5">
                <img src="projectImage/img4.png" className="w-full h-full" />
              </figure>
            </div>
            <h2 className="flex justify-center font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept online orders and takeout
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-center w-4/5 flex justify-center text-gray-600 text-sm">
                Manage your own logistics and take order simply through the
                e-commerce system.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full justify-center flex">
              <figure className="w-4/5">
                <img src="projectImage/img16.png" className="w-full h-full" />
              </figure>
            </div>
            <h2 className="flex justify-center font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept your menu items
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-center w-4/5  flex justify-center text-gray-600 text-sm">
                Easily adapt the menu using the webflow CMS and allow customers
                to browse your items
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="w-full mt-20 md:mt-40 mb-5 font-extrabold text-[#13948d] text-3xl md:text-5xl flex justify-center">
          Browse Our Menu
        </h1>
        <div className="flex justify-center w-full">
          <p className="md:w-2/5 w-4/5 text-center text-gray-600 text-sm">
            Use our menu to place an order online, or{" "}
            <Link to="/contact" className="underline text-[blue]">
              phone
            </Link>{" "}
            our store to place a pickup order, Fast and fresh food.
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:ml-[7%] w-full flex justify-center flex-wrap gap-2  md:w-3/5 md:grid md:grid-cols-3">
            <Link
              to="/"
              className={`${
                activeItem === "pizza"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-2/5 md:w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("pizza")}
            >
              Pizza
            </Link>
            <Link
              to="/side"
              className={`${
                activeItem === "side"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-2/5 md:w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("side")}
            >
              Side
            </Link>
            <Link
              to="/drink"
              className={`${
                activeItem === "drink"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-2/5 md:w-3/5 items-center flex justify-center py-2 rounded-md  border border-gray-300`}
              onClick={() => activeHandler("drink")}
            >
              Drinks
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-10">
          <Outlet />
        </div>
      </div>
      <div className="flex md:flex-row  flex-col md:gap-5 w-full items-center justify-center">
        <figure className="md:w-2/5">
          <img src="projectImage/img14.png" />
        </figure>
        <div className="w-4/5 md:w-2/5">
          <h1 className="font-extrabold text-[#13948d] text-center md:text-start text-4xl md:text-5xl">
            Order online with our simple checkout.
          </h1>
          <p className="mt-5 text-sm text-gray-600 text-center md:text-start">
            When I'm craving pizza, I always turn to PizBug. Their website is
            super easy to use and you can choose from a variety of toppings to
            make your perfect pie.
          </p>
          <Link to="/faq">
            {" "}
            <button className="mt-10 mb-5 bg-[#13948d] flex justify-center w-full md:w-auto text-white rounded px-7 py-3">
              See our FAQ
            </button>
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5 w-full items-center justify-center mt-20">
        <div className="w-4/5  md:w-2/5">
          <h1 className="font-extrabold text-center md:text-start text-[#13948d] text-4xl md:text-5xl">
            Call our store and takeaway when it suits you best.{" "}
          </h1>
          <p className="mt-5 text-center md:text-start text-sm text-gray-600">
            So why not give PizBug a call today and satisfy your cravings for
            delicious pizza? Don't forget to mention any special requests or
            dietary restrictions you may have they'll be happy to accommodate
            your needs.
          </p>
          <button className="mt-10 mb-5 w-full md:w-auto bg-[#13948d] text-white rounded px-7 py-3">
            ph. +234-9157398241{" "}
          </button>
        </div>
        <figure className="md:w-2/5 w-4/5">
          <img src="projectImage/img21.png" className="w-full h-full" />
        </figure>
      </div>

      <div className="md:flex-row flex flex-col mx-3 md:mx-0 justify-center gap-5 mt-40 mb-10">
        <figure className="md:w-2/5 w-full h-full">
          <img src="TestingImages/img2.jpg" className="w-full h-full" />
        </figure>
        <div className="w-full md:w-2/5 h-[22.3em] bg-[#13948d] mb-20">
          <div className="w-full h-full flex items-center justify-center ">
            <div className="w-3/4">
              <h1 className="text-white text-center md:text-start text-4xl font-bold pl-[5%]">
                <span className="text-[#1a635fc9]">Support</span> good food and
                local business.
              </h1>
              <button className="ml-[5%] md:w-2/5 py-3 w-full rounded-md bg-white hover:bg-white/80 transition  text-[#13948d] mt-8 font-medium">
                <Link to="/order">Order Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
