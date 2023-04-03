import { Box } from "@mui/system";
import React from "react";
import Tab from "../components/Tab";
import ViewSelection from "../components/ViewSelection";

export default function Detail() {
  return (
    <ViewSelection>
      <Tab>
        <Box name="overview">overview</Box>
        <Box name="videos">videos</Box>
        <Box name="photos">photos</Box>
      </Tab>
    </ViewSelection>
  );
}
