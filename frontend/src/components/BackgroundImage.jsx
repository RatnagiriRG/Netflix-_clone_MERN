import React from "react";
import background from "../assets/login.jpg";
import "./BackgroundImage_Style.css";

function BackgroundImage() {
  return (
    <div className="background-container">
      <img src={background} alt="background"  />
    </div>
  );
}

export default BackgroundImage;
