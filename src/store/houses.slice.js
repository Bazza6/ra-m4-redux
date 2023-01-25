import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import urls from '../constants/urls'

export const getHouses = createAsyncThunk('houses/getHouses',
  async ({ page, limit }) => {
    const res = await fetch(`${urls.houses}?_page=${page}&_limit=${limit}`)
    const data = await res.json()
    return data
  });

const initialState = {
  reqStatus: 'initial',
  isError: false,
  isLoading: false,
  isSuccess: false,
  houses: {
    byId: {},
    allIds: [],
    cities: [],
    types: [],
    userFilters: {
      type: '',
      city: '',
    },
  },
}

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setUserFilterTitle: (state, action) => {
      state.houses.userFilters.type = action.payload
    },
    setUserFilterCity: (state, action) => {
      state.houses.userFilters.city = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHouses.pending, (state) => {
      state.reqStatus = 'loading'
      state.isError = false
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.reqStatus = 'success'
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      action.payload.forEach((house) => {
        state.houses.byId[house.id] = house
        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)
        }
        if (!state.houses.cities.includes(house.city)) {
          state.houses.cities.push(house.city)
        }
        if (!state.houses.types.includes(house.type)) {
          state.houses.types.push(house.type)
        }
      })
    })
    builder.addCase(getHouses.rejected, (state) => {
      state.reqStatus = 'failed'
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
    })
  },
})
export const { setUserFilterTitle, setUserFilterCity } = housesSlice.actions

export default housesSlice.reducer


