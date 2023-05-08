import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  photos: [],
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    requestVideos: (state, action) => {
      console.log("action in request videos", action);
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
  },
});
export const { requestVideos, recieveVideos, requestPhotos, recievePhotos } =
  detailSlice.actions;

export default detailSlice.reducer;
