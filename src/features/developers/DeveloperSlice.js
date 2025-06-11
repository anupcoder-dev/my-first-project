// src/features/developers/developersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDevelopers = createAsyncThunk(
  'developers/fetchDevelopers',
  async (_, thunkAPI) => {
    const response = await axios.get('/api/developers');
    return response.data;
  }
);

const developersSlice = createSlice({
  name: 'developers',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevelopers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevelopers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchDevelopers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default developersSlice.reducer;