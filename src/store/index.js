import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import blogReducer from '../features/blogs/blogSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    auth: authReducer,
  },
});