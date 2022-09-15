import React from "react";
import Projects from "./Projects";
import projectData from "../projectData";

function Work() {
  return (
    <section className="vh-100">
      <h2 className="text-center mb-5">
        <span className="number">02. </span>
        <span>Some works I have done</span>
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-3">
          {projectData.map((item) => (
            <Projects key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
