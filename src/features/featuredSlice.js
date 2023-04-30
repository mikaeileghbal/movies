import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    requestFeatured: (state, action) => {
      return state;
    },
    setFeatured: (state, action) => {
      state.item = action.payload.data;
    },
  },
});

export const { requestFeatured, setFeatured } = featuredSlice.actions;

export default featuredSlice.reducer;
