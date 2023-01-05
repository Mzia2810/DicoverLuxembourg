import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";
import getPosts from "../../redux/slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

export const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.user);

  console.log("entities === :", entities);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 10000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Text>my Favorites Screen</Text>
      {/* <FlatList
        data={entities}
        renderItem={(item) => <AttractionInfoCard item={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </>
  );
};
