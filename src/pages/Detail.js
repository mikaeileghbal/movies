import { Box } from "@mui/system";
import React from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";
import { useParams } from "react-router-dom";
import Cast from "../components/detail/Cast";
import Header from "../components/Header";
import useDetail from "../hooks/useDetail";

export default function Detail() {
  const { type } = useParams();
  const { item, cast, like } = useDetail();
  const routePath = apiEndpoint[type].like;

  return (
    <>
      <Header movie={item} />
      <Box component="section" sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
        <Tab>
          <Box name="overview">
            <Overview movie={item} />
            <Cast items={cast} />
          </Box>
          <Box name="videos">
            <Video />
          </Box>
          <Box name="photos">
            <Photo />
          </Box>
        </Tab>
        <ViewSelectionItem routePath={routePath} items={like} />
      </Box>
    </>
  );
}
