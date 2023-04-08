import React, { useState } from "react";
import Carousel from "../Carousel";
import CastCard from "../CastCard";
import useMovieCast from "../../hooks/useMovieCast";
import { useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";

export default function Cast() {
  const [groupSize] = useState(6);
  const { type, id } = useParams();

  const routePath = apiEndpoint[type].cast;

  routePath.url = routePath.url.replace("{_id}", id);

  let { cast } = useMovieCast(routePath.url);

  if (cast.length % groupSize !== 0) {
    const diff = groupSize - (cast.length % groupSize);

    for (let i = 0; i < diff; i++) {
      cast = [...cast, {}];
    }
  }

  return (
    <Carousel
      heading="cast"
      items={cast}
      groupSize={groupSize}
      render={renderCast}
    />
  );
}

function renderCast(item) {
  if (!item) return null;
  return <CastCard item={item} />;
}
