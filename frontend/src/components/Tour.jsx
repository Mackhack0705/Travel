import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/tour.css";

const Tour = () => {
  return (
    <>
      <Card className="tour-card">
          <video  src={'https://res.cloudinary.com/dj9vccr8n/video/upload/v1777975357/tour_zveakl.mp4'} autoPlay loop className="video-section">
          </video>
          <Card.Body style={{paddingBlock: "5rem"}}>
            <Card.Title className="tour-title">Take a look at Tour video</Card.Title>
            <Card.Text className="tour-desc">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br /><br />
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </Card.Text>
            <Button variant="warning" className="tour-button">Get Started</Button>
          </Card.Body>
      </Card>
    </>
  );
};

export default Tour;
