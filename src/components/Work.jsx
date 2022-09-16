import React, { useState } from "react";
import Projects from "./Projects";
import projectData from "../projectData";

function Work() {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <section className="vh-100">
      <h2 className="text-center mb-5">
        <span className="number">02. </span>
        <span>Some works I have done</span>
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-4 text-center">
          {isShowMore
            ? projectData.map((item) => <Projects key={item.id} {...item} />)
            : projectData
                .slice(8)
                .map((item) => <Projects key={item.id} {...item} />)}
        </div>
      </div>
      <div className="text-center">
        <button
          className="webBtn btn btn-outline-light"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}

export default Work;
