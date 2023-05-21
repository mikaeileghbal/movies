import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    processLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    processError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { processLoading, processError } = loadingSlice.actions;

export default loadingSlice.reducer;
