import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../../features/screens/welcome.screen";
import EventDetailScreen from "../../features/screens/EventDetailScreen";
import { MainScreenNavigator } from "./main.screen.navigator";
import {
  GelleFra,
  GrandDucalPalace,
  PfaffenthalPanoramicElevator,
  BockPromontory,
  NotreDameCathedral,
  AdolpheBridge,
  NationalMuseumOfHistoryAndArt,
  CheminDeLaCorniche,
  MonumentOfRobertSchuman,
  VillaVaubanMuseum,
} from "../../features/screens/homescreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainScreen"
          component={MainScreenNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GelleFra"
          component={GelleFra}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="GrandDucalPalace"
          component={GrandDucalPalace}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="EventDetailScreen"
          component={EventDetailScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PfaffenthalPanoramicElevator"
          component={PfaffenthalPanoramicElevator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BockPromontory"
          component={BockPromontory}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NotreDameCathedral"
          component={NotreDameCathedral}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AdolpheBridge"
          component={AdolpheBridge}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NationalMuseumOfHistoryAndArt"
          component={NationalMuseumOfHistoryAndArt}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CheminDeLaCorniche"
          component={CheminDeLaCorniche}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MonumentOfRobertSchuman"
          component={MonumentOfRobertSchuman}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VillaVaubanMuseum"
          component={VillaVaubanMuseum}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
