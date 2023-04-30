import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../MyContext";

export const Pizza = () => {
  const { pizzas, handleCart, cartClicked } = useContext(context);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-y-5 gap-x-5 md:gap-x-0 mx-3 md:gap-y-10 my-10">
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.id} className="flex justify-center">
              <div className="md:w-4/5 py-5 bg-black/10 h-full md:px-5 px-2 rounded shadow-black/20 shadow-md">
                <div className="flex-col flex md:flex-row  gap-5">
                  <Link to={`${pizza.name}`}>
                    <div className="flex h-full">
                      <figure className="h-full md:h-3/5 lg:h-4/5">
                        <img
                          src={pizza.img}
                          alt={pizza.name}
                          className="w-full h-full rounded"
                        />
                      </figure>
                    </div>
                  </Link>

                  <div className="">
                    <div className="md:flex w-full justify-between text-[15px]">
                      <p className="font-bold md:w-4/5 lg:w-3/5 text-center md:text-start text-[12px] md:text-sm">
                        {pizza.name}
                      </p>
                      <p className="text-[#13948d] text-center md:text-start">
                        ${pizza.price}
                      </p>
                    </div>
                    <p className="text-[10px] md:text-[12px] text-center md:text-start text-gray-700 mt-2 flex items-center">
                      {pizza.description}
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <button className="md:flex border rounded border-black/10 px-3 md:px-5 py- text-[10px] md:text-sm py-1">
                        {pizza.id}
                      </button>
                      <button
                        onClick={() => handleCart(pizza)}
                        className="w-3/5"
                      >
                        <p
                          className={`${
                            cartClicked[pizza.id] && "text-[#329e99] "
                          } text-[10px] lg:text-sm text-white  items-end md:w-full flex justify-center  rounded-sm py-1 bg-[#329e99] `}
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
        <button className="mt-10 mb-5 bg-[#13948d] text-white rounded px-7 py-3">
          See Full Menu
        </button>
      </div>
    </div>
  );
};
