import Axios from "axios";
import { put, call, takeEvery, take, fork, all } from "redux-saga/effects";
import { recieveMovies, requestMovies } from "../features/movieSlice";
import { recieveTvs, requestTvs } from "../features/tvSlice";
import { recieveFeatured, requestFeatured } from "../features/featuredSlice";
import { processError, processLoading } from "../features/loadingSlice";
import {
  recieveCollection,
  requestCollection,
} from "../features/collectionSlice";
import {
  recieveCast,
  recieveLike,
  recievePhotos,
  recieveVideos,
  requestCast,
  requestLike,
  requestPhotos,
  requestVideos,
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

// export function* fetchDataSaga(action) {
//   const { listName, mediaType, url } = action.payload;

//   try {
//     yield put(processLoading({ isLoading: true }));
//     let result = yield call(callAPI, {
//       url,
//     });

//     if (mediaType === "movie")
//       yield put(recieveMovies({ listName, data: result.data.results }));
//     else {
//       yield put(recieveTvs({ listName, data: result.data.results }));
//     }
//     yield put(processLoading({ isLoading: false }));
//   } catch (e) {
//     yield put(processLoading({ isLoading: false }));
//   }
// }

// export function* watchMovie() {
//   console.log("watch");
//   yield takeEvery(requestMovies, fetchDataSaga);
// }

// export function* watchTv() {
//   yield takeEvery(requestTvs, fetchDataSaga);
// }

// export function* watchFeatured() {
//   while (true) {
//     const { payload } = yield take(requestFeatured);
//     console.log("Featured payload", payload);
//     let result = yield call(callAPI, { url: payload.url });
//     console.log("Featured result:", result);
//     yield put(recieveFeatured({ data: result.data }));
//   }
// }

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

// export function* watchDetail() {
//   while (true) {
//     const { payload } = yield take(requestVideos);
//     console.log("Detail payload", payload);

//     yield put(processLoading({ isLoading: true }));
//     let result = yield call(callAPI, { url: payload.url });
//     console.log("Detail result", result.data.results);
//     yield put(recieveVideos({ data: result.data.results }));
//     yield put(processLoading({ isLoading: false }));
//   }
// }

// export function* watchDetailPhotos() {
//   while (true) {
//     const { payload } = yield take(requestPhotos);
//     console.log("Photos payload", payload);

//     yield put(processLoading({ isLoading: true }));
//     let result = yield call(callAPI, { url: payload.url });
//     console.log("Photos result", result.data);
//     yield put(recievePhotos({ data: result.data }));
//     yield put(processLoading({ isLoading: false }));
//   }
// }

// export function* watchDetailLike() {
//   while (true) {
//     const { payload } = yield take(requestLike);
//     console.log("Like payload", payload);

//     yield put(processLoading({ isLoading: true }));
//     let result = yield call(callAPI, { url: payload.url });
//     console.log("Like result", result);
//     yield put(recieveLike({ data: result.data.results }));
//     yield put(processLoading({ isLoading: false }));
//   }
// }

// export function* watchDetailCast() {
//   while (true) {
//     const { payload } = yield take(requestCast);
//     console.log("Cast payload", payload);

//     yield put(processLoading({ isLoading: true }));
//     let result = yield call(callAPI, { url: payload.url });
//     console.log("Cast result", result);
//     yield put(recieveCast({ data: result.data.cast }));
//     yield put(processLoading({ isLoading: false }));
//   }
// }

// Refactore Saga

export function* loadFeatured({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url });
    yield put(recieveFeatured({ data: result.data }));
    yield put(processError({ error: "" }));
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
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
    yield put(processLoading({ isLoading: false }));
    yield put(processError({ error: "" }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
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
    yield put(processLoading({ isLoading: false }));
    yield put(processError({ error: "" }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* loadCast({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    const result = yield call(callAPI, { url });
    yield put(
      recieveCast({
        data: result.data.cast,
      })
    );
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
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
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* loadPhotos({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url });
    console.log("Photos result", result.data);
    yield put(recievePhotos({ data: result.data }));
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* loadVideos({ url }) {
  try {
    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url });
    console.log("videos result", result.data.results);
    yield put(recieveVideos({ data: result.data.results }));
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processError({ error: e.message }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchLoadHome() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_HOME);
    const { featuredUrl, trendingMoviesUrl, trendingTvsUrl } = payload;

    yield put(processLoading({ isLoading: true }));
    yield put(recieveFeatured({ data: {} }));

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

    yield put(recieveFeatured({ data: {} }));

    yield all([
      call(loadFeatured, { url: featuredUrl }),
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
    ]);

    // yield call(loadMovies, {
    //   url: popular,
    //   name: "popular",
    // });
    // yield call(loadMovies, {
    //   url: topRated,
    //   name: "top_rated",
    // });
    // yield call(loadMovies, {
    //   url: upcoming,
    //   name: "upcoming",
    // });
    // yield call(loadMovies, {
    //   url: nowPlaying,
    //   name: "now_playing",
    // });
    // yield call(loadFeatured, { url: featuredUrl });

    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchLoadTv() {
  while (true) {
    let { payload } = yield take(Actions.REQUEST_LOAD_TV);
    const { featuredUrl, popular, topRated, onTheAir, airingToday } = payload;

    console.log("payload in loadMovie", payload);
    yield put(processLoading({ isLoading: true }));
    yield put(recieveFeatured({ data: {} }));

    yield all([
      call(loadFeatured, { url: featuredUrl }),
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
    ]);
    // yield call(loadTvs, {
    //   url: popular,
    //   name: "popular",
    // });
    // yield call(loadTvs, {
    //   url: topRated,
    //   name: "top_rated",
    // });
    // yield call(loadTvs, {
    //   url: onTheAir,
    //   name: "on_the_air",
    // });
    // yield call(loadTvs, {
    //   url: airingToday,
    //   name: "airing_today",
    // });
    //yield call(loadFeatured, { url: featuredUrl });
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
      call(loadFeatured, { url: featuredUrl }),
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
    ]);
    // yield call(loadFeatured, { url: featuredUrl });
    // yield call(loadCast, {
    //   url: cast,
    // });
    // yield call(loadLike, {
    //   url: like,
    // });
    // yield call(loadPhotos, {
    //   url: photos,
    // });
    // yield call(loadVideos, {
    //   url: videos,
    // });

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
