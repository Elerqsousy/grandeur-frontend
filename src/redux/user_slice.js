import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

const initialState = {
  user: null,
  status: null,
  error: null,
};

export const userLogin = createAsyncThunk('user/userLogin', async (name) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/login`,
      { name },
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to Login up. No user Found!');
  }
});

export const userRegister = createAsyncThunk('user/register', async (name) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      user: {
        name,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign up. Please try again.');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(userRegister.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
        status: 'succeeded',
        error: null,
      }))
      .addCase(userRegister.rejected, (state) => ({
        ...state,
        status: 'failed',
        error: null,
      }))
      .addCase(userLogin.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(userLogin.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
        status: 'succeeded',
        error: null,
      }))
      .addCase(userLogin.rejected, (state) => ({
        ...state,
        status: 'failed',
        error: null,
      }));
  },
});

export default userSlice.reducer;
