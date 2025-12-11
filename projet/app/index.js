import { router } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";

const imageLachute = require("../assets/images/lachute.jpg");

export default function Acceuil() {
  return (
      <ImageBackground source={imageLachute} style={styles.image}>
        <Text style={styles.title}>La chute</Text>
        <Pressable onPress={() => router.push("/recherche")}>
          <Text style={styles.button}>Recherche</Text>
        </Pressable>
      </ImageBackground>
  );
}

const styles = StyleSheet.create(
  {
    image :{
      flex:1,
      alignItems:"center",
      justifyContent:"center",

    },

    title : {
      fontSize : 80,
      fontStyle : "italic",
      textAlign : "center",
      height : "60%"
    },

    button :{
      padding : 10,
      fontSize : 20,
      backgroundColor : "lightgreen",
      borderRadius : 10,
      textAlign : "center",

    }

  }
)