import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/@types/navigation";

export function Details() {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "Details">>();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={colors.title} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${params.movie.backdrop_path}`,
          cache: "force-cache",
        }}
        resizeMode="cover"
      />
      <Text style={styles.movieName}>{params.movie.original_title}</Text>
      <Text style={styles.description}>{params.movie.overview}</Text>
    </SafeAreaView>
  );
}
