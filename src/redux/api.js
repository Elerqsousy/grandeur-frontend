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
    .then((response) => response.data.content);
  return apiCall;
});

export default api;
