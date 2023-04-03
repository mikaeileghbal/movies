import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";

export default function ViewList({ children }) {
  return (
    <Box
      sx={{
        paddingLeft: { xs: 0, lg: "100px" },
        position: "absolute",
        width: "100%",
      }}
      mt={7}
    >
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
