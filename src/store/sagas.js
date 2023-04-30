import { put, call, takeEvery, take } from "redux-saga/effects";
import { requestMovies, setMovies } from "../features/movieSlice";
import { requestTvs, setTvs } from "../features/tvSlice";
import Axios from "axios";
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
  const { listName, mediaType } = action.payload;

  try {
    let result = yield call(() =>
      callAPI({ url: apiEndpoint[mediaType][listName].url })
    );

    if (mediaType === "movie")
      yield put(setMovies({ listName, data: result.data.results }));
    else {
      yield put(setTvs({ listName, data: result.data.results }));
    }
  } catch (e) {}
}

export function* rootSagaMovie() {
  yield takeEvery(requestMovies, fetchDataSaga);
}

export function* rootSagaTv() {
  yield takeEvery(requestTvs, fetchDataSaga);
}

export function* featuredSaga() {
  while (true) {
    const { payload } = yield take(requestFeatured);
    console.log("Featured payload", payload);

    let result = yield call(() => callAPI({ url: payload.url }));

    console.log("featured result:", result);

    yield put(setFeatured({ data: result.data }));
  }
}
