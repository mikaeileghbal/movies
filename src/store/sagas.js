import { put, call, takeEvery, take } from "redux-saga/effects";
import { recieveMovies, requestMovies } from "../features/movieSlice";
import { recieveTvs, requestTvs } from "../features/tvSlice";
import Axios, { all } from "axios";
import apiEndpoint from "../utils/apiEndpoints";
import { requestFeatured, setFeatured } from "../features/featuredSlice";
import {
  recieveCollection,
  requestCollection,
} from "../features/collectionSlice";

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
    let result = yield call(callAPI, {
      url,
    });

    if (mediaType === "movie")
      yield put(recieveMovies({ listName, data: result.data.results }));
    else {
      yield put(recieveTvs({ listName, data: result.data.results }));
    }
  } catch (e) {}
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

    let result = yield call(callAPI, { url: payload.url });
    console.log("Collection result", result.data.results);
    yield put(recieveCollection({ data: result.data.results }));
  }
}
