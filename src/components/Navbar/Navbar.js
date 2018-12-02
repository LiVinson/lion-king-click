import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav className="navCustom navbar navbar-light bg-info">
  <span className="navbar-brand mb-0 h1 text-white">Clicky!</span>
  <h2>Some Instructions</h2>
  <h3>Score: {props.score} | Top Score: 0</h3>
</nav>
)

export default Navbar;