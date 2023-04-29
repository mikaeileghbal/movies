import { take, put, call, takeEvery } from "redux-saga/effects";
import { requestMovies, setMovies } from "../features/movieSlice";
import { requestTvs, setTvs } from "../features/tvSlice";
import Axios from "axios";
import apiEndpoint from "../utils/apiEndpoints";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchDataSaga(listName, mediaType) {
  console.log("url in saga : ", apiEndpoint[mediaType][listName].url);
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
  yield takeEvery(requestMovies, function* fetchData(action) {
    console.log("payload in movie saga: ", action.payload);

    const { listName, mediaType } = action.payload;

    const url = apiEndpoint[mediaType][listName].url;

    const { data } = yield Axios({
      url,
    });

    yield put(setMovies({ listName, data: data.results }));
  });
  //yield call(() => fetchDataSaga(payload.listName, payload.mediaType));
}

export function* rootSagaTv() {
  while (true) {
    const { payload } = yield take(requestTvs);
    console.log("payload in tv saga: ", payload);

    yield call(() => fetchDataSaga(payload.listName, payload.mediaType));
  }
}
