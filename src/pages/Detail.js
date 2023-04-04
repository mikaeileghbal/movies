import { Box } from "@mui/system";
import React from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelection from "../components/ViewSelection";
import Carousel from "../components/Carousel";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";

export default function Detail() {
  return (
    <ViewSelection>
      <Tab>
        <Box name="overview">
          <Overview />
          <ViewSelectionItem routePath={apiEndpoint.cast} />
        </Box>
        <Box name="videos">
          <Video />
        </Box>
        <Box name="photos">
          <Photo />
        </Box>
      </Tab>
      <ViewSelectionItem routePath={apiEndpoint.like} />
    </ViewSelection>
  );
}
