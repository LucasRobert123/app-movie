import { Image, Text, TouchableOpacity } from "react-native";
import { IMovie } from "@/entities/movie";
import { styles } from "./styles";

type Props = { movie: IMovie; onPress: () => void };

export function Movie({ movie, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          cache: "force-cache",
        }}
        resizeMode="cover"
      />
      <Text numberOfLines={1} style={styles.movieName}>
        {movie.original_title}
      </Text>
    </TouchableOpacity>
  );
}
