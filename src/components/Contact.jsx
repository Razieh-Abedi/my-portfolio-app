import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-3">
      <h2 className="text-center mb-5">
        <span className="number">03. </span>
        <span>Get in touch with me</span>
      </h2>
      <div className="container text-center mx-auto w-75 d-block">
        <div className="container mx-auto w-75 d-block">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <ul className="text-center list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <RiWhatsappFill className="me-1 contactIcon" />
                  <a
                    href="https://api.whatsapp.com/send?phone=60175286004"
                    className="text-decoration-none contactLink"
                  >
                    Send me a message on WhatsApp
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <MdEmail className="me-1 contactIcon" />
                  <a
                    href="mailto:raziyeabedi@gmail.com"
                    className="text-decoration-none contactLink"
                  >
                    Send me an email
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="text-center list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaGithub className="me-1 contactIcon" />
                  <a
                    href="https://github.com/Razieh-Abedi"
                    className="text-decoration-none contactLink"
                  >
                    Follow me on GitHub
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  {" "}
                  <FaLinkedin className="me-1 contactIcon" />
                  <a
                    href="https://www.linkedin.com/in/razieh-abedi-45674b226/"
                    className="text-decoration-none contactLink"
                  >
                    Connect with me on Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-75 mx-auto contactLine" />
        <div className="pt-2">
          <p>
            <FaChevronCircleRight className="me-1 contactIcon" />
            Email address: raziyeabedi@gmail
          </p>
          <a
            href="https://raziwebdeveloper.com/"
            className="text-decoration-none contactLink"
          >
            Developed with ❤ by raziwebdeveloper.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
