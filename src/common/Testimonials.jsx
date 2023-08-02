import React, { Component } from "react";
import testimonial__image from "../images/testimonials__image.webp";
import { useEffect } from "react";
import AOS from "aos";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="testimonials__container">
        <section className="block block--dark block--testimonial">
          <div className="container grid grid--1x2 grid--testimonial">
            <header
              className="block__header hero__content"
              data-aos="zoom-in"
              data-aos-delay="70"
            >
              <h1 className="block__heading">Happy Customers​</h1>
              <p className="hero__tagline testimonial__tagline">
                We provide a seamless and secure integration platform that
                bridges the gap between hospitals and patients, ensuring
                efficient and reliable healthcare services, backed by government
                support.
              </p>
              <a href=" " className="btn btn--hero btn--testimonial">
                View all Testimonials
              </a>
            </header>
            <picture>
              <img
                className="hero__image"
                src={testimonial__image}
                data-aos="zoom-in"
                data-aos-delay="70"
              />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
