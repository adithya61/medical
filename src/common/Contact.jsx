import React, { Component } from "react";
import placeholder from "../images/services_1.webp";
import mail from "../images/mail__contact.svg";
import { useEffect } from "react";
import AOS from "aos";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="contact">
        <div className="contact--container container">
          <div
            className="contact__communication"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="card contact__card">
              {" "}
              <img className="contact__image" src={placeholder} alt="" />{" "}
              <div className="contact__ph">
                <h3 className="contact__name">Talk to Us</h3>
                <div className="contact__number">+91 88231893900</div>
              </div>
            </div>
            <div className="card contact__card">
              {" "}
              <img
                className="contact__image image-mail"
                src={mail}
                alt=""
              />{" "}
              <div className="contact__ph">
                <h3 className="contact__name">Email Address</h3>
                <div className="contact__number"> swasy.tech@gmail.com </div>
              </div>
            </div>
          </div>
          <div
            className="contact__message"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="contact__heading">Leave Us a Message</h1>
            <div className="contact__fullName">
              <div className="contact__fname">
                <label className="label__name" htmlFor="FirstName">
                  First Name
                </label>
                <input className="input__name" type="text" />
              </div>
              <div className="contact__lname">
                <label className="label__name" htmlFor="FirstName">
                  Last Name
                </label>
                <input className="input__name" type="text" />
              </div>
            </div>
            <div className="contact__fullName email-phone">
              <div className="contact__fname">
                <label className="label__name" htmlFor="FirstName">
                  Email Address
                </label>
                <input className="input__name" type="text" />
              </div>
              <div className="contact__lname">
                <label className="label__name" htmlFor="FirstName">
                  Phone
                </label>
                <input className="input__name" type="text" />
              </div>
            </div>
            <div className="contact__fullName subject">
              <div className="contact__fname">
                <label className="label__name" htmlFor="FirstName">
                  Subject
                </label>
                <input className="input__name input__subject" type="text" />
              </div>
            </div>
            <div className="contact__fullName subject feedback">
              <div className="contact__fname">
                <label className="label__name" htmlFor="FirstName">
                  Message
                </label>
                <textarea
                  className=" input__subject feedback__input"
                  type="text"
                />
              </div>
            </div>
            <div className="btn btn--feedback">Submit</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
