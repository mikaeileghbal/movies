import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  popular: [],
  top_rated: [],
  on_the_air: [],
  airing_today: [],
  cast: [],
  like: [],
  videos: [],
  images: [],
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    requestTvs: (state, action) => {
      return state;
    },
    setTvs: (state, action) => {
      console.log("action in setTv : ", action);
      state[action.payload.listName] = action.payload.data;
    },
  },
});

export const { requestTvs, setTvs } = tvSlice.actions;

export default tvSlice.reducer;
