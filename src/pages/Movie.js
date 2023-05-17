import React from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import useMovie from "../hooks/useMovie";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Movie() {
  const { item, popular, top_rated, upcoming, now_playing } = useMovie();
  const { isLoading } = useSelector((state) => state.loading);

  if (isLoading) return <Loading />;

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
