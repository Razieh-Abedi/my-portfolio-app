import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import ExperienceData from "../ExperienceData";
import { TiChevronRight } from "react-icons/ti";

function Experience() {
  // const { experience } = useParams;
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = ExperienceData[value];
  return (
    <section className="py-2 py-md-5">
      <h2 className="text-center  mb-3 mb-md-5">
        <span className="number">02. </span>
        <span>Some works I have done</span>
      </h2>
      <main className="d-md-flex container justify-content-between">
        <div className="btnContainer w-25 py-4 ">
          {ExperienceData.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`mt-3 mx-auto btn btn-outline-light d-block jobBtn ${
                  index === value ? "activeJobBtn" : ""
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="w-75 ">
          <h3>{title}</h3>
          <h5 className="btn btn-outline-light companyBtn">{company}</h5>
          <p className="text-black-50">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div
                key={index}
                className="d-flex align-items-center justify-content-start"
              >
                <TiChevronRight className="jobIcon me-2" />
                <p className="jobInfo">{duty}</p>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Experience;
