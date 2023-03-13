import React from "react";
import NowPlaying from "../components/movie/NowPlaying";
import Popular from "../components/movie/Popular";
import TopRated from "../components/movie/TopRated";
import Upcoming from "../components/movie/Upcoming";
import ViewSelection from "../components/ViewSelection";

export default function Movie() {
  return (
    <ViewSelection>
      <Popular />
      <TopRated />
      <Upcoming />
      <NowPlaying />
    </ViewSelection>
  );
}
