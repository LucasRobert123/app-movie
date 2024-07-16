import { IMovie } from "@/entities/movie";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    movie: IMovie;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
