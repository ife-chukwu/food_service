import React, { Fragment, useContext } from "react";
import { context } from "../../MyContext";
import "animate.css";

export const Cart = () => {
  const { cartItems, deleteCartItem, ordered, toggleOrder } =
    useContext(context);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-full pt-40">
      {cartItems.length <= 0 && (
        <p className="w-full h-full pt-40  font-bold text-3xl text-black/50 flex justify-center items-center">
          Cart is empty.
        </p>
      )}
      <div className="w-full grid grid-cols-2 gap-y-5">
        {cartItems.map((item, index) => (
          <Fragment key={index}>
            <div className=" w-full ">
              <p className="flex justify-center font-bold text-xl mb-3 text-[#13948d]">
                {item.name}
              </p>
              <div className="w-full flex justify-center">
                <figure className="w-3/5 ">
                  <img
                    src={item.img || item.imageUrl || item.image}
                    alt={item.name}
                    className="w-full h-full rounded-md"
                  />
                </figure>
                <div className="flex absolute pl-[22%] pt-3">
                  <p className="px-5 rounded-xl bg-[#13948d] text-white">
                    ${item.price}
                  </p>
                </div>
              </div>
              <div className="flex  mt-1 justify-center">
                <div className="w-3/5 gap-[5%] flex">
                  <button
                    className="w-2/4 bg-[red] text-white py-1 rounded-md font-normal"
                    onClick={() => deleteCartItem(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleOrder(item.id)}
                    className={`${
                      ordered.includes(item.id)
                        ? "animate__animated animate__rubberBand"
                        : ""
                    } bg-[#13948d]  w-2/4  text-white py-1 rounded-md font-normal`}
                  >
                    {ordered.includes(item.id) ? (
                      <p className="text-white">Ordered</p>
                    ) : (
                      <p className="text-white">Order</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="pt-20">
            <hr />
            <div className="flex justify-center gap-3 py-5">
              <p className="text-black/60 font-bold text-2xl">Total Price:</p>
              <p className="text-[#13948d] font-bold text-2xl">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
