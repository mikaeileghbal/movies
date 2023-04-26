import { take, put, takeEvery, call } from "redux-saga/effects";
import { requestMovies, setMovie } from "../features/movieSlice";
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
  console.log("endpoint: ", apiEndpoint[mediaType][listName].url);
  try {
    let result = yield call(() =>
      callAPI({ url: apiEndpoint[mediaType][listName].url })
    );
    console.log("result in saga:", result.data.results);
    yield put(setMovie({ listName: "trending", data: result.data.results }));
  } catch (e) {}
}

export function* rootSaga() {
  const { payload } = yield take(requestMovies);
  yield call(() => fetchDataSaga(payload.listName, payload.mediaType));
}
