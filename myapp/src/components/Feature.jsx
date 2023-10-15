import React, { useState } from "react";
import "../style/feature.css";
import { useDispatch } from 'react-redux'
import { flightSearch, hotelSearch } from "../feature/searchSlice";
import { flightSelect, hotelSelect } from "../feature/featureSlice"
import { useNavigate } from 'react-router-dom'
import { store } from '../app/store'

const Feature = () => {
  const [input, setInput] = useState('');
  const [activeSection, setActiveSection] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const actSec = useSelector(state => state.feature.select)
  // console.log(actSec);

  const HandleClick = (e) => {
    e.preventDefault();

    // setActiveSection(section);
    if(activeSection === false) {
      dispatch(hotelSearch(input))
    } else {
      dispatch(flightSearch(input))
    }
    setInput('');
    navigate('/flight-Search');
  }
  
  const HandleHotels = () => {
    setActiveSection(false);
    dispatch(hotelSelect())
  }

  const HandleFlights = () => {
    setActiveSection(true)
    dispatch(flightSelect())
  }

  return (
    <form onSubmit={HandleClick}>
      <div className="feature-section">
        <div className={`hotel-section ${activeSection === false ? "active" : "inactive"}`} 
          onClick={HandleHotels}>
          <p>Hotels</p>
        </div>
        <div className={`flight-section ${activeSection === true ? "active" : "inactive"}`} 
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

          <button type="submit" className="primary-button search">Search</button>
        </div>
      </div>
    </form>
  );
};

export default Feature;
