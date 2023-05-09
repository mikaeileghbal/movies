import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { random } from "../utils/helper";
import { requestFeatured } from "../features/featuredSlice";
import { requestTvs } from "../features/tvSlice";

export default function useTv() {
  const randomId = useMemo(() => random(1, 100000), []);
  const { item } = useSelector((state) => state.featured);
  const { popular, top_rated, on_the_air, airing_today } = useSelector(
    (state) => state.tv
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      requestFeatured({ url: `${BASE_URL}tv/${randomId}?api_key=${API_KEY}` })
    );
    dispatch(
      requestTvs({
        listName: "popular",
        mediaType: "tv",
        url: apiEndpoint.tv.popular.url,
      })
    );
    dispatch(
      requestTvs({
        listName: "top_rated",
        mediaType: "tv",
        url: apiEndpoint.tv.top_rated.url,
      })
    );
    dispatch(
      requestTvs({
        listName: "on_the_air",
        mediaType: "tv",
        url: apiEndpoint.tv.on_the_air.url,
      })
    );
    dispatch(
      requestTvs({
        listName: "airing_today",
        mediaType: "tv",
        url: apiEndpoint.tv.airing_today.url,
      })
    );
  }, [dispatch, randomId]);

  return {
    item,
    popular,
    top_rated,
    on_the_air,
    airing_today,
  };
}
