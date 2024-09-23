import React from "react";
import "./Header_Style.css";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" className="headerlogo"/>
      </div>
      <button className="headerbutton" onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Login" : "SignIn"}
      </button>
    </div>
  );
}

export default Header;
