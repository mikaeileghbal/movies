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
  },
});

export const { processLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
