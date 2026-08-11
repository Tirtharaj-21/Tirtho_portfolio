import React from "react";
import "../styling/navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <b>Tirtharaj</b>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#education">Internship</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="nav-divider" />
    </>
  );
};

export default Navbar;
