import React, { useState } from "react";
import "../style/feature.css";
import { useDispatch } from 'react-redux'
import { filterSearch } from "../feature/searchSlice";
import { useNavigate } from 'react-router-dom'

const Feature = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleClick = (e) => {
    e.preventDefault();

    dispatch(filterSearch(input))
    setInput('');
    navigate('/flight-Search');
  }

  return (
    <form onSubmit={HandleClick}>
      <div className="feature-section">
        <div className="hotel-section">
          <p>Hotels</p>
        </div>
        <div className="flight-section">
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
