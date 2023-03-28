import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "320px",
        margin: "10px",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
