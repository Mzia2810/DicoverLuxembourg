
import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";
export const FavoritesScreen = () => (
  <>
    <Text>my Favorites Screen</Text>
    {/* <FlatList
      data={data}
      renderItem={(item) => <AttractionInfoCard item={item} />}
      keyExtractor={(item) => item.id}
    /> */}
  </>
);
