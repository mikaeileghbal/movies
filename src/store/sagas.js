import { take, put, call } from "redux-saga/effects";
import { requestMovies, setMovies } from "../features/movieSlice";
import { requestTvs, setTvs } from "../features/tvSlice";
import Axios from "axios";
import apiEndpoint from "../utils/apiEndpoints";
import { sagaActions } from "./sagaActions";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchDataSaga(listName, mediaType) {
  try {
    let result = yield call(() =>
      callAPI({ url: apiEndpoint[mediaType][listName].url })
    );

    switch (mediaType) {
      case "movie":
        console.log("movie saga");
        return yield put(setMovies({ listName, data: result.data.results }));
      case "tv":
        console.log("tv saga");
        return yield put(setTvs({ listName, data: result.data.results }));
      default:
        return;
    }
  } catch (e) {}
}

export function* rootSagaMovie() {
  const { payload } = yield take(requestMovies);
  yield call(() => fetchDataSaga(payload.listName, payload.mediaType));
}

export function* rootSagaTv() {
  const { payload } = yield take(requestTvs);
  yield call(() => fetchDataSaga(payload.listName, payload.mediaType));
}
