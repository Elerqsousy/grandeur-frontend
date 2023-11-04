import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  status: 'none',
  list: [],
};

export const unitsSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: {
    [api.fetchUnits.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchUnits.fulfilled]: (_, action) => ({
      list: action.payload,
      status: 'idle',
    }),
    [api.fetchUnits.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default unitsSlice.reducer;
