import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => ({ ...state, value: state.value + 1 }),
    decrement: (state) => ({ ...state, value: state.value - 1 }),
    incrementByAmount: (state, action) => ({ ...state, value: state.value + action.payload }),
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
