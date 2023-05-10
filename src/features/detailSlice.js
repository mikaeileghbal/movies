import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  photos: [],
  cast: [],
  like: [],
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    requestVideos: (state, action) => {
      return state;
    },
    recieveVideos: (state, action) => {
      state.videos = action.payload.data;
    },
    requestPhotos: (state, action) => {
      return state;
    },
    recievePhotos: (state, action) => {
      state.photos = action.payload.data;
    },
    requestLike: (state, action) => {
      return state;
    },
    recieveLike: (state, action) => {
      state.like = action.payload.data;
    },
    requestCast: (state) => {
      return state;
    },
    recieveCast: (state, action) => {
      state.cast = action.payload.data;
    },
  },
});
export const {
  requestVideos,
  recieveVideos,
  requestPhotos,
  recievePhotos,
  requestLike,
  recieveLike,
  requestCast,
  recieveCast,
} = detailSlice.actions;

export default detailSlice.reducer;
