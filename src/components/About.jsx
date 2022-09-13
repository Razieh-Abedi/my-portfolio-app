import React from "react";

function About() {
  return (
    <div className="container my-5 p-5">
        <h2>01. About me</h2>
      <div className="row gx-5 align-items-center">
        <div className="col col-8">
          <div>
            {" "}
            <h6>Hi, my name is</h6>
            <h1>Razieh Abedi.</h1>
            <h2>I'm a web developer.</h2>
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
        </div>
        <div className="col col-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Razi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
