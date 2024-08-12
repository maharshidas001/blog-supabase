import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  singlePost: [],
  isLoading: true
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.allPosts = action.payload.allPosts;
    },
    setSinglePost: (state, action) => {
      state.singlePost = action.payload.singlePost;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
});

export const { setAllPosts, setSinglePost, setLoading } = postSlice.actions;
export default postSlice.reducer;