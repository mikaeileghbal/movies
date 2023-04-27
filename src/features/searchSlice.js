import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearch: false,
  searchTerm: "",
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
  },
});

export const {
  toggleSearch,
  openSearch,
  closeSearch,
  setSearchTerm,
  resetSearchTerm,
} = searchSlice.actions;

export default searchSlice.reducer;
