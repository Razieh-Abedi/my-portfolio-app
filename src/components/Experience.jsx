import React from "react";
// import { useParams } from "react-router-dom";

function Experience() {
  // const { experience } = useParams;
  return (
    <section className="py-2 py-md-5" id="experience">
      <h2 className="text-center  mb-3 mb-md-5">
        <span className="number">02. </span>
        <span>Some works I have done</span>
      </h2>
      <div className="container px-4">
        <div className="row">
          <div className="col">
            <ul>
              <li>work 1</li>
              <li>work2</li>
              <li>work3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
