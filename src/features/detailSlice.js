import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  photos: [],
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
  },
});
export const {
  requestVideos,
  recieveVideos,
  requestPhotos,
  recievePhotos,
  requestLike,
  recieveLike,
} = detailSlice.actions;

export default detailSlice.reducer;
