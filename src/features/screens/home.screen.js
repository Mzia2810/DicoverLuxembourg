import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import useFavourite from "../../hooks/useFavourite";
import { AttractionInfoCard } from "../components/attractions-info-component";
import { Provider, Searchbar } from "react-native-paper";
import { StyledView, SafeArea } from "../../infrastracture/styles/view.style";

export const HomeScreen = () => {
  const { fetchResponse, filterData, searchItem, SearchText } = useFavourite();

  return (
    <>
      <StyledView>
        <Searchbar
          value={searchItem}
          onChangeText={(val) => {
            SearchText(val);
            // searchFav(val);
          }}
        />
      </StyledView>
      <FlatList
        data={filterData}
        renderItem={(item) => <AttractionInfoCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
