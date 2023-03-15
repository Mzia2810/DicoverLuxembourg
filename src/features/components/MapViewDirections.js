import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapWithDirections = (props) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: props.stops[0],
        destination: props.stops[props.stops.length - 1],
        waypoints: props.stops.slice(1, -1).map((stop) => ({ location: stop })),
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...props.stops[0],
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {props.stops.map((stop, index) => (
          <Marker key={index} coordinate={stop} title={`Stop ${index + 1}`} />
        ))}
        {directions && (
          <MapView.Polyline
            coordinates={directions.routes[0].overview_path.map((point) => ({
              latitude: point.lat(),
              longitude: point.lng(),
            }))}
            strokeColor="#000"
            strokeWidth={3}
          />
        )}
      </MapView>
    </View>
  );
};


export default MapWithDirections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
});
