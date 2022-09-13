import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="container bg-danger">
      <ul className="list-unstyled">
        <li>
          <FaLinkedin />
        </li>
        <li>
          <MdEmail />
        </li>
        <li>
          <FaGithub />
        </li>
        <li><RiWhatsappFill/></li>
        <li><FaGlobe/></li>
      </ul>
    </div>
  );
}

export default Sidebar;
