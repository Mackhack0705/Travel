import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "../style/offer.css";

const Offer = (props) => {
  return (
    <>
      <Card className="offerCard-container">
        <Card.Img variant="left" src={props.imgsrc} className="offerCard-img" />
        <Card.Title className="offer-title">{props.title}</Card.Title>
        <Card.Body variant="right">
          <Card.Text className="offer-price"><span>{props.price}</span> per night</Card.Text>
          <Card.Text className="offer-desc">{props.desc}</Card.Text>
          <Button variant="warning" style={{ color: "#ffff" }}>Book now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Offer;
