import React, { useState } from "react";
import CameraOutdoorOutlinedIcon from "@mui/icons-material/CameraOutdoorOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToUrl = (url) => {
    navigate(url);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch((old) => !old);
  };

  return (
    <AppBar
      p={0}
      position="fixed"
      sx={{
        top: { xs: "auto", lg: 0 },
        bottom: { xs: 0 },
        left: 0,
        width: { xs: "100%", lg: "100px" },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          py: { lg: 4 },
          p: { xs: 0 },
          m: 0,
          minHeight: { xs: "0px" },
        }}
      >
        <Stack
          width="100%"
          spacing={8}
          direction={{ xs: "row", lg: "column" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IconButton color="inherit" onClick={() => goToUrl("/")}>
            <CameraOutdoorOutlinedIcon
              color={pathname === "/" ? "primary" : "white"}
            />
          </IconButton>
          <IconButton color="inherit" onClick={() => goToUrl("/movie")}>
            <MovieOutlinedIcon
              color={pathname === "/movie" ? "primary" : "white"}
            />
          </IconButton>
          <IconButton color="inherit" onClick={() => goToUrl("/tv")}>
            <LiveTvIcon color={pathname === "/tv" ? "primary" : "white"} />
          </IconButton>
          <IconButton color="inherit" onClick={toggleSearch}>
            <SearchIcon color={showSearch === true ? "primary" : "white"} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
