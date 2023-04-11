import React, { useState , useEffect} from "react";
import { Outlet, Link } from "react-router-dom";

export const FAQ = () => {
  const [activeItem, setActiveItem] = useState("pizza");

  const activeHandler = (item) => {
    setActiveItem(item);
  };

   useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  return (
    <div className="pt-28">
      {" "}
      <div className="py-20 bg-[#def1f1] w-full flex justify-center ">
        <h1 className="font-extrabold text-5xl w-2/5 text-center">
          Frequently Asked <span className="text-[#13948d]"> Questions.</span>
        </h1>
      </div>
      <div>
        <div className="w-full flex justify-center mt-10">
          <div className="w-3/5 text-sm ml-[7%] grid grid-cols-3">
            <Link
              to="/faq"
              className={`${
                activeItem === "pizza"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("pizza")}
            >
              Our Food
            </Link>
            <Link
              to="/faq/delivery"
              className={`${
                activeItem === "side"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("side")}
            >
              Our Delivery
            </Link>
            <Link
              to="/faq/company"
              className={`${
                activeItem === "drink"
                  ? "bg-[#13948d] text-white font-medium"
                  : ""
              } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
              onClick={() => activeHandler("drink")}
            >
              Our Company{" "}
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
