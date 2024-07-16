import { all, takeEvery } from "redux-saga/effects";

import { fetchMovies } from "./movieSagas";
import { MovieTypes } from "@/store/reducers/movieReducer";

export default function* rootSagas() {
  yield all([takeEvery(MovieTypes.GET_MOVIES_REQUEST, fetchMovies)]);
}
