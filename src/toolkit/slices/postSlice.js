import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  singlePost: [],
  authorPost: [],
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
    setAuthorPost: (state, action) => {
      state.authorPost = action.payload.authorPost;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
});

export const { setAllPosts, setSinglePost, setAuthorPost, setLoading } = postSlice.actions;
export default postSlice.reducer;