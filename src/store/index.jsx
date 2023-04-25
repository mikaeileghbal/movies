import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import searchReducer from "../features/searchSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
});
