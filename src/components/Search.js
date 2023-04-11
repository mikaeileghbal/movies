import { Box, TextField } from "@mui/material";

import React from "react";

export default function Search() {
  const handleSearchClick = (e) => {
    e.stopPropagation();
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
      <Box sx={{}} fontFamily={200} py={3} px={6}>
        <TextField
          id="search"
          py={0}
          fullWidth
          placeholder="Search for a  movie, tv show or a person..."
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: {
              fontWeight: 300,
              color: "white",
              fontSize: 15,
            },
          }}
        />
      </Box>
    </Box>
  );
}
