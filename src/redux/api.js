import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://127.0.0.1:3000';
  }
  return 'http://127.0.0.1:3000/test';
};

const api = {};

api.fetchUnits = createAsyncThunk('UNITS/FETCHALL', async () => {
  const apiCall = await axios
    .get(`${baseURL()}/units`)
    .then((response) => response.data);
  return apiCall;
});

api.fetchReservations = createAsyncThunk('reservations/FETCHALL', async () => {
  const userId = JSON.parse(sessionStorage.getItem('logged_user'));
  const apiCall = await axios
    .get(`${baseURL()}/reservations/?user_id=${userId.id}`)
    .then((response) => response.data.reservations);
  return apiCall;
});

api.postReservation = createAsyncThunk('postreservation/', async (reservation) => {
  const apiCall = await axios
    .post(`${baseURL()}/reservations`, {
      user_id: reservation.user_id,
      unit_id: reservation.unit_id,
      location: reservation.location,
      date: reservation.date,
    })
    .then((response) => response.data);
  return apiCall;
});

export default api;
