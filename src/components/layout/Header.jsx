import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
//import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

function Header() {
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ms-3">
                <button className="btn btn-light">Resume</button>
              </li>
              <li className="nav-item ms-3">About</li>
              <li className="nav-item ms-3">Experience</li>
              <li className="nav-item ms-3">Work</li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </div>

      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a
            href="https://github.com/Razieh-Abedi"
            className="d-flex align-items-center justify-content-center"
          >
            <FaGithub />
          </a>
        </li>
        <li className="ms-3">
          <a
            href="https://www.linkedin.com/in/razieh-abedi-45674b226/"
            className="d-flex align-items-center justify-content-center"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="ms-3">
          {" "}
          <a
            href="#"
            className="d-flex align-items-center justify-content-center"
          >
            <RiWhatsappFill />
          </a>
        </li>
        <li className="ms-3">
          {" "}
          <a
            href="http://raziwebdeveloper.com/"
            class="d-flex align-items-center justify-content-center"
          >
            <FaGlobe />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
