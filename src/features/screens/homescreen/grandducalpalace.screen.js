import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Callout,
} from "react-native-maps";
import { decode } from "@mapbox/polyline"; //please install this package before running!
// import Geolocation from "@react-native-community/geolocation";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 49.629056,
  longitude: 6.120224,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import MapView from "react-native-maps";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImageSlider from "react-native-image-slider";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";

export const GrandDucalPalace = ({ navigation, route }) => {
  const [coords, setCoords] = useState([]);
  const { id, name, image, address, description, created_at, updated_at, geo } =
    route.params;
  const [location, setLocation] = useState(null);
  // const [coordinate, setCoordinate] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  // });

  // const [initialPosition, setInitialPosition] = useState(INITIAL_POSITION);

  const origin = { latitude: geo.latitude, longitude: geo.longitude };
  const destination = {
    latitude: 49.612429922729206,
    longitude: 6.133821654146095,
  };
  const GOOGLE_MAPS_APIKEY = "AIzaSyAijpdX6WhDyX-IK9MQgvxHeeORqM_ERhg";

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setInitialPosition({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       });
  //     },
  //     (error) => console.log(error),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // }, []);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setCoordinate({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     },
  //     (error) => console.log(error),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Waiting for location...</Text>
      </View>
    );
  }
  // const getDirections = async (startLoc, destinationLoc) => {
  //   try {
  //     const Key = "AIzaSyAijpdX6WhDyX-IK9MQgvxHeeORqM_ERhg"; //put your API key here.
  //     //otherwise, you'll have an 'unauthorized' error.
  //     let resp = await fetch(
  //       `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${Key}`
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

  // useEffect(() => {
  //   //fetch the coordinates and then store its value into the coords Hook.
  //   getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
  //     .then((coords) => setCoords(coords))
  //     .catch((err) => console.log("Something went wrong"));
  // }, []);

  // const [images, setImages] = React.useState([
  //   "https://source.unsplash.com/1024x768/?nature",
  //   "https://source.unsplash.com/1024x768/?water",
  //   "https://source.unsplash.com/1024x768/?tree",
  // ]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            height: hp("30%"),
            width: wp("98%"),
            marginTop: hp("2%"),
            borderRadius: 10,
            alignSelf: "center",
            overflow: "hidden",
          }}
        >
          <ImageSlider
            loopBothSides
            autoPlayWithInterval={3000}
            images={image}
          />
        </View>

        <View style={styles.secondView}>
          <Text style={styles.secondViewTextStyle}>{name}</Text>
        </View>
        <View style={styles.fourthView}>
          <Text style={styles.thirdViewTextStyle}>{description}</Text>
        </View>

        <View style={styles.mapView}>
          <Text style={styles.secondViewTextStyle}>Map</Text>

          <View style={{ flex: 1 }}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={INITIAL_POSITION}
              // initialRegion={initialPosition}
              showsUserLocation
              loadingEnabled
            >
              <Marker
                key={id}
                coordinate={{
                  latitude: parseFloat(geo.latitude),
                  longitude: parseFloat(geo.longitude),
                }}
                title={name}
                description={description}
                identifier={name}
              />
              <MapViewDirections
                // initialPosition={INITIAL_POSITION}
                origin={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={12}
                mode="WALKING"
                resetOnChange={true}
                timePrecision="none"
                language="en"
                strokeColor={"red"}
                // splitWaypoints={3}
                // coordinate={coordinate}
              />

              {/* {coords.length > 0 && <Polyline coordinates={coords} />} */}
            </MapView>
          </View>
        </View>
        <View style={{ height: hp("8%") }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: hp("30%"),
    width: wp("95%"),
    alignSelf: "center",
    marginTop: hp("2%"),
    borderRadius: 5,
  },
  secondView: {
    height: hp("5%"),
    width: wp("95%"),
    top: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  secondViewTextStyle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    // fontFamily: "FontsFree-Net-Montserrat-Medium",
  },
  thirdView: {
    height: hp("5%"),
    width: wp("30%"),
    top: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: 'center',
    left: wp("3%"),
    justifyContent: "space-between",
  },
  thirdViewTextStyle: {
    fontSize: 15,
    // fontFamily: "FontsFree-Net-Montserrat-Medium",
  },
  fourthView: {
    // height: hp('5%'),
    width: wp("90%"),
    top: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: 'center',
    left: wp("3%"),
    justifyContent: "space-between",
    margin: hp("2%"),
  },
  mapView: {
    width: wp("95%"),
    height: hp("48%"),
    alignSelf: "center",
    top: wp("5%"),
    borderRadius: 5,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "95%",
    marginTop: 4,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React from "react";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import { Dimensions, StyleSheet, View } from "react-native";

// const { width, height } = Dimensions.get("window");

// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const INITIAL_POSITION = {
//   latitude: 49.629056,
//   longitude: 6.120224,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,
// };

// export const MapScreen = () => (
//   <>
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={INITIAL_POSITION}
//       />
//     </View>
//   </>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//     marginTop: 4,
//   },
// });
