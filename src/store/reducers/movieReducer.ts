import { IMovie } from "@/entities/movie";
import reactotron from "reactotron-react-native";
import { createReducer, createActions } from "reduxsauce";

type Actions = {
  payload: any;
};

export type MovieState = {
  data: IMovie[];
  error: string | null;
};

export const { Creators: MovieActions, Types: MovieTypes } = createActions({
  getMoviesRequest: null,
  setMoviesSuccess: ["payload"],
  setErrorApi: ["error"],
});

const INITIAL_STATE: MovieState = {
  data: [],
  error: null,
};

function request(state = INITIAL_STATE) {
  return state;
}

function sucess(state = INITIAL_STATE, actions: Actions): MovieState {
  return { ...state, data: actions.payload };
}

function error(state = INITIAL_STATE, actions: Actions): MovieState {
  reactotron.log({ actions });
  return { ...state, error: actions.payload };
}

export const movieReducer = createReducer(INITIAL_STATE, {
  [MovieTypes.GET_MOVIES_REQUEST]: request,
  [MovieTypes.SET_MOVIES_SUCCESS]: sucess,
  [MovieTypes.SET_ERROR_API]: error,
});
