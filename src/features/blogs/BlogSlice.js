// // src/features/blogs/blogSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   blogs: [],
// };

// const blogSlice = createSlice({
//   name: 'blogs',
//   initialState,
//   reducers: {
//     setBlogs: (state, action) => {
//       state.blogs = action.payload;
//     },
//     addBlog: (state, action) => {
//       state.blogs.unshift(action.payload);
//     },
//     editBlog: (state, action) => {
//       const index = state.blogs.findIndex(b => b.id === action.payload.id);
//       if (index !== -1) state.blogs[index] = action.payload;
//     },
//     deleteBlog: (state, action) => {
//       state.blogs = state.blogs.filter(b => b.id !== action.payload);
//     },
//   },
// });

// export const { setBlogs, addBlog, editBlog, deleteBlog } = blogSlice.actions;
// export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as blogService from "../../services/blogService";

export const fetchBlogs = createAsyncThunk("blogs/fetch", blogService.getBlogs);
export const createBlog = createAsyncThunk("blogs/create", blogService.createBlog);
export const updateBlog = createAsyncThunk("blogs/update", blogService.updateBlog);
export const deleteBlog = createAsyncThunk("blogs/delete", blogService.deleteBlog);

const blogSlice = createSlice({
  name: "blogs",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => { state.loading = true; })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const idx = state.items.findIndex(b => b.id === action.payload.id);
        state.items[idx] = action.payload;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter(b => b.id !== action.meta.arg);
      });
  }
});

export default blogSlice.reducer;
