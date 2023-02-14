import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import Icon from "react-native-vector-icons/FontAwesome";
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const EventDetailScreen = ({ route }) => {
  const { id, name, address, image, description, start_date } = route.params;

  //   console.log("Imagee  ==============   ::", image);

  const removeString = (string) => {
    const val = string.split("//")[0];
    console.log("Val is :: ", val);

    return val;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={{ uri: image[0] }} style={styles.img}>
          <Text style={styles.t1}>{name}</Text>
        </ImageBackground>
        <View style={{ padding: wp("5%") }}>
          <Text style={styles.t2}>{name}</Text>
          <Text style={styles.t3}>{description}</Text>
        </View>
        <View style={{ padding: wp("5%") }}>
          <Text style={styles.t2}>Useful Information</Text>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={{ marginTop: 3 }}
              name="address-card-o"
              size={20}
            />
            <Text style={styles.t4}>Address</Text>
            <Text style={styles.t5}>
              {removeString(address?.streetAddress)}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{ marginTop: 3 }} name="date" size={20} />
            <Text style={styles.t4}>When</Text>
            <Text style={[styles.t5, styles.t6]}> {start_date}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Feather style={{ marginTop: 3 }} name="phone" size={20} />
            <Text style={styles.t4}>Phone</Text>
            <Text style={styles.t5}>00352470895021</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{ marginTop: 3 }} name="email" size={20} />
            <Text style={styles.t4}>E-mail</Text>

            <Text style={styles.t5}>info@lexusborg.lu</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={{ marginTop: 3 }}
              name="web"
              size={20}
            />
            <Text style={styles.t4}>Website</Text>
            <Text style={styles.t5}>www.luxumorgticket.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
const styles = StyleSheet.create({
  img: {
    width: wp("100%"),
    height: hp("30%"),
  },
  t1: {
    fontSize: wp("8%"),
    fontWeight: "500",
    color: "#fff",
    marginTop: hp("18%"),
    marginLeft: wp("5%"),
  },
  to1: {
    width: wp("100%"),
    height: hp("5%"),
    backgroundColor: "#880fd9",
    justifyContent: "center",
    alignItems: "center",
  },
  t2: {
    color: "green",
    fontSize: wp("6%"),
  },
  t3: {
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("2%"),
    textAlign: "justify",
  },
  t4: {
    color: "green",
    fontSize: wp("4%"),
    marginLeft: wp("3%"),
    marginTop: hp("0.60%"),
  },
  t5: { paddingLeft: hp("2%"), marginTop: hp("0.7%") },
});
