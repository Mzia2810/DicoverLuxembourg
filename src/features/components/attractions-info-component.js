import React from "react";
import {
  StyledAttractionCard,
  StyledAttractionCardCover,
  StyledCardTitle,
  StyledCardAddress,
  StyledCardIcon,
} from "../../infrastracture/styles/attractions-info-style";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const AttractionInfoCard = ({ attraction = {} }) => {
  const navigation = useNavigation();
  const {
    name = [
      "Grand Ducal Palace",
      "Gelle Fra",
      "Pfaffenthal Panoramic Elevator",
      "Bock Promontory",
      "Cathedral ''Notre-Dame De Luxembourg''",
      "Adolphe Bridge",
      "National Museum of History and Art",
      "Chemin de la Corniche",
      "Monument of Robert Schuman",
      "Villa Vauban, Luxembourg City Art Museum",
    ],
    icon = <Ionicons name="ios-heart" size={32} color="#D11114" />,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ducal_Palace_%283753695748%29.jpg/800px-Ducal_Palace_%283753695748%29.jpg",
      "https://cdn.pixabay.com/photo/2020/01/04/22/50/luxembourg-4741924_960_720.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/thumbs/ae759b50-29bc-11eb-a517-9954787a320c.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/thumbs/c6183c20-29bc-11eb-956c-a56019a1a252.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/e68250fb-b5f7-4939-92b3-dc13bae9ae82.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/1ec1660d-c70e-46df-a61a-3fb2de6aec2f.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/faf04c08-8926-4a8c-a119-be0a21045b35.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/6d87037d-4838-494a-8447-c40876021cb9.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/c11c5769-0964-43d3-bb8b-3e13c1381a72.jpg",
      "https://assets.prod.app.luxembourg-city.com/data/media/38e52d10-d03a-4066-8f91-4bec1a8394e5.jpg",
    ],
    address = [
      "Boulevard Roosevelt Luxembourg, 1143 Luxembourg",
      "17 Rue du Marché-aux-Herbes, 1728 Luxembourg",
      "2 Rue du Pont, L-2344",
      "Montée de Clausen Luxembourg",
      "Boulevard Roosevelt | rue Notre-Dame, L-2450 Luxembourg",
      "Uewerstad L-1116 Luxembourg",
      "Marché-aux-Poissons L-2345 Luxembourg",
      "Chemin de la Corniche, Luxembourg",
      "Rond-Point Schuman, L-2525 Luxembourg",
      "18, avenue Emile Reuter, L-2090 Luxembourg",
    ],
    addressIcon = <Ionicons name="location-sharp" size={26} color="black" />,
  } = attraction;

  return (
    <>
      {/* First Card Grand Ducal Palace */}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("GrandDucalPalace")}
        >
          <StyledAttractionCardCover source={{ uri: photos[0] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[0]}</StyledCardTitle>
        <StyledCardAddress>
          {address[0]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 2nd Card Gelle Fra (Golden Lady) */}
      <StyledAttractionCard>
        <TouchableOpacity onPress={() => navigation.navigate("GelleFra")}>
          <StyledAttractionCardCover source={{ uri: photos[1] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[1]}</StyledCardTitle>
        <StyledCardAddress>
          {address[1]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 3rd Card Pfaffenthal Panoramic Elevator*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("PfaffenthalPanoramicElevator")}
        >
          <StyledAttractionCardCover source={{ uri: photos[2] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[2]}</StyledCardTitle>
        <StyledCardAddress>
          {address[2]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 4th Card Bock Promontory*/}
      <StyledAttractionCard>
        <TouchableOpacity onPress={() => navigation.navigate("BockPromontory")}>
          <StyledAttractionCardCover source={{ uri: photos[3] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[3]}</StyledCardTitle>
        <StyledCardAddress>
          {address[3]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 5th Card EU Parliament in Luxembourg City*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotreDameCathedral")}
        >
          <StyledAttractionCardCover source={{ uri: photos[4] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[4]}</StyledCardTitle>
        <StyledCardAddress>
          {address[4]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 6th Card Adolphe Bridge*/}
      <StyledAttractionCard>
        <TouchableOpacity onPress={() => navigation.navigate("AdolpheBridge")}>
          <StyledAttractionCardCover source={{ uri: photos[5] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[5]}</StyledCardTitle>
        <StyledCardAddress>
          {address[5]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 7th Card National Museum of History and Art*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("NationalMuseumOfHistoryAndArt")}
        >
          <StyledAttractionCardCover source={{ uri: photos[6] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[6]}</StyledCardTitle>
        <StyledCardAddress>
          {address[6]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 8th Card Chemin de la Corniche*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheminDeLaCorniche")}
        >
          <StyledAttractionCardCover source={{ uri: photos[7] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[7]}</StyledCardTitle>
        <StyledCardAddress>
          {address[7]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 9th Card Monument of Robert Schuman*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("MonumentOfRobertSchuman")}
        >
          <StyledAttractionCardCover source={{ uri: photos[8] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[8]}</StyledCardTitle>
        <StyledCardAddress>
          {address[8]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
      {/* 10th Card Villa Vauban-Luxembourg City Art Museum*/}
      <StyledAttractionCard>
        <TouchableOpacity
          onPress={() => navigation.navigate("VillaVaubanMuseum")}
        >
          <StyledAttractionCardCover source={{ uri: photos[9] }} />
        </TouchableOpacity>
        <StyledCardTitle>{name[9]}</StyledCardTitle>
        <StyledCardAddress>
          {address[9]}
          {addressIcon}
        </StyledCardAddress>
        <TouchableOpacity>
          <StyledCardIcon>{icon}</StyledCardIcon>
        </TouchableOpacity>
      </StyledAttractionCard>
    </>
  );
};
