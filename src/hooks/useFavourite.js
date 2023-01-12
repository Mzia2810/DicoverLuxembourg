import { View, Text } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [user, setUser] = useState("Muhammad");
  // const [color, setColor] = useState("black");

  // create function here

  const [data, setData] = useState([{}]);

  console.log("here is my data ::::::::::::::::::::::::::", data);
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.users);
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getUsers());
  //   }, 5000);
  // }, []);

  // if (loading === "idle") return <p>Loading...</p>;

  const getcolor = (id) => {
    let color = "red";
    console.log("my color");
    data.map((item) => {
      if (item.id == id) {
        color = "red";
        // return color;
      }
    });
    return color;
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
    // if (iconColor === "black") {
    //   setIconColor("red");
    // } else {
    //   setIconColor("black");
    // }
    // console.log("dani data=", {
    //   id,
    //   name,
    //   geo,
    //   address,
    //   description,
    //   created_at,
    //   updated_at,
    //   image,
    // });

    let newarray = data;
    const myitem = {
      id,
      name,
      geo,
      address,
      description,
      created_at,
      updated_at,
      image,
    };
    // const result = [];
    if (newarray != null) {
      const itemdata = newarray.find((item) => item.id == id);
      console.log("my item data=", itemdata);
      if (itemdata != undefined) {
        newarray = newarray.filter((ele) => ele.id != id);

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
      // console.log("after Data is  Pushed in Async ===== :::  ", newarray);
    }

    const arrayOfObjectsString2 = JSON.stringify(newarray);

    AsyncStorage.setItem("danyalnewapp", arrayOfObjectsString2)
      .then(() => {
        console.log("Array of objects saved in Async Storage");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function modifyArray(obj) {
    // Create object array

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

    const arrayOfObjectsString2 = JSON.stringify(newArray);

    AsyncStorage.setItem("danyalnewapp", arrayOfObjectsString2)
      .then(() => {
        console.log("Array of objects saved in Async Storage");
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
        }
        console.log(arrayOfObjects);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FavContext.Provider value={{ data, getcolor, handleIcon, modifyArray }}>
      {children}
    </FavContext.Provider>
  );
};

export default function useFavourite() {
  return useContext(FavContext);
}
