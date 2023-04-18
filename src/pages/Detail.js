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

import Cast from "../components/detail/Cast";
import Header from "../components/Header";

export default function Detail() {
  const { type, id } = useParams();
  const { movie } = useMovieDetail(type, id);

  const routePath = apiEndpoint[type].like;
  routePath.url = routePath.url.replace("{_id}", id);

  return (
    <>
      <Header movie={movie} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <Tab>
          <Box name="overview">
            <Overview movie={movie} />
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
      </Box>
    </>
  );
}
