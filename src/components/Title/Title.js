import React from "react";
import "./Title.css";

const Title = props => {
    return (
        <div className="row">
            <div className="col">
            <h1 className="title">{props.children}</h1>
            <h2 className="text-center">Current Score: {props.score} Top Score: {props.topScore}</h2>
            </div>
        </div>
    )
}

export default Title;
