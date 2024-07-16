import { Routes } from "@/routes";
import store from "@/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="light" />
        <Routes />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
