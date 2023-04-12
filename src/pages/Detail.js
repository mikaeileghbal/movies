import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useMovieContext } from "../providers/MovieProvider";
import Cast from "../components/detail/Cast";

export default function Detail() {
  const { type, id } = useParams();
  const { movie } = useMovieDetail(type, id);

  const routePath = apiEndpoint[type].like;
  routePath.url = routePath.url.replace("{_id}", id);

  return (
    <ViewSelection movie={movie}>
      <Tab>
        <Box name="overview">
          <Overview />
          <Cast />
        </Box>
        <Box name="videos">
          <Video />
        </Box>
        <Box name="photos">
          <Photo />
        </Box>
      </Tab>
      <ViewSelectionItem routePath={routePath} />
    </ViewSelection>
  );
}
