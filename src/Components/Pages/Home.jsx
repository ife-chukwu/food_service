import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export const Home = () => {
  //   const options = useMemo(
  //     () => ({
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "72baf9339amshbccae3d64e97ac0p183399jsnbf6f71fcb2e4",
  //         "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  //       },
  //     }),
  //     []
  //   );

  //   const fetchData = useMemo(
  //     () => async () => {
  //       const res = await axios.get(
  //         // "https://pizza-and-desserts.p.rapidapi.com/pizzas",
  //         options
  //       );
  //       return res.data;
  //     },
  //     [options]
  //   );

  //   const { data, isError } = useQuery(["id"], fetchData);
  //   if (isError) {
  //     console.log("Unavailable");
  //     return <h1>Unavailable</h1>;
  //   }
  //   console.log(data);
  const [activeItem, setActiveItem] = useState("pizza");

  const activeHandler = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full h-auto pt-40">
      <div className="grid grid-cols-2 w-full gap-[10%] ">
        <div className="flex pt-10 ml-[20%]">
          <div className="flex flex-col">
            <h1 className="w-4/5  font-extrabold text-5xl">
              Beautiful food & takeaway,
              <span className="text-[#13948d]">Delivered </span>to your door
              step.
            </h1>
            <p className="w-4/5 mt-5 text-sm text-gray-600">
              PizBug is the place to be for all pizza lovers! Our menu is packed
              with mouth-watering options, from classic to gourmet. Come by and
              grab a slice (or a whole pie) at PizBug today!
            </p>

            <button className="flex hover:bg-[#15aaa3] justify-center mt-10 rounded-xl items-center text-white duration-300 transition bg-[#13948d] w-[35%] md:w-2/5 h-[2.8rem] md:h-[2.5rem] text-sm">
              <Link to="/order"> Place an Order</Link>
            </button>
            <div className="flex items-center mt-4">
              <RiStarSFill className="text-[green] text-2xl" />
              <p>Trust Pilot</p>
            </div>
            <p className="text-[13px]">
              <span className="text-[#13948d]">5.8 out of 5 </span>based of
              2000+ reviews
            </p>
          </div>
        </div>
        <div>
          <figure className="w-4/5 h-full ">
            <img
              src="projectImage/img15.png"
              alt="Image"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-[10%] mt-40 bg-[#e7f8f7]">
        <div className="flex pt-40 w-full ml-[20%]">
          <div className="flex flex-col">
            <h1 className="w-3/4  font-extrabold text-[#13948d] text-4xl">
              The home of fresh products
            </h1>
            <p className="w-4/5 mt-5 text-sm text-gray-600">
              PizBug is the place to be for all pizza lovers! Our menu is packed
              with mouth-watering options, from classic to gourmet. Come by and
              grab a slice (or a whole pie) at PizBug today!
            </p>

            <button className="flex hover:bg-[#15aaa3] justify-center mt-10 rounded-xl items-center text-white duration-300 transition bg-[#13948d] w-[35%] md:w-2/5 h-[2.8rem] md:h-[2.5rem] text-sm">
              <Link to="/faq"> Learn about us</Link>
            </button>
          </div>
        </div>
        <div className="">
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
        <h1 className="w-full mt-40 mb-10 font-extrabold text-[#13948d] text-4xl flex justify-center">
          How it works.
        </h1>
        <div className="grid grid-cols-3 ml-[5%]">
          <div>
            <figure className="w-4/5">
              <img src="projectImage/img3.png" className="w-full h-full" />
            </figure>
            <h2 className="flex justify-center w-4/5 font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept your menu items
            </h2>
            <p className="text-center w-4/5  flex justify-center text-gray-600 text-sm">
              Easily adapt the menu using the webflow CMS and allow customers to
              browse your items.
            </p>
          </div>
          <div>
            <figure className="w-4/5">
              <img src="projectImage/img4.png" className="w-full h-full" />
            </figure>
            <h2 className="flex justify-center w-4/5 font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept online orders and takeout
            </h2>
            <p className="text-center w-4/5  flex justify-center text-gray-600 text-sm">
              Manage your own logistics and take order simply through the
              e-commerce system.
            </p>
          </div>
          <div>
            <figure className="w-4/5">
              <img src="projectImage/img16.png" className="w-full h-full" />
            </figure>
            <h2 className="flex justify-center w-4/5 font-extrabold text-gray-900 mt-8 text-xl mb-4">
              Accept your menu items
            </h2>
            <p className="text-center w-4/5  flex justify-center text-gray-600 text-sm">
              Easily adapt the menu using the webflow CMS and allow customers to
              browse your items
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="w-full mt-40 mb-5 font-extrabold text-[#13948d] text-5xl flex justify-center">
          Browse Our Menu
        </h1>
        <div className="flex justify-center w-full">
          <p className="w-2/5 text-center text-gray-600 text-sm">
            Use our menu to place an order online, or{" "}
            <Link to="/contact" className="underline text-[blue]">
              phone
            </Link>{" "}
            our store to place a pickup order, Fast and fresh food.
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="w-3/5 ml-[7%] grid grid-cols-3">
            <Link
              to="/"
              className={`${
                activeItem === "pizza"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
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
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
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
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("drink")}
            >
              Drink
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <Outlet />
        </div>
      </div>
      <div className="flex gap-5 w-full items-center justify-center">
        <figure className="w-2/5">
          <img src="ProjectImage/img14.png" />
        </figure>
        <div className="w-2/5">
          <h1 className="font-extrabold text-[#13948d] text-5xl">
            Order online with our simple checkout.
          </h1>
          <p className="mt-5 text-sm text-gray-600">
            When I'm craving pizza, I always turn to PizBug. Their website is
            super easy to use and you can choose from a variety of toppings to
            make your perfect pie.
          </p>
          <button className="mt-10 mb-5 bg-[#13948d] text-white rounded px-7 py-3">
            See our FAQ
          </button>
        </div>
      </div>
      <div className="flex gap-5 w-full items-center justify-center mt-20">
        <div className="w-2/5">
          <h1 className=" font-extrabold text-[#13948d] text-5xl">
            Call our store and takeaway when it suits you best.{" "}
          </h1>
          <p className="mt-5 text-sm text-gray-600">
            So why not give PizBug a call today and satisfy your cravings for
            delicious pizza? Don't forget to mention any special requests or
            dietary restrictions you may have they'll be happy to accommodate
            your needs.
          </p>
          <button className="mt-10 mb-5 bg-[#13948d] text-white rounded px-7 py-3">
            ph. +234-9157398241{" "}
          </button>
        </div>
        <figure className="w-2/5">
          <img src="projectImage/img21.png" />
        </figure>
      </div>

      <div className="flex  justify-center gap-5 mt-40 mb-10">
        <figure className="w-2/5 h-full">
          <img
            src="/src/assets/TestingImages/img2.jpg"
            className="w-full -full"
          />
        </figure>
        <div className="w-2/5 h-[22.3em] bg-[#13948d] mb-20">
          <div className="w-full h-full flex items-center justify-center ">
            <div className="w-3/4">
              <h1 className="text-white text-4xl font-bold pl-[5%]">
                <span className="text-[#1a635fc9]">Support</span> good food and
                local business.
              </h1>
              <button className="ml-[5%] w-2/5 py-3 rounded-md bg-white hover:bg-white/80 transition  text-[#13948d] mt-8 font-medium">
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
