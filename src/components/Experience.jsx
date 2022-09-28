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
      <main className="d-block d-md-flex container justify-content-md-between">
        <div className="btnContainer py-2 py-md-5 d-flex d-md-block justify-content-between">
          {ExperienceData.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`mt-3 mx-auto rounded d-block jobBtn ${
                  index === value ? "activeJobBtn" : ""
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="jobInfo">
          <h3>{title}</h3>
          <div className="d-flex d-md-block justify-content-start align-items-center py-3">
            <h6 className="border border-0 companyBtn p-1 ps-2 rounded">
              {company}
            </h6>
            <h6 className="ms-2">{dates}</h6>
          </div>
          {duties.map((duty, index) => {
            return (
              <div
                key={index}
                className="d-flex align-items-start justify-content-start"
              >
                <TiChevronRight className="jobIcon me-2" />
                <p className="text-break">{duty}</p>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Experience;
