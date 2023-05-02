import { put, call, takeEvery, take } from "redux-saga/effects";
import { recieveMovies, requestMovies } from "../features/movieSlice";
import { recieveTvs, requestTvs } from "../features/tvSlice";
import Axios, { all } from "axios";
import apiEndpoint from "../utils/apiEndpoints";
import { requestFeatured, setFeatured } from "../features/featuredSlice";

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

    console.log("featured result:", result);

    yield put(setFeatured({ data: result.data }));
  }
}
