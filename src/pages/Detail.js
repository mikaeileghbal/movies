import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Overview from "../components/detail/Overview";
import Tab from "../components/Tab";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import Video from "../components/detail/Video";
import Photo from "../components/detail/Photo";
import { useParams } from "react-router-dom";
import Cast from "../components/detail/Cast";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { requestFeatured } from "../features/featuredSlice";
import { requestLike } from "../features/detailSlice";

export default function Detail() {
  const { type, id } = useParams();
  //const { movie } = useMovieDetail(type, id);
  const { item } = useSelector((state) => state.featured);
  const { like } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const routePath = apiEndpoint[type].like;
  routePath.url = routePath.url.replace("{_id}", id);
  console.log("like ", routePath);

  useEffect(() => {
    dispatch(
      requestFeatured({ url: `${BASE_URL}${type}/${id}?api_key=${API_KEY}` })
    );
    dispatch(requestLike({ url: routePath.url }));
  }, [dispatch, type, id, routePath.url]);

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
        <ViewSelectionItem routePath={routePath} items={like} />
      </Box>
    </>
  );
}
