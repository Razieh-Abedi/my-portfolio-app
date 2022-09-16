import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects({ title, subtitle, description, link }) {
  return (
    <div className="col text-center">
      <div className="card project text-center">
        <div className="card-body h-100 d-flex flex-column justify-content-between">
          <h5 className="card-title title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className="card-text">{description}</p>
          <a href={link}>
            <FaExternalLinkAlt className="link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
