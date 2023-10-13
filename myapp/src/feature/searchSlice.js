import { createSlice, nanoid } from '@reduxjs/toolkit'
import FlightData from "../components/flightdata"

const initialState = {
    searchData : []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            const input = {
                id: nanoid(),
                text: action.payload,
            }

            state.searchData = [];

            const filteredData = FlightData.filter((flight) => flight.destination.toLowerCase().includes(input.text.toLowerCase()))
            filteredData ? filteredData.map((flight) => state.searchData.push(flight)) : state.searchData.push({id: 1, destination: "No result Found"});
            // state.searchData.push(input);
        },
    }
})

export const {filterSearch} = searchSlice.actions

export default searchSlice.reducer