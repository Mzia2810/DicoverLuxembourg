import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";

const DATA = [
  {
    id: 1,
    uri: "data:image/jpeg;base64,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",
    date: "03.01.2023",
    name: "CirQue Du Lux",
    location: "Champus da Glasis",
    title: "Circus and Street Art",
  },
  {
    id: 2,
    uri: "data:image/jpeg;base64,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",
    date: "03.01.2023",
    name: "CirQue Du Lux",
    location: "Champus da Glasis",
    title: "Circus and Street Art",
  },
  {
    id: 3,
    uri: "data:image/jpeg;base64,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",
    date: "03.01.2023",
    name: "CirQue Du Lux",
    location: "Champus da Glasis",
    title: "Circus and Street Art",
  },
];

const Item = ({
  id,
  name,
  address,
  image,
  description,
  start_date,
  navigation,
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("EventDetailScreen", {
        id: id,
        name: name,
        address: address,
        image: image,
        description: description,
        start_date: start_date,
      })
    }
  >
    <View style={{ padding: wp("4%") }}>
      <Image
        source={{ uri: image[0] }}
        style={{ width: wp("93%"), height: hp("25%") }}
      />
      <View style={{ marginLeft: wp("3%") }}>
        <Text style={styles.t1}>{name}</Text>
        <Text style={styles.t3}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome style={{ marginTop: 5 }} name="address-book" size={20} />
          {/* {console.log(image[0])} */}
          <Text style={styles.t2}>{address?.streetAddress}</Text>
        </View>
        <Text style={{ fontSize: wp("5%") }}>{start_date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const EventScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log("data ===== Event ============= id ::", data[0].id);
  // console.log("data ===== Event ============= name ::", data[0].name);
  // console.log(
  //   "data ===== Event ============= start_date ::",
  //   data[0].start_date
  // );
  // console.log("data ===== Event ============= end_date::", data[0].end_date);
  // console.log("data ===== Event ============= address ::", data[0].address);
  // console.log("data ===== Event ============= iamge ::", data[0].image);
  // console.log("data ===== Event ============= oofer ::", data[0].offer);
  // console.log(
  //   "data ===== Event ============= description ::",
  //   data[0].description
  // );
  // console.log(
  //   "data ===== Event ============= created_at::",
  //   data[0].created_at
  // );
  // console.log(
  //   "data ===== Event ============= update_at ::",
  //   data[0].updated_at
  // );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://lexumbourg.etradeverse.com/api/get_events"
        );
        const json = await response.json();
        setData(json.data);
        // console.log("data ===== Event ============= ::", json.data);
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

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      name={item.name}
      address={item.address}
      image={item.image}
      start_date={item.start_date}
      description={item.description}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  t1: {
    fontSize: wp("5.5%"),
    fontWeight: "500",
    paddingVertical: wp("0.4%"),
  },
  t2: {
    fontSize: wp("4.25%"),
    paddingVertical: wp("1%"),
    marginLeft: 5,
  },
  t3: {
    fontSize: wp("3%"),
    color: "green",
    fontWeight: "700",
  },
});
export default EventScreen;
