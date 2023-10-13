import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../feature/searchSlice'

export const store = configureStore({
    reducer: filterReducer,
})