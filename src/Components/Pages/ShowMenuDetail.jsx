import React, { useContext, useState, useEffect } from "react";
import { context } from "../../MyContext";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { AiFillLike } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Backdrop1 } from "./Backdrops/Backdrop1";
import { MdClear } from "react-icons/md";

export const ShowMenuDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const {
    menuItems,
    pizzas,
    addToCart,
    likes,
    buttonActive,
    handleButton,
    cartReminder,
  } = useContext(context);
  const { params } = useParams();
  console.log(menuItems["1"].name === params);
  console.log(params);

  return (
    <div>
      <div className="pt-40 w-full flex justify-center">
        <div>
          {pizzas
            .filter((item) => item.name === params)
            .map((item) => {
              return (
                <div key={item.id}>
                  <p className="w-full flex text-[#13948d] pb-5 justify-center font-extrabold text-2xl log0 ">
                    {item.name}
                  </p>
                  <div className="flex justify-center w-full h-auto ">
                    <figure className="w-full h-full">
                      <img
                        src={item.img}
                        className="h-full w-full rounded-lg"
                      />
                    </figure>
                  </div>
                  <div className="">
                    <div className="w-full justify-center flex gap-[45%] mt-5">
                      <div className="flex gap-7">
                        <div className="flex items-center h-full gap-1">
                          <button onClick={() => handleButton(0)}>
                            <AiFillLike
                              className={`${
                                buttonActive[0].isActive ? "text-[red]" : ""
                              } text-[2rem]`}
                            />{" "}
                          </button>
                          <p className="flex items-end h-full text-xl font-bold text-gray-600">
                            {likes}
                          </p>
                        </div>
                        <button onClick={() => addToCart(item)}>
                          <BsFillCartFill
                            onClick={() => handleButton(item.id)}
                            className={`${
                              buttonActive[item.id].isActive && "text-[#329e99]"
                            } text-[1.7rem] t`}
                          />
                        </button>
                      </div>
                      <div>
                        <div className="flex gap-5 w-full">
                          <button className="border border-black/10 rounded-lg px-5 py-1">
                            {item.id}
                          </button>
                          <button
                            className={`${
                              buttonActive[2].isActive
                                ? "bg-[#13948d] text-white"
                                : ""
                            } border border-black/10 rounded-lg py-1 px-7`}
                            onClick={() => handleButton(2)}
                          >
                            {buttonActive[2].isActive ? "Ordered" : "Order"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="flex justify-center pt-5 text-small font-extralight text-[red]">
                      {cartReminder}
                    </p>
                    <Backdrop1 />
                    <h1 className="w-full flex justify-center mt-10 mb-5 font-bold text-[#13948d] text-xl">
                      About {item.name}
                    </h1>

                    <div className="w-full flex justify-center  mb-10">
                      <p className="text-sm text-gray-600 text-center w-3/5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {menuItems
          .filter((item) => item.name === params)
          .map((item) => {
            return (
              <div key={item.id}>
                <p className="w-full flex text-[#13948d] pb-5 justify-center font-extrabold text-2xl log0 ">
                  {item.name}
                </p>
                <div className="flex justify-center w-full h-auto ">
                  <figure className="w-3/4 h-full">
                    <img
                      src={item.imageUrl}
                      className="h-full w-full rounded-lg"
                    />
                  </figure>
                </div>
                <div className="">
                  <div className="w-full justify-center flex gap-[45%] mt-5">
                    <div className="flex gap-7">
                      <div className="flex items-center h-full gap-1">
                        <button onClick={() => handleButton(0)}>
                          <AiFillLike
                            className={`${
                              buttonActive[0].isActive ? "text-[red]" : ""
                            } text-[2rem]`}
                          />{" "}
                        </button>
                        <p className="flex items-end h-full text-lg text-gray-600">
                          {likes}
                        </p>
                      </div>
                      <button onClick={() => handleButton(1)}>
                        <BsFillCartFill
                          className={`${
                            buttonActive[1].isActive
                              ? "text-[#2f918c]"
                              : "ext-black/70"
                          } text-[1.7rem] t`}
                        />
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-5 w-full text-sm">
                        <button className="border border-black/10 rounded-lg px-5 py-1">
                          {item.id}
                        </button>
                        <button
                          className={`${
                            buttonActive[2].isActive
                              ? "bg-[#13948d] text-white"
                              : ""
                          } border border-black/10 rounded-lg py-1 px-7 text-sm`}
                          onClick={() => handleButton(2)}
                        >
                          {buttonActive[2].isActive ? "Ordered" : "Order"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <h1 className="w-full flex justify-center mt-10 mb-5 font-bold text-[#13948d] text-xl">
                    About {item.name}
                  </h1>

                  <div className="w-full flex justify-center  mb-5">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.description}
                    </p>
                  </div>
                  <h1 className="w-full flex justify-center font-bold text-[#13948d] text-xl">
                    More About {item.name}
                  </h1>

                  <div className="w-full flex justify-center mb-20">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.extraInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};
