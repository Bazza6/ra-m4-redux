import { createSlice } from '@reduxjs/toolkit'

const initialState = { type: '', city: '' }

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    selectType: (state, action) => {
      state.type = action.payload
    },
    selectCity: (state, action) => {
      state.city = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectType, selectCity } = selectionSlice.actions

export default selectionSlice.reducer