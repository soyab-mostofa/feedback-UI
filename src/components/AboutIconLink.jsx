import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <Link to="about" className="about-link">
      <FaQuestion size={30} />
    </Link>
  );
};

export default AboutIconLink;
