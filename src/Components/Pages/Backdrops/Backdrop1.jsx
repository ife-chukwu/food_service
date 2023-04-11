import React, { useContext } from "react";
import { context } from "../../../MyContext";

export const Backdrop1 = () => {
  const { cartReminder } = useContext(context);
  return (
    <div className="w-full bg-black/60">
      <p>{cartReminder}</p>
    </div>
  );
};
