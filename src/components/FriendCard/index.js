import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      
      <div className="img-container">
        <span onClick={() => props.clickCount(props.id)}>
          <img alt={props.name} src={props.image} className="img-fluid" />
        </span>
      </div>
      
     
    </div>
  );
}

export default FriendCard;
