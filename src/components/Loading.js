import React from "react";
import "../App.css";
import { Box, CircularProgress } from "@mui/material";
import CircularLoading from "./CircularLoading";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        margin: "10px",
      }}
    >
      <CircularProgress disableShrink />
      <CircularLoading />
    </Box>
  );
}
