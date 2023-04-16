import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout() {
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
        <Header />
        <Box component="main" pl={7} mt={7}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
