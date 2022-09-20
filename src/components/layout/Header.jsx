import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
// import { Link, useParams } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

function Header() {
  // const { aboutId, experienceId } = useParams();
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  return (
    <div className="container my-5 ">
      <div className="d-flex justify-content-between">
        <div className="navSitemenu">
          <ul className="d-none d-md-flex list-unstyled me-3">
            <li class="nav-item ms-3 mt-3 mt-md-0">
              <button className="btn btn-outline-light webBtn">Resume</button>
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">
              {/* <Link to="#/aboutId" id={aboutId}>
                  About
                </Link> */}
              About
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">
              {/* <HashLink smooth to="/#experience">
                  Experience
                </HashLink> */}{" "}
              Experinece
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">Work</li>
          </ul>
        </div>
        <div className="d-block d-md-none">
          <button
            className="rounded-circle bg-dark position-fixed top-0 left-0 "
            onClick={() => setIsDropdownMenu(!isDropdownMenu)}
          >
            <AiOutlineMenu className="navMenuIcon" />
          </button>
          <ul
            className={`list-unstyled ps-2 pe-4
                 ${isDropdownMenu ? "d-none" : "d-block"}`}
          >
            <li class="nav-item ms-3 mt-3 mt-md-0">
              <button className="btn btn-outline-light webBtn">Resume</button>
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">
              {/* <Link to="#/aboutId" id={aboutId}>
                  About
                </Link> */}
              About
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">
              {/* <HashLink smooth to="/#experience">
                  Experience
                </HashLink> */}{" "}
              Experinece
            </li>
            <li className="nav-item ms-3 mt-3 mt-md-0 headerTopic">Work</li>
          </ul>
        </div>

        <div className="socialIconLinks">
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="https://github.com/Razieh-Abedi"
                className="d-flex align-items-center justify-content-center"
              >
                <FaGithub className="headericon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.linkedin.com/in/razieh-abedi-45674b226/"
                className="d-flex align-items-center justify-content-center"
              >
                <FaLinkedin className="headericon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://api.whatsapp.com/send?phone=60175286004"
                className="d-flex align-items-center justify-content-center"
              >
                <RiWhatsappFill className="headericon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="mailto:raziyeabedi@gmail.com"
                className="d-flex align-items-center justify-content-center"
              >
                <MdEmail className="headericon" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="http://raziwebdeveloper.com/"
                class="d-flex align-items-center justify-content-center"
              >
                <FaGlobe className="headericon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
