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
    <nav>
      <div className="Navcontainer">
        <div className="navHeader">
          <button className="navToggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="linksContainer" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} href={url} className="ms-3">
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="socialIcons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id} href={url} className="ms-3">
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
