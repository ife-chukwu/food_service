import React from "react";

export const Pizza = () => {
  const pizzas = [
    {
      id: 1,
      img: "/src/assets/TestingImages/img9.jpg",
      name: "Margherita pizza",
      description:
        "A classic pizza that originated in Naples, Italy. It's made with simple ingredients, including tomato sauce.",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 2,
      img: "/src/assets/TestingImages/img1.jpg",
      name: "Pepperoni pizza",
      description:
        "A popular type of pizza in the United States, pepperoni pizza features tomato sauce, mozzarella cheese, and slices .",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 3,
      img: "/src/assets/TestingImages/img2.jpg",
      name: "Hawaiian pizza",
      description:
        "This controversial pizza variety features tomato sauce, mozzarella cheese, ham, and pineapple. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 4,
      img: "/src/assets/TestingImages/img3.jpg",
      name: "Chicago-style deep dish pizza",
      description:
        "This pizza variety is famous for its thick, buttery crust and towering layers of toppings. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 5,
      img: "/src/assets/TestingImages/imgFour.jpg",
      name: "Neapolitan pizza",
      description:
        "Similar to Margherita pizza, Neapolitan pizza is a traditional pizza that originated in Naples. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 6,
      img: "/src/assets/TestingImages/img5.jpg",
      name: "Meat lovers pizza",
      description:
        "As the name suggests, this pizza is for meat lovers. It's loaded with toppings like pepperoni, sausage, bacon, and ham. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 7,
      img: "/src/assets/TestingImages/img6.jpg",
      name: "Veggie pizza",
      description:
        "For those who prefer a vegetarian option, veggie pizza is a popular choice. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
    {
      id: 8,
      img: "/src/assets/TestingImages/img8.jpg",
      name: "Veggie pizza",
      description:
        "This pizza variety is famous for its thick, buttery crust and towering layers of toppings. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-y-10 my-10">
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.id} className="flex justify-center">
              <div className="w-4/5 py-5 bg-black/10 h-full px-5 rounded shadow-black/20 shadow-md">
                <div className="flex gap-5">
                  <figure className="w-2/5 h-full">
                    <img
                      src={pizza.img}
                      alt="Image"
                      className="w-full h-full rounded"
                    />
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
                      <button className="border rounded border-black/10 px-7 py-1 text-sm bg-[#13948d] text-white">
                        Order
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
