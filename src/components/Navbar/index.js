import React from "react";
import "./style.css";

function Navbar(props) {
  // return <div className="wrapper">{props.children}</div>;
  console.log(props);
  return (
      <nav className="navbar">
        <ul>
          <li className="brand"><a href="/">Clicky Game</a></li>
          <li className="">Click an image to begin!</li>
          <li>Score: {props.score} | Top Score: {props.highscore}</li>
        </ul>
      </nav>
  )
}

export default Navbar;
