import React from 'react'
import Feature from '../components/Feature'
import '../pages-style/flightsearch.css'
import { useSelector } from 'react-redux'
import { FaArrowsAltH } from 'react-icons/fa'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const FlightSearch = () => {
    const searchData = useSelector(state => state.searchData)
    console.log(searchData);
    
    return (
        <div className='flight-Search'>
            <Feature />
            <ul className='list-rows'>
                    {searchData.map((item) => (
                        <Card key={item.id} className='table-row' style={{ width: "65rem", height: "8rem" }}>
                        <Row noGutters>
                        <Col>
                            <Card.Body>{item.destination}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>{item.departureDate}</Card.Body>
                        {/* <FaArrowsAlt style={{display: "inline"}}/> */}
                        </Col>
                        
                        <Col>
                            <Card.Body>{item.returnDate}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>$ {item.price}</Card.Body>
                        </Col>
                        <Col>
                        <Button variant="warning" style={{color: "#ffff", position: "relative", top: "10px", borderRadius: "50px"}}>Book now</Button>
                        </Col>
                        </Row>
                        </Card>
                    ))}
            </ul>
        </div>
    )
}

export default FlightSearch
