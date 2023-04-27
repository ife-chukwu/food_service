import React, { useState } from "react";

export const OrderDrink = () => {
  const products = [
    {
      id: 1,
      name: "Product A",
      image:
        "https://images.unsplash.com/photo-1680909426935-1c907d543577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product B",
      image:
        "https://images.unsplash.com/photo-1681140348645-2d8425c1c75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product C",
      image:
        "https://images.unsplash.com/photo-1681115085351-4c207e8e4ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      caption: "Duis aute irure dolor in reprehenderit in voluptate velit",
      price: 7.99,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [buttonClicked, setButtonClicked] = useState({});

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, likes: null },
    ]);
    setButtonClicked((prevButtonClicked) => ({
      ...prevButtonClicked,
      [product.id]: true,
    }));
  };
  const deleteCartItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const increaseLikes = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === id) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      })
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      OrderDrink
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="w-2/4 h-[200px]"
            />
            <p>{product.caption}</p>
            <span>${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: buttonClicked[product.id] ? "green" : "blue",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart mt-10">
        <h2>Cart</h2>
        {cartItems.length === 0 && <p>Cart is empty.</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} className="w-2/4 h-[200px]" />

            <div className="cart-item-controls">
              <button onClick={() => deleteCartItem(item.id)}>Delete</button>
              <button onClick={() => increaseLikes(item.id)}>
                Likes: {item.likes}
              </button>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
        {cartItems.length > 0 && (
          <>
            <hr />
            <div className="cart-total">
              <p>Total:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
