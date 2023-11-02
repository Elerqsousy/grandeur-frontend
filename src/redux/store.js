import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
  },
});

export default store;
