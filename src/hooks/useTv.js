import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiEndpoint, { API_KEY, BASE_URL } from "../utils/apiEndpoints";
import { random } from "../utils/helper";
import { requestFeatured } from "../features/featuredSlice";
import { requestTvs } from "../features/tvSlice";
import { Actions } from "../store/sagaActions";

export default function useTv() {
  const randomId = useMemo(() => random(1, 100000), []);
  const { item } = useSelector((state) => state.featured);
  const { popular, top_rated, on_the_air, airing_today } = useSelector(
    (state) => state.tv
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.REQUEST_LOAD_TV,
      payload: {
        featuredUrl: `${BASE_URL}tv/${random(1, 100000)}?api_key=${API_KEY}`,
        popular: apiEndpoint.tv.popular.url,
        topRated: apiEndpoint.tv.top_rated.url,
        onTheAir: apiEndpoint.tv.on_the_air.url,
        airingToday: apiEndpoint.tv.airing_today.url,
      },
    });
    // dispatch(
    //   requestFeatured({ url: `${BASE_URL}tv/${randomId}?api_key=${API_KEY}` })
    // );
    // dispatch(
    //   requestTvs({
    //     listName: "popular",
    //     mediaType: "tv",
    //     url: apiEndpoint.tv.popular.url,
    //   })
    // );
    // dispatch(
    //   requestTvs({
    //     listName: "top_rated",
    //     mediaType: "tv",
    //     url: apiEndpoint.tv.top_rated.url,
    //   })
    // );
    // dispatch(
    //   requestTvs({
    //     listName: "on_the_air",
    //     mediaType: "tv",
    //     url: apiEndpoint.tv.on_the_air.url,
    //   })
    // );
    // dispatch(
    //   requestTvs({
    //     listName: "airing_today",
    //     mediaType: "tv",
    //     url: apiEndpoint.tv.airing_today.url,
    //   })
    // );
  }, [dispatch, randomId]);

  return {
    item,
    popular,
    top_rated,
    on_the_air,
    airing_today,
  };
}
