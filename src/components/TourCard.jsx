import React from "react";
import CardImage from "../assets/Rectangle.png";
import "./TourCard.css";

const TourCard = (props) => {
  return (
    <>
      <div className="Card-Details">
        <div className="card">
          <div className="CardImage">
            <img src={props.img} alt="Imagee1" className="CardImage" />
          </div>
          <div className="CardData">
            <h6 className="Card-h6">{props.country}</h6>
            <span className="Card-p">{props.maps}</span>
            <h2 className="Card-h2">{props.Location}</h2>
            <h6 className="CardData-h6">{props.date}</h6>
            <p className="Card-p1">{props.Description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
