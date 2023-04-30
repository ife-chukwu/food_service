import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { context } from "../MyContext";
import { HiOutlineSearch } from "react-icons/hi";
import "animate.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navigation = () => {
  const { scroll, cartCount, clearNotification, cartItems } =
    useContext(context);

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className="w-full  fixed overflow-x-hidden">
      <div className="w-full h-10 bg-[#13948d]">
        <p className="flex justify-center font-light h-full items-center text-white text-xs md:text-sm">
          We are open and available for takeaway & delivering. Order Now{" "}
        </p>
      </div>
      <div
        className={`${
          scroll ? "bg-black/60 backdrop-blur-sm" : ""
        } w-full h-[70px] hidden md:flex justify-between items-center px-[6%] transition duration-300`}
      >
        <div>
          <Link to="/">
            {" "}
            <h1
              className={` ${
                scroll ? "text-[#42f8ef]" : "text-[#13948d]"
              } font-extrabold text-2xl log0 `}
            >
              PIZBUG
            </h1>
          </Link>
        </div>
        <ul
          className={` flex  gap-7 items-center text-sm font-medium ${
            scroll ? "text-white" : "text-gray-900"
          } `}
        >
          <Link to="/">
            <li className="hover:text-[#13948d] transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/order">
            <li className="hover:text-[#13948d] transition duration-300">
              Order
            </li>
          </Link>
          <Link to="/company">
            <li className="hover:text-[#13948d] transition duration-300">
              Company
            </li>
          </Link>
          <Link to="/faq">
            <li className="hover:text-[#13948d] transition duration-300">
              FAQ
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-[#13948d] transition duration-300">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`${
                scroll
                  ? "bg-[#42f8ef] hover:bg-[#12c9c0] transition duration-300"
                  : "bg-[#13948d] hover:bg-[#12c9c0] transition duration-300"
              } py-2 px-3 rounded-sm `}
            >
              <button onClick={clearNotification}>
                {" "}
                <BsFillCartFill
                  className={`${scroll ? "text-black" : "text-white"} text-xl`}
                />
              </button>
            </li>
          </Link>
          <p className="-ml-[8%] text-white text-[10px] animate__animated animate__rubberBand -mt-[7%] bg-[red] px-2 font-bold  rounded-full">
            {cartCount}
          </p>
          <div className="pl-[10%]">
            <Link to="/search">
              <HiOutlineSearch
                className={` ${
                  scroll
                    ? "text-[#42f8ef] hover:text-white duration-300 transition"
                    : "text-[#13948d] hover:text-black duration-300 transition"
                } text-2xl cursor-pointer `}
              />
            </Link>
          </div>
        </ul>
      </div>
      <div
        className={`${
          scroll ? "bg-black/60 backdrop-blur-sm" : ""
        } w-full pt-5 pb-5  md:hidden flex justify-between items-start px-[6%] transition duration-300`}
      >
        <div>
          <Link to="/">
            {" "}
            <h1
              className={` ${
                scroll ? "text-[#42f8ef]" : "text-[#13948d]"
              } font-extrabold text-2xl  log0 `}
            >
              PIZBUG
            </h1>
          </Link>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <Link to="/search">
              <HiOutlineSearch
                className={` ${
                  scroll
                    ? "text-[#42f8ef] hover:text-white duration-300 transition"
                    : "text-[#13948d] hover:text-black duration-300 transition"
                } text-2xl cursor-pointer `}
              />
            </Link>

            <Link to="/cart">
              <li
                className={`${
                  scroll
                    ? "bg-[#42f8ef] hover:bg-[#12c9c0] transition duration-300"
                    : "bg-[#13948d] hover:bg-[#12c9c0] transition duration-300"
                } md:py-2 md:px-3 px-3 py-2 flex justify-centers rounded-sm list-none`}
              >
                <button onClick={clearNotification}>
                  {" "}
                  <BsFillCartFill
                    className={`${
                      scroll ? "text-black" : "text-white"
                    } md:text-xl text-lg`}
                  />
                </button>
              </li>
              <p
                className={`ml-[8%] text-white text-[10px] ${
                  cartCount ? "bg-[red]" : ""
                } px-2 py-1 font-bold absolute rounded-full -mt-[12%] `}
              >
                {cartCount}
              </p>
            </Link>
          </div>

          <div
            className={` ${
              showNav ? "bg-black/50 px-1" : "bg-transparent px-1"
            } rounded-lg`}
            onClick={showNavHandler}
          >
            <GiHamburgerMenu
              className={`text-4xl ${
                showNav || scroll ? "text-[#42f8ef]" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
      {showNav ? (
        <div className="w-full flex justify-center">
          <ul
            className={`w-full gap-10 py-10 flex flex-col bg-black/60 backdrop-blur-sm items-center text-center text-xl md:text-sm font-medium  md:hidden ${
              scroll ? "text-white" : "text-white"
            } `}
          >
            <Link to="/">
              <li className="w-full flex hover:border-white border-b-2 hover:text-[#13948d] transition duration-300 ">
                Home
              </li>
            </Link>
            <Link to="/order">
              <li className="hover:text-[#13948d] transition duration-300">
                Order
              </li>
            </Link>
            <Link to="/company">
              <li className="hover:text-[#13948d] transition duration-300">
                Company
              </li>
            </Link>
            <Link to="/faq">
              <li className="hover:text-[#13948d] transition duration-300">
                FAQ
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-[#13948d] transition duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
