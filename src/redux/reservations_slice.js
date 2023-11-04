import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  status: 'none',
  pastList: [],
  futureList: [],
};

export const reservationsSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: {
    [api.fetchReservations.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchReservations.fulfilled]: (_, action) => ({
      pastList: action.payload.past,
      futureList: action.payload.active,
      status: 'idle',
    }),
    [api.fetchReservations.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default reservationsSlice.reducer;
