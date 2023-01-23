import { configureStore } from '@reduxjs/toolkit'
import selectionReducer from './selection.slice'
// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: {
        selection: selectionReducer,
    },
}) 