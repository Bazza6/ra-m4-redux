import { configureStore } from '@reduxjs/toolkit'
import housesReducer from './houses.slice'
// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: {
        houses: housesReducer,
    },
}) 