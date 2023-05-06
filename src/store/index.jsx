import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import searchReducer from "../features/searchSlice";
import movieReducer from "../features/movieSlice";
import featuredReducer from "../features/featuredSlice";
import tvReducer from "../features/tvSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import collectionReducer from "../features/collectionSlice";

//import * as sagas from "./sagas";

import { watchMovie, watchTv, watchFeatured, watchCollection } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    movie: movieReducer,
    tv: tvReducer,
    featured: featuredReducer,
    collection: collectionReducer,
  },
  middleware: [logger, sagaMiddleware],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger, sagaMiddleware),
});

//for (let saga in sagas) {
//  sagaMiddleware.run(sagas[saga]);
//}

sagaMiddleware.run(watchMovie);
sagaMiddleware.run(watchTv);
sagaMiddleware.run(watchFeatured);
sagaMiddleware.run(watchCollection);
