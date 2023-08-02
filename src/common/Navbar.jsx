import React, { Component } from "react";
import { mdLocalHospital } from "react-icons/md";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav__container">
        <nav className="nav">
          <div className="brand">
            <a href="">
              <img className="logo" src={logo} />
            </a>
            <div className="icon"> Swasya</div>
          </div>

          <ul className="list nav__list ">
            <li className="nav__item">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#">Vision</a>
            </li>
            <li className="nav__item">
              <a href="#">Services</a>
            </li>
            <li className="nav__item">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="nav__register nav__login">
          <button className="nav__button">Login</button>
          <button className="nav__button">Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
