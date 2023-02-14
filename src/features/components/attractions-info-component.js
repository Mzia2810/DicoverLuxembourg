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
import useFavourite from "../../hooks/useFavourite";

export const AttractionInfoCard = ({ item }) => {
  const navigation = useNavigation();

  const { data, getIconColor, handleIcon, modifyArray } = useFavourite();
  const [iconColor, setIconColor] = useState("black");
  const heart = <FontAwesome name="heart" size={25} color={iconColor} />;
  const { id, name, geo, address, description, created_at, updated_at, image } =
    item.item;

  console.log(address);

  useEffect(() => {
    const isInArray = data.some((item) => item.id === id);
    if (isInArray) {
      setIconColor("red");
    } else {
      setIconColor("black");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
        <StyledCardAddress>
          <FontAwesome name="map-marker" size={15} />{" "}
          {address && address.addressLocality}{" "}
          {address && address.streetAddress}
          {/* {addressIcon} */}
        </StyledCardAddress>
        <TouchableOpacity
          onPress={() => {
            modifyArray({
              id,
              name,
              geo,
              address,
              description,
              created_at,
              updated_at,
              image,
            });
          }}
          style={{ width: 35, alignSelf: "flex-end" }}
        >
          <StyledCardIcon>{heart}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
    </>
    // <Text>{item.item.name}</Text>
  );
};
