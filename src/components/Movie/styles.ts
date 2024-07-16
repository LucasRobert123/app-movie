import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "47%",
    aspectRatio: 1 / 1,
  },
  image: { width: "100%", aspectRatio: 1 / 1, borderRadius: 8 },
  movieName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.title,
    marginTop: 8,
  },
});
