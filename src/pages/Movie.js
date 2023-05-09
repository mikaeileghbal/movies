import React, { useEffect, useMemo } from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { random } from "../utils/helper";

export default function Movie() {
  const randomId = useMemo(() => random(1, 100000), []);
  const { item, popular, top_rated, upcoming, now_playing } = useMovieDetail(
    "movie",
    randomId
  );

  return (
    <>
      <Header movie={item} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem
          routePath={apiEndpoint.movie.popular}
          items={popular}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.top_rated}
          items={top_rated}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.upcoming}
          items={upcoming}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.movie.now_playing}
          items={now_playing}
        />
      </Box>
    </>
  );
}
