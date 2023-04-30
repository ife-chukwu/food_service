import React, { useContext, useEffect } from "react";
import { context } from "../../MyContext";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { MdClear } from "react-icons/md";
import "animate.css";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export const ShowMenuDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const {
    menuItems,
    toggleLike,
    likedItems,
    pizzas,
    cartReminder,
    handleCart,
    toggleOrder,
    cartClicked,
    ordered,
    data,
    error,
    isLoading,
    burgers,
  } = useContext(context);
  const { params } = useParams();
  console.log(menuItems["1"].name === params);
  console.log(params);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="pt-40 w-full flex justify-center overflow-hidden">
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
                        alt={item.name}
                        className="h-full w-full rounded-lg"
                      />
                    </figure>
                  </div>
                  <div className="">
                    <div className="w-full justify-center flex gap-[45%] mt-5">
                      <div className="flex gap-5">
                        <div className="flex items-center h-full gap-1">
                          <button
                            onClick={() => toggleLike(item.id)}
                            className={`${
                              likedItems.includes(item.id)
                                ? "text-[red] animate__animated animate__rubberBand"
                                : "text-gray-500 animate__animated animate__pulse"
                            } text-[2rem]`}
                          >
                            {item.icon2}
                          </button>
                          <p className="flex items-end h-full text-xl font-bold text-gray-600">
                            {/* {likes[item.id] ? item.likes + 1 : item.likes} */}
                          </p>
                        </div>
                        <button onClick={() => handleCart(item)}>
                          <p
                            className={`${
                              cartClicked[item.id]
                                ? "text-[#329e99] animate__animated animate__shakeX"
                                : "text-gray-500 animate__animated  animate__tada"
                            } text-[1.7rem] `}
                          >
                            {item.icon1}
                          </p>
                        </button>
                      </div>
                      <div>
                        <div className="flex gap-5 w-full">
                          <button className=" font-extrabold text-gray-700 rounded-lg px-5 py-1">
                            {item.id}
                          </button>

                          <button
                            onClick={() => toggleOrder(item.id)}
                            className={`${
                              ordered.includes(item.id)
                                ? "text-[red] animate__animated animate__rubberBand"
                                : "text-gray-400 animate__animated animate__pulse"
                            } border bg-[#13948d] border-black/10 rounded-lg py-1 px-7`}
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
                    <p className="flex justify-center mb-0 text-sm font-normal text-[red]">
                      {cartReminder}
                    </p>
                    <p className="flex justify-center pt-5 text-small font-normal text-[#299929]">
                      {cartClicked[item.id] && (
                        <p className="animate__animated animate__bounceOutRight animate__delay-2s mb-3">
                          {" "}
                          Item added successfully!
                        </p>
                      )}
                    </p>
                    <h1 className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
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
                <div className=" w-full h-auto ">
                  <div className="flex justify-center">
                    <figure className="w-3/5 h-full">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full rounded-lg"
                      />
                    </figure>
                  </div>
                </div>
                <div className="">
                  <div className="w-full justify-center flex gap-[30%] mt-5">
                    <div className="flex gap-5">
                      <div className="flex items-center h-full gap-1">
                        <button
                          onClick={() => toggleLike(item.id)}
                          className={`${
                            likedItems.includes(item.id)
                              ? "text-[red] animate__animated animate__rubberBand"
                              : "text-gray-500 animate__animated animate__pulse"
                          } text-[2rem]`}
                        >
                          {item.icon2}
                        </button>
                      </div>
                      <button onClick={() => handleCart(item)}>
                        <p
                          className={`${
                            cartClicked[item.id]
                              ? "text-[#329e99] animate__animated animate__shakeX"
                              : "text-gray-500 animate__animated  animate__tada"
                          } text-[1.7rem] `}
                        >
                          {item.icon1}
                        </p>
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-5 w-full">
                        <button className="font-extrabold text-gray-700 rounded-lg px-5 py-1">
                          {item.id}
                        </button>
                        <button
                          onClick={() => toggleOrder(item.id)}
                          className={`${
                            ordered.includes(item.id)
                              ? "text-[red] animate__animated animate__rubberBand"
                              : "text-gray-400 animate__animated animate__pulse"
                          } border bg-[#13948d] border-black/10 rounded-lg py-1 px-7`}
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
                  <p className="flex justify-center mb-0 text-sm font-normal text-[red]">
                    {cartReminder}
                  </p>
                  <div className="flex justify-center pt-5 text-small font-normal text-[#299929]">
                    {cartClicked[item.id] && (
                      <p className="animate__animated animate__bounceOutRight animate__delay-2s mb-3">
                        {" "}
                        Item added successfully!
                      </p>
                    )}
                  </div>
                  <h1 className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                    About {item.name}
                  </h1>

                  <div className="w-full flex justify-center  mb-5">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.description}
                    </p>
                  </div>
                  <p className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                    More about {item.name}
                  </p>
                  <div className="w-full flex justify-center  mb-10">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.extraInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        {burgers
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
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-lg"
                    />
                  </figure>
                </div>
                <div className="">
                  <div className="w-full justify-center flex gap-[45%] mt-5">
                    <div className="flex gap-5">
                      <div className="flex items-center h-full gap-1">
                        <button
                          onClick={() => toggleLike(item.id)}
                          className={`${
                            likedItems.includes(item.id)
                              ? "text-[red] animate__animated animate__rubberBand"
                              : "text-gray-500 animate__animated animate__pulse"
                          } text-[2rem]`}
                        >
                          {item.icon2}
                        </button>
                      </div>
                      <button onClick={() => handleCart(item)}>
                        <p
                          className={`${
                            cartClicked[item.id]
                              ? "text-[#329e99] animate__animated animate__shakeX"
                              : "text-gray-500 animate__animated  animate__tada"
                          } text-[1.7rem] `}
                        >
                          {item.icon1}
                        </p>
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-5 w-full">
                        <button className="font-extrabold text-gray-700 rounded-lg px-5 py-1">
                          {item.id}
                        </button>
                        <button
                          onClick={() => toggleOrder(item.id)}
                          className={`${
                            ordered.includes(item.id)
                              ? "text-[red] animate__animated animate__rubberBand"
                              : "text-gray-400 animate__animated animate__pulse"
                          } border bg-[#13948d] border-black/10 rounded-lg py-1 px-7`}
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
                  <p className="flex justify-center mb-0 text-sm font-normal text-[red]">
                    {cartReminder}
                  </p>
                  <div className="flex justify-center pt-5 text-small font-normal text-[#299929]">
                    {cartClicked[item.id] && (
                      <p className="animate__animated animate__bounceOutRight animate__delay-2s mb-3">
                        {" "}
                        Item added successfully!
                      </p>
                    )}
                  </div>
                  <h1 className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                    About {item.name}
                  </h1>

                  <div className="w-full flex justify-center  mb-5">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.description}
                    </p>
                  </div>
                  <p className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                    More about {item.name}
                  </p>
                  <div className="w-full flex justify-center  mb-10">
                    <p className="text-sm text-gray-600 text-center w-3/5">
                      {item.extraInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div>
          {data
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
                      <div className="flex gap-5">
                        <div className="flex items-center h-full gap-1">
                          <button
                            onClick={() => toggleLike(item.id)}
                            className={`${
                              likedItems.includes(item.id)
                                ? "text-[red] animate__animated animate__rubberBand"
                                : "text-gray-500 animate__animated animate__pulse"
                            } text-[2rem]`}
                          >
                            <AiFillHeart />
                          </button>
                        </div>
                        <button onClick={() => handleCart(item)}>
                          <p
                            className={`${
                              cartClicked[item.id]
                                ? "text-[#329e99] animate__animated animate__shakeX"
                                : "text-gray-500 animate__animated  animate__tada"
                            } text-[1.7rem] `}
                          >
                            <BsFillCartFill />
                          </p>
                        </button>
                      </div>
                      <div>
                        <div className="flex gap-5 w-full">
                          <button className="font-extrabold text-gray-700 rounded-lg px-5 py-1">
                            {item.id}
                          </button>
                          <button
                            onClick={() => toggleOrder(item.id)}
                            className={`${
                              ordered.includes(item.id)
                                ? "text-[red] animate__animated animate__rubberBand"
                                : "text-gray-400 animate__animated animate__pulse"
                            } border bg-[#13948d] border-black/10 rounded-lg py-1 px-7`}
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
                    <p className="flex justify-center mb-0 text-sm font-normal text-[red]">
                      {cartReminder}
                    </p>
                    <div className="flex justify-center pt-5 text-small font-normal text-[#299929]">
                      {cartClicked[item.id] && (
                        <p className="animate__animated animate__bounceOutRight animate__delay-2s mb-3">
                          {" "}
                          Item added successfully!
                        </p>
                      )}
                    </div>
                    <h1 className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                      About {item.name}
                    </h1>

                    <div className="w-full flex justify-center  mb-5">
                      <p className="text-sm text-gray-600 text-center w-3/5">
                        {item.description}
                      </p>
                    </div>
                    <p className="w-full flex justify-center  mb-5 font-bold text-[#13948d] text-xl">
                      More about {item.name}
                    </p>
                    <div className="w-full flex justify-center  mb-10">
                      <p className="text-sm text-gray-600 text-center w-3/5">
                        {item.extraInfo}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
