import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import { RootStackParamList } from "@/@types/navigation";
import { Details } from "@/screens/Details";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
