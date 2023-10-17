import React, { useState } from "react";
import "../style/feature.css";
import { useDispatch, useSelector } from 'react-redux'
import { flightSearch, hotelSearch, resetSearch } from "../feature/searchSlice";
import { setFlight } from "../feature/flightSlice";
import { setHotel } from "../feature/hotelSlice";
import { useNavigate } from 'react-router-dom'
import FlightData from "../components/flightdata"
import HotelData from "../components/hoteldata"

const Feature = () => {
  const [input, setInput] = useState('');
  // const [activeSection, setActiveSection] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFlightSelected = useSelector(state => state.flight.flightSelect)
  console.log(isFlightSelected);

  const isHotelSelected = useSelector(state => state.hotel.hotelSelect)
  console.log(isHotelSelected);

  const HandleClick = (e) => {
    e.preventDefault();
    // setActiveSection(section);
    if(isHotelSelected === true) {
      dispatch(hotelSearch(input))
    } else {
      dispatch(flightSearch(input))
    }
    setInput('');
    navigate('/flight-Search');
  }
  
  const HandleHotels = () => {
    // setActiveSection(false);
    dispatch(setHotel(true))
    dispatch(setFlight(false))
    dispatch(resetSearch(HotelData))
  }

  const HandleFlights = () => {
    // setActiveSection(true)
    dispatch(setFlight(true))
    dispatch(setHotel(false))
    dispatch(resetSearch(FlightData))
  }

  return (
    <form onSubmit={HandleClick}>
      <div className="feature-section">
        <div className={`hotel-section ${isHotelSelected === true ? "active" : "inactive"}`} 
          onClick={HandleHotels}>
          <p>Hotels</p>
        </div>
        <div className={`flight-section ${isFlightSelected === true ? "active" : "inactive"}`} 
        onClick={HandleFlights}>
          <p>Flights</p>
        </div>

        <div className="search-section fl">
          <table>
            <thead>
              <tr>
                <th>DESTINATION</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input
                  type="text"
                  className="destination"
                  placeholder="Destination"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                /></td>
                <td><input type="date" name="" className="check" /></td>
                <td><input type="date" name="" className="check" /></td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="primary-button search" >Search</button>
        </div>
      </div>
    </form>
  );
};

export default Feature;
