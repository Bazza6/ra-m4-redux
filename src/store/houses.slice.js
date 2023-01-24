import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import urls from '../constants/urls'

export const getHouses = createAsyncThunk(
  'houses/getHouses',
  async () => {
    const res = await fetch(urls.houses)
    const data = await res.json()
    return data
  }
)

const initialState = {
  reqStatus: 'initial',
  houses: {
    byId: {},
    allIds: [],
    byCity: {},
    byType: {},
  },
}

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHouses.pending, (state) => {
      state.reqStatus = 'loading'
    })
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.reqStatus = 'success'
      action.payload.forEach((house) => {
        state.houses.byId[house.id] = house
        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)
        }
        if (!state.houses.byCity[house.city]) {
          state.houses.byCity[house.city] = []
        }
        state.houses.byCity[house.city].push(house)
        if (!state.houses.byType[house.type]) {
          state.houses.byType[house.type] = []
        }
        state.houses.byType[house.type].push(house)
      })
    })
    builder.addCase(getHouses.rejected, (state) => {
      state.reqStatus = 'failed'
    })
  },
})

export default housesSlice.reducer