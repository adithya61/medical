import React, { Component } from "react";
import image_1 from "../images/services_1.webp";
import image_2 from "../images/services_2.webp";
import image_3 from "../images/services_3.webp";
import { useEffect } from "react";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="services">
        <div className="services__container container">
          <div className="services__header">
            {" "}
            <h2>Our Services</h2>{" "}
            <div className="btn btn--services">View all Services</div>
          </div>
          <main className="card--services">
            <div
              className="card services__card"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <img className=" services__icon" src={image_1} />
              <h3 className="services__card__heading">
                Integrated Health Solutions for Hospitals & Patients
              </h3>
              <div className="card__content services__card__content">
                HealthTech Solutions is a cutting-edge service that leverages
                technology to provide innovative healthcare solutions and
                improve patient outcomes.
              </div>
              <div className="services__readMore">Read more</div>
            </div>
            <div
              className="card services__card"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <img className=" services__icon" src={image_2} />
              <h3 className="services__card__heading">
                Integrated Health Solutions for Hospitals & Patients
              </h3>
              <div className="card__content services__card__content">
                HealthTech Solutions is a cutting-edge service that leverages
                technology to provide innovative healthcare solutions and
                improve patient outcomes.
              </div>
              <div className="services__readMore">Read more</div>
            </div>
            <div
              className="card services__card"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <img className=" services__icon" src={image_3} />
              <h3 className="services__card__heading">
                Integrated Health Solutions for Hospitals & Patients
              </h3>
              <div className="card__content services__card__content">
                HealthTech Solutions is a cutting-edge service that leverages
                technology to provide innovative healthcare solutions and
                improve patient outcomes.
              </div>
              <div className="services__readMore">Read more</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Services;
