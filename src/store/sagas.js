import Axios from "axios";
import { put, call, takeEvery, take, fork, all } from "redux-saga/effects";
import { recieveMovies, requestMovies } from "../features/movieSlice";
import { recieveTvs, requestTvs } from "../features/tvSlice";
import { requestFeatured, setFeatured } from "../features/featuredSlice";
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
  requestCast,
  requestLike,
  requestPhotos,
  requestVideos,
} from "../features/detailSlice";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchDataSaga(action) {
  const { listName, mediaType, url } = action.payload;

  try {
    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, {
      url,
    });

    if (mediaType === "movie")
      yield put(recieveMovies({ listName, data: result.data.results }));
    else {
      yield put(recieveTvs({ listName, data: result.data.results }));
    }
    yield put(processLoading({ isLoading: false }));
  } catch (e) {
    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchMovie() {
  console.log("watch");
  yield takeEvery(requestMovies, fetchDataSaga);
}

export function* watchTv() {
  yield takeEvery(requestTvs, fetchDataSaga);
}

export function* watchFeatured() {
  while (true) {
    const { payload } = yield take(requestFeatured);
    console.log("Featured payload", payload);
    let result = yield call(callAPI, { url: payload.url });
    console.log("Featured result:", result);
    yield put(setFeatured({ data: result.data }));
  }
}

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

export function* watchDetail() {
  while (true) {
    const { payload } = yield take(requestVideos);
    console.log("Detail payload", payload);

    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url: payload.url });
    console.log("Detail result", result.data.results);
    yield put(recieveVideos({ data: result.data.results }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchDetailPhotos() {
  while (true) {
    const { payload } = yield take(requestPhotos);
    console.log("Photos payload", payload);

    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url: payload.url });
    console.log("Photos result", result.data);
    yield put(recievePhotos({ data: result.data }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchDetailLike() {
  while (true) {
    const { payload } = yield take(requestLike);
    console.log("Like payload", payload);

    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url: payload.url });
    console.log("Like result", result);
    yield put(recieveLike({ data: result.data.results }));
    yield put(processLoading({ isLoading: false }));
  }
}

export function* watchDetailCast() {
  while (true) {
    const { payload } = yield take(requestCast);
    console.log("Cast payload", payload);

    yield put(processLoading({ isLoading: true }));
    let result = yield call(callAPI, { url: payload.url });
    console.log("Cast result", result);
    yield put(recieveCast({ data: result.data.cast }));
    yield put(processLoading({ isLoading: false }));
  }
}

export default function* root() {
  yield all([
    fork(watchMovie),
    fork(watchTv),
    fork(watchFeatured),
    fork(watchCollection),
    fork(watchDetail),
    fork(watchDetailPhotos),
    fork(watchDetailLike),
    fork(watchDetailCast),
  ]);
}
