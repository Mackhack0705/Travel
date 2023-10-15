import { createSlice } from '@reduxjs/toolkit'

export const featureSlice = createSlice({
    name: 'select',
    initialState: false,
    reducers: {
        flightSelect: (state) => (state = true),
        hotelSelect: (state) => (state = false),
    }
})

export const {flightSelect, hotelSelect} = featureSlice.actions

export default featureSlice.reducer