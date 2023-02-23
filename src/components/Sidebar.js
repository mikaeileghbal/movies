import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Grid, IconButton, ListItemButton, Toolbar } from "@mui/material";

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

/* <Grid container justifyContent="center">
          <List sx={{ sm: { flexDirection: "row", display: "flex" } }}>
            <ListItem>
              <ListItemButton component="a" href="/">
                <HomeIcon />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/video">
                <VideocamIcon />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/tv">
                <LiveTvIcon />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="button" onClick={showSearch}>
                <SearchIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid> */
