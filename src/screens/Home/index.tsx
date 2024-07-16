import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";
import { IMovie } from "@/entities/movie";
import { Movie } from "@/components/Movie";
import { MovieActions } from "@/store/reducers/movieReducer";
import reactotron from "reactotron-react-native";

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const movies: IMovie[] = useAppSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(MovieActions.getMoviesRequest());
  }, []);

  function handleSelectMovie(movie: IMovie) {
    navigation.navigate("Details", { movie });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de filmes</Text>

      <View style={styles.content}>
        <FlatList
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={{ gap: 40, flexGrow: 1, paddingBottom: 72 }}
          numColumns={2}
          data={movies}
          renderItem={({ item }) => (
            <Movie movie={item} onPress={() => handleSelectMovie(item)} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
