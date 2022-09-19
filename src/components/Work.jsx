import React, { useState } from "react";
import Projects from "./Projects";
import projectData from "../projectData";

function Work() {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <section className="py-2 py-md-5">
      <h2 className="text-center  mb-3 mb-md-5">
        <span className="number">03. </span>
        <span>Some works I have done</span>
      </h2>
      <div className="container px-4">
        <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-4 ">
          {isShowMore
            ? projectData.map((item) => <Projects key={item.id} {...item} />)
            : projectData
                .slice(8)
                .map((item) => <Projects key={item.id} {...item} />)}
        </div>
      </div>
      <div className="text-center m-3">
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
