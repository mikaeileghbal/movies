import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  popular: [],
  top_rated: [],
  upcoming: [],
  now_playing: [],
  cast: [],
  like: [],
  videos: [],
  images: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    requestMovies: (state, action) => {
      return state;
    },
    recieveMovies: (state, action) => {
      state[action.payload.listName] = action.payload.data;
    },
  },
});

export const { requestMovies, recieveMovies } = movieSlice.actions;

export default movieSlice.reducer;
