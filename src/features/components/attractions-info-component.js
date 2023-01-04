import React, { useState, useEffect } from "react";
import {
  StyledAttractionCard,
  StyledAttractionCardCover,
  StyledCardTitle,
  StyledCardAddress,
  StyledCardIcon,
} from "../../infrastracture/styles/attractions-info-style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AttractionInfoCard = ({ item }) => {
  const navigation = useNavigation();
  const [iconColor, setIconColor] = useState("black");
  const heart = <FontAwesome name="heart" size={25} color={iconColor} />;
  const { id, name, geo, address, description, created_at, updated_at, image } =
    item.item;

  // console.log("id =============================== ", id);
  const handleIcon = () => {

    
    if (iconColor === "black") {
      setIconColor("red");
    } else {
      setIconColor("black");
    }

    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify({
          id: id,
          name: name,
          description: description,
          image: image,
          address: address,
          geo: geo,
          created_at: created_at,
          updated_at: updated_at,
        });
        await AsyncStorage.setItem("@newValeZi", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    // const storeData = async () => {
    //   try {
    //     await AsyncStorage.setItem(
    //       "@myKey",
    //       "Muhammad"
    //       // JSON.stringify({
    //       //   key1: "value1",
    //       //   key2: "value2",
    //       // })
    //     );
    //     console.log("Stored successfuly");
    //   } catch (e) {
    //     // saving error
    //     console.log(e);
    //   }
    // };

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@newValeZi");
        // console.log("here is my data async daaaaa=", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();

    getData();
  };

  // const getData = async () => {
  //   console.log("get data f0erm");
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("@myKey");
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // console.log(getData);

  // console.log("my item name = ", getData);

  // const {
  //   name = [
  //     "Grand Ducal Palace",
  //     "Gelle Fra",
  //     "Pfaffenthal Panoramic Elevator",
  //     "Bock Promontory",
  //     "Cathedral ''Notre-Dame De Luxembourg''",
  //     "Adolphe Bridge",
  //     "National Museum of History and Art",
  //     "Chemin de la Corniche",
  //     "Monument of Robert Schuman",
  //     "Villa Vauban, Luxembourg City Art Museum",
  //   ],
  //   icon = <Ionicons name="ios-heart" size={32} color="#D11114" />,
  //   photos = [
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ducal_Palace_%283753695748%29.jpg/800px-Ducal_Palace_%283753695748%29.jpg",
  //     "https://cdn.pixabay.com/photo/2020/01/04/22/50/luxembourg-4741924_960_720.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/thumbs/ae759b50-29bc-11eb-a517-9954787a320c.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/thumbs/c6183c20-29bc-11eb-956c-a56019a1a252.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/e68250fb-b5f7-4939-92b3-dc13bae9ae82.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/1ec1660d-c70e-46df-a61a-3fb2de6aec2f.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/faf04c08-8926-4a8c-a119-be0a21045b35.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/6d87037d-4838-494a-8447-c40876021cb9.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/c11c5769-0964-43d3-bb8b-3e13c1381a72.jpg",
  //     "https://assets.prod.app.luxembourg-city.com/data/media/38e52d10-d03a-4066-8f91-4bec1a8394e5.jpg",
  //   ],
  //   address = [
  //     "Boulevard Roosevelt Luxembourg, 1143 Luxembourg",
  //     "17 Rue du Marché-aux-Herbes, 1728 Luxembourg",
  //     "2 Rue du Pont, L-2344",
  //     "Montée de Clausen Luxembourg",
  //     "Boulevard Roosevelt | rue Notre-Dame, L-2450 Luxembourg",
  //     "Uewerstad L-1116 Luxembourg",
  //     "Marché-aux-Poissons L-2345 Luxembourg",
  //     "Chemin de la Corniche, Luxembourg",
  //     "Rond-Point Schuman, L-2525 Luxembourg",
  //     "18, avenue Emile Reuter, L-2090 Luxembourg",
  //   ],
  //   addressIcon = <Ionicons name="location-sharp" size={26} color="black" />,
  // } = attraction;

  return (
    <>
      {/* First Card Grand Ducal Palace */}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("GrandDucalPalace", {
              name: name,
              description: description,
              image: image,
              address: address,
              created_at: created_at,
              updated_at: updated_at,
              geo: geo,
            })
          }
        >
          <StyledAttractionCardCover
            source={{
              uri: image[0],
            }}
          />
        </TouchableOpacity>
        <StyledCardTitle>{name}</StyledCardTitle>
        <StyledCardAddress>
          {address && address.addressCountry}
          {/* {addressIcon} */}
        </StyledCardAddress>
        <TouchableOpacity
          onPress={handleIcon}
          style={{ width: 35, alignSelf: "flex-end" }}
        >
          <StyledCardIcon>{heart}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
    </>
    // <Text>{item.item.name}</Text>
  );
};
