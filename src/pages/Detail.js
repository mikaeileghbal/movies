import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelection from "../components/ViewSelection";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";

import Cast from "../components/detail/Cast";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { requestFeatured } from "../features/featuredSlice";

export default function Detail() {
  const { type, id } = useParams();
  //const { movie } = useMovieDetail(type, id);
  const { item } = useSelector((state) => state.featured);
  const dispatch = useDispatch();

  const routePath = apiEndpoint[type].like;
  routePath.url = routePath.url.replace("{_id}", id);

  useEffect(() => {
    dispatch(
      requestFeatured({ url: `${BASE_URL}${type}/${id}?api_key=${API_KEY}` })
    );
  }, [dispatch, type, id]);

  return (
    <>
      <Header movie={item} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <Tab>
          <Box name="overview">
            <Overview movie={item} />
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
