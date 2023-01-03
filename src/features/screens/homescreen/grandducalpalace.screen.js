// import React from "react";
// import { Text } from "react-native";

// export const FavoritesScreen = () => (
//   <>
//     <Text>my Favorites Screen</Text>
//   </>
// );

import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImageSlider from "react-native-image-slider";
import { ScrollView } from "react-native-gesture-handler";

 const MapWithMarker = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title="My Marker"
        description="This is my marker"
      />
    </MapView>
  );
};

export const GrandDucalPalace = ({ navigation, route }) => {
  const { name, image, address, description, created_at, updated_at, geo } =
    route.params;

  // console.log("name == ", name);
  // console.log("image == ", image);
  // console.log("name == ", address);
  // console.log("name == ", created_at);
  // console.log("name == ", updated_at);
  // console.log("geo  ====  == ", geo);
  // console.log("name == ", description);

  const [images, setImages] = React.useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?tree",
  ]);
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

          {/* <MapWithMarker /> */}

          {/* <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="My Marker"
              description="This is my marker"
            />
          </MapView> */}
          {/* <MapView
            style={{ flex: 1 }}
            mapType="standard"
            showsUserLocation={true}
            showsMyLocationButton={true}
            enableZoomControl={true}
            initialRegion={geo}
          >
            <Marker
              coordinate={geo}
              title="Origin"
              description="this is my description"
              identifier="origin"
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "red",
                  borderRadius: 50,
                  opacity: 0.5,
                }}
              ></View>
            </Marker>
            <Marker
              coordinate={geo}
              title="Origin"
              description="this is my description"
              identifier="origin"
              pinColor="blue"
            />
            <MarkerAnimated coordinate={geo} pinColor="green" />
            <MarkerAnimated coordinate={geo} pinColor="orange" />
          </MapView> */}
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
    height: hp("30%"),
    alignSelf: "center",
    top: wp("5%"),
    borderRadius: 5,
    overflow: "hidden",
  },
});
