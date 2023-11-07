import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const postReservationSlice = createSlice({
  name: 'postReservation',
  initialState: {
    reservationData: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(api.postReservation.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(api.postReservation.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservationData: action.payload,
      }))
      .addCase(api.postReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postReservationSlice.reducer;
