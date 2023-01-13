import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";
import useFavourite from "../../hooks/useFavourite";
import { Provider, Searchbar } from "react-native-paper";
import { StyledView, SafeArea } from "../../infrastracture/styles/view.style";

export const FavoritesScreen = () => {
  // const { data } = useFavourite();
  const {
    fetchResponse,
    filterData,
    filterDataFav,
    searchItem,
    SearchFavouriteItem,
    data,
  } = useFavourite();
  // console.log("this is our user from Context ::", data);

  return (
    <>
      <StyledView>
        <Searchbar
          value={searchItem}
          onChangeText={(val) => {
            SearchFavouriteItem(val);
            // searchFav(val);
          }}
        />
      </StyledView>
      <FlatList
        data={filterDataFav}
        renderItem={(item) => <AttractionInfoCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
