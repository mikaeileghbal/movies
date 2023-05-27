import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearch: false,
  searchTerm: "",
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    openSearch: (state) => {
      state.showSearch = true;
    },
    closeSearch: (state) => {
      state.showSearch = false;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    resetSearchTerm: (state) => {
      state.searchTerm = "";
    },
    requestSearch: (state) => {
      return state;
    },
    resetSearchItems: (state) => {
      state.items = [];
    },
    recieveSearch: (state, action) => {
      state.items = [...state.items, ...action.payload.data];
    },
  },
});

export const {
  toggleSearch,
  openSearch,
  closeSearch,
  setSearchTerm,
  resetSearchTerm,
  requestSearch,
  recieveSearch,
  resetSearchItems,
} = searchSlice.actions;

export default searchSlice.reducer;
