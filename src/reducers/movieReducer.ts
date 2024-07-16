// src/store/reducers.js

import { IMovie } from "@/entities/movie";

export type MovieState = {
  data: IMovie[];
};

const initialState: MovieState = {
  data: [],
};

export const movieReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
