import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // ASSUMPTION:
      // action.payload = { name: 'ab', cost: 40 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {},
  },
});
