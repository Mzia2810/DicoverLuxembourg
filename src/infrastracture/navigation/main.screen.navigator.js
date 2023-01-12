import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../../features/screens/home.screen";
import { MapScreen } from "../../features/screens/map.screen";
import { FavoritesScreen } from "../../features/screens/favorites.screen";
import EventScreen from "../../features/screens/EventScreen";
import { AboutScreen } from "../../features/screens/about.screen";
import { Provider, Searchbar } from "react-native-paper";
import { StyledView, SafeArea } from "../../infrastracture/styles/view.style";
import { FavouriteProvider } from "../../hooks/useFavourite";

const Tab = createBottomTabNavigator();

export const MainScreenNavigator = () => {
  return (
    <>
      <SafeArea>
        <StyledView>
          <Searchbar />
        </StyledView>
      </SafeArea>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Map") {
              iconName = "md-map";
            } else if (route.name === "Favorites") {
              iconName = "md-heart";
            } else if (route.name === "About") {
              iconName = "md-information";
            } else if (route.name === "Home") {
              iconName = "md-home";
            } else if (route.name === "Event") {
              iconName = "calendar";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
        <Tab.Screen name="Event" component={EventScreen} />

        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
