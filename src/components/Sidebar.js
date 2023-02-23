import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";

export default function Sidebar() {
  const showSearch = () => {
    console.log("Search ....");
  };
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: { xs: "auto", lg: 0 },
        bottom: { xs: 0 },
        left: 0,
        width: { xs: "100%", lg: "100px" },
      }}
    >
      <Toolbar
        sx={{
          flexDirection: {
            xs: "row",
            lg: "column",
            justifyContent: "space-between",
          },
          px: { xs: 1, sm: 8, lg: 0 },
        }}
      >
        <IconButton color="inherit" sx={{ my: { xs: 0, lg: 4 } }}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ my: { xs: 0, lg: 4 } }}>
          <VideocamIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ my: { xs: 0, lg: 4 } }}>
          <LiveTvIcon />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{ my: { xs: 0, lg: 4 } }}
          onClick={showSearch}
        >
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
