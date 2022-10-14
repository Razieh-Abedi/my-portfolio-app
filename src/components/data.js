import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: ' href="https://github.com/Razieh-Abedi"',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/razieh-abedi-45674b226/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://api.whatsapp.com/send?phone=60175286004",
    icon: <RiWhatsappFill />,
  },
  {
    id: 4,
    url: "mailto:raziyeabedi@gmail.com",
    icon: <MdEmail />,
  },
];
