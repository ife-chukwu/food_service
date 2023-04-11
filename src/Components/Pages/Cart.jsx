import React, { Fragment, useContext } from "react";
import { context } from "../../MyContext";

export const Cart = () => {
  const { cartItems } = useContext(context);
  return (
    <div>
      {cartItems.map((item, index) => (
        <Fragment key={index}>
          <p className="pt-40">{item.name}</p>
          <img src={item.img} />
        </Fragment>
      ))}
    </div>
  );
};
