import React from "react";
import { useParams } from "react-router-dom";
import ViewSelection from "../components/ViewSelection";

export default function Detail() {
  const { type, id } = useParams();

  return (
    <ViewSelection>
      <h1>Detail</h1>
      <div>
        {type} - {id}
      </div>
    </ViewSelection>
  );
}
