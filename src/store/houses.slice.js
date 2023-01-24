import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import urls from '../constants/urls'

export const getHouses = createAsyncThunk('houses/getHouses', async () => {
  const res = await fetch(urls.houses)
  const data = await res.json()
  return data
})

const initialState = {
  reqStatus: 'initial', // Aquí añade isError, isLoading, isSuccess para facilitar la gestión
  houses: {
    byId: {},
    allIds: [],
    byCity: {},
    byType: {},
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
    })
    builder.addCase(getHouses.fulfilled, (state, action) => {
      state.reqStatus = 'success'
      action.payload.forEach((house) => {
        state.houses.byId[house.id] = house
        if (!state.houses.allIds.includes(house.id)) {
          state.houses.allIds.push(house.id)
        }
        // Trataria de simplificar esta lógica.
        // Con tener un array con las ciudades bastaria
        // Luego puedes usarlo para mapear en los selectores
        // if (!state.cities.includes(house.city)) {
        //     state.cities.push(house.city)
        // }

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
export const { setUserFilterTitle, setUserFilterCity } = housesSlice.actions

export default housesSlice.reducer
