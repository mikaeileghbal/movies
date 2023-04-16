import React from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function LayoutList() {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          paddingLeft: { xs: 0, lg: "100px" },
          position: "absolute",
          width: "100%",
        }}
      >
        <Box component="main" pl={7} pr={7} mt={7}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
