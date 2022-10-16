import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "../data";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="Navcontainer">
      <div className="navHeader">
        <button className="navToggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        <ul className="socialIcons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id} className="ms-2 list-unstyled d-inline">
                <a href={url} className="headericon">{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <button className="navToggle" onClick={toggleLinks}>
          <FaBars />
        </button> */}
      <div className="linksContainer" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="ms-3 list-unstyled headerTopic">
                <a href={url} className="text-decoration-none">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <ul className="socialIcons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id} className="ms-2 list-unstyled">
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
}

export default Header;
