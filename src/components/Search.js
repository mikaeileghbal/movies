import React from "react";
import { Box, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMovieContext } from "../providers/MovieProvider";

export default function Search() {
  const { searchTerm, setSearchTerm, setShowSearch } = useMovieContext();

  const handleSearchClick = (e) => {
    e.stopPropagation();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClose = () => {
    setSearchTerm("");
    setShowSearch(false);
  };

  return (
    <Box
      onClick={handleSearchClick}
      sx={{
        bgcolor: "#333",
        position: "fixed",
        top: 0,
        left: { xs: 0, lg: "100px" },
        right: 0,
        m: 0,
        zIndex: 9,
      }}
    >
      <Box sx={{ position: "realtive" }} fontFamily={200} py={3} px={6}>
        <TextField
          value={searchTerm}
          onChange={handleSearch}
          id="search"
          py={0}
          fullWidth
          placeholder="Search for a  movie, tv show or a person..."
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: {
              fontWeight: 400,
              color: "white",
              fontSize: 16,
            },
          }}
        />
        {searchTerm && (
          <Button
            onClick={handleClose}
            disableRipple
            variant="text"
            color="secondary"
            sx={{
              position: "absolute",
              right: "0",
              top: "0",
              height: "100%",
              px: 6,

              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <CloseIcon sx={{ fontWeight: "200" }} />
          </Button>
        )}
      </Box>
    </Box>
  );
}
