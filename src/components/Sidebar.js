import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

export default function Sidebar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <HomeIcon />
          </li>
          <li>
            <VideocamIcon />
          </li>
          <li>
            <LiveTvIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
}
