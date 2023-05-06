import React, { useEffect } from "react";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";

import useMovieDetail from "../hooks/useMovieDetail";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { requestTvs } from "../features/tvSlice";
import { requestFeatured } from "../features/featuredSlice";

export default function Tv() {
  //const { movie } = useMovieDetail("tv", 7500);
  const { item } = useSelector((state) => state.featured);

  const { popular, top_rated, on_the_air, airing_today } = useSelector(
    (state) => state.tv
  );
  const dispatch = useDispatch();

  const dispatchTrending = () => {
    return (dispatch) => {
      dispatch(
        requestFeatured({ url: `${BASE_URL}tv/${7500}?api_key=${API_KEY}` })
      );
      dispatch(
        requestTvs({
          listName: "popular",
          mediaType: "tv",
          url: apiEndpoint.tv.popular.url,
        })
      );
      dispatch(
        requestTvs({
          listName: "top_rated",
          mediaType: "tv",
          url: apiEndpoint.tv.top_rated.url,
        })
      );
      dispatch(
        requestTvs({
          listName: "on_the_air",
          mediaType: "tv",
          url: apiEndpoint.tv.on_the_air.url,
        })
      );
      dispatch(
        requestTvs({
          listName: "airing_today",
          mediaType: "tv",
          url: apiEndpoint.tv.airing_today.url,
        })
      );
    };
  };

  useEffect(() => {
    const callDispatchTrending = dispatchTrending();
    callDispatchTrending(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header movie={item} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <ViewSelectionItem routePath={apiEndpoint.tv.popular} items={popular} />
        <ViewSelectionItem
          routePath={apiEndpoint.tv.top_rated}
          items={top_rated}
        />
        <ViewSelectionItem
          routePath={apiEndpoint.tv.on_the_air}
          items={on_the_air}
        />

        <ViewSelectionItem
          routePath={apiEndpoint.tv.airing_today}
          items={airing_today}
        />
      </Box>
    </>
  );
}
