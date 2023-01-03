import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";

export const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://lexumbourg.etradeverse.com/api/get_historical_palces"
        );
        const json = await response.json();
        setData(json.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading....</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  // console.log("data = for places   ==== :  ", data);
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
