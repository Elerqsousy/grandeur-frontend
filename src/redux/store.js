import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';
import reservationsReducer from './reservations_slice';
import unitFormReducer from './unitFormSlice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
    reservations: reservationsReducer,
    unitForm: unitFormReducer,
  },
});

export default store;
