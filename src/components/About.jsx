import React from "react";
import profile from "../assets/images/profile-pic.jpg";
import { TiChevronRight } from "react-icons/ti";
function About() {
  return (
    <section className="py-4 py-md-5">
      <h2 className="text-center  mb-3 mb-md-5">
        <span className="number">01. </span>
        <span>About Me</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-8 aboutCol">
            <h6>Hi, my name is</h6>
            <h1 className="ps-5 display-1">Razieh Abedi</h1>
            <h2 className="pt-3">I'm a web developer.</h2>

            <p className="p-3">
              I’m a certified, determined, and productive front-end web
              developer with a passion for creative solutions. I develope,
              create, and design responsive websites and web applications using
              the following technologies:
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-1" />
                  React.js (hooks)
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  JavaScript
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  HTM5
                </div>
              </div>
              <div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  CSS3
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  GIT
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  BootStrap5
                </div>
              </div>
              <div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  Visual studio Code
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  WordPress
                </div>
                <div>
                  {" "}
                  <TiChevronRight className="jobIcon me-2" />
                  PhotoShop
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-4 about-col">
            <img src={profile} alt="Razi" className="h-100 w-100 rounded mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
