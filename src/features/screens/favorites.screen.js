import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";
import useFavourite from "../../hooks/useFavourite";

export const FavoritesScreen = () => {
  const { data } = useFavourite();
  console.log("this is our user from Context ::", data);

  return (
    <>
      <FlatList
        data={data}
        renderItem={(item) => <AttractionInfoCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
