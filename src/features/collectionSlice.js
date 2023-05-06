import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    requestCollection: (state) => {
      return state;
    },
    recieveCollection: (state, action) => {
      console.log(action);
      state.items = [...state.items, ...action.payload.data];
    },
  },
});

export const { requestCollection, recieveCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
