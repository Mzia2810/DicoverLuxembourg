import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [user, setUser] = useState("Muhammad");
  const [iconColor, setIconColor] = useState("red");

  // create function here

  const [data, setData] = useState([{}]);

  // console.log("here is my data ::::::::::::::::::::::::::", data);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchResponse, setFetchResponse] = useState(null);

  const [searchItem, setSearchItem] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [filterDataFav, setFilterDataFav] = useState([]);

  // console.log("Here is my Filter favourite data", filterDataFav);

  const SearchText = (searchItem) => {
    setSearchItem(searchItem);
    // console.log(searchItem);
    const searchedData = fetchResponse.filter((item) =>
      item?.name?.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
    );
    setFilterData(searchedData);
    console.log(searchedData);
    if (!searchItem || searchItem === "") {
      setFilterData(fetchResponse);
    }
  };

  // ..............................................................

  const SearchFavouriteItem = (search) => {
    setSearchItem(search);
    console.log("search =======   :::::::   ", search);
    const searchedFav = data.filter((item) =>
      item?.name?.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilterDataFav(searchedFav);
    console.log("searched Fav ==========  ::::::   ", searchedFav);
    if (!search || search === "") {
      setFilterDataFav(data);
    }
  };

  const handleIcon = ({
    id,
    name,
    geo,
    address,
    description,
    created_at,
    updated_at,
    image,
  }) => {
    let newarray = data;

    if (newarray != null) {
      // setColor("red");
      const itemdata = newarray.find((item) => item.id == id);
      if (itemdata != undefined) {
        newarray = newarray.filter((ele) => ele.id != id);
        // setIconColor("black");
        setData(newarray);
        console.log("removed item == ", newarray);
        alert(JSON.stringify(itemdata));
      } else {
        alert("add me now");
        newarray.push({
          id,
          name,
          geo,
          address,
          description,
          created_at,
          updated_at,
          image,
        });
        setData(newarray);
        setIconColor("red");
        console.log("removed second == ");
        // console.log("after Data is  Pushed in Async ===== :::  ", newarray);
      }
    } else {
      newarray = [];
      alert("add me now");
      newarray.push({
        id,
        name,
        geo,
        address,
        description,
        created_at,
        updated_at,
        image,
      });
      setData(newarray);
      console.log("removed second == ");
    }
    // if (iconColor === "black") {
    const arrayOfObjectsString2 = JSON.stringify(newarray);

    AsyncStorage.setItem("danyalnewapp", arrayOfObjectsString2)
      .then(() => {
        setFilterDataFav(arrayOfObjectsString2);
        console.log("Array of objects saved in Async Storage");
      })
      .catch((error) => {
        console.error(error);
      });
    setIconColor("red");
    // }
  };

  function modifyArray(obj) {
    // Pass array to new variable
    let newArray = [...data];

    // Destructure object from parameter
    const {
      id,
      name,
      geo,
      address,
      description,
      created_at,
      updated_at,
      image,
    } = obj;

    // Check if newArray contains the destructured object
    const isInArray = newArray.some((item) => item.id === id);

    if (isInArray) {
      // If true, remove object from array
      newArray = newArray.filter((item) => !(item.id === id));
    } else {
      // If false, add object to array
      newArray.push(obj);
    }
    console.log(newArray);
    setData(newArray);
    setFilterDataFav(newArray);
    const arrayOfObjectsString2 = JSON.stringify(newArray);

    AsyncStorage.setItem("danyalnewapp", arrayOfObjectsString2)
      .then(() => {
        console.log(
          "Array of objects saved in Async Storage",
          arrayOfObjectsString2
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getData = async () => {
    AsyncStorage.getItem("danyalnewapp")
      .then((arrayOfObjectsString) => {
        // Convert the string back to an array of objects
        const arrayOfObjects = JSON.parse(arrayOfObjectsString);
        // setData(arrayOfObjects);
        if (arrayOfObjects == null || arrayOfObjects == 1) {
          // alert(arrayOfObjects);
          setData([]);
        } else {
          setData(arrayOfObjects);
          setFilterDataFav(arrayOfObjects);
        }
        console.log(arrayOfObjects);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://lexumbourg.etradeverse.com/api/get_historical_palces"
        );
        const json = await response.json();
        setFetchResponse(json.data);
        setFilterData(json.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    getData();
  }, []);

  return (
    <FavContext.Provider
      value={{
        data,
        handleIcon,
        modifyArray,
        fetchResponse,
        SearchText,
        filterData,
        iconColor,
        setIconColor,
        SearchFavouriteItem,
        filterDataFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default function useFavourite() {
  return useContext(FavContext);
}
