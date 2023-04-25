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
    requestMovies: (state, action) => {},
    setMovie: (state, action) => {
      state[action.payload.listName] = action.payload.data;
    },
  },
});

export default movieSlice.reducer;
