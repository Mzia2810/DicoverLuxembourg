import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastracture/theme";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AppNavigator } from "./src/infrastracture/navigation/app.navigator";
import { FavouriteProvider } from "./src/hooks/useFavourite";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouriteProvider>
          <AppNavigator />
        </FavouriteProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
