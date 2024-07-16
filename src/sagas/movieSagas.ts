// src/store/sagas.js
import { MovieService } from "@/services/movie-services";
import { all, call, put, takeEvery } from "redux-saga/effects";

function* fetchMovies() {
  try {
    const data = yield call(() => MovieService.get());

    yield put({ type: "SET_MOVIES", payload: data });
  } catch (error) {
    console.error(error);
  }
}

export default function* movieSaga() {
  yield all([takeEvery("FETCH_MOVIES", fetchMovies)]);
}
