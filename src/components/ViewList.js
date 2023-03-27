import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function ViewList({ children }) {
  return (
    <Box
      component="main"
      pl={6}
      pr={2}
      mt={4}
      sx={{ marginLeft: { xs: 0, lg: "100px" }, position: "absolute" }}
    >
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
