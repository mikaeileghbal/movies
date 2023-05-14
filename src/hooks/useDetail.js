import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { requestFeatured } from "../features/featuredSlice";
import { requestCast, requestLike } from "../features/detailSlice";
import { Actions } from "../store/sagaActions";

export default function useDetail() {
  const { type, id } = useParams();
  const { item } = useSelector((state) => state.featured);
  let { cast } = useSelector((state) => state.detail);
  const { like } = useSelector((state) => state.detail);

  const routePathCast = { ...apiEndpoint[type].cast };
  routePathCast.url = routePathCast.url.replace("{_id}", id);

  const dispatch = useDispatch();

  const routePathLike = apiEndpoint[type].like;
  routePathLike.url = routePathLike.url.replace("{_id}", id);

  useEffect(() => {
    dispatch({
      type: Actions.REQUEST_LOAD_DETAIL,
      payload: {
        featuredUrl: `${BASE_URL}${type}/${id}?api_key=${API_KEY}`,
        cast: routePathCast.url,
        like: routePathLike.url,
      },
    });
  }, [dispatch, type, id, routePathLike.url, routePathCast.url]);

  return { item, cast, like };
}
