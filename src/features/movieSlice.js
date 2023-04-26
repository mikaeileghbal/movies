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
      console.log("movie request action: ", action);
      return state;
    },
    setMovie: (state, action) => {
      console.log("movie action: ", action);
      state[action.payload.listName] = action.payload.data;
    },
  },
});

export const { requestMovies, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
