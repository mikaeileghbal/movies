import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";

export default function Sidebar() {
  return (
    <AppBar
      position="fixed"
      sx={{ left: "0", top: "0", bottom: "0", width: "100px" }}
    >
      <nav>
        <List>
          <ListItem>
            <ListItemButton component="a" href="#simple-list">
              <HomeIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#simple-list">
              <VideocamIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#simple-list">
              <LiveTvIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#simple-list">
              <SearchIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </AppBar>
  );
}
