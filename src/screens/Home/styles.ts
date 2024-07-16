import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    color: colors.title,
    fontSize: 32,
    fontWeight: "700",
  },
  content: {
    marginTop: 16,
  },
});
