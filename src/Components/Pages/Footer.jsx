import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-black/10 pl-5 md:pl-0">
      <div className="w-full md:flex  justify-between md:px-40  py-20">
        <div>
          <h1 className="font-extrabold text-xl md:text-2xl log0 text-[#13948d]">
            PIZBUG
          </h1>
          <p className="md:w-3/5 w-2/4 text-sm text-gray-700 mt-4">
            Takeaway & delivery template for small-medium businesses.
          </p>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          <ul className="flex gap-[15%] md:gap-20">
            <li className="text-sm font-bold">
              COMPANY
              <ul className="text-xs text-gray-600 font-normal gap-3 mt-3 flex flex-col">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/order">
                  <li>Order</li>
                </Link>
                <Link to="/faq">
                  <li>FAQ</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </li>
            <li className="text-sm font-bold">
              TEMPLATE
              <ul className="text-xs text-gray-600 font-normal gap-3 mt-3 flex flex-col">
                <li>Style Guide</li>
                <li>Change log</li>
                <li>License</li>
              </ul>
            </li>
            <li className="text-sm font-bold">
              FLOWBASE
              <ul className="text-xs text-gray-600 font-normal gap-3 mt-3 flex flex-col">
                <li>More Cloneable</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-b border-black/5"></div>
      <div className="flex justify-between  md:mx-10 py-5">
        <div className="md:flex items-center w-4/5 gap-2 text-sm">
          <p className="flex item-center gap-2 text-gray-600">
            Built by{" "}
            <Link className="text-[#13948d] text-sm underline">
              Ifechukwu .
            </Link>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            Powered by
            <Link className="text-[#13948d] text-sm underline">TOG</Link>
          </p>
        </div>
        <div className="flex gap-5 text-lg md:text-md text-black/70 pr-5">
          <p className="md:border-black/20 md:border md:px-4 py-2 rounded-full hover:bg-[#13948d] hover:text-white hover:border-none transition duration-300">
            <Link>
              <BsTwitter />
            </Link>
          </p>
          <Link>
            <p className="border-black/20 md:border md:px-4 py-2 rounded-full hover:bg-[#13948d] hover:text-white hover:border-none transition duration-300">
              <BsInstagram />
            </p>
          </Link>
          <Link>
            <p className="border-black/20 md:border md:px-4 py-2 rounded-full hover:bg-[#13948d] hover:text-white hover:border-none transition duration-300">
              <BsYoutube />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
