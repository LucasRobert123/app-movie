// src/store/sagas.js
import { MovieService } from "@/services/movie-services";
import { call, put } from "redux-saga/effects";
import { MovieActions } from "../reducers/movieReducer";

export function* fetchMovies() {
  try {
    const data = yield call(() => MovieService.get());
    yield put(MovieActions.setMoviesSuccess(data));
  } catch (error) {
    yield put(MovieActions.setErrorApi(JSON.stringify(error)));
  }
}
