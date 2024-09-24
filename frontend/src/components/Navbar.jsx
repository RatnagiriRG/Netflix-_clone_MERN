import React from "react";
import "./Navbar_Style.css";

function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <div className="nav-container">
      <nav className={`flex ${isScrolled ? "scrollled" : ""}`}>
        <div className="left flex a-center"></div>
      </nav>
    </div>
  );
}

export default Navbar;
