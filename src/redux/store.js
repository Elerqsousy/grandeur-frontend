import { configureStore } from '@reduxjs/toolkit';
import { exampleSlice } from './example_slice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
});

export default store;
