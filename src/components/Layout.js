import { Box } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

import "../App.css";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function Layout() {
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <Box
      sx={{
        // paddingLeft: { xs: 0, lg: "100px" },
        position: "absolute",
        width: "100%",
      }}
    >
      <Box component="main" pl={7} mt={0}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
