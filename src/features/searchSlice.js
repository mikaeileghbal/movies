import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchMenu: false,
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.showSearchMenu = !state.showSearchMenu;
    },
    openSearch: (state) => {
      state.showSearchMenu = true;
    },
    closeSearch: (state) => {
      state.showSearchMenu = false;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.searchTerm;
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
