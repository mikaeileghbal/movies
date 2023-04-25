import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import searchReducer from "../features/searchSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
  middleware: [logger],
});
