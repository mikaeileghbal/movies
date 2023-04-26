import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import searchReducer from "../features/searchSlice";
import movieReducer from "../features/movieSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import * as sagas from "./sagas";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    movie: movieReducer,
  },
  middleware: [logger, sagaMiddleware],
});

//for (let saga in sagas) {
//  sagaMiddleware.run(sagas[saga]);
//}

sagaMiddleware.run(rootSaga);
