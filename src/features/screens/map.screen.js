import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { decode } from "@mapbox/polyline";
import * as Location from "expo-location";
const { width, height } = Dimensions.get("window");
import MapViewDirections from "react-native-maps-directions";

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
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [coords, setCoords] = useState([]);

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  // console.log("data from Map :::  ", data);

  const navigateToClickedScreen = () => {
    navigation.navigate("GrandDucalPalace", { data: data });
    console.log("I am clicked : ");
  };

  const handleMarkerPress = (latitude, longitude) => {
    if (start == null) {
      setStart({ latitude: latitude, longitude: longitude });
      console.log("latitude  ", latitude);
      console.log("longitude  ", longitude);
    } else if (end == null) {
      setEnd({ latitude: latitude, longitude: longitude });
    } else if (start !== null && start.latitude !== end.latitude) {
      setStart({ latitude: start.latitude, longitude: start.longitude });
      setEnd({ latitude: latitude, longitude: longitude });
    } else if (start.latitude == end.latitude) {
      alert("Wrong path");
      setStart(null);
    }
    // console.log(latitude, longitude);
    // if (!end) {
    //   setStart({ latitude, longitude });
    // } else {
    //   setStart({ latitude, longitude });
    //   setEnd(null);
    // }
  };

  console.log("start ", start);
  console.log("end ", end);
  // const getDirections = async (startLoc, destinationLoc) => {
  //   try {
  //     const KEY = "AIzaSyApOLEiffXXZNBEiWItoZzgr1hjYxrbJpI"; //put your API key here.
  //     //otherwise, you'll have an 'unauthorized' error.
  //     let resp = await fetch(
  //       `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
  //     );
  //     let respJson = await resp.json();
  //     let points = decode(respJson.routes[0].overview_polyline.points);
  //     console.log(points);
  //     let coords = points.map((point, index) => {
  //       return {
  //         latitude: point[0],
  //         longitude: point[1],
  //       };
  //     });
  //     return coords;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log(currentLocation.coords);
    })();
  }, []);

  // useEffect(() => {
  //   //fetch the coordinates and then store its value into the coords Hook.
  //   getDirections(INITIAL_POSITION.latitude, INITIAL_POSITION.longitude)
  //     .then((coords) => setCoords(coords))
  //     .catch((err) => console.log("Something went wrong"));
  // }, []);

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
          key="AIzaSyApOLEiffXXZNBEiWItoZzgr1hjYxrbJpI"
        >
          {/* {start && (
            <Marker
              coordinate={{
                latitude: start.latitude,
                longitude: start.longitude,
              }}
              onPress={() => {
                setStart(null);
              }}
            />
          )}
          {end && (
            <Marker
              coordinate={{ latitude: end.latitude, longitude: end.longitude }}
              onPress={() => {
                setEnd(null);
              }}
            />
          )} */}
          <MapViewDirections
            origin={start ? start : INITIAL_POSITION}
            destination={end ? end : end}
            apikey={"AIzaSyApOLEiffXXZNBEiWItoZzgr1hjYxrbJpI"}
            strokeColor="red"
            strokeWidth={7}
            mode="WALKING"
            resetOnChange={true}
            timePrecision="none"
            language="en"
            strokePattern={[10]}
          />
          {/* <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            onPress={() => {
              handleMarkerPress(37.78825, -122.4324);
            }}
          />
          <Marker
            coordinate={{ latitude: 37.75825, longitude: -122.4224 }}
            onPress={() => {
              handleMarkerPress(37.75825, -122.4224);
            }}
          /> */}
          {data.map((item) => {
            if (item.geo != null) {
              return (
                <>
                  <Marker
                    key={item.id}
                    onPress={() => {
                      handleMarkerPress(item.geo.latitude, item.geo.longitude);
                      // navigation.navigate("GrandDucalPalace", {
                      //   name: item.name,
                      //   description: item.description,
                      //   image: item.image,
                      //   address: item.address,
                      //   created_at: item.created_at,
                      //   updated_at: item.updated_at,
                      //   geo: item.geo,
                      // });
                      // console.log(item.geo.latitude, item.geo.longitude);
                    }}
                    coordinate={{
                      latitude: parseFloat(item.geo.latitude),
                      longitude: parseFloat(item.geo.longitude),
                    }}
                    title={item.name}
                    // description={item.description}
                    // identifier={item.name}
                  />
                </>
              );
            }
          })}

          {/* <MapViewDirections
            // initialPosition={INITIAL_POSITION}
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={12}
            mode="DRIVING"
            resetOnChange={true}
            timePrecision="none"
            language="en"
            strokeColor={"red"}
            // splitWaypoints={3}
            // coordinate={coordinate}
          /> */}

          {/* {coords.length > 0 && (
            <Polyline
              strokeColors={["#7F0000"]}
              strokeWidth={6}
              coordinates={coords}
            />
          )} */}
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
