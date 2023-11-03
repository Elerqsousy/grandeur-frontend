import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';
import reservationsReducer from './reservations_slice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
    reservations: reservationsReducer,
  },
});

export default store;
