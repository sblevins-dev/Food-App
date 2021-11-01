import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  paddingLeft: '20px'
};

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Recipes</h1>
      <ul className="navbar-links">
        <li className="home">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li className="projects">
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
