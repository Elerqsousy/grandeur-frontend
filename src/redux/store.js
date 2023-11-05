import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';
import reservationsReducer from './reservations_slice';
import detailReducer from './detail_slice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
    reservations: reservationsReducer,
    detail: detailReducer,
  },
});

export default store;
