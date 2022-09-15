import React from "react";
import profile from "../assets/images/profile-pic.jpg";

function About() {
  return (
    <section className="vh-100">
      <h2 className="text-center">
        <span className="number">01. </span>
        <span>About Me</span>
      </h2>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col col-8 about-col">
            <h6>Hi, my name is</h6>
            <h1 className="ps-5 display-1">Razieh Abedi</h1>
            <h2 className="pt-3">I'm a web developer.</h2>
            <p className="w-75 pt-3">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div className="col col-4 about-col">
            <img src={profile} alt="Razi" className="h-100 w-100 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
