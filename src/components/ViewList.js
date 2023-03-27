import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function ViewList({ children }) {
  return (
    <Box
      component="main"
      mt={7}
      sx={{
        marginLeft: { xs: 0, lg: "100px" },
        px: { xs: 0, lg: 0 },
      }}
    >
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
