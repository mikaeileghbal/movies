import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Grid, ListItemButton } from "@mui/material";

export default function Sidebar() {
  const showSearch = () => {
    console.log("Search ....");
  };
  return (
    <AppBar
      position="fixed"
      sx={{ left: "0", top: "0", bottom: "0", width: "100px" }}
    >
      <nav>
        <Grid container justifyContent="center">
          <List>
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
        </Grid>
      </nav>
    </AppBar>
  );
}
