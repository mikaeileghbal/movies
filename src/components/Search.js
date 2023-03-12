import { Box, TextField } from "@mui/material";

import React from "react";

export default function Search() {
  return (
    <Box
      sx={{
        bgcolor: "bgColor",
        position: "fixed",
        top: 0,
        left: { xs: 0, lg: "100px" },
        right: 0,
        m: 0,
      }}
    >
      <Box sx={{}} fontFamily={200} py={1} px={4}>
        <TextField
          id="search"
          m={0}
          fullWidth
          placeholder="Search for a  movie, tv show or a person..."
          inputProps={{
            style: {
              fontWeight: 300,
              color: "lightgray",
              fontSize: 16,
            },
          }}
        />
      </Box>
    </Box>
  );
}
