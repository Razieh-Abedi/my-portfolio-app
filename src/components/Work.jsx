import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Work() {
  return (
    <section className="vh-100">
      <h2 className="text-center">
        <span className="number">02. </span>
        <span>Some works I have done</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card project">
              <div className="card-body">
                <h5 className="card-title text-black">Shopping Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Headphone shopping
                </h6>
                <p className="card-text text-black">
                  This is a sample shopping website with a shopping cart.
                </p>
                <a
                  href="https://razieh-abedi.github.io/shopping-cart/"
                  class="card-link"
                >
                  <FaExternalLinkAlt />
                </a>
                {/* <a href="#" class="card-link">
                  Another link
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
