import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import CastCard from "../CastCard";
import useMovieCast from "../../hooks/useMovieCast";
import { useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { requestCast } from "../../features/detailSlice";
import Loading from "../Loading";

export default function Cast({ items }) {
  const { isLoading } = useSelector((state) => state.loading);
  const [groupSize] = useState(6);

  //let { cast } = useMovieCast(routePath.url);

  if (items.length % groupSize !== 0) {
    const diff = groupSize - (items.length % groupSize);

    for (let i = 0; i < diff; i++) {
      items = [...items, {}];
    }
  }

  if (isLoading) return <Loading />;

  return (
    <Carousel
      heading="cast"
      items={items}
      groupSize={groupSize}
      render={renderCast}
    />
  );
}

function renderCast(item) {
  if (!item) return null;
  return <CastCard item={item} />;
}
