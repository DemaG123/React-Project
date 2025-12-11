// import * as Location from 'expo-location';
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { commerces } from "../assets/libs/donnees";

export default function Recherche() {

  // const [location, setLocation] = useState<Location.LocationObject | null>(null);
  // const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [donnees, setDonnees] = useState(commerces)

  //   useEffect(() => {
  //   async function getCurrentLocation() {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   }

  //   getCurrentLocation();
  // }, []);

  // let text = 'Waiting...';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View>
      {/* <Text>{text}</Text> */}

      <FlatList data={commerces} renderItem={({item}) =>
        <View style={styles.commerce}>
          <Text>{item.nom}</Text>
          <Text>latitude : {item.latitude}</Text>
          <Text>longitude : {item.longitude}</Text>
        </View>
      }/>

    </View>
  );
}

const styles = StyleSheet.create(
  {
    commerce :{
      backgroundColor : "lightgreen",
      margin : 10,
      padding : 10,
      borderRadius : 10,
    },

  }
)

