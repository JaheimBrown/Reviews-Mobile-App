import React from "react";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// useFonts Hook
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// SCREENS
import Home from "./screens/Home";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
