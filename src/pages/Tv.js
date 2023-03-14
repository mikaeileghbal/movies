import React from "react";
import CurrentTv from "../components/tv/CurrentTv";
import PopularTv from "../components/tv/PopularTv";
import TodayTv from "../components/tv/TodayTv";
import TopRatedTv from "../components/tv/TopRatedTv";
import ViewSelection from "../components/ViewSelection";

export default function Tv() {
  return (
    <ViewSelection>
      <PopularTv />
      <TopRatedTv />
      <CurrentTv />
      <TodayTv />
    </ViewSelection>
  );
}
