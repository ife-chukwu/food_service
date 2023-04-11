import React, { createContext } from "react";
import { useState } from "react";

const context = createContext();

const MyContext = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  const handleColor = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleColor);
  // cart and likes update

  const [buttonActive, setButtonActive] = useState([
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
  ]);

  const [likes, setLikes] = useState(null);

  const handleButton = (index) => {
    const isButtonTrue = [...buttonActive];
    isButtonTrue[index].isActive = !isButtonTrue[index].isActive;
    setButtonActive(isButtonTrue);

    if (isButtonTrue[0].isActive) {
      setLikes(likes + 1);
    } else {
      setLikes(null);
    }
  };

  const [cartCount, setCartCount] = useState(null);

  const [cartItems, setCartItems] = useState([]);
  const [cartReminder, setCartReminder] = useState("");

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartReminder("You already have item in you cart");
      return cartItems;
    } else {
      const newCart = [...cartItems, item];
      setCartItems(newCart);
      return newCart;
    }
  };

  const menuItems = [
    {
      id: "1",
      name: "Hawaiian Pizza",
      type: "pizza",
      description:
        "Our Hawaiian pizza is made with juicy pineapple chunks, crispy bacon, and savory ham. A delicious tropical twist on a classic pizza.",
      extraInfo:
        "Hawaiian Pizza: This pizza usually contains ham, pineapple, and cheese on a tomato sauce base. It is typically high in calories, saturated fat, and sodium.",
      imageUrl:
        "https://media.istockphoto.com/id/1144856949/photo/pepperoni-pizza-with-mozzarella-cheese-salami-pepper-spices-and-fresh-spinach-italian-pizza.jpg?s=612x612&w=0&k=20&c=uJDI0uBinkgXl_VwLQDyiwNWfGRFguyzRuaGO8iF5qY=",
    },
    {
      id: "2",
      name: "Mango Tango Smoothie",
      type: "drink",
      description:
        "Our Mango Tango smoothie is made with fresh mangoes, bananas, and yogurt. A refreshing and healthy drink for any time of day.",
      extraInfo:
        "Mango Tango Smoothie: This smoothie is typically made with mango, banana, yogurt, and/or milk. It is generally a good source of vitamins and minerals, but may also contain added sugars if sweetened.",
      imageUrl:
        "https://media.istockphoto.com/id/175252833/photo/mango-and-pineapple-smoothie.jpg?s=612x612&w=0&k=20&c=Hca2ikIlmECFm5C4t8x7cK4WQefr8l-t1gS89u2IrK4=",
    },
    {
      id: "3",
      name: "Classic Burger",
      type: "burger",
      description:
        "Our classic burger is made with a juicy beef patty, topped with lettuce, tomato, onion, and pickles. Served on a soft sesame seed bun.",
      extraInfo:
        "Classic Burger: A classic burger typically includes a beef patty, lettuce, tomato, onion, pickles, and condiments such as ketchup or mayonnaise. It is typically high in calories, fat, and sodium.",
      imageUrl:
        "https://images.unsplash.com/photo-1535569807835-01fd773379ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMEJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "4",
      name: "Pepperoni Pizza",
      type: "pizza",
      description:
        "Our Pepperoni pizza is made with spicy pepperoni slices, fresh tomato sauce, and mozzarella cheese. A classic favorite that never goes out of style.",
      extraInfo:
        "Pepperoni Pizza: This pizza usually contains pepperoni, cheese, and tomato sauce. It is typically high in calories, saturated fat, and sodium.",
      imageUrl:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "5",
      name: "Strawberry Lemonade",
      type: "drink",
      description:
        "Our Strawberry Lemonade is made with freshly squeezed lemon juice and sweet strawberries. A perfect balance of tart and sweet flavors.",
      extraInfo:
        "Strawberry Lemonade: This beverage is typically made with lemon juice, water, sugar, and fresh or frozen strawberries. It may also contain added sugars or sweeteners.",
      imageUrl:
        "https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyMExlbW9uYWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "6",
      name: "Spicy Chicken Burger",
      type: "burger",
      description:
        "Our spicy chicken burger is made with a crispy chicken patty, topped with lettuce, tomato, and spicy mayo. Served on a soft sesame seed bun.",
      extraInfo:
        "Spicy Chicken Burger: This burger usually includes a chicken patty seasoned with spices, lettuce, tomato, onion, and condiments. It is typically high in calories and sodium, depending on the preparation method and ingredients used.",
      imageUrl:
        "https://media.istockphoto.com/id/1394794108/photo/sweet-and-sour-crispy-fried-chicken-burger-with-kimchi.jpg?s=612x612&w=0&k=20&c=Kti39_KZP5Fzpw3dqN_zCTZ5G4ljBOvcWjmQb4hCvLc=",
    },
    {
      id: "7",
      name: "Vegetable Pizza",
      type: "pizza",
      description:
        "Our Vegetable pizza is loaded with fresh vegetables, including bell peppers, onions, mushrooms, and olives. A delicious and healthy pizza option.",
      extraInfo:
        "Vegetable Pizza: This pizza usually includes a variety of vegetables such as bell peppers, onions, mushrooms, and olives on a tomato sauce and cheese base. It can be a good source of vitamins and minerals, but may also be high in sodium and calories depending on the toppings and crust.",
      imageUrl:
        "https://media.istockphoto.com/id/1151447052/photo/tasty-supreme-pizza-with-olives-peppers-onions-and-sausage.jpg?s=612x612&w=0&k=20&c=6m17pHx7VmeR2jCYmgbVCMTUgejpzFsB4Sx654fPBnM=",
    },
    {
      id: "8",
      name: "Blueberry Smoothie",
      type: "drink",
      description:
        "Our Blueberry smoothie is made with fresh blueberries, bananas, and yogurt. A tasty and nutritious way to start your day.",
      extraInfo:
        "Blueberry Smoothie: This smoothie typically includes blueberries, banana, yogurt, and/or milk. It is generally a good source of vitamins and minerals, but may also contain added sugars if sweetened.",
      imageUrl:
        "https://media.istockphoto.com/id/1355866215/photo/moon-milk-pink-matcha-with-rose-petals-transparent-cup-with-trendy-vegan-whipped-tea-on-white.jpg?s=612x612&w=0&k=20&c=Hx3TPMhtRu1LxmqvyZKwlUBIcb1LhHwwpCiIO_YI3q8=",
    },
    {
      id: "9",
      name: "BBQ Burger",
      type: "burger",
      description:
        "Our BBQ burger is made with a juicy beef patty, topped with crispy onion rings and smoky BBQ sauce. Served on a soft sesame seed bun.",
      extraInfo:
        "BBQ Burger: This burger typically includes a beef patty with BBQ sauce, bacon, cheese, lettuce, and tomato. It is typically high in calories, fat, and sodium.",
      imageUrl:
        "https://media.istockphoto.com/id/642884888/photo/home-made-hamburger-with-lettuce-and-cheese.jpg?s=612x612&w=0&k=20&c=HsQ3rKPT5VFKeyJIU4uVDb9LAAN6JYlZNi6fUvQcv50=",
    },
    {
      id: "10",
      name: "Meat Lovers Pizza",
      type: "pizza",
      description:
        "Our Meat Lovers pizza is loaded with savory meats, including pepperoni, sausage, bacon, and ham. A meaty delight for any pizza lover.",
      extraInfo:
        "Meat Lovers Pizza: This pizza usually contains various meats such as sausage, pepperoni, ham, and bacon on a tomato sauce and cheese base. It is typically high in calories, saturated fat, and sodium.",
      imageUrl:
        "https://media.istockphoto.com/id/837568064/photo/hot-true-italian-pizza-pepperoni-pizza-on-board-on-white-wooden-table-with-decoration-copy.jpg?s=612x612&w=0&k=20&c=Yoguiracu9DA01ikte9H9HtCJDgKoAozOV2k91UHhK4=",
    },
  ];

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
      name: "Veggie tomato pizza",
      description:
        "This pizza variety is famous for its thick, buttery crust and towering layers of toppings. ",
      oder: "add to cart",
      price: "$9.20 USSD",
    },
  ];
  return (
    <div>
      <context.Provider
        value={{
          scroll,
          menuItems,
          pizzas,
          addToCart,
          cartItems,
          likes,
          buttonActive,
          handleButton,
          cartCount,
          cartReminder,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};
export { context, MyContext };
