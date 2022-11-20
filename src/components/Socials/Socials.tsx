import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  const socials = [
    {
      name: "facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/aighana1",
    },
    {
      name: "twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/AIGhana1",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/ai-ghana/",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/aighana1/",
    },
    {
      name: "youtube",
      icon: <FaYoutube />,
      link: "https://youtube.com/@aighana",
    },
  ];
  return (
    <div className="d-flex gap-3">
      {socials.map((social) => (
        <Link
          href={social.link}
          key={social.name}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
