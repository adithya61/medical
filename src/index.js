import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./common/Navbar";
import Hero from "./common/Hero";
import Card from "./common/Card.jsx";
import Services from "./common/Services.jsx";
import Gallary from "./common/Gallary";
import Testimonials from "./common/Testimonials";
import Contact from "./common/Contact";
import Footer from "./common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card />
    <Services />
    <Gallary />
    <Testimonials />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
