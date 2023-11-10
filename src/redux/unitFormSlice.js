import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createUnitFormData from '../components/formUtils';

const initialState = {
  status: 'idle',
  error: null,
};

const API_URL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://127.0.0.1:3000';
  }
  return 'https://grandeur-backend.onrender.com';
};

export const createUnit = createAsyncThunk(
  'unitForm/create',
  async (unitData, callback) => {
    const userId = JSON.parse(sessionStorage.getItem('logged_user')).id;

    if (!userId) {
      throw new Error('User is not logged in');
    }

    const formData = createUnitFormData(unitData, userId);

    const response = await axios.post(`${API_URL()}/units/`, formData);

    if (response.status !== 200) {
      throw new Error('Error adding unit');
    }

    response.data.formData = formData;
    callback();
    return response.data;
  },
);

const unitFormSlice = createSlice({
  name: 'unitForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUnit.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(createUnit.fulfilled, (state) => ({
        ...state,
        status: 'succeeded',
        error: null,
      }))
      .addCase(createUnit.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default unitFormSlice.reducer;
