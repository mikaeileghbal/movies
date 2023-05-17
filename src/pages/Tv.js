import React from "react";
import ViewSelectionItem from "../components/ViewSelectionItem";
import apiEndpoint from "../utils/apiEndpoints";
import Header from "../components/Header";
import { Box } from "@mui/material";
import useTv from "../hooks/useTv";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Tv() {
  const { item, popular, top_rated, on_the_air, airing_today } = useTv();
  const { isLoading } = useSelector((state) => state.loading);

  if (isLoading) return <Loading />;

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
