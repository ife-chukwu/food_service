import React, { useContext, useState, useEffect } from "react";
import { context } from "../../MyContext";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import searchDataBase from "./SearchDataBase";
export const SearchArea = () => {
  const { menuItems, pizzas, data, input, message, handleChange, clearInput } =
    useContext(context);
  // const allData = menuItems.concat(pizzas, data);
  console.log(searchDataBase);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="md:pt-[10%] pt-[40%] w-full">
      <div className="flex justify-center w-full items-center">
        <form className="w-full flex justify-center ">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={input}
            className="w-4/5 md:w-3/5 flex outline-none py-2 rounded-xl px-5 text-black/50 text-lg font-bold bg-black/10"
          />
        </form>
        <MdClear
          className="absolute ml-[55%] text-black/50 text-xl cursor-pointer"
          onClick={clearInput}
        />
      </div>
      <p className="flex justify-center font-extralight pt-3 text-[red]">
        {message}
      </p>
      {input.length > 0 ? (
        ""
      ) : (
        <h1 className="flex justify-center mt-10 log0 text-2xl font-bold text-[#46bbb5]">
          Suggestions
        </h1>
      )}
      <div className="grid grid-cols-4 gap-x-10 mx-10 mt-10 mb-10">
        {searchDataBase
          .filter((item) => item.name.toLowerCase().includes(input))
          .map((item) => {
            return (
              <div key={item.id}>
                <Link to={`${item.name}`}>
                  <div className="flex justify-center h-full">
                    <figure className="w-4/5 h-4/5">
                      <img
                        src={item.imageUrl || item.img || item.image}
                        alt={item.name}
                        className="rounded-lg w-full h-full"
                      />
                      <figcaption className="flex justify-center  text-black/50">
                        {" "}
                        {item.name}
                      </figcaption>
                    </figure>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
