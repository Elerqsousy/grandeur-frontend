import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  status: 'none',
  unitData: {},
};

export const unitSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: {
    [api.fetchUnit.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchUnit.fulfilled]: (_, action) => ({
      unitData: action.payload,
      status: 'idle',
    }),
    [api.fetchUnit.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default unitSlice.reducer;
