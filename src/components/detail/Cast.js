import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import CastCard from "../CastCard";
import useMovieCast from "../../hooks/useMovieCast";
import { useParams } from "react-router-dom";
import apiEndpoint from "../../utils/apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { requestCast } from "../../features/detailSlice";
import Loading from "../Loading";

export default function Cast() {
  let { cast } = useSelector((state) => state.detail);
  const { isLoading } = useSelector((state) => state.loading);
  const [groupSize] = useState(6);
  const { type, id } = useParams();
  const dispatch = useDispatch();

  const routePath = { ...apiEndpoint[type].cast };

  routePath.url = routePath.url.replace("{_id}", id);

  //let { cast } = useMovieCast(routePath.url);

  if (cast.length % groupSize !== 0) {
    const diff = groupSize - (cast.length % groupSize);

    for (let i = 0; i < diff; i++) {
      cast = [...cast, {}];
    }
  }

  useEffect(() => {
    dispatch(requestCast({ url: routePath.url }));
  }, [dispatch, type, id, routePath.url]);

  if (isLoading) return <Loading />;

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
