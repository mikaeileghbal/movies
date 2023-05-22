import Axios from "axios";
import { put, call, take, fork, all } from "redux-saga/effects";
import { recieveMovies } from "../features/movieSlice";
import { recieveTvs } from "../features/tvSlice";
import { recieveFeatured } from "../features/featuredSlice";
import { processLoading } from "../features/loadingSlice";
import {
  recieveCollection,
  requestCollection,
} from "../features/collectionSlice";
import {
  recieveCast,
  recieveLike,
  recievePhotos,
  recieveVideos,
} from "../features/detailSlice";
import { Actions } from "./sagaActions";

let callAPI = async ({ url, method, data }) => {
  console.log("api fetch called", url);
  return await Axios({
    url,
    method,
    data,
  });
};

export function* watchCollection() {
  while (true) {
    const { payload } = yield take(requestCollection);
    console.log("Collection payload", payload);

    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url: payload.url });
    console.log("Collection result", result.data.results);
    yield put(recieveCollection({ data: result.data.results }));
    yield put(processLoading({ isLoading: false }));
  }
}

// Refactore Saga

export function* loadFeatured({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url });
    yield put(recieveFeatured({ data: result.data }));
  } catch (e) {}
}

export function* loadMovies(collection) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url: collection.url });
    yield put(
      recieveMovies({
        listName: collection.name,
        data: result.data.results,
      })
    );
  } catch (e) {}
}

export function* loadTvs(collection) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url: collection.url });
    yield put(
      recieveTvs({
        listName: collection.name,
        data: result.data.results,
      })
    );
  } catch (e) {}
}

export function* loadCast({ url }) {
  try {
    const result = yield call(callAPI, { url });
    yield put(
      recieveCast({
        data: result.data.cast,
      })
    );
  } catch (e) {}
}

export function* loadLike({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url });
    yield put(
      recieveLike({
        data: result.data.results,
      })
    );
  } catch (e) {}
}

export function* loadPhotos({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url });
    console.log("Photos result", result.data);
    yield put(recievePhotos({ data: result.data }));
  } catch (e) {}
}

export function* loadVideos({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url });
    console.log("videos result", result.data.results);
    yield put(recieveVideos({ data: result.data.results }));
  } catch (e) {}
}

export function* watchLoadHome() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_HOME);
    const { featuredUrl, trendingMoviesUrl, trendingTvsUrl } = payload;

    yield put(processLoading({ isLoading: true }));
    //yield put(recieveFeatured({ data: {} }));

    yield all([
      call(loadFeatured, { url: featuredUrl }),
      call(loadMovies, {
        url: trendingMoviesUrl,
        name: "trending",
      }),
      call(loadTvs, {
        url: trendingTvsUrl,
        name: "trending",
      }),
    ]);

    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchLoadMovie() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_MOVIE);
    const { featuredUrl, popular, topRated, upcoming, nowPlaying } = payload;

    console.log("payload in loadMovie", payload);

    //yield put(recieveFeatured({ data: {} }));

    yield all([
      call(loadMovies, {
        url: popular,
        name: "popular",
      }),
      call(loadMovies, {
        url: topRated,
        name: "top_rated",
      }),
      call(loadMovies, {
        url: upcoming,
        name: "upcoming",
      }),
      call(loadMovies, {
        url: nowPlaying,
        name: "now_playing",
      }),
      //call(loadFeatured, { url: featuredUrl }),
    ]);

    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchLoadTv() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_TV);
    const { featuredUrl, popular, topRated, onTheAir, airingToday } = payload;

    console.log("payload in loadMovie", payload);
    yield put(processLoading({ isLoading: true }));
    //yield put(recieveFeatured({ data: {} }));

    yield all([
      call(loadTvs, {
        url: popular,
        name: "popular",
      }),
      call(loadTvs, {
        url: topRated,
        name: "top_rated",
      }),

      call(loadTvs, {
        url: onTheAir,
        name: "on_the_air",
      }),
      call(loadTvs, {
        url: airingToday,
        name: "airing_today",
      }),
      //call(loadFeatured, { url: featuredUrl }),
    ]);

    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchLoadDetail() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_DETAIL);
    const { featuredUrl, cast, like, photos, videos } = payload;

    console.log("payload in loadDetal", payload);
    yield put(processLoading({ isLoading: true }));

    yield all([
      call(loadCast, {
        url: cast,
      }),
      call(loadLike, {
        url: like,
      }),
      call(loadPhotos, {
        url: photos,
      }),
      call(loadVideos, {
        url: videos,
      }),
      //call(loadFeatured, { url: featuredUrl }),
    ]);

    yield put(processLoading({ isLoading: false }));
  }
}

export default function* root() {
  yield all([
    fork(watchLoadHome),
    fork(watchLoadMovie),
    fork(watchLoadTv),
    fork(watchLoadDetail),
    fork(watchCollection),
  ]);
}
