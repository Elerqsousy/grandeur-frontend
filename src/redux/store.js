import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user_slice';
import unitsReducer from './units_slice';
import reservationsReducer from './reservations_slice';
import unitFormReducer from './unitFormSlice';
import postreservationReducer from './send_reservation_slice';

const store = configureStore({
  reducer: {
    units: unitsReducer,
    user: userReducer,
    reservations: reservationsReducer,
    unitForm: unitFormReducer,
    postreservation: postreservationReducer,
  },
});

export default store;
