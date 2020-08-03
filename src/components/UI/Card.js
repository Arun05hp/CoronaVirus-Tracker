import React from "react";
import "../../assets/css/card.css";

const Card = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default Card;
