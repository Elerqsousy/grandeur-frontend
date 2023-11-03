import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';
import detailReducer from './detail_slice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
    detail: detailReducer,
  },
});

export default store;
