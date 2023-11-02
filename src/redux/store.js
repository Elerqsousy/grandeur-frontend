import { configureStore } from '@reduxjs/toolkit';
import { exampleSlice } from './example_slice';
import userReducer from './user_slice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
    user: userReducer,
  },
});

export default store;
