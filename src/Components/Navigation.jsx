import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { context } from "../MyContext";

export const Navigation = () => {
  const { scroll } = useContext(context);
  return (
    <div className="w-full  fixed overflow-x-hidden">
      <div className="w-full h-10 bg-[#13948d]">
        <p className="flex justify-center font-light h-full items-center text-white text-sm">
          We are open and available for takeaway & delivering. Order Now{" "}
        </p>
      </div>
      <div
        className={`${
          scroll ? "bg-black/60" : ""
        } w-full h-[70px] flex justify-between items-center px-[6%] transition duration-300`}
      >
        {/* <figure className="w-[7%] h-10">
          <img src="/src/assets/Images/logo2.png" className="w-full h-full" />
        </figure> */}
        <div>
          <Link to="/">
            {" "}
            <h1
              className={` ${
                scroll ? "text-[#42f8ef]" : "text-[#13948d]"
              } font-extrabold text-2xl log0 `}
            >
              PIZ PIZ
            </h1>
          </Link>
        </div>
        <ul
          className={`flex gap-7 items-center text-sm font-medium ${
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
              <BsFillCartFill
                className={`${scroll ? "text-black" : "text-white"} text-xl`}
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
