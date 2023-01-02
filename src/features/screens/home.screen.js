import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { AttractionInfoCard } from "../components/attractions-info-component";

export const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "api\Lexumbourg.postman_collection30-12-22.json"
        );
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log("data = ==== :  ", data);
  return (
    <>
      <FlatList
        data={[{ name: 1 }]}
        renderItem={() => <AttractionInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
