import React, { Component } from "react";
import doctor from "../images/doctor.svg";
import history from "../images/history.svg";
import pills from "../images/pills.svg";
import { useEffect } from "react";
import AOS from "aos";
const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div class="card__container ">
        <div className="card" data-aos="fade-down" data-aos-delay="60">
          <img className="icon__card" src={doctor} />
          <div className="card__content">
            Confirmed Doctor Appointment, clinical procedure scheduling,
            schedule next consultation with token.
          </div>
          <div className="btn btn--card">Appointment</div>
        </div>
        <div className="card" data-aos="fade-down" data-aos-delay="60">
          <img className="icon__card" src={history} />
          <div className="card__content">
            Store and Access Patient History/Past Records with ease Stored
            securly in the ABHA database.
          </div>
          <div className="btn btn--card">History</div>
        </div>
        <div className="card" data-aos="fade-down" data-aos-delay="60">
          <img className="icon__card" src={pills} />
          <div className="card__content">
            Track Patients ongoing and past prescriptions. Before consulting
            with the patient to treat the patient better.
          </div>
          <div className="btn btn--card">Prescription</div>
        </div>
      </div>
    </>
  );
};

export default Card;
