import React from "react"
import "./Navbar.css"

const Navbar = props => {
  let scoreColor
  let highScoreColor
  if (!props.currentScore) {
    scoreColor = "red-text"
  }
  if (props.currentScore && props.currentScore === props.topScore) {
    highScoreColor = "green-text"
  }
  return (
    <nav className="navCustom navbar navbar-light bg-info sticky-top">
      <h2 className="text-white header-text">Lion King Click</h2>
      <h3 className={props.message}>You Won!</h3>
      <h3>
        Score:<span className={scoreColor}> {props.currentScore}</span> | Top
        Score: <span className={highScoreColor}>{props.topScore}</span>
      </h3>
    </nav>
  )
}

export default Navbar
