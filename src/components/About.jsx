import React from "react";
import profile from "../assets/images/profile-pic.jpg";

function About() {
  return (
    <section className="py-2 py-md-5" id="about">
      <h2 className="text-center  mb-3 mb-md-5">
        <span className="number">01. </span>
        <span>About Me</span>
      </h2>
      <div className="container px-4">
        <div className="row">
          <div className="col col-12 col-md-8 about-col">
            <h6>Hi, my name is</h6>
            <h1 className="ps-5 display-1">Razieh Abedi</h1>
            <h2 className="pt-3">I'm a web developer.</h2>
            <p className="p-3">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div className="col col-12 col-md-4 about-col">
            <img src={profile} alt="Razi" className="h-100 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
