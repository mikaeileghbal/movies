import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  images: [],
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
  },
});
export const { requestVideos, recieveVideos } = detailSlice.actions;

export default detailSlice.reducer;
