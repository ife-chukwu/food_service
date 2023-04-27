import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export const Order = () => {
  const [activeItem, setActiveItem] = useState("pizza");

  const activeHandler = (item) => {
    setActiveItem(item);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pt-28">
      <div className="py-20 bg-[#def1f1] w-full flex justify-center">
        <h1 className="font-extrabold text-4xl w-2/5 text-center">
          Get your food <span className="text-[#13948d]"> delivered,</span> or
          <span className="text-[#13948d]"> Pick-up,</span> in store.
        </h1>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/5 ml-[7%] grid grid-cols-4">
          <Link
            to="/order"
            className={`${
              activeItem === "pizza"
                ? "bg-[#13948d] text-white font-medium"
                : ""
            } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
            onClick={() => activeHandler("pizza")}
          >
            Full Menu
          </Link>
          <Link
            to="/order/burgers"
            className={`${
              activeItem === "side" ? "bg-[#13948d] text-white font-medium" : ""
            } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
            onClick={() => activeHandler("side")}
          >
            Burgers
          </Link>
          <Link
            to="/order/order-side"
            className={`${
              activeItem === "order-side"
                ? "bg-[#13948d] text-white font-medium"
                : ""
            } w-3/5 flex justify-center rounded-md py-2 border border-gray-300`}
            onClick={() => activeHandler("order-side")}
          >
            Pizzas
          </Link>
          <Link
            to="/order/order-drink"
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
      <Outlet />
    </div>
  );
};
