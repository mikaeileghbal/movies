import React from "react";
import Popular from "../components/movie/Popular";
import TrendMovie from "../components/TrendMovie";
import TrendTv from "../components/TrendTv";
import ViewSelection from "../components/ViewSelection";

export default function Movie() {
  return (
    <ViewSelection>
      <Popular />
      <TrendTv />
      <TrendMovie />
      <TrendTv />
    </ViewSelection>
  );
}
