import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelection from "../components/ViewSelection";
import Carousel from "../components/Carousel";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useMovieContext } from "../providers/MovieProvider";

export default function Detail() {
  const { type, id } = useParams();

  const { movie } = useMovieDetail(type, id);

  const { setMovie } = useMovieContext();

  const routePath = apiEndpoint[type].like;
  console.log(routePath);

  routePath.url = routePath.url.replace("{_id}", id);

  useEffect(() => {
    setMovie(movie);
  }, [movie, setMovie]);

  return (
    <ViewSelection>
      <Tab>
        <Box name="overview">
          <Overview />
          <ViewSelectionItem routePath={apiEndpoint[type].popular} />
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
