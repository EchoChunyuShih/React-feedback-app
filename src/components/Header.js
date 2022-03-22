import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
        {/* <NavLink to="/" activeClassName="navlink-active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="navlink-active">
          About
        </NavLink> */}
      </div>
    </header>
  );
};
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,.3)",
  textColor: "#eee",
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
