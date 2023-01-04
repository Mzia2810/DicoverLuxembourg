import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 49.611622,
  longitude: 6.131935,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export const MapScreen = () => {
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

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
        >
          {data.map((item) => {
            if (item.geo != null) {
              // console.log(
              //   "item is here without null=",
              //   item.geo.latitude,
              //   item.geo.longitude
              // );
              return (
                <Marker
                  coordinate={{
                    latitude: parseFloat(item.geo.latitude),
                    longitude: parseFloat(item.geo.longitude),
                  }}
                  title={item.name}
                  description={item.description}
                  identifier={item.name}
                />
              );
            }
          })}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    marginTop: 4,
  },
});
