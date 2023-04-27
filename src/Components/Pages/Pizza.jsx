import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../MyContext";

export const Pizza = () => {
  const { pizzas, handleCart, cartClicked } = useContext(context);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-y-10 my-10">
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.id} className="flex justify-center">
              <div className="w-4/5 py-5 bg-black/10 h-full px-5 rounded shadow-black/20 shadow-md">
                <div className="flex gap-5">
                  <figure className="w-2/5 h-full">
                    <Link to={`${pizza.name}`}>
                      <img
                        src={pizza.img}
                        alt={pizza.name}
                        className="w-full h-full rounded"
                      />{" "}
                    </Link>
                  </figure>
                  <div className="w-3/5">
                    <div className="flex w-full justify-between text-[15px]">
                      <p className="font-bold w-3/5">{pizza.name}</p>
                      <p className="text-[#13948d]">{pizza.price}</p>
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
        <button className="mt-10 mb-5 bg-[#13948d] text-white rounded px-7 py-3">
          See Full Menu
        </button>
      </div>
    </div>
  );
};
