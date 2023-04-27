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
    setMovies: (state, action) => {
      state[action.payload.listName] = action.payload.data;
    },
  },
});

export const { requestMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
