import React from 'react'
import Feature from '../components/Feature'
import '../pages-style/flightsearch.css'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const FlightSearch = () => {
    
    const actSec = useSelector(state => state.feature.select)
    console.log(actSec);
    
    const searchData = useSelector(state => state.search.searchData)
    console.log(searchData);
    return (
        <div className='flight-Search'>
            <Feature />
            <ul className='list-rows'>
            {
              actSec ? (
                searchData ? (
                    searchData.map((element) => (
                        // Your mapping logic
                        <Card key={element.id} className='table-row' style={{ width: "65rem", height: "8rem" }}>
                            <Row noGutters>
                                <Col>
                                    <Card.Body>{element.airlineName}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>{element.destination}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>{element.CheckINDate}</Card.Body>
                                </Col>

                                <Col>
                                    <Card.Body>{element.returnDate}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>$ {element.ticketPrice}</Card.Body>
                                </Col>
                                <Col>
                                    <Button variant="warning" style={{ color: "#ffff", position: "relative", top: "10px", borderRadius: "50px" }}>Book now</Button>
                                </Col>
                            </Row>
                        </Card>
                    ))
                ) : (
                    <div style={{textAlign: "center",fontSize: "5rem"}}>No results Found</div>
                )
               ) : (
                searchData ? (
                    searchData.map((item) => (
                        // Your mapping logic
                        <Card key={item.id} className='table-row' style={{ width: "65rem", height: "8rem" }}>
                            <Row noGutters>
                                <Col>
                                    <Card.Body>{item.hotelName}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>{item.destination}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>{item.CheckInDate}</Card.Body>
                                </Col>

                                <Col>
                                    <Card.Body>{item.CheckOutDate}</Card.Body>
                                </Col>
                                <Col>
                                    <Card.Body>$ {item.roomPrice}</Card.Body>
                                </Col>
                                <Col>
                                    <Button variant="warning" style={{ color: "#ffff", position: "relative", top: "10px", borderRadius: "50px" }}>Book now</Button>
                                </Col>
                            </Row>
                        </Card>
                    ))
                ) : (
                    <div style={{textAlign: "center",fontSize: "5rem"}}>No results Found</div>
                )
               )
            }
            
                
                
            </ul>
        </div>
    )
}

export default FlightSearch
