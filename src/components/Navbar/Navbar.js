import React from "react";
import "./Navbar.css";


const Navbar = props => {
  let scoreColor;
  let highScoreColor;
if (!props.currentScore) {
  scoreColor = "red-text"
}
if (props.currentScore && props.currentScore === props.topScore){
  highScoreColor = "green-text"
}
  return (<nav className="navCustom navbar navbar-light bg-info">
  <span className="navbar-brand mb-0 h1 text-white">Clicky!</span>
  <h2>Some Instructions</h2>
  <h3><span className={scoreColor}>Score: {props.currentScore}</span> | <span className = {highScoreColor}>Top Score: {props.topScore}</span></h3>
</nav>)
}





export default Navbar;