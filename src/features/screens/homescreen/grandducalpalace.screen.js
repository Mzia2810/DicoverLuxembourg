// import React from "react";
// import { Text } from "react-native";

// export const FavoritesScreen = () => (
//   <>
//     <Text>my Favorites Screen</Text>
//   </>
// );

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

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

//  const MapWithMarker = () => {
//   return (
//     <MapView
//       style={{ flex: 1 }}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     >
//       <MapView.Marker
//         coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//         title="My Marker"
//         description="This is my marker"
//       />
//     </MapView>
//   );
// };

export const GrandDucalPalace = ({ navigation, route }) => {
  const { id, name, image, address, description, created_at, updated_at, geo } =
    route.params;

  console.log("name == ", route.params.geo);
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

          <View style={{ flex: 1 }}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={INITIAL_POSITION}
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
