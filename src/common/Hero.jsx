import React, { Component } from "react";
import hero_image from "../hero__image.webp";
import { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hero__section">
        <section className="block block--dark">
          <div className="container grid grid--1x2">
            <header
              className="block__header hero__content"
              data-aos="zoom-in"
              data-aos-delay="70"
            >
              <h1 className="block__heading">
                Integrated Healthcare Solutions for Hospitals and Patients
              </h1>
              <p className="hero__tagline">
                Swasya: Empowering healthcare through government-backed ABHA
                technology, seamlessly integrating hospitals and patients for
                enhanced medical care.
              </p>
              <a href=" " className="btn btn--hero">
                Get Started
              </a>
            </header>
            <picture>
              <img
                className="hero__image"
                src={hero_image}
                data-aos="zoom-in"
                data-aos-delay="60"
              />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
