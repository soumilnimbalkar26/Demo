import React from "react";
import BG from "../images/background.jpg";

const Background = ({ children }) => {
  return (
    <>
      <div>
        <img className="absolute inset-0" src={BG} alt="bg" />
        {children}
      </div>
    </>
  );
};

export default Background;
