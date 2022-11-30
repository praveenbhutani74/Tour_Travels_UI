import React from "react";
import WorldLogo from "../assets/Path.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <img src={WorldLogo} alt="image1" className="ImageLogo" />
        <p className="Nav-p">my travel journal.</p>
      </nav>
    </>
  );
};

export default Navbar;
