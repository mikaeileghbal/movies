import React from "react";
import TrendMovie from "../components/TrendMovie";
import TrendTv from "../components/TrendTv";
import ViewSelection from "../components/ViewSelection";

export default function Tv() {
  return (
    <ViewSelection>
      <TrendMovie />
      <TrendTv />
      <TrendMovie />
      <TrendTv />
    </ViewSelection>
  );
}
