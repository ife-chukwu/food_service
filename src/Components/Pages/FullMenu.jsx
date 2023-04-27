import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../../MyContext";
import { Footer } from "../Pages/Footer";

export const FullMenu = () => {
  const { menuItems, cartClicked, handleCart, cartReminder } =
    useContext(context);

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-10 my-20 overflow-hidden">
        {menuItems.map((pizza) => {
          return (
            <div key={pizza.id} className="flex justify-center items-center">
              <div className="py-5 w-4/5 bg-black/10 px-5 rounded shadow-black/20 shadow-md">
                <div className="flex h-full">
                  <Link to={`${pizza.name}`}>
                    <figure className="w-4/5 h-4/5">
                      <img
                        src={pizza.imageUrl}
                        alt={pizza.name}
                        className="w-full h-full rounded"
                      />
                    </figure>
                    <div className="flex justify-center pt-5 text-small font-normal text-[#299929]">
                      {cartClicked[pizza.id] && (
                        <p className="animate__animated animate__bounceOutRight animate__delay-2s mb-3">
                          {" "}
                          Item added successfully!
                        </p>
                      )}
                    </div>
                  </Link>
                  <div className="w-full h-2/4">
                    <div className="flex justify-between text-[15px]">
                      <p className="font-bold w-3/5">{pizza.name}</p>
                      <p className="text-[#13948d]">${pizza.price}</p>
                    </div>
                    <p className="text-[12px] text-gray-700 mt-2">
                      {pizza.description}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <button className="border rounded border-black/10 px-5 py-1 text-sm">
                        {pizza.id}
                      </button>
                      <button onClick={() => handleCart(pizza)}>
                        <p
                          className={`${
                            cartClicked[pizza.id] &&
                            "text-[#329e99] animate__animated animate__shakeX"
                          } text-sm text-white px-5 rounded-sm py-1 bg-[#329e99] `}
                        >
                          Add To Cart
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full justify-center flex">
        <button className=" mb-10 bg-[#13948d] text-white rounded px-7 py-3">
          See Full Menu
        </button>
      </div>
      <Footer />
    </div>
  );
};
