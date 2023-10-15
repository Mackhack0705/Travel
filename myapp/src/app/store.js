import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../feature/searchSlice'
import featureReducer from '../feature/featureSlice'

export const store = configureStore({
    reducer: combineReducers({
        search: searchReducer,
        feature: featureReducer,
    }),

});