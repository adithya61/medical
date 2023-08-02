import React, { Component } from "react";
import logo from "../images/logo.svg";
const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="container">
          <div className="footer">
            <div className="footer__icon">
              <img className="footer__logo" src={logo} alt="" />
              Swasya
              <div className="copyright">© swasya 2023</div>
            </div>
            <div className="footer__links">
              <div className="footer__items">
                <div className="footer__item">
                  <h4>Home</h4>
                  <div className="item">About</div>
                  <div className="item">Vision</div>
                  <div className="item">Team</div>
                </div>
                <div className="footer__item">
                  <h4>Read</h4>
                  <div className="item">Resources</div>
                  <div className="item">FAQ</div>
                  <div className="item">Blog</div>
                </div>
                <div className="footer__item">
                  <h4>Get Help</h4>
                  <div className="item">Support</div>
                  <div className="item">Contact</div>
                  <div className="item">Help Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
