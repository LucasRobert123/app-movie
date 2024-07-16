import { IMovie } from "@/entities/movie";
import { api } from "./api";

type ResponseGet = {
  results: IMovie[];
};

export const MovieService = {
  async get() {
    const response = await api.get<ResponseGet>("/movie/popular");
    return response.data?.results;
  },
};
