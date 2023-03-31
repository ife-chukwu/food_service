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
  return (
    <div>
      <context.Provider value={{ scroll }}>{children}</context.Provider>
    </div>
  );
};
export { context, MyContext };
