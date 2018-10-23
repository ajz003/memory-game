import React from "react";
import "./FriendCard.css";

const FriendCard = props => (


    <div className="img-container">
      <img alt={props.name} src={props.image}
      onClick={() => {props.removeOption(props.id); props.randomize()}}
      />
    </div>

);

export default FriendCard;
