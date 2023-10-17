import { createSlice, nanoid } from '@reduxjs/toolkit'
import FlightData from "../components/flightdata"
import HotelData from "../components/hoteldata"

const initialState = {
    searchData: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        flightSearch: (state, action) => {
            const input = {
                id: nanoid(),
                text: action.payload,
            }

            state.searchData = [];

            const filteredData = FlightData.filter((flight) => flight.destination.toLowerCase().includes(input.text.toLowerCase()))
            state.searchData = filteredData.length > 0 ? filteredData : [];
        },
        hotelSearch: (state, action) => {
            const input = {
                id: nanoid(),
                text: action.payload,
            }

            state.searchData = [];

            const filteredData = HotelData.filter((hotel) => hotel.hotelDestination.toLowerCase().includes(input.text.toLowerCase())) 
            state.searchData = filteredData.length > 0 ? filteredData : [];
        },
        resetSearch: (state,action) => {
            state.searchData = action.payload;
        },
    }
})


export const { flightSearch, hotelSearch, resetSearch } = searchSlice.actions

export default searchSlice.reducer