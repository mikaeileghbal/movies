import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";

export default function Sidebar() {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      style={{ left: "0", width: "150px", height: "100vh" }}
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
