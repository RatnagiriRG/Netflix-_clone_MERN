import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Netflix_Style.css";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="netflix-container">
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex a-center j-center"
              onClick={() => navigate("player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex a-center j-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
