import React, { Component } from "react";
import doctor from "../images/doctor.jpeg";
import p1 from "../images/patient_1.jpeg";
import p2 from "../images/patient_2.jpeg";
import p3 from "../images/patient_3.jpeg";
import p4 from "../images/patient_4.jpeg";
import p5 from "../images/patient_5.jpeg";
import { useEffect } from "react";
import AOS from "aos";
const Gallary = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="gallary__container">
        <div className="gallary container">
          <h1 className="gallary__heading">Gallery</h1>
          <div className="gallary__images">
            <img
              className="gallary__image"
              src={p1}
              alt=""
              data-aos="fade-right"
              data-aos-delay="100"
            />
            <img
              className="gallary__image doctor-image"
              src={doctor}
              alt=""
              data-aos="fade-left"
              data-aos-delay="100"
            />
            <img
              className="gallary__image"
              src={p2}
              alt=""
              data-aos="fade-right"
              data-aos-delay="100"
            />
            <img
              className="gallary__image"
              src={p3}
              alt=""
              data-aos="fade-right"
              data-aos-delay="100"
            />
            <img
              className="gallary__image"
              src={p4}
              alt=""
              data-aos="fade-left"
              data-aos-delay="100"
            />
            <img
              className="gallary__image"
              src={p5}
              alt=""
              data-aos="fade-left"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
