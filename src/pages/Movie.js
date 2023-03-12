import React from "react";
import TrendMovie from "../components/TrendMovie";
import TrendTv from "../components/TrendTv";
import ViewSelection from "../components/ViewSelection";

export default function Movie() {
  return (
    <ViewSelection>
      <TrendMovie />
      <TrendTv />
      <TrendMovie />
      <TrendTv />
    </ViewSelection>
  );
}
