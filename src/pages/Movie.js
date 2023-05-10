import React from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovie from "../hooks/useMovie";
import Header from "../components/Header";
import { Box } from "@mui/material";

export default function Movie() {
  const { item, popular, top_rated, upcoming, now_playing } = useMovie();

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
