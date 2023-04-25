import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import searchReducer from "../features/searchSlice";
import movieReducer from "../features/movieSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    movie: movieReducer,
  },
  middleware: [logger],
});
