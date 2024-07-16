import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  image: {
    width: "60%",
    aspectRatio: 1 / 1,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 32,
  },
  movieName: {
    color: colors.title,
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
  },
  description: {
    color: colors.title,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 16,
    textAlign: "justify",
  },
});
