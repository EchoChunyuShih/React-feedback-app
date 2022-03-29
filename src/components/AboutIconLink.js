import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineQuestionCircle } from "react-icons/ai";

const AboutIconLink = () => {
  return (
    <>
      <div className="about-icon-link">
        <Link
          to="/about"
          // to={{ pathname: "/about", search: "?sort=name", hash: "#about" }}
        >
          <AiOutlineQuestionCircle size={25} />
        </Link>
      </div>
    </>
  );
};

export default AboutIconLink;
